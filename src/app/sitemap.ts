import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { LEGAL_DOCS } from '@/lib/legalContent';

const BASE_URL = 'https://optimaks.cc';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: Object.fromEntries(routing.locales.map(l => [l, `${BASE_URL}/${l}`]))
      }
    });
    for (const doc of LEGAL_DOCS) {
      entries.push({
        url: `${BASE_URL}/${locale}/legal/${doc}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3
      });
    }
  }

  return entries;
}
