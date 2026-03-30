import { TranslationDictionary } from '../models/agency.models';

export const arTranslations: TranslationDictionary = {
  meta: {
    direction: 'rtl'
  },
  topbar: {
    logoAlt: 'شعار وكالة عرفة سفيان',
    subtitle: 'وكالة تامين واستشارة',
    nav: {
      services: 'الخدمات',
      advantages: 'لماذا نحن',
      contact: 'اتصل بنا'
    },
    languages: {
      fr: 'الفرنسية',
      en: 'الانجليزية',
      ar: 'العربية'
    }
  },
  footer: {
    description: 'حلول تأمين واضحة للافراد والمهنيين.',
    links: {
      services: 'الخدمات',
      contact: 'اتصل بنا',
      quoteRequest: 'اطلب عرض سعر'
    }
  },
  home: {
    hero: {
      title: 'حلول تامين واضحة وانسانية تناسب كل وضعية.',
      description:
        'ترافق وكالة عرفة سفيان الافراد والعائلات والمهنيين بعروض تامين مصممة لحماية ما يهمكم فعلا.',
      quoteCta: 'اطلب عرض سعر مخصص'
    },
    highlights: [
      { value: '24h', label: 'مدة الرد' },
      { value: '6+', label: 'خدمات اساسية' },
      { value: '100%', label: 'مرافقة شخصية' }
    ],
    infoCard: {
      eyebrow: 'وكالة قريبة منك',
      title: 'شريككم لتامين ما هو اساسي',
      description:
        'نساعدكم على اختيار الضمانات الاكثر ملاءمة لحياتكم اليومية ولمشاريعكم ولنشاطكم المهني.',
      items: [
        'استشارة مصممة حسب الحاجة',
        'مساعدة في جميع الاجراءات',
        'حلول للافراد والمهنيين'
      ]
    },
    sections: {
      services: {
        eyebrow: 'خدماتنا',
        title: 'تغطيات ملائمة لاحتياجاتكم',
        description:
          'مجموعة من خدمات التامين لمرافقة مختلف مراحل الحياة وتغطية حاجيات الحماية لنشاطكم.'
      },
      benefits: {
        eyebrow: 'لماذا تختارنا',
        title: 'مقاربة بسيطة وحديثة ومطمئنة'
      },
      contact: {
        eyebrow: 'اتصل بنا',
        title: 'لنتحدث عن حاجتكم في التامين',
        description:
          'هل تحتاجون الى عرض مخصص او مساعدة لاختيار التغطية المناسبة؟ وكالة عرفة سفيان في خدمتكم.'
      }
    },
    services: [
      {
        id: 'auto',
        title: 'تامين السيارات',
        icon: 'directions_car',
        description: 'صيغ مرنة لحماية السيارة والسائق والركاب.'
      },
      {
        id: 'home',
        title: 'تامين السكن',
        icon: 'home',
        description: 'تغطية فعالة للسكن والممتلكات والمسؤولية المدنية.'
      },
      {
        id: 'health',
        title: 'التامين الصحي',
        icon: 'health_and_safety',
        description: 'ضمانات ملائمة لحاجياتكم الطبية ورفاه عائلتكم.'
      },
      {
        id: 'travel',
        title: 'تامين السفر',
        icon: 'flight_takeoff',
        description: 'سافروا براحة بال مع ضمانات المساعدة والالغاء والتكفل بالخارج.'
      },
      {
        id: 'pro',
        title: 'التامين المهني',
        icon: 'business_center',
        description: 'حلول مخصصة للمستقلين والتجار والمؤسسات الصغرى والمتوسطة.'
      },
      {
        id: 'life',
        title: 'تامين الحياة والادخار',
        icon: 'savings',
        description: 'استعدوا للمستقبل بحلول الادخار والوقاية ونقل الحقوق.'
      }
    ],
    benefits: [
      {
        title: 'استشارة شخصية',
        description: 'كل حريف ينتفع بتوصيات تناسب ملفه واولوياته.'
      },
      {
        title: 'سرعة في المتابعة',
        description: 'نرافقكم بسرعة في طلبات عروض السعر والاكتتاب وملفات الحوادث.'
      },
      {
        title: 'متابعة موثوقة',
        description: 'علاقة طويلة المدى مبنية على القرب والوضوح والتوفر.'
      }
    ]
  },
  quoteRequest: {
    hero: {
      eyebrow: 'طلب عرض سعر',
      title: 'انشئ طلبك في خطوات بسيطة',
      description:
        'اختر نوع الخدمة ومدة التامين المطلوبة ثم ارسل طلب عرض السعر الى الوكالة.',
      backHome: 'العودة الى الرئيسية'
    },
    form: {
      title: 'الاستمارة',
      serviceLabel: 'نوع الخدمة',
      serviceError: 'يرجى اختيار خدمة.',
      durationLabel: 'مدة التامين',
      durationError: 'يرجى اختيار المدة.',
      submit: 'ارسال طلب عرض السعر',
      reset: 'افراغ الاستمارة'
    },
    side: {
      eyebrow: 'مساعدة',
      title: 'طلب بسيط وسريع',
      description:
        'تم تصميم الاستمارة لتبقى بسيطة وتركز على الاساسيات. بعد تحديد الحاجة يمكن للوكالة التواصل معكم بعرض مناسب.',
      items: [
        'اختيار الخدمة من قائمة منسدلة',
        'تحديد مدة التامين',
        'ارسال سريع لطلب عرض السعر'
      ]
    },
    success: {
      title: 'تم تجهيز طلبكم',
      description: 'تم انشاء طلب خاص بخدمة {{service}} لمدة {{duration}}.'
    },
    durations: [
      { value: '3-mois', label: '3 اشهر' },
      { value: '6-mois', label: '6 اشهر' },
      { value: '12-mois', label: '12 شهرا' },
      { value: '24-mois', label: '24 شهرا' }
    ]
  }
};
