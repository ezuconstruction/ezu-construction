import { getCollection } from 'astro:content';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { locations } from '../data/locations';
import { site } from '../data/site';

export async function GET() {
  const journal = await getCollection('journal');
  const day = (d: Date) => d.toISOString().slice(0, 10);
  const pages: { path: string; lastmod?: string }[] = [
    ...['/', '/services', '/projects', '/locations', '/process', '/about', '/journal', '/journal/all', '/contact', '/zh', '/privacy', '/terms', '/accessibility'].map((path) => ({ path })),
    ...services.map((s) => ({ path: `/services/${s.slug}` })),
    ...projects.map((p) => ({ path: `/projects/${p.slug}` })),
    ...locations.map((l) => ({ path: `/locations/${l.slug}` })),
    ...journal.map((a) => ({
      path: a.data.lang === 'zh' ? `/zh/${a.id.replace(/^zh\//, '')}` : `/journal/${a.id}`,
      lastmod: day(a.data.updated ?? a.data.date),
    })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${new URL(p.path, site.url).href}</loc>${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
