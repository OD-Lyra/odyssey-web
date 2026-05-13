-- =============================================================================
-- Odyssey — P0 durcissement : RLS (projects, orders, media_assets) + Storage
-- Exécution : Supabase SQL Editor (pas de CREATE INDEX CONCURRENTLY)
--
-- --- Double vérification (code source repo odyssey-frontend) ----------------
-- media_assets.liaison projet : colonne **project_id** — CONFIRMÉE
--   → src/lib/uploads/mediaUploadService.ts : cle `project_id`, upsert
--     onConflict: "project_id,storage_path"
-- Storage (prefixe objet) : **projects/** (sans slash initial dans `name`)
--   → buildStoragePath() retourne :
--     `projects/${projectId}/${yyyy}/${mm}/${dd}/...`
--   → Les policies utilisent (storage.foldername(name))[1] = 'projects'
--     et [2] = UUID projet — COHÉRENT avec le front.
-- public.orders : **aucune** requête `.from("orders")` dans ce dépôt ;
--   pas de dossier supabase/migrations ici. La colonne **project_id** est
--   l'hypothèse architecture (B2C / webhook). Avant prod, valider en SQL :
--   SELECT column_name FROM information_schema.columns
--   WHERE table_schema = 'public' AND table_name = 'orders';
--   Si le nom diffère (ex. project_uuid), remplacer orders.project_id dans
--   ce script par le nom réel.
--
-- Hypothèses schéma (reste inchangé si la validation ci-dessus OK) :
--   public.projects(id, user_id, ...)  — propriétaire = user_id = auth.uid()
--   public.orders(project_id → projects.id)
--   public.media_assets(project_id → projects.id)
--   Bucket Storage : user-assets
--   Préfixe objets : projects/{project_id}/...
--
-- Service Role : contourne RLS (webhooks / API serveur) — ne pas révoquer
--   ses droits ; ce script cible surtout authenticated + anon.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1) Index (performance sous RLS / EXISTS)
-- ---------------------------------------------------------------------------

CREATE INDEX IF NOT EXISTS idx_projects_user_id
  ON public.projects (user_id);

CREATE INDEX IF NOT EXISTS idx_orders_project_id
  ON public.orders (project_id);

CREATE INDEX IF NOT EXISTS idx_media_assets_project_id
  ON public.media_assets (project_id);

-- ---------------------------------------------------------------------------
-- 2) RLS : activation
-- ---------------------------------------------------------------------------

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;

-- ---------------------------------------------------------------------------
-- 3) RLS : suppression des anciennes policies (noms stables — idempotent)
-- ---------------------------------------------------------------------------

DROP POLICY IF EXISTS projects_select_owner ON public.projects;
DROP POLICY IF EXISTS projects_insert_owner ON public.projects;
DROP POLICY IF EXISTS projects_update_owner ON public.projects;

DROP POLICY IF EXISTS orders_select_owner_project ON public.orders;

DROP POLICY IF EXISTS media_assets_select_owner_project ON public.media_assets;
DROP POLICY IF EXISTS media_assets_insert_owner_project ON public.media_assets;
DROP POLICY IF EXISTS media_assets_update_owner_project ON public.media_assets;

DROP POLICY IF EXISTS user_assets_objects_select_owner ON storage.objects;
DROP POLICY IF EXISTS user_assets_objects_insert_owner ON storage.objects;

-- ---------------------------------------------------------------------------
-- 4) RLS : public.projects — SELECT / INSERT / UPDATE propriétaire uniquement
--     Pas de DELETE pour authenticated (aucune policy DELETE)
-- ---------------------------------------------------------------------------

CREATE POLICY projects_select_owner
  ON public.projects
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY projects_insert_owner
  ON public.projects
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY projects_update_owner
  ON public.projects
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- ---------------------------------------------------------------------------
-- 5) RLS : public.orders — SELECT uniquement si projet appartient à l’utilisateur
--     Aucune policy INSERT/UPDATE/DELETE → interdit pour authenticated (Service Role bypass)
-- ---------------------------------------------------------------------------

CREATE POLICY orders_select_owner_project
  ON public.orders
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.projects p
      WHERE p.id = orders.project_id
        AND p.user_id = auth.uid()
    )
  );

-- ---------------------------------------------------------------------------
-- 6) RLS : public.media_assets — SELECT / INSERT / UPDATE via ownership projet
--     Pas de DELETE pour authenticated
-- ---------------------------------------------------------------------------

CREATE POLICY media_assets_select_owner_project
  ON public.media_assets
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.projects p
      WHERE p.id = media_assets.project_id
        AND p.user_id = auth.uid()
    )
  );

CREATE POLICY media_assets_insert_owner_project
  ON public.media_assets
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM public.projects p
      WHERE p.id = media_assets.project_id
        AND p.user_id = auth.uid()
    )
  );

CREATE POLICY media_assets_update_owner_project
  ON public.media_assets
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.projects p
      WHERE p.id = media_assets.project_id
        AND p.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM public.projects p
      WHERE p.id = media_assets.project_id
        AND p.user_id = auth.uid()
    )
  );

-- ---------------------------------------------------------------------------
-- 7) Storage : storage.objects — bucket user-assets
--     SELECT + INSERT uniquement si segment [1] = 'projects' et segment [2]
--     = id d’un projet dont user_id = auth.uid()
-- ---------------------------------------------------------------------------

ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

CREATE POLICY user_assets_objects_select_owner
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'user-assets'
    AND (storage.foldername(name))[1] = 'projects'
    AND (storage.foldername(name))[2] IS NOT NULL
    AND EXISTS (
      SELECT 1
      FROM public.projects p
      WHERE p.user_id = auth.uid()
        AND p.id::text = (storage.foldername(name))[2]
    )
  );

CREATE POLICY user_assets_objects_insert_owner
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'user-assets'
    AND (storage.foldername(name))[1] = 'projects'
    AND (storage.foldername(name))[2] IS NOT NULL
    AND EXISTS (
      SELECT 1
      FROM public.projects p
      WHERE p.user_id = auth.uid()
        AND p.id::text = (storage.foldername(name))[2]
    )
  );

-- ---------------------------------------------------------------------------
-- 8) Grants : authenticated — strict CTO
--     orders : SELECT seulement. projects & media_assets : pas de DELETE.
-- ---------------------------------------------------------------------------

REVOKE ALL ON TABLE public.projects FROM anon;
REVOKE ALL ON TABLE public.orders FROM anon;
REVOKE ALL ON TABLE public.media_assets FROM anon;

REVOKE ALL ON TABLE public.projects FROM authenticated;
GRANT SELECT, INSERT, UPDATE ON TABLE public.projects TO authenticated;

REVOKE ALL ON TABLE public.orders FROM authenticated;
GRANT SELECT ON TABLE public.orders TO authenticated;

REVOKE ALL ON TABLE public.media_assets FROM authenticated;
GRANT SELECT, INSERT, UPDATE ON TABLE public.media_assets TO authenticated;

-- Storage : accès API (si pas déjà accordé globalement)
GRANT USAGE ON SCHEMA storage TO authenticated;
GRANT SELECT, INSERT ON TABLE storage.objects TO authenticated;

-- ---------------------------------------------------------------------------
-- 9) Vérifications manuelles recommandées (ne pas exécuter en prod aveuglément)
-- ---------------------------------------------------------------------------
-- A) Deux comptes : A ne voit pas les lignes de B (projects / orders / media_assets).
-- B) Upload client vers projects/{own_uuid}/... OK ; vers projects/{foreign_uuid}/... refusé.
-- C) Webhook Stripe (service_role) : écritures orders toujours OK.
-- D) Dashboard Supabase → Storage → user-assets : supprimer toute policy
--    permissive résiduelle sur ce bucket qui OR avec les tiennes (RLS permissif).
-- =============================================================================
