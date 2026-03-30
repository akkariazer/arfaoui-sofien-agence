import { LanguageCode, TranslationDictionary } from '../models/agency.models';
import { arTranslations } from './ar';
import { enTranslations } from './en';
import { frTranslations } from './fr';

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  fr: frTranslations,
  en: enTranslations,
  ar: arTranslations
};

export const SUPPORTED_LANGUAGES: LanguageCode[] = ['fr', 'en', 'ar'];
