export interface Location {
  slug: string;
  name: string;
  zh: string;
  title: string;
  description: string;
  lede: string;
  intro: string[];
  neighbourhoods: string[];
  housing: { era: string; body: string }[];
  rules: { icon: 'tree' | 'heritage' | 'units' | 'water' | 'variance' | 'moraine'; title: string; body: string; link?: { href: string; label: string } }[];
  projects: string[];
  articles: string[];
}

export const locations: Location[] = [
  {
    slug: 'markham',
    name: 'Markham',
    zh: '万锦',
    title: 'Renovation Contractor and Custom Home Builder in Markham',
    description: 'Based in Markham: custom homes, additions, kitchens, basements and second suites in Unionville, Cornell, Berczy, Thornhill and across the city.',
    lede: 'Our office is on Steelcase Road, so Markham is where we’re most often on site, and where we can be at your house the same day.',
    intro: [
      'Markham’s housing is younger than Toronto’s but just as varied: 1970s and 1980s split-levels and two-storeys in Thornhill and Milliken, 1990s family homes in Unionville and Berczy, New Urbanist streets in Cornell, and estate lots in Angus Glen and Devil’s Elbow. Each era has its own renovation pattern, and we’ve worked in most of them.',
      'Markham also has one of the largest Chinese-Canadian communities in the country. We can walk you through a project in Mandarin as well as English, and the plans, quote and schedule are written so the whole family can follow them.',
    ],
    neighbourhoods: ['Unionville', 'Markham Village', 'Cornell', 'Berczy', 'Cachet', 'Angus Glen', 'Milliken', 'Thornhill', 'Bayview Glen', 'Wismer', 'Greensborough', 'Cathedraltown'],
    housing: [
      { era: '1960s–1980s', body: 'Bungalows, backsplits and two-storeys in Thornhill, Bayview Glen and Markham Village. Common work: opening the main floor, new kitchens, basement suites, and full rebuilds on the larger lots.' },
      { era: '1990s–2000s', body: 'Two-storey family homes in Unionville, Berczy, Cachet and Milliken. Common work: kitchens and ensuites original to the house, closed-off family rooms, and finished basements that need a second unit.' },
      { era: '2000s onward', body: 'Cornell, Wismer and Cathedraltown. Mostly interior upgrades, basement finishing and garage or coach-house suites where the lot allows.' },
    ],
    rules: [
      { icon: 'tree', title: 'Tree permits from 20 cm', body: 'Markham’s Tree Preservation By-law (2023-164) requires a permit to injure or remove a private tree 20 cm or more in diameter at breast height. That includes root damage from excavation, so tree protection belongs in the design.', link: { href: 'https://www.markham.ca/neighbourhood-services/trees/tree-permit-application', label: 'City of Markham tree permits' } },
      { icon: 'heritage', title: 'Four heritage districts', body: 'Unionville, Markham Village, Thornhill and Buttonville are Heritage Conservation Districts. Exterior changes, additions and new houses inside them need heritage approval as well as a building permit.' },
      { icon: 'units', title: 'Second and third units', body: 'Provincial rules allow up to three units on most residential lots, as long as the zoning by-law’s setbacks and the building code are met. A legal basement suite is the most common route in Markham.' },
      { icon: 'water', title: 'Ravines and valleys', body: 'Lots backing onto the Rouge River or its tributaries can fall within Toronto and Region Conservation Authority regulated areas, which need a TRCA permit before construction.' },
    ],
    projects: ['custom-home-construction-vaughan', 'kitchen-renovation-richmond-hill'],
    articles: ['additional-residential-units-york-region', 'tree-permits-before-you-build', 'multigenerational-home-design-gta', 'wok-kitchen-ventilation'],
  },
  {
    slug: 'toronto',
    name: 'Toronto',
    zh: '多伦多',
    title: 'Renovation Contractor and Custom Home Builder in Toronto',
    description: 'Custom homes, additions, kitchens, basements and laneway suites across Toronto, North York, Scarborough and Etobicoke. Real projects and local rules.',
    lede: 'From century semis downtown to post-war bungalows in North York and Etobicoke, Toronto houses come with history behind the walls. We plan for it.',
    intro: [
      'Toronto has the oldest and most varied housing stock in the region, and the most detailed rules for building on it. A renovation in Leslieville and one in Willowdale can involve completely different structures, permits and neighbours.',
      'We work across the city, including North York, Scarborough and Etobicoke, on kitchens, whole-home renovations, additions, legal basement suites, laneway and garden suites, and new custom homes on infill lots.',
    ],
    neighbourhoods: ['Leslieville', 'The Annex', 'Leaside', 'Lawrence Park', 'Willowdale', 'Bayview Village', 'Don Mills', 'Agincourt', 'Wexford', 'Etobicoke', 'Kingsway', 'Mimico', 'Davisville', 'East York'],
    housing: [
      { era: 'Before 1940', body: 'Victorian and Edwardian semis and detached homes. Expect plaster walls, knob-and-tube wiring, rubble or block foundations and low basements that need underpinning.' },
      { era: '1945–1970', body: 'Bungalows and two-storeys in North York, Scarborough and Etobicoke on generous lots. The most common candidates for second-storey additions and full rebuilds.' },
      { era: '1970s onward', body: 'Townhouses, condos and newer detached homes. Mostly interior renovations, with condo board rules shaping the schedule.' },
    ],
    rules: [
      { icon: 'tree', title: 'Tree permits from 30 cm', body: 'Toronto requires a permit to injure or remove a privately owned tree 30 cm or more in diameter, and any city-owned tree regardless of size. Inside ravine-protected areas, trees of any size are protected.', link: { href: 'https://www.toronto.ca/services-payments/building-construction/tree-permits/', label: 'City of Toronto tree permits' } },
      { icon: 'units', title: 'Laneway, garden suites and multiplexes', body: 'Toronto permits laneway suites, garden suites, and up to four units on residential lots as of right, subject to the zoning rules for size, height and separation.' },
      { icon: 'heritage', title: 'Heritage districts', body: 'Neighbourhoods such as Cabbagetown, Rosedale and Wychwood Park are Heritage Conservation Districts. Exterior changes need heritage review as well as a permit.' },
      { icon: 'variance', title: 'Committee of Adjustment', body: 'Many Toronto lots are tight against the zoning limits. Additions that exceed them need a minor variance from the Committee of Adjustment, which typically adds three to six months.' },
    ],
    projects: ['luxury-kitchen-renovation-toronto', 'kitchen-renovation-etobicoke'],
    articles: ['laneway-suite-cost-toronto', 'basement-underpinning-vs-bench-footing', 'toronto-secondary-suite-legalization-guide', 'older-home-surprises'],
  },
  {
    slug: 'richmond-hill',
    name: 'Richmond Hill',
    zh: '列治文山',
    title: 'Renovation Contractor and Custom Home Builder in Richmond Hill',
    description: 'Kitchens, renovations, additions and custom homes in Richmond Hill, from Bayview Hill and Mill Pond to Oak Ridges. Local rules and real projects.',
    lede: 'Richmond Hill has some of the largest residential lots in the GTA, which is why so many of its older homes are being renovated or rebuilt rather than sold.',
    intro: [
      'Richmond Hill runs from the 1950s streets around Yonge and Major Mackenzie up to the newer subdivisions on the Oak Ridges Moraine. The southern neighbourhoods, especially Bayview Hill and South Richvale, have large lots where a dated house is often worth rebuilding as a custom home. Further north, newer homes are mostly due for kitchens, bathrooms and basements.',
      'We renovate and build across the city, and many of our Richmond Hill clients prefer to plan their project in Mandarin. We can do that.',
    ],
    neighbourhoods: ['Bayview Hill', 'South Richvale', 'Mill Pond', 'Oak Ridges', 'Jefferson', 'Westbrook', 'Rouge Woods', 'Langstaff', 'Observatory', 'Elgin Mills', 'Devonsleigh', 'Doncrest'],
    housing: [
      { era: '1950s–1970s', body: 'Bungalows and side-splits around Mill Pond, Crosby and Harding. Common candidates for additions, full renovations and rebuilds.' },
      { era: '1980s–1990s', body: 'Large two-storey homes in Bayview Hill, South Richvale and Doncrest. Kitchens, ensuites and main floors are often original, and many lots support a much larger house.' },
      { era: '2000s onward', body: 'Jefferson, Westbrook, Oak Ridges and Elgin Mills. Mostly interior renovations and finished basements.' },
    ],
    rules: [
      { icon: 'tree', title: 'Tree permits from 15 cm', body: 'Richmond Hill’s current Tree Preservation By-law protects private trees from 15 cm in diameter, lower than the 20 cm many older guides quote. Check before any excavation near trees.', link: { href: 'https://www.richmondhill.ca/en/learn-more/Tree-Cutting-Permit.aspx', label: 'Richmond Hill tree permits' } },
      { icon: 'moraine', title: 'Oak Ridges Moraine', body: 'Northern Richmond Hill sits on the Oak Ridges Moraine, where provincial and conservation-authority rules can limit building near natural features. We check this during feasibility.' },
      { icon: 'heritage', title: 'Heritage properties', body: 'Richmond Hill has no heritage conservation district, but many individual properties around the original village on Yonge Street are listed or designated, which adds a heritage review.' },
      { icon: 'units', title: 'Second units', body: 'Like the rest of Ontario, most Richmond Hill lots can have a second and third unit, subject to zoning setbacks and the building code.' },
    ],
    projects: ['modern-custom-home-richmond-hill', 'custom-home-stone-and-stucco', 'kitchen-renovation-richmond-hill'],
    articles: ['renovate-add-or-rebuild', 'custom-home-cost-gta', 'tree-permits-before-you-build', 'multigenerational-home-design-gta'],
  },
  {
    slug: 'vaughan',
    name: 'Vaughan',
    zh: '旺市',
    title: 'Custom Home Builder and Renovation Contractor in Vaughan',
    description: 'Custom homes, additions and renovations in Vaughan: Woodbridge, Maple, Kleinburg, Thornhill and Vellore. See our Vaughan custom home and local building rules.',
    lede: 'We built a custom home in Vaughan in 2025, and the city’s mix of established family homes and estate lots keeps us coming back.',
    intro: [
      'Vaughan’s older neighbourhoods, Woodbridge, Maple and Thornhill, were built for large families, and many of those houses are now ready for a second life: new kitchens, reworked main floors, legal basement units for the next generation, or a complete rebuild on the same lot.',
      'Kleinburg and the estate streets around it are a different kind of work: larger custom homes, often with detailed millwork, stone and architectural ceilings. Our Vaughan custom home is a good example of the level of finish involved.',
    ],
    neighbourhoods: ['Woodbridge', 'Maple', 'Kleinburg', 'Thornhill', 'Vellore Village', 'Concord', 'Patterson', 'Sonoma Heights', 'Vaughan Mills', 'Islington Woods'],
    housing: [
      { era: '1970s–1990s', body: 'Large two-storey homes in Woodbridge, Thornhill and Maple, often with cold cellars and original kitchens. Common work: main-floor renovations and basement suites.' },
      { era: '1990s–2010s', body: 'Vellore, Sonoma Heights and Patterson. Kitchens, ensuites and finished basements.' },
      { era: 'Estate lots', body: 'Kleinburg, Islington Woods and parts of Woodbridge. Custom homes and major additions.' },
    ],
    rules: [
      { icon: 'tree', title: 'Tree permits from 20 cm', body: 'Vaughan’s Tree Protection By-law (052-2018) requires a permit to injure or remove a tree 20 cm or more in diameter at 1.4 m above ground, including multi-stem trees with a combined 20 cm.', link: { href: 'https://www.vaughan.ca/', label: 'City of Vaughan' } },
      { icon: 'heritage', title: 'Four heritage districts', body: 'Kleinburg-Nashville, Maple, Thornhill and Woodbridge are Heritage Conservation Districts. New homes and exterior changes inside them need heritage approval.' },
      { icon: 'water', title: 'Valleys and the Humber', body: 'Lots near the Humber and Don river systems can fall inside TRCA-regulated areas, which need a conservation authority permit.' },
      { icon: 'units', title: 'Additional units', body: 'Vaughan permits additional residential units under provincial rules, subject to its zoning by-law. A legal basement unit is the most common choice.' },
    ],
    projects: ['custom-home-construction-vaughan', 'modern-custom-home-richmond-hill'],
    articles: ['custom-home-cost-gta', 'renovate-add-or-rebuild', 'additional-residential-units-york-region', 'hcra-vs-tarion-ontario-homeowner-guide'],
  },
];

export const locationBySlug = (slug: string) => locations.find((l) => l.slug === slug);
