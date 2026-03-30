export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface HighlightItem {
  value: string;
  label: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface QuoteDurationOption {
  value: string;
  label: string;
}

export type LanguageCode = 'fr' | 'en' | 'ar';

export type TextDirection = 'ltr' | 'rtl';

export interface TranslationDictionary {
  meta: {
    direction: TextDirection;
  };
  topbar: {
    logoAlt: string;
    subtitle: string;
    nav: {
      services: string;
      advantages: string;
      contact: string;
    };
    languages: Record<LanguageCode, string>;
  };
  footer: {
    description: string;
    links: {
      services: string;
      contact: string;
      quoteRequest: string;
    };
  };
  home: {
    hero: {
      title: string;
      description: string;
      quoteCta: string;
    };
    highlights: HighlightItem[];
    infoCard: {
      eyebrow: string;
      title: string;
      description: string;
      items: string[];
    };
    sections: {
      services: {
        eyebrow: string;
        title: string;
        description: string;
      };
      benefits: {
        eyebrow: string;
        title: string;
      };
      contact: {
        eyebrow: string;
        title: string;
        description: string;
      };
    };
    services: ServiceItem[];
    benefits: BenefitItem[];
  };
  quoteRequest: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      backHome: string;
    };
    form: {
      title: string;
      serviceLabel: string;
      serviceError: string;
      durationLabel: string;
      durationError: string;
      submit: string;
      reset: string;
    };
    side: {
      eyebrow: string;
      title: string;
      description: string;
      items: string[];
    };
    success: {
      title: string;
      description: string;
    };
    durations: QuoteDurationOption[];
  };
}
