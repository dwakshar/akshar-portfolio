const SUPPORTED_CURRENCIES = ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'AED', 'SGD'] as const;
export type Currency = typeof SUPPORTED_CURRENCIES[number];

export type FxRates = {
  base: 'USD';
  rates: Record<Currency, number>;
  fetchedAt: string;
};

const FALLBACK_RATES: FxRates = {
  base: 'USD',
  rates: {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.5,
    AUD: 1.52,
    CAD: 1.37,
    AED: 3.67,
    SGD: 1.34,
  },
  fetchedAt: 'fallback',
};

export async function getFxRates(): Promise<FxRates> {
  try {
    const symbols = SUPPORTED_CURRENCIES.filter(c => c !== 'USD').join(',');
    const res = await fetch(
      `https://api.frankfurter.app/latest?from=USD&to=${symbols}`,
      { next: { revalidate: 86400 } },
    );

    if (!res.ok) throw new Error(`Frankfurter API error: ${res.status}`);

    const data = await res.json();

    return {
      base: 'USD',
      rates: { USD: 1, ...data.rates },
      fetchedAt: data.date,
    };
  } catch (err) {
    console.warn('FX fetch failed, using fallback rates:', err);
    return FALLBACK_RATES;
  }
}
