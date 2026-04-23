export type Lang = "fr" | "en";

/** Hero pitch: fixed narrative order (hook → steps → memory → signature), random line inside each act. */
export type HeroPitchDeck = {
  hooks: string[];
  steps: string[];
  memory: string[];
  signatures: string[];
};

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
        manifesto: "Notre manifeste",
        process: "Processus",
        pricing: "Forfaits",
        partners: "Partenaires",
        contact: "Contact",
      },
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
      mainNavAria: "Navigation principale",
    },
    hero: {
      branding: {
        line1: "Odyssey",
        line2: "Films",
      },
      login: "Connexion",
      primaryCta: "Créer un hommage",
      pitch: {
        hooks: [
          "Le cinéma de leur vie",
          "Leur vie mérite un grand écran.",
          "Un hommage digne du grand écran.",
        ],
        steps: [
          "Trois étapes. Un héritage filmé.",
          "Trois étapes. Un film à jamais.",
          "Trois étapes. Une présence qui reste.",
          "Trois étapes. Un souvenir qui vit.",
          "Trois temps. Pour toujours.",
          "Trois étapes. Un hommage à la hauteur.",
        ],
        memory: [
          "La mémoire, montée comme un film.",
          "Souvenirs en images, comme au cinéma.",
          "Leur histoire, découpée au montage.",
        ],
        signatures: [
          "Odyssey, l'émotion au montage.",
          "Odyssey, la mémoire en lumière.",
          "Odyssey Films, ultime écran.",
        ],
      } satisfies HeroPitchDeck,
      nav: {
        manifesto: "Notre manifeste",
        process: "Le Processus",
        pricing: "Forfaits",
        partners: "Partenaires",
      },
    },
    pricing: {
      title: "Ma vie en cinéma",
      sectionSubtitle: "Ma vie en cinéma",
      subtitle:
        "Choisissez la portée de l'hommage que vous voulez créer — chaque formule honore leur histoire à votre rythme.",
      tierTitles: {
        essential: "Essentiel",
        tribute: "Hommage",
        legacy: "Héritage",
      },
      tiers: [
        {
          key: "essential",
          price: "49$",
          style: "Épuré et constant",
          features: [
            "Montage guidé pas à pas",
            "Couleurs équilibrées, sobre",
            "Livré en 48 h",
          ],
        },
        {
          key: "tribute",
          price: "99$",
          style: "Rythme sensible, musique au cœur",
          features: [
            "Moments choisis parmi vos proches",
            "Musique harmonisée avec les images",
            "Livré en 24 h",
          ],
          popular: true,
        },
        {
          key: "legacy",
          price: "199$",
          style: "Récit profond, façon documentaire",
          features: [
            "Accent sur les passages essentiels",
            "Respect des rites et des croyances",
            "Livraison prioritaire en 12 h",
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
      emotionalKicker: "Leur vie en cinéma",
      sectionSubtitle: "Le processus Odyssey",
      timelineHint:
        "Trois chapitres d’un même film — matière, montage, transmission.",
      subtitle:
        "Trois gestes pour les familles : rassembler ce qui compte, confier le montage, recevoir un film digne d’eux.",
      step1Label: "Déposer",
      step2Label: "Composer",
      step3Label: "Recevoir",
      steps: [
        {
          labelKey: "step1Label",
          title: "Vos photos, vidéos et archives",
          body: "Vous déposez ce qui raconte leur vie. Nous sécurisons chaque fragment avec une structure claire et respectueuse.",
        },
        {
          labelKey: "step2Label",
          title: "Le montage prend forme",
          body: "Nous composons rythme, lumière et narration pour respecter l’émotion et l’intention de la famille.",
        },
        {
          labelKey: "step3Label",
          title: "Un film à faire vivre",
          body: "Le film devient un objet de transmission : sobre, cinématographique, fidèle à la dignité du souvenir.",
        },
      ],
    },
    partnerships: {
      kicker: "Pour les professionnels",
      title: "Un standard cinématographique pour les maisons funéraires exigeantes.",
      body: "Offrez à chaque famille une expérience de mémoire premium, fluide et respectueuse du temps du deuil. Les familles choisissent quant à elles leur hommage et leur formule dans la section offres ci-dessus.",
      cta: "Devenir une Maison Partenaire",
    },
    contact: {
      title: "Nous écrire",
      subtitle:
        "Une question sur un hommage, un projet en cours ou un doute avant de commander ? Décrivez votre situation — nous vous répondons avec attention.",
      form: {
        name: "Nom",
        email: "Courriel",
        phone: "Téléphone (optionnel)",
        subject: "Sujet",
        message: "Message",
        submit: "Envoyer",
      },
    },
    partnersPage: {
      title: "Partenariat Odyssey",
      subtitle:
        "Maisons funéraires, réseaux et accompagnants : proposez à vos familles une expérience de mémoire cinématographique. Décrivez votre structure et vos besoins — nous étudions un déploiement adapté.",
      form: {
        organization: "Maison ou organisation",
        contactName: "Nom du contact",
        email: "Courriel professionnel",
        phone: "Téléphone",
        region: "Région ou bassin desservi",
        context: "Contexte (volume, équipe, outils actuels)",
        message: "Votre message",
        submit: "Envoyer la demande",
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
        pricing: "Pricing",
        partners: "Partners",
        contact: "Contact",
      },
      menuOpen: "Open menu",
      menuClose: "Close menu",
      mainNavAria: "Main navigation",
    },
    hero: {
      branding: {
        line1: "Odyssey",
        line2: "Films",
      },
      login: "Login",
      primaryCta: "Create a Tribute",
      pitch: {
        hooks: [
          "The cinema of their life",
          "Their life deserves the big screen.",
          "A tribute fit for the big screen.",
        ],
        steps: [
          "Three steps. A legacy, filmed.",
          "Three steps. A film for keeps.",
          "Three steps. A presence that stays.",
          "Three steps. Memory that lives on.",
          "Three beats. Forever.",
          "Three steps. A tribute that honors them.",
        ],
        memory: [
          "Memory, cut like a film.",
          "Memories in stills, like cinema.",
          "Their story, cut like a film.",
        ],
        signatures: [
          "Odyssey, emotion in the cut.",
          "Odyssey, memory in the light.",
          "Odyssey Films. The last frame.",
        ],
      } satisfies HeroPitchDeck,
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
      subtitle:
        "Choose how deeply you want to honor their story — each tier lets you move at your own pace.",
      tierTitles: {
        essential: "Essential",
        tribute: "Tribute",
        legacy: "Legacy",
      },
      tiers: [
        {
          key: "essential",
          price: "$49",
          style: "Clean and steady",
          features: [
            "Guided editing flow",
            "Balanced, understated color",
            "Delivered in 48 hours",
          ],
        },
        {
          key: "tribute",
          price: "$99",
          style: "Sensitive pacing, music at the heart",
          features: [
            "Weaving in moments from loved ones",
            "Music aligned with the images",
            "Delivered in 24 hours",
          ],
          popular: true,
        },
        {
          key: "legacy",
          price: "$199",
          style: "Deep narrative, documentary feel",
          features: [
            "Focus on the passages that matter most",
            "Respect for rites and beliefs",
            "Priority delivery in 12 hours",
          ],
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
      emotionalKicker: "The cinema of their life",
      sectionSubtitle: "The Odyssey process",
      timelineHint:
        "Three chapters of one film — material, edit, legacy.",
      subtitle:
        "Three steps for families: gather what matters, entrust the edit, receive a film worthy of them.",
      step1Label: "Gather",
      step2Label: "Craft",
      step3Label: "Receive",
      steps: [
        {
          labelKey: "step1Label",
          title: "Your photos, videos, and archives",
          body: "You upload what tells their story. We secure every fragment with a clear, respectful structure.",
        },
        {
          labelKey: "step2Label",
          title: "The edit takes shape",
          body: "We compose rhythm, light, and narrative to honor the family’s emotion and intent.",
        },
        {
          labelKey: "step3Label",
          title: "A film meant to be shared",
          body: "The film becomes something to pass on: restrained, cinematic, faithful to the dignity of remembrance.",
        },
      ],
    },
    partnerships: {
      kicker: "For funeral professionals",
      title: "A cinematic standard for high-trust funeral homes.",
      body: "Offer every family a premium remembrance experience that is elegant, reliable, and respectful of grief. Families choose their tribute and tier in the pricing section above.",
      cta: "Join as a Partner House",
    },
    contact: {
      title: "Write to us",
      subtitle:
        "Questions about a tribute, an ongoing project, or uncertainty before ordering? Tell us where you stand — we respond thoughtfully.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone (optional)",
        subject: "Subject",
        message: "Message",
        submit: "Send",
      },
    },
    partnersPage: {
      title: "Odyssey partnerships",
      subtitle:
        "Funeral homes, networks, and bereavement professionals: offer families a cinematic remembrance journey. Describe your organization and needs — we’ll explore a tailored rollout.",
      form: {
        organization: "Organization",
        contactName: "Contact name",
        email: "Work email",
        phone: "Phone",
        region: "Region or service area",
        context: "Context (volume, team, current tools)",
        message: "Your message",
        submit: "Submit request",
      },
    },
  },
} as const;

export type Translations = typeof translations;

