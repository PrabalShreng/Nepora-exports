import type { MetadataRoute } from 'next';
import { allProducts } from './productdata';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com').replace(/\/$/, '');
  return [
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/collections`, changeFrequency: 'weekly', priority: .9 },
    { url: `${base}/about`, changeFrequency: 'yearly', priority: .5 },
    { url: `${base}/contact`, changeFrequency: 'yearly', priority: .4 },
    ...allProducts.map(product => ({ url: `${base}${product.href}`, changeFrequency: 'weekly' as const, priority: .7 })),
  ];
}

