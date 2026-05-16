export const COUNTRY_TO_CURRENCY: Record<string, string> = {
  US: 'USD',
  IN: 'INR',
  GB: 'GBP',
  AU: 'AUD',
  CA: 'CAD',
  AE: 'AED',
  SG: 'SGD',
  // EU member states
  DE: 'EUR', FR: 'EUR', ES: 'EUR', IT: 'EUR', NL: 'EUR',
  BE: 'EUR', AT: 'EUR', IE: 'EUR', PT: 'EUR', FI: 'EUR',
  GR: 'EUR', LU: 'EUR', SK: 'EUR', SI: 'EUR', EE: 'EUR',
  LV: 'EUR', LT: 'EUR', CY: 'EUR', MT: 'EUR', HR: 'EUR',
};

export const CURRENCY_META: Record<string, { symbol: string; code: string; locale: string; flag: string }> = {
  USD: { symbol: '$',    code: 'USD', locale: 'en-US', flag: '🇺🇸' },
  EUR: { symbol: '€',    code: 'EUR', locale: 'en-IE', flag: '🇪🇺' },
  GBP: { symbol: '£',    code: 'GBP', locale: 'en-GB', flag: '🇬🇧' },
  INR: { symbol: '₹',    code: 'INR', locale: 'en-IN', flag: '🇮🇳' },
  AUD: { symbol: 'A$',   code: 'AUD', locale: 'en-AU', flag: '🇦🇺' },
  CAD: { symbol: 'C$',   code: 'CAD', locale: 'en-CA', flag: '🇨🇦' },
  AED: { symbol: 'AED ', code: 'AED', locale: 'en-AE', flag: '🇦🇪' },
  SGD: { symbol: 'S$',   code: 'SGD', locale: 'en-SG', flag: '🇸🇬' },
};
