import { TranslationDictionary } from '../models/agency.models';

export const frTranslations: TranslationDictionary = {
  meta: {
    direction: 'ltr'
  },
  topbar: {
    logoAlt: "Logo de l'Agence Arfaoui Sofien",
    subtitle: "Agence d'assurance et de conseil",
    nav: {
      services: 'Services',
      advantages: 'Atouts',
      contact: 'Contact'
    },
    languages: {
      fr: 'Français',
      en: 'English',
      ar: 'العربية'
    }
  },
  footer: {
    description: "Des solutions d'assurance claires pour les particuliers et les professionnels.",
    links: {
      services: 'Services',
      contact: 'Contact',
      quoteRequest: 'Demander un devis'
    }
  },
  home: {
    hero: {
      title: "Des solutions d'assurance claires, humaines et adaptées à chaque situation.",
      description:
        "L'Agence Arfaoui Sofien accompagne les particuliers, les familles et les professionnels avec des offres pensées pour protéger ce qui compte vraiment.",
      quoteCta: 'Demander un devis personnalisé'
    },
    highlights: [
      { value: '24 h', label: 'Délai de réponse' },
      { value: '6+', label: 'Services clés' },
      { value: '100 %', label: 'Accompagnement personnalisé' }
    ],
    infoCard: {
      eyebrow: 'Agence de proximité',
      title: "Votre partenaire pour assurer l'essentiel",
      description:
        'Nous vous aidons à choisir les garanties les plus pertinentes pour votre quotidien, vos projets et votre activité.',
      items: [
        'Conseils sur mesure',
        'Assistance dans vos démarches',
        'Solutions pour particuliers et professionnels'
      ]
    },
    sections: {
      services: {
        eyebrow: 'Nos services',
        title: 'Des couvertures adaptées à vos besoins',
        description:
          "Une sélection de services pour accompagner les différents moments de vie et les besoins de protection de votre activité."
      },
      benefits: {
        eyebrow: 'Pourquoi nous choisir',
        title: 'Une approche simple, moderne et rassurante'
      },
      contact: {
        eyebrow: 'Contact',
        title: "Parlons de votre besoin en assurance",
        description:
          "Besoin d'une offre personnalisée ou d'un accompagnement pour choisir votre couverture ? L'Agence Arfaoui Sofien est à votre écoute."
      }
    },
    services: [
      {
        id: 'auto',
        title: 'Assurance automobile',
        icon: 'directions_car',
        description:
          'Des formules souples pour protéger votre véhicule, le conducteur et les passagers.'
      },
      {
        id: 'home',
        title: 'Assurance habitation',
        icon: 'home',
        description:
          'Une couverture efficace pour votre logement, vos biens et votre responsabilité civile.'
      },
      {
        id: 'health',
        title: 'Assurance santé',
        icon: 'health_and_safety',
        description:
          'Des garanties adaptées à vos besoins médicaux et au bien-être de votre famille.'
      },
      {
        id: 'travel',
        title: 'Assurance voyage',
        icon: 'flight_takeoff',
        description:
          "Partez sereinement avec des garanties d'assistance, d'annulation et de prise en charge à l'étranger."
      },
      {
        id: 'pro',
        title: 'Assurance professionnelle',
        icon: 'business_center',
        description:
          'Des solutions dédiées aux indépendants, commerçants et PME pour sécuriser leur activité.'
      },
      {
        id: 'life',
        title: 'Assurance vie et épargne',
        icon: 'savings',
        description:
          "Préparez l'avenir avec des solutions de prévoyance, d'épargne et de transmission."
      }
    ],
    benefits: [
      {
        title: 'Conseil personnalisé',
        description:
          "Chaque client bénéficie d'une recommandation ajustée à son profil et à ses priorités."
      },
      {
        title: 'Réactivité au quotidien',
        description:
          'Nous vous accompagnons rapidement pour vos devis, vos souscriptions et vos démarches de sinistre.'
      },
      {
        title: 'Suivi de confiance',
        description:
          'Une relation durable fondée sur la proximité, la clarté et la disponibilité.'
      }
    ]
  },
  quoteRequest: {
    hero: {
      eyebrow: 'Demande de devis',
      title: 'Construisez votre demande en quelques étapes',
      description:
        "Sélectionnez le type de service et la durée d'assurance souhaitée, puis envoyez votre demande de devis à l'agence.",
      backHome: "Retour à l'accueil"
    },
    form: {
      title: 'Votre formulaire',
      serviceLabel: 'Type de service',
      serviceError: 'Veuillez choisir un service.',
      durationLabel: "Durée d'assurance",
      durationError: 'Veuillez choisir une durée.',
      submit: 'Envoyer la demande de devis',
      reset: 'Vider le formulaire'
    },
    side: {
      eyebrow: 'Aide',
      title: 'Une demande simple et rapide',
      description:
        "Le formulaire reste volontairement simple pour aller à l'essentiel. Une fois le besoin défini, l'agence peut reprendre contact avec une proposition adaptée.",
      items: [
        'Choix du service dans une liste déroulante',
        "Sélection d'une durée d'assurance",
        'Envoi rapide de la demande de devis'
      ]
    },
    success: {
      title: 'Votre demande est prête',
      description: 'Demande créée pour {{service}} avec une durée de {{duration}}.'
    },
    durations: [
      { value: '3-mois', label: '3 mois' },
      { value: '6-mois', label: '6 mois' },
      { value: '12-mois', label: '12 mois' },
      { value: '24-mois', label: '24 mois' }
    ]
  }
};
