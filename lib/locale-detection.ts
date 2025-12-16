// Country/region detection infrastructure for future localization
// This will allow serving the correct website for the correct country

import { Locale } from './i18n';

export interface CountryConfig {
  code: string;
  name: string;
  locale: Locale;
  flag: string;
}

export const supportedCountries: CountryConfig[] = [
  { code: 'GB', name: 'United Kingdom', locale: 'en-GB', flag: '🇬🇧' },
  { code: 'US', name: 'United States', locale: 'en-US', flag: '🇺🇸' },
  { code: 'DE', name: 'Germany', locale: 'de-DE', flag: '🇩🇪' },
  { code: 'FR', name: 'France', locale: 'fr-FR', flag: '🇫🇷' },
];

/**
 * Detect user's country from various sources
 * In production, this would use:
 * - Cloudflare headers (CF-IPCountry)
 * - Vercel headers (x-vercel-ip-country)
 * - User preferences from cookies
 * - Browser language settings
 */
export function detectCountry(
  headers?: Headers,
  cookieCountry?: string
): CountryConfig {
  // 1. Check cookie preference first
  if (cookieCountry) {
    const country = supportedCountries.find((c) => c.code === cookieCountry);
    if (country) return country;
  }

  // 2. Check geo-location headers (Cloudflare, Vercel, etc.)
  if (headers) {
    const cfCountry = headers.get('CF-IPCountry');
    const vercelCountry = headers.get('x-vercel-ip-country');
    const detectedCode = cfCountry || vercelCountry;

    if (detectedCode) {
      const country = supportedCountries.find((c) => c.code === detectedCode);
      if (country) return country;
    }
  }

  // 3. Default to UK
  return supportedCountries[0];
}

/**
 * Get locale from country code
 */
export function getLocaleFromCountry(countryCode: string): Locale {
  const country = supportedCountries.find((c) => c.code === countryCode);
  return country?.locale || 'en-GB';
}

/**
 * Middleware helper to redirect users to correct locale
 * This would be used in Next.js middleware for automatic redirects
 */
export function shouldRedirectToLocale(
  currentLocale: string,
  detectedCountry: CountryConfig
): { shouldRedirect: boolean; targetLocale: Locale } {
  const targetLocale = detectedCountry.locale;
  const shouldRedirect = currentLocale !== targetLocale;

  return { shouldRedirect, targetLocale };
}

/**
 * Store user's country preference
 */
export function setCountryPreference(countryCode: string): void {
  if (typeof document !== 'undefined') {
    document.cookie = `preferred-country=${countryCode}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
  }
}

/**
 * Get user's country preference from cookie
 */
export function getCountryPreference(): string | null {
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(/preferred-country=([^;]+)/);
    return match ? match[1] : null;
  }
  return null;
}
