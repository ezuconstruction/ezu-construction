# EZU Construction: launch checklist and search plan

## 1. Confirm with the client before launch

The site only states things we could verify or that came from the previous site. These still need a yes from the client.

**Company facts**
- [ ] Legal name "EZU Construction Inc." and founding year 2016. A federal record shows an "E-ZU Construction Inc." incorporated in 2019 and dissolved in January 2024; confirm which entity operates the business today.
- [ ] Email: the site uses `info@ezuconstruction.com` while the domain is `.ca`. Confirm the address, ideally move to `@ezuconstruction.ca`.
- [ ] Hours (Mon–Fri 8–6, Sat 9–2).
- [ ] Languages: English and Mandarin.
- [ ] Social profiles: Instagram and Facebook are linked. LinkedIn and YouTube are in the structured data only; remove them from `site.ts` if they do not exist.

**Commitments the copy makes** (About, How we work, footer)
- [ ] Written, itemized quotes with allowances listed.
- [ ] No extra work without written approval.
- [ ] A dedicated project team (project manager backed by the partners) from quote to sign-off and through warranty.
- [ ] A written update every week during construction.
- [ ] Payments tied to completed stages; deposit at signing; final payment after deficiencies.
- [ ] Written workmanship warranty (state the term if they want it on the site).
- [ ] Licensed trades for electrical (ESA) and gas (TSSA); HCRA licence for new homes. If EZU builds new homes, add the HCRA licence number to the About page.
- [ ] Liability insurance and WSIB clearance available on request.

