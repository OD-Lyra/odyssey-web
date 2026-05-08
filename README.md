# Odyssey Frontend

Application Next.js 14 (App Router) pour le Studio Odyssey:
- authentification Supabase,
- wizard de creation,
- ingestion media massive,
- pipeline Stripe (catalog + webhook robuste).

## Documentation principale

- Onboarding technique: `docs/TECHNICAL_ONBOARDING_ODYSSEY.md`
- Conventions: `docs/CONVENTIONS.md`
- Vision produit: `docs/Manifesto-V10.4.md`

## Quickstart

```bash
npm install
npm run dev
```

Build de verification (comme en deploiement):

```bash
npm run build
```

## Vision architecture

Le projet suit une strategie **moteur unique + multi-skins**:
- une base metier commune (auth, medias, paiements, rendu),
- plusieurs experiences cibles (famille, animaux, mariage, fete, etc.),
- adaptation du branding/copy sans fork de logique coeur.

## Isolation des medias entre cibles

Principe actuel:
- separation forte par `project_id` (storage path + DB),
- `tenant_id` disponible pour renforcer la segmentation.

Principe produit a maintenir:
- aucune cible ne doit partager les medias d'une autre cible,
- toute nouvelle verticale doit garder une isolation explicite (projet/tenant/cible) dans storage + DB + policies.
