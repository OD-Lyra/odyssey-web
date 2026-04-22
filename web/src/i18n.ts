export type Lang = "fr" | "en";

export const translations = {
  fr: {
    header: {
      logo: "Odyssey",
      logoFallback: "ODYSSEY",
      login: "Connexion",
      languageLabel: "Langue",
      langOptionFr: "FR",
      langOptionEn: "EN",
      nav: {
        home: "Accueil",
        manifesto: "Manifesto",
        process: "Process",
        contact: "Contact",
      },
    },
    hero: {
      branding: {
        line1: "Odyssey",
        line2: "Films",
      },
      login: "Connexion",
      primaryCta: "Créer un hommage",
      pitch: [
        "CRÉEZ LA VIDÉO DE LEUR VIE",
        "EN 3 ÉTAPES SIMPLES",
        "L'ALGORITHME AU SERVICE DE L'ÉMOTION",
        "L'EXCELLENCE CINÉMATOGRAPHIQUE",
      ],
      nav: {
        manifesto: "Manifesto",
        process: "Le Processus",
        pricing: "Forfaits",
        partners: "Partenaires",
      },
    },
    pricing: {
      title: "Ma vie en cinéma",
      sectionSubtitle: "Ma vie en cinéma",
      subtitle: "Choisissez la profondeur de l'algorithme.",
      tierTitles: {
        essential: "Essentiel",
        tribute: "Hommage",
        legacy: "Héritage",
      },
      tiers: [
        {
          key: "essential",
          price: "49$",
          style: "Sobre, Constant",
          features: ["Montage Automatisé", "Étalonnage Standard", "Livraison 48h"],
        },
        {
          key: "tribute",
          price: "99$",
          style: "Rythme Cardiaque, Smart Ducking",
          features: [
            "Analyse du Graphe Social",
            "Synchronisation Musicale",
            "Livraison 24h",
          ],
          popular: true,
        },
        {
          key: "legacy",
          price: "199$",
          style: "Narratif, Documentaire",
          features: [
            "Analyse Émotionnelle Profonde",
            "Rites & Croyances",
            "Livraison Prioritaire 12h",
          ],
        },
      ],
      cta: "SÉLECTIONNER",
      recommendedBadge: "RECOMMANDÉ",
      recommended: "Recommandé",
    },
    manifesto: {
      title: "Manifeste",
      body: "Chaque vie est une œuvre qui mérite son propre cinéma. Odyssey n'est pas un outil, c'est un sanctuaire visuel. Dans le fracas du deuil, nous orchestrons le silence, la lumière et le souvenir pour créer un lien indestructible. Nous ne faisons pas que des vidéos ; nous rendons à la mémoire sa dignité souveraine.",
    },
    process: {
      title: "LE PROCESSUS ODYSSEY",
      sectionSubtitle: "Le Processus Odyssey",
      subtitle: "Trois gestes, une seule mission: transformer la mémoire en cinéma durable.",
      step1Label: "Téléverser",
      step2Label: "Orchestrer",
      step3Label: "Livrer",
      steps: [
        {
          labelKey: "step1Label",
          title: "Souvenirs / Ingestion",
          body: "Vous déposez photos, vidéos et archives. Nous sécurisons chaque fragment avec une structure claire et sensible.",
        },
        {
          labelKey: "step2Label",
          title: "Orchestration / IA",
          body: "Notre moteur compose le rythme, la lumière et la narration pour respecter l'intention de la famille.",
        },
        {
          labelKey: "step3Label",
          title: "Cinéma / Héritage",
          body: "Le film final devient un objet de transmission: sobre, cinématographique, fidèle à la dignité du souvenir.",
        },
      ],
    },
    partnerships: {
      kicker: "Maisons Partenaires",
      title: "Un standard cinématographique pour les maisons funéraires exigeantes.",
      body: "Offrez à chaque famille une expérience de mémoire premium, fluide et respectueuse du temps du deuil.",
      cta: "Devenir une Maison Partenaire",
    },
    contact: {
      title: "Parlons de l'avenir de la mémoire",
      subtitle:
        "Décrivez votre contexte et nous vous proposerons un déploiement Odyssey adapté.",
      form: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        submit: "Envoyer",
      },
    },
  },
  en: {
    header: {
      logo: "Odyssey",
      logoFallback: "ODYSSEY",
      login: "Login",
      languageLabel: "Language",
      langOptionFr: "FR",
      langOptionEn: "EN",
      nav: {
        home: "Home",
        manifesto: "Manifesto",
        process: "Process",
        contact: "Contact",
      },
    },
    hero: {
      branding: {
        line1: "Odyssey",
        line2: "Films",
      },
      login: "Login",
      primaryCta: "Create a Tribute",
      pitch: [
        "CREATE THE VIDEO OF THEIR LIFE",
        "IN 3 SIMPLE STEPS",
        "ALGORITHM IN SERVICE OF EMOTION",
        "CINEMATIC EXCELLENCE",
      ],
      nav: {
        manifesto: "Manifesto",
        process: "The Process",
        pricing: "Pricing",
        partners: "Partners",
      },
    },
    pricing: {
      title: "My Life in Cinema",
      sectionSubtitle: "My Life in Cinema",
      subtitle: "Select the algorithm's depth.",
      tierTitles: {
        essential: "Essential",
        tribute: "Tribute",
        legacy: "Legacy",
      },
      tiers: [
        {
          key: "essential",
          price: "$49",
          style: "Sober, Constant",
          features: ["Automated Editing", "Standard Color Grading", "48h Delivery"],
        },
        {
          key: "tribute",
          price: "$99",
          style: "Pulse, Smart Ducking",
          features: ["Social Graph Analysis", "Musical Sync", "24h Delivery"],
          popular: true,
        },
        {
          key: "legacy",
          price: "$199",
          style: "Narrative, Docu",
          features: ["Deep Emotional Analysis", "Rites & Beliefs", "12h Priority Delivery"],
        },
      ],
      cta: "SELECT",
      recommendedBadge: "RECOMMENDED",
      recommended: "Recommended",
    },
    manifesto: {
      title: "Manifesto",
      body: "Every life is a masterpiece that deserves its own cinema. Odyssey is not a tool; it is a visual sanctuary. In the noise of grief, we orchestrate silence, light, and memory to create an unbreakable bond. We don't just make videos; we restore the sovereign dignity of remembrance.",
    },
    process: {
      title: "THE ODYSSEY PROCESS",
      sectionSubtitle: "The Odyssey Process",
      subtitle: "Three movements, one mission: turning memory into enduring cinema.",
      step1Label: "Upload",
      step2Label: "Orchestrate",
      step3Label: "Deliver",
      steps: [
        {
          labelKey: "step1Label",
          title: "Memories / Ingestion",
          body: "You upload photos, videos, and archives. We secure every fragment with a clear and sensitive structure.",
        },
        {
          labelKey: "step2Label",
          title: "Orchestration / AI",
          body: "Our engine composes rhythm, light, and narrative to honor the family’s emotional intent.",
        },
        {
          labelKey: "step3Label",
          title: "Cinema / Legacy",
          body: "The final film becomes a transmission artifact: sober, cinematic, and faithful to remembrance.",
        },
      ],
    },
    partnerships: {
      kicker: "Partner Houses",
      title: "A cinematic standard for high-trust funeral homes.",
      body: "Offer every family a premium remembrance experience that is elegant, reliable, and respectful of grief.",
      cta: "Join as a Partner House",
    },
    contact: {
      title: "Let's talk about the future of memory",
      subtitle:
        "Share your context and we will propose an Odyssey rollout tailored to your organization.",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Send",
      },
    },
  },
} as const;

export type Translations = typeof translations;

