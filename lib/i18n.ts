// Localization configuration and utilities
// This provides infrastructure for future multi-country support

export type Locale = 'en-GB' | 'en-US' | 'de-DE' | 'fr-FR';

export interface LocaleConfig {
  locale: Locale;
  currency: string;
  currencySymbol: string;
  measurementSystem: 'metric' | 'imperial';
  dateFormat: string;
}

export const localeConfigs: Record<Locale, LocaleConfig> = {
  'en-GB': {
    locale: 'en-GB',
    currency: 'GBP',
    currencySymbol: '£',
    measurementSystem: 'metric',
    dateFormat: 'DD/MM/YYYY',
  },
  'en-US': {
    locale: 'en-US',
    currency: 'USD',
    currencySymbol: '$',
    measurementSystem: 'imperial',
    dateFormat: 'MM/DD/YYYY',
  },
  'de-DE': {
    locale: 'de-DE',
    currency: 'EUR',
    currencySymbol: '€',
    measurementSystem: 'metric',
    dateFormat: 'DD.MM.YYYY',
  },
  'fr-FR': {
    locale: 'fr-FR',
    currency: 'EUR',
    currencySymbol: '€',
    measurementSystem: 'metric',
    dateFormat: 'DD/MM/YYYY',
  },
};

export const defaultLocale: Locale = 'en-GB';

export function getLocaleConfig(locale: Locale = defaultLocale): LocaleConfig {
  return localeConfigs[locale];
}

export function formatPrice(price: number, locale: Locale = defaultLocale): string {
  const config = getLocaleConfig(locale);
  return `${config.currencySymbol}${price.toFixed(2)}`;
}

export function formatDimension(value: number, locale: Locale = defaultLocale): string {
  const config = getLocaleConfig(locale);
  if (config.measurementSystem === 'imperial') {
    // Convert cm to inches
    const inches = value / 2.54;
    return `${inches.toFixed(1)}"`;
  }
  return `${value} cm`;
}
