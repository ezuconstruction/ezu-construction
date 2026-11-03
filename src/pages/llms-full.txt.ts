import { getCollection } from 'astro:content';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { locations } from '../data/locations';
import { site, areasServed } from '../data/site';

// llms-full.txt: the full text of the site in one plain file, for AI assistants and answer engines.
// llms.txt is the short index; this is what an assistant reads when it wants the details.
export async function GET() {
  const u = (p: string) => new URL(p, site.url).href;
  const guides = (await getCollection('journal', (a) => a.data.lang === 'en')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const md = (body = '') => body.replace(/!\[([^\]]*)\]\([^)]*\)/g, '').replace(/\n{3,}/g, '\n\n').trim(); // drop image markup

  const out: string[] = [];
  out.push(`# ${site.name}: full text

${site.name} is a family-owned general contractor based in ${site.address.city}, Ontario, founded in ${site.founded}. It builds custom homes and renovates houses in the Greater Toronto Area only. Languages: English and Mandarin.

- Address: ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}, Canada
- Phone: ${site.phone}
- Email: ${site.email}
- Hours: ${site.hours}
- Areas served: ${areasServed.join(', ')}
- Website: ${site.url}
- Consultations: ${u('/contact')}`);

  out.push('\n## Services');
  for (const s of services) {
    out.push(`\n### ${s.name}
URL: ${u('/services/' + s.slug)}

${s.intro.join('\n\n')}

What we take care of:
${s.includes.map((i) => `- ${i.title}: ${i.body}`).join('\n')}

How it's priced: ${s.price}
${s.timeline ? `Typical timeline: ${s.timeline.map((t) => `${t.label} ${t.weeks[0]}–${t.weeks[1]} weeks`).join('; ')}.` : ''}

Good to know:
${s.know.map((k) => `- ${k.title}: ${k.body}`).join('\n')}

Questions:
${s.faqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join('\n')}`);
  }

  out.push('\n## Projects');
  for (const p of projects) {
    out.push(`\n### ${p.title}
URL: ${u('/projects/' + p.slug)}
${p.type}, ${p.location}${p.year ? `, ${p.year}` : ''}

${p.story.join('\n\n')}

Scope:
${p.scope.map((s) => `- ${s}`).join('\n')}`);
  }

  out.push('\n## Service areas');
  for (const l of locations) out.push(`\n### ${l.name}\nURL: ${u('/locations/' + l.slug)}\n\n${l.lede}`);

  out.push('\n## Guides');
  for (const g of guides) {
    out.push(`\n### ${g.data.title}
URL: ${u('/journal/' + g.id)}
Published: ${g.data.date.toISOString().slice(0, 10)}

${md(g.body)}`);
  }

  return new Response(out.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
