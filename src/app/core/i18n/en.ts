import { TranslationDictionary } from '../models/agency.models';

export const enTranslations: TranslationDictionary = {
  meta: {
    direction: 'ltr'
  },
  topbar: {
    logoAlt: 'Agence Arfaoui Sofien logo',
    subtitle: 'Insurance and advisory agency',
    nav: {
      services: 'Services',
      advantages: 'Why us',
      contact: 'Contact'
    },
    languages: {
      fr: 'French',
      en: 'English',
      ar: 'Arabic'
    }
  },
  footer: {
    description: 'Clear insurance solutions for individuals and professionals.',
    links: {
      services: 'Services',
      contact: 'Contact',
      quoteRequest: 'Request a quote'
    }
  },
  home: {
    hero: {
      title: 'Clear, human-centered insurance solutions for every situation.',
      description:
        'Agence Arfaoui Sofien supports individuals, families, and professionals with coverage designed to protect what matters most.',
      quoteCta: 'Request a personalized quote'
    },
    highlights: [
      { value: '24h', label: 'Response time' },
      { value: '6+', label: 'Key services' },
      { value: '100%', label: 'Personalized guidance' }
    ],
    infoCard: {
      eyebrow: 'Local agency',
      title: 'Your trusted partner for essential coverage',
      description:
        'We help you choose the most relevant guarantees for your daily life, your plans, and your business.',
      items: [
        'Tailored advice',
        'Support with your procedures',
        'Solutions for individuals and professionals'
      ]
    },
    sections: {
      services: {
        eyebrow: 'Our services',
        title: 'Coverage tailored to your needs',
        description:
          'A selection of insurance services designed to support the different stages of life and the protection needs of your business.'
      },
      benefits: {
        eyebrow: 'Why choose us',
        title: 'A simple, modern, and reassuring approach'
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Let us discuss your insurance needs',
        description:
          'Need a personalized offer or guidance to choose the right coverage? Agence Arfaoui Sofien is here to help.'
      }
    },
    services: [
      {
        id: 'auto',
        title: 'Car insurance',
        icon: 'directions_car',
        description:
          'Flexible plans to protect your vehicle, the driver, and the passengers.'
      },
      {
        id: 'home',
        title: 'Home insurance',
        icon: 'home',
        description:
          'Effective coverage for your home, your belongings, and your personal liability.'
      },
      {
        id: 'health',
        title: 'Health insurance',
        icon: 'health_and_safety',
        description:
          'Coverage adapted to your medical needs and your family well-being.'
      },
      {
        id: 'travel',
        title: 'Travel insurance',
        icon: 'flight_takeoff',
        description:
          'Travel with peace of mind thanks to assistance, cancellation, and international support guarantees.'
      },
      {
        id: 'pro',
        title: 'Business insurance',
        icon: 'business_center',
        description:
          'Dedicated solutions for freelancers, retailers, and SMEs to secure their activity.'
      },
      {
        id: 'life',
        title: 'Life and savings insurance',
        icon: 'savings',
        description:
          'Prepare for the future with savings, protection, and transfer solutions.'
      }
    ],
    benefits: [
      {
        title: 'Personalized advice',
        description:
          'Each client benefits from recommendations tailored to their profile and priorities.'
      },
      {
        title: 'Day-to-day responsiveness',
        description:
          'We support you quickly for quotes, subscriptions, and claim procedures.'
      },
      {
        title: 'Reliable follow-up',
        description:
          'A long-term relationship built on proximity, clarity, and availability.'
      }
    ]
  },
  quoteRequest: {
    hero: {
      eyebrow: 'Quote request',
      title: 'Build your request in a few simple steps',
      description:
        'Select the service type and the desired insurance duration, then send your quote request to the agency.',
      backHome: 'Back to home'
    },
    form: {
      title: 'Your form',
      serviceLabel: 'Service type',
      serviceError: 'Please choose a service.',
      durationLabel: 'Insurance duration',
      durationError: 'Please choose a duration.',
      submit: 'Send quote request',
      reset: 'Clear form'
    },
    side: {
      eyebrow: 'Help',
      title: 'A simple and fast request',
      description:
        'The form stays intentionally simple to focus on what matters most. Once your need is defined, the agency can follow up with a suitable proposal.',
      items: [
        'Service selection from a dropdown list',
        'Choice of insurance duration',
        'Fast quote request submission'
      ]
    },
    success: {
      title: 'Your request is ready',
      description: 'Request created for {{service}} with a duration of {{duration}}.'
    },
    durations: [
      { value: '3-mois', label: '3 months' },
      { value: '6-mois', label: '6 months' },
      { value: '12-mois', label: '12 months' },
      { value: '24-mois', label: '24 months' }
    ]
  }
};
