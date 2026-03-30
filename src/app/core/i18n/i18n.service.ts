import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

import { LanguageCode, TranslationDictionary } from '../models/agency.models';
import { SUPPORTED_LANGUAGES, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'agence-arfaoui-sofien-language';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly languageSignal = signal<LanguageCode>(this.getInitialLanguage());

  readonly currentLanguage = this.languageSignal.asReadonly();
  readonly translation = computed<TranslationDictionary>(
    () => TRANSLATIONS[this.currentLanguage()]
  );
  readonly direction = computed(() => this.translation().meta.direction);
  readonly supportedLanguages = SUPPORTED_LANGUAGES;
  readonly currentLanguageLabel = computed(
    () => this.translation().topbar.languages[this.currentLanguage()]
  );

  constructor() {
    effect(() => {
      const language = this.currentLanguage();
      const direction = this.direction();

      this.document.documentElement.lang = language;
      this.document.documentElement.dir = direction;

      try {
        localStorage.setItem(STORAGE_KEY, language);
      } catch {
        // Ignore storage access errors in restricted environments.
      }
    });
  }

  setLanguage(language: LanguageCode): void {
    this.languageSignal.set(language);
  }

  languageLabel(language: LanguageCode): string {
    return this.translation().topbar.languages[language];
  }

  translate(path: string, params?: Record<string, string>): string {
    const value = this.resolvePath(path);

    if (typeof value !== 'string') {
      return '';
    }

    if (!params) {
      return value;
    }

    return Object.entries(params).reduce(
      (result, [key, replacement]) => result.replaceAll(`{{${key}}}`, replacement),
      value
    );
  }

  private getInitialLanguage(): LanguageCode {
    try {
      const storedLanguage = localStorage.getItem(STORAGE_KEY);

      if (this.isSupportedLanguage(storedLanguage)) {
        return storedLanguage;
      }
    } catch {
      // Ignore storage access errors in restricted environments.
    }

    return 'fr';
  }

  private resolvePath(path: string): unknown {
    return path.split('.').reduce<unknown>((value, segment) => {
      if (value && typeof value === 'object' && segment in value) {
        return (value as Record<string, unknown>)[segment];
      }

      return undefined;
    }, this.translation());
  }

  private isSupportedLanguage(language: string | null): language is LanguageCode {
    return language !== null && this.supportedLanguages.includes(language as LanguageCode);
  }
}
