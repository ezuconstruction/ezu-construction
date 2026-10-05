# EZU Construction website

Static site for [ezuconstruction.ca](https://ezuconstruction.ca), built with [Astro](https://astro.build). Every page is plain HTML and CSS; the only JavaScript is a one-line form helper on the contact page and Vercel analytics. Menus, the Services dropdown and FAQs use native HTML (`<details>`, `popover`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves dist/
```

## Where things live

| What | File |
| --- | --- |
| Phone, email, address, hours, form endpoint | `src/data/site.ts` |
| Services (copy, costs, timelines, FAQs) | `src/data/services.ts` |
| Projects (photos, story, facts) | `src/data/projects.ts` |
| City pages | `src/data/locations.ts` |
| Journal articles | `src/content/journal/*.md` (Chinese: `src/content/journal/zh/`) |
| Colours, type, spacing | `src/styles/global.css` |
| Redirects from the old site, headers | `vercel.json` |

### Adding a project

1. Put photos in `src/assets/projects/` (JPEG, up to 2400 px wide; Astro makes the WebP sizes).
2. Add an entry to `src/data/projects.ts`. Only real EZU work goes in projects; say in the caption if a photo shows work in progress.

### Adding an article

Create `src/content/journal/your-slug.md` with the same frontmatter as the existing ones. It appears in the journal, the sitemap and `llms.txt` automatically. Link it from the relevant service in `services.ts` (`articles`).

See `docs/launch-and-seo-plan.md` for the launch checklist, facts the client must confirm, and the search strategy.
