import { getCollection } from 'astro:content';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { locations } from '../data/locations';
import { site } from '../data/site';

// llms.txt: a plain-text summary for AI assistants and answer engines (https://llmstxt.org).
export async function GET() {
  const guides = (await getCollection('journal', (a) => a.data.lang === 'en')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const u = (p: string) => new URL(p, site.url).href;
  const text = `# ${site.name}

> ${site.name} is a family-owned general contractor based in Markham, Ontario, Canada, founded in ${site.founded}. It builds custom homes and renovates houses across Toronto and York Region (Markham, Richmond Hill, Vaughan): home additions, whole-home renovations, kitchens, bathrooms, basements and legal second suites, laneway and garden suites, and single trades. The team works in English and Mandarin. It takes on projects in the Greater Toronto Area only.

Full text of every service page, project and guide: ${u('/llms-full.txt')}

- Address: ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}
- Phone: ${site.phone}
- Email: ${site.email}
- Hours: ${site.hours}

## Services
${services.map((s) => `- [${s.name}](${u('/services/' + s.slug)}): ${s.short}`).join('\n')}

## Projects
${projects.map((p) => `- [${p.title}](${u('/projects/' + p.slug)}): ${p.summary}`).join('\n')}

## Service areas
${locations.map((l) => `- [${l.name}](${u('/locations/' + l.slug)}): ${l.lede}`).join('\n')}

## Guides
${guides.map((g) => `- [${g.data.title}](${u('/journal/' + g.id)}): ${g.data.description}`).join('\n')}

## Other
- [Our process](${u('/process')})
- [Chinese-language page](${u('/zh')})
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