**Projects**
- [ ] Condo kitchen and bathroom: old site said both "Toronto, 2024" and "Burlington, 2025". The site uses Burlington, 2025.
- [ ] Stone and stucco custom home: now listed as Richmond Hill (per client); year still unknown. The exterior photo carried an "AI-generated content" badge (likely a phone's AI eraser); ask for the untouched original.
- [ ] Lakeside bungalow (Carrying Place, 2024): photos are video frames with the FilmoraGo watermark. Better photos would help. The two photos in `src/assets/cottage` were assumed to be this house (furnished living room, garden view); confirm.
- [ ] Toronto project: the photos in `src/assets/charcoal-walnut` were treated as the same house, so the project is now a whole-home renovation. Confirm the scope, and the kitchen duration (the 8 weeks was removed).
- [ ] Modern custom home, Richmond Hill, 2023: the house number was removed from the front photo, and a utility pole and a portable toilet were cropped out. Confirm the client is happy for the home to appear.
- [ ] Construction photos in `src/assets/under-construction-rhill-dontmakeasproject` are used in the process section (stages 3 and 4), described as one of our Richmond Hill custom homes.
- [ ] Any more finished projects, with photos, location, year and duration. This is the single most valuable thing the client can give us.

**Brand**
- [ ] The seal uses 筑 ("to build", simplified, as on a mainland company chop). Swap the glyph in `src/components/Seal.astro` if they prefer another character.
- [ ] The logo mark uses the solid U from the original art (E + Z + U = 山).

**Removed from the old site because they were not real**
- Six testimonials with stock names ("Sarah Johnson", "Michael Chen"...) and missing photos.
- The "Award Winning" badge. ("Family Owned" was removed at first, then confirmed true by the client and restored in the copy.)
- `aggregateRating` of 5.0 from 50 reviews in the structured data. Self-published review markup for your own business is ignored by Google and can be treated as spam; real reviews belong on the Google Business Profile.
- Invented milestones on the About page ("150+ projects", "Laneway Suite Certification", "zero client disputes").
- The homepage hero image, which is a widely used stock 3D render, not an EZU project.

## 2. Launch steps

1. Merge the `redesign` branch. `vercel.json` sets the framework to Astro, so Vercel builds it without changing project settings.
2. After deploy, spot-check redirects: `/publications/kitchen-renovation-cost-gta-2026`, `/construction/drywall`, `/locations/north-york`, `/tos`. All 49 redirects are permanent (301/308).
3. Google Search Console: see the checklist below.
4. Bing Webmaster Tools: import from Search Console (covers Bing, DuckDuckGo and ChatGPT search).
5. Confirm Vercel Web Analytics and Speed Insights are enabled for the project (the scripts 404 when run locally; that is expected).
6. Send a test enquiry through the English and Chinese forms and confirm both arrive.

### Search Console after launch

1. **Property.** Use a Domain property (DNS TXT record), which covers https, http and www. If one exists from the old site, keep it; the history carries over.
2. **Sitemap.** Submit `https://ezuconstruction.ca/sitemap.xml` (61 URLs). Delete any other sitemap entries left from the old site.
3. **Check the redirects.** Run URL Inspection on a few old URLs (`/publications/...`, `/construction/drywall`, `/tos`) and confirm each shows a 301/308 to the new page. Don't use the Change of Address tool, since the domain hasn't changed.
4. **Request indexing** with URL Inspection, about 10 a day:
   - the homepage, `/services` and the eight service pages;
   - `/projects` and the new Richmond Hill project;
   - the four city pages and `/zh`;
   - then the cost guides.
5. **Pages report, weekly for the first month.**
   - "Page with redirect" will rise; that's expected.
   - Any "Not found (404)" URL that used to get traffic needs a redirect in `vercel.json`.
   - "Duplicate without user-selected canonical" usually means www isn't redirecting. In Vercel, set `ezuconstruction.ca` as the primary domain and redirect www to it.
6. **Enhancements.** The Breadcrumbs report should show valid items for services, projects, cities and guides. Spot-check one guide (Article) and the homepage (Organization) in the Rich Results Test.
7. **Performance report, after about four weeks.** Compare against the previous period. Filter queries by city names (Markham, Richmond Hill, Vaughan) and by "cost". Watch click-through rate on the pages whose titles were shortened.
8. **Core Web Vitals (mobile)** should stay green. Vercel Speed Insights shows the same data sooner.
9. **Outside Search Console.**
   - Import the property into Bing Webmaster Tools.
   - In the Google Business Profile, set the website to `https://ezuconstruction.ca` and add the new project photos.
   - Make sure the business name, address and phone in the profile match the site exactly.

## 3. What was done, and why

| Old site | New site | Why |
| --- | --- | --- |
| Dark theme with blurred photo backgrounds | Light theme, real photos unfiltered | Renovation buyers judge finishes; white kitchens on black backgrounds with dark overlays hide the work. |
| 23 service pages, 12 of them thin trade pages | 8 services, trades consolidated into one strong page | Fewer, deeper pages rank better than many thin ones and avoid Google's scaled-content and doorway-page signals. |
| 9 templated city pages | 4 city pages with genuinely local content | Each covers that city's permit office, tree by-law threshold, heritage districts, housing stock and real nearby projects. |
| 34 articles, mostly 100–300 words | 26 in-depth guides plus 3 in Chinese | Thin articles redirected to the closest new guide. |
| Next.js with daisyUI, React on every page, 57 MB of images | Astro, 0 KB framework JavaScript, ~6 MB of source images | Pages weigh 125–230 KB in total; Lighthouse mobile: performance 99–100, accessibility 100, SEO 100. |
| Custom sliders, floating chat button, scroll-triggered bars | Native `<details>` menus and FAQs, plain before/after pairs | Standard, accessible, nothing to break on an old phone. |

## 4. Pricing on the site

Prices vary too much between houses and finishes to publish as promises, and a customer who expects an Italian-marble renovation at a mid-range number is a complaint waiting to happen. So:

- Service pages explain **what drives the price** instead of showing dollar ranges.
- The cost calculator was removed; `/renovation-cost-calculator` redirects to the journal.
- Dollar ranges appear only in the journal guides, where readers search for them, and every guide that mentions prices opens with a note that the ranges are for planning, not quotes, and that the real price comes from a written quote after a site visit.

## 5. How to rank, beyond keywords

Ranked by expected impact for a GTA contractor.

### 1. Google Business Profile (the map pack)
For "renovation contractor near me" and "kitchen renovation Markham", the map pack sits above every organic result, and it is driven by the Business Profile, not the website.
- Primary category **General contractor**; add Home builder, Kitchen remodeler, Bathroom remodeler, Construction company.
- Add every service, the service area cities, and hours that match the site.
- Upload real project photos regularly, not stock.
- **Reviews are the lever.** Ask every client at the sign-off walkthrough, when the project gets its seal. Hand them a printed card with the seal and a QR code to the review form. Reply to every review. Chinese-language reviews are welcome and help with Chinese searches.

### 2. Own the Chinese-language search space
43% of Markham residents and 28.5% of Richmond Hill residents report Chinese ethnic origin (2021 census). Searches like 万锦装修, 多伦多装修公司, 列治文山装修 and 地下室出租 are answered mostly by forum posts and directories, not contractors' sites, so `/zh` and its guides can rank with modest effort.
- Add a **WeChat** contact (ID or QR code) to `/zh`. For this audience it matters more than the contact form.
- Post projects on **Xiaohongshu (RedNote)** with neighbourhood tags (#万锦装修 #多伦多装修 #列治文山), linking to `/zh`.
- List the business on Chinese-Canadian directories and forums such as 51.ca and YorkBBS.
- Write one Chinese guide a month: basement suites, wok kitchens, the HST rebate on new homes, feng shui in renovation.

### 3. Citations and trade listings
- HomeStars, Houzz, Yelp, BBB, Bing Places, Apple Business Connect, with the name, address and phone written exactly the same everywhere.
- Ask suppliers (cabinet makers, quartz fabricators, window and siding manufacturers) to list EZU on their "find an installer" pages. These are relevant, authoritative backlinks that competitors rarely chase.
- Join RenoMark (BILD) and the Markham Board of Trade. Membership pages link back and add trust signals.

### 4. Projects as local landing pages
Every finished job becomes a project page with the neighbourhood in the title ("A 1990s Unionville kitchen, opened up"). This is how competitors such as Ashton rank for neighbourhood searches without doorway pages. Before/after photos, scope, duration, and a quote from the client if they agree.

### 5. Linkable assets and digital PR
- The cost guides are the linkable asset. Refresh them every January and publish a short "GTA renovation cost report" to pitch to YorkRegion.com, local real estate agents, and Chinese-language media (Sing Tao, Ming Pao). Keep the framing that ranges are for planning, not quotes.
- The City of Toronto publishes building permit data. A yearly piece like "Where Toronto is building laneway and garden suites" earns links from local news and blogs.
- Real estate agents need trusted contractors for pre-sale work. A one-page "pre-listing renovation" offer to agents in Markham and Richmond Hill earns links and referrals.

### 6. AI search and answer engines
ChatGPT, Perplexity and Google's AI Overviews answer "best renovation contractor in Markham" from consistent facts across the web.
- `llms.txt` and the structured data on every page describe the business plainly.
- Keep the name, address, phone, services and areas identical everywhere.
- Mentions in real discussions (r/Markham, r/askTO, RedNote) carry weight. Participate honestly, never with fake accounts.

### 7. Content cadence
Two guides a month, timed to the season: permits and additions in late winter, basements and suites in late summer, rebates whenever programs change. Refresh the cost guides each January and set `updated:` in their frontmatter.

### What not to do
- No fake reviews, testimonials or rating markup.
- No pages for 40 towns where EZU has never worked.
- No buying links or using link networks.
- No keyword-stuffed footers or hidden text.
