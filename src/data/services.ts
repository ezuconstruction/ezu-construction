import type { ImageMetadata } from 'astro';
import introStucco from '../assets/projects/custom-home-exterior.jpg';
import introAddition from '../assets/stock/addition-great-room.jpg';
import introMainFloor from '../assets/projects/toronto-house-main-floor.jpg';
import introRhKitchen from '../assets/projects/richmond-hill-kitchen-after.jpg';
import introTub from '../assets/stock/bathroom-freestanding-tub.jpg';
import introBasementStairs from '../assets/stock/basement-stairs.jpg';
import introBackyard from '../assets/stock/backyard-excavation.jpg';
import introDrywall from '../assets/stock/drywall-taping.jpg';
import rhModern from '../assets/projects/richmond-hill-modern-front.jpg';
import lakeFurnished from '../assets/projects/lakeside-living-furnished.jpg';
import torKitchen from '../assets/projects/toronto-kitchen-after.jpg';
import torEnsuite from '../assets/projects/toronto-house-ensuite.jpg';
import basementFinished from '../assets/stock/basement-suite-finished.jpg';
import eto1 from '../assets/projects/etobicoke-kitchen-1.jpg';
import condoBath from '../assets/projects/condo-bathroom.jpg';
import lakeAfterLower from '../assets/projects/lakeside-after-lower.jpg';
import secondStorey from '../assets/stock/second-storey-addition.jpg';
import suiteBackyard from '../assets/stock/garden-suite-backyard.jpg';
import suiteModern from '../assets/stock/garden-suite-modern.jpg';
import tileSetting from '../assets/stock/tile-setting.jpg';
import bandVaughanLiving from '../assets/projects/vaughan-custom-home-living.jpg';
import bandSunroom from '../assets/stock/sunroom-addition.jpg';
import bandVaughanKitchen from '../assets/projects/vaughan-custom-home-kitchen.jpg';
import bandInterlock from '../assets/stock/interlock-driveway.jpg';

export interface Service {
  slug: string;
  name: string;
  zh: string;
  short: string;
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  imageIsProject: boolean;
  band: { src: ImageMetadata; alt: string; caption?: string };
  introImage: { src: ImageMetadata; alt: string; caption?: string }; // under the intro text
  intro: string[];
  includes: { title: string; body: string }[];
  price: string; // what drives the price, deliberately without dollar figures
  timeline?: { label: string; weeks: [number, number] }[];
  know: { title: string; body: string }[];
  faqs: { q: string; a: string; cta?: string }[]; // cta: optional contact link label shown under the answer
  articles: string[];
}

export const services: Service[] = [
  {
    slug: 'custom-homes',
    name: 'Custom homes',
    zh: '定制住宅建造',
    short: 'New homes built on your lot, from feasibility and drawings to the final walkthrough.',
    title: 'Custom Home Builder in Toronto, Markham and York Region',
    description: 'Custom homes across Toronto, Markham, Richmond Hill and Vaughan: feasibility, design, permits, demolition and construction under one contract.',
    image: rhModern,
    imageAlt: 'Contemporary two-storey custom home in Richmond Hill with panel cladding, black-framed windows and a glass balcony',
    imageIsProject: true,
    introImage: { src: introStucco, alt: 'Stone and stucco custom home with arched dormers and a covered entry', caption: 'Our stone and stucco custom home in Richmond Hill.' },
    band: { src: bandVaughanLiving, alt: 'Living room with a book-matched stone fireplace wall and built-in shelving', caption: 'Our 2025 custom home in Vaughan.' },
    intro: [
      'Most custom homes in the GTA are built on an existing lot: an older bungalow comes down and a new house goes up within the zoning envelope the city allows. That makes the first months the most important. What you can build is set by the zoning by-law, the trees on and near the lot, the grading, the services in the street and sometimes a heritage district, long before anyone picks a tile.',
      'We run the whole sequence: feasibility, design with your architect or ours, engineering, permits, demolition, construction and the trades in between. You deal with one team that has built houses from the footings up, and a dedicated project manager responsible for the schedule and the budget.',
    ],
    includes: [
      { title: 'Lot feasibility', body: 'Zoning, setbacks, height, coverage, trees, grading and services checked before you commit to a design.' },
      { title: 'Design and drawings', body: 'Architectural, structural and mechanical drawings, coordinated so what’s drawn can be built at the quoted price.' },
      { title: 'Permits and approvals', body: 'Building permit, demolition permit, tree permits, utility disconnects and, if needed, a Committee of Adjustment application.' },
      { title: 'Construction', body: 'Excavation and foundations through framing, roofing, mechanicals, insulation, drywall and finishes, with inspections at each stage.' },
      { title: 'Selections', body: 'A selections schedule that tells you when each decision is needed so long-lead items like windows and cabinetry never hold up the site.' },
      { title: 'Warranty and handover', body: 'Final walkthrough, deficiency list, manuals and warranty registration for new-home coverage.' },
    ],
    price: 'Every custom home is priced from its drawings. The biggest factors are size, the exterior (stone costs more than stucco), structural spans, the basement, the level of interior detail, and what the lot itself needs: demolition, servicing and tree protection.',
    timeline: [
      { label: 'Feasibility and design', weeks: [10, 20] },
      { label: 'Permits', weeks: [8, 20] },
      { label: 'Construction', weeks: [40, 60] },
    ],
    know: [
      { title: 'New-home warranty applies', body: 'A new house built for you on your land is covered by Ontario’s statutory new-home warranty, and the builder must be licensed by the HCRA. Ask any builder for their licence number and check it on the Ontario Builder Directory.' },
      { title: 'Trees decide more than you think', body: 'Protected trees on your lot or a neighbour’s can move the footprint, the driveway and the excavation. A tree survey early in design avoids redesigning after the permit review.' },
      { title: 'Minor variances add months', body: 'Building within the zoning envelope keeps the permit simple. Going over on height, coverage or setbacks means a Committee of Adjustment hearing, usually three to six months.' },
    ],
    faqs: [
      { q: 'Do I need my own architect?', a: 'No. Many clients arrive with an architect or designer they already like, and we build from their drawings and review them early for cost and buildability. If you don’t have one, we bring in a designer and structural engineer we work with regularly and manage the drawings as part of the project, so one team is responsible from concept to keys.' },
      { q: 'Can you build on a lot I already own?', a: 'Yes. Most of our custom homes are built on lots our clients already own, often replacing an older house. We start with a feasibility review of zoning, setbacks, height limits, trees and servicing, so you know what can be built before you pay for full drawings.', cta: 'Ask us to review your lot' },
      { q: 'How is the price set?', a: 'Once drawings and selections are far enough along, you receive a written, itemized price. Anything not yet chosen is listed as an allowance with the amount stated, so you can see exactly where the number can move. Payments are tied to completed stages of work, never to dates.' },
      { q: 'How long does a custom home take?', a: 'Typically 10 to 20 weeks of design and feasibility, 8 to 20 weeks for permits, and 10 to 14 months of construction. Permits vary the most, especially if a minor variance is needed. We give you a realistic schedule at the start and update it every week.' },
      { q: 'Can we visit the site during construction?', a: 'Yes, and we encourage it. Visits are scheduled with your project manager so someone walks you through progress and the decisions coming up. You also receive a written update with photos every week.' },
      { q: 'Is a new custom home covered by a warranty?', a: 'Yes. A new home built for you on your land is enrolled in Ontario’s statutory new-home warranty, and we add our own written workmanship warranty. We handle the enrolment and paperwork before construction begins.', cta: 'Talk to us about your build' },
    ],
    articles: ['custom-home-cost-gta', 'renovate-add-or-rebuild', 'hcra-vs-tarion-ontario-homeowner-guide', 'tree-permits-before-you-build', 'building-through-gta-winter'],
  },
  {
    slug: 'home-additions',
    name: 'Home additions',
    zh: '房屋扩建',
    short: 'Second storeys, rear extensions and garage conversions that look like they were always there.',
    title: 'Home Additions in Toronto and York Region',
    description: 'Second-storey additions, rear extensions and garage conversions in Toronto and York Region, with structural design, permits and construction.',
    image: secondStorey,
    imageAlt: 'House with a second-storey addition under construction',
    imageIsProject: false,
    introImage: { src: introAddition, alt: 'Bright open-plan great room with floor-to-ceiling sliding doors to the garden' },
    band: { src: bandSunroom, alt: 'Bright rear addition with windows on three sides' },
    intro: [
      'An addition is often the best way to get the space you need without leaving a neighbourhood you like. It’s also the renovation where the structure matters most: new foundations meet old ones, new framing ties into a roof that was never designed to carry a second floor, and the exterior has to match a house that has weathered for decades.',
      'We handle the engineering, the permit and the build, and we plan the work so you can stay in the house for as long as safely possible. Where you can’t, we tell you upfront and schedule around it.',
    ],
    includes: [
      { title: 'Structural assessment', body: 'Foundation, bearing walls and existing framing checked before design, so the engineering reflects the house you actually have.' },
      { title: 'Second-storey additions', body: 'Roof removal, reinforcement, new floor, weather protection plan and a new stair, built to tie cleanly into the existing house.' },
      { title: 'Rear and side extensions', body: 'Larger kitchens, family rooms and main-floor bedrooms, with new foundations and a seamless floor transition.' },
      { title: 'Garage and attic conversions', body: 'Turning existing enclosed space into living space, with the insulation, fire separation and heating it needs.' },
      { title: 'Exterior matching', body: 'Brick, stone, siding and roofing sourced and laid to match, or a deliberate contrast if that suits the house better.' },
      { title: 'Mechanical extension', body: 'Heating, cooling, plumbing and electrical extended or upgraded so the new rooms are as comfortable as the old ones.' },
    ],
    price: 'Additions are priced from engineered drawings. Size matters less than people expect: foundations, roofing, tying into the existing structure and matching the exterior drive most of the cost, along with any upgrades the house needs to carry the new space.',
    timeline: [
      { label: 'Design and engineering', weeks: [6, 12] },
      { label: 'Permits', weeks: [8, 20] },
      { label: 'Construction', weeks: [16, 30] },
    ],
    know: [
      { title: 'Zoning sets the envelope', body: 'Height, setbacks, lot coverage and floor space index decide how big the addition can be. We check them first, because a variance adds months.' },
      { title: 'Plan for the roof-off weeks', body: 'With a second-storey addition the house is open to the weather for a short window. A good contractor schedules it outside the worst months and has a tarp plan.' },
      { title: 'Expect to upgrade the panel', body: 'Additions often push older homes past the capacity of their electrical service. Budget for it early rather than discovering it at rough-in.' },
    ],
    faqs: [
      { q: 'Can we live in the house during an addition?', a: 'For most rear additions, yes, with some disruption in the rooms that connect to it; we seal off the work area and keep dust under control. For a full second storey, most families move out for the roof-off and framing stage, roughly two to three months, and return once the house is weathertight.' },
      { q: 'Should we build up or build back?', a: 'Building up adds space on the same footprint and keeps your yard. Building back is less disruptive and better for main-floor space, such as a larger kitchen or family room. Zoning, your foundation and your budget usually decide it, and our guide on second-storey versus rear additions walks through the trade-offs.' },
      { q: 'Will the addition match the existing house?', a: 'That’s the goal, unless you want a deliberate contrast. We source matching brick, stone or siding where it’s still available, line up floor heights and rooflines, and carry the trim details through so the addition looks original.' },
      { q: 'Can my foundation support a second storey?', a: 'Often, but it has to be confirmed. Our structural engineer reviews the existing footings and framing early. Some houses need reinforcement or new footings, and we price that before you commit to design.', cta: 'Book a structural assessment' },
      { q: 'Do you handle the permit?', a: 'Yes. We prepare and submit the application, respond to the plans examiner’s comments and book every inspection. If the design needs a minor variance, we prepare that application and represent the project at the Committee of Adjustment.' },
      { q: 'How much does an addition cost?', a: 'It depends far more on structure, foundations and the tie-in to the existing house than on square footage alone. We price from engineered drawings after a site visit, so the number reflects your house rather than an average.', cta: 'Request a consultation' },
    ],
    articles: ['second-story-vs-rear-addition-gta', 'how-long-does-home-addition-take-toronto', 'garage-conversion-living-space-toronto', 'attic-conversion-toronto-homes', 'building-through-gta-winter'],
  },
  {
    slug: 'home-renovations',
    name: 'Whole-home renovations',
    zh: '全屋翻新',
    short: 'Gut renovations and layout changes for houses that have good bones and the wrong floor plan.',
    title: 'Whole-Home Renovations in Toronto and York Region',
    description: 'Whole-home and gut renovations across the GTA: new layouts, structural changes, updated wiring and plumbing, and finishes, managed by one general contractor.',
    image: lakeFurnished,
    imageAlt: 'Furnished open living and dining area after a whole-home renovation, with a window wall onto the trees',
    imageIsProject: true,
    introImage: { src: introMainFloor, alt: 'Main floor with a curved open stair and wide-plank flooring', caption: 'Main floor of our Toronto whole-home renovation.' },
    band: { src: torKitchen, alt: 'Charcoal and walnut kitchen at the centre of a whole-home renovation in Toronto', caption: 'Our whole-home renovation in Toronto.' },
    intro: [
      'A whole-home renovation is a chance to fix the things you can’t see as well as the ones you can: wiring that predates modern loads, galvanized supply pipes, missing insulation, a kitchen in the wrong place. Doing it all at once costs less than doing it room by room over ten years, because the walls only come open once.',
      'We’ve built and renovated whole houses, more than once and from the inside out, so we know how the pieces fit. We bring in the right specialist for each part of the job and run them as one crew: framers, electricians, plumbers, HVAC, drywall, tile, flooring and finish carpentry, in the right order and inspected at each stage.',
    ],
    includes: [
      { title: 'Layout changes', body: 'Removing or moving walls, including load-bearing walls with an engineered beam, to open up or reorganize the main floor.' },
      { title: 'Systems upgrades', body: 'Electrical service and wiring, plumbing supply and drains, and heating and cooling brought up to current standards while walls are open.' },
      { title: 'Insulation and air sealing', body: 'Exterior walls, attics and rim joists insulated properly, which often qualifies for provincial rebates.' },
      { title: 'Kitchens and bathrooms', body: 'Usually the centre of the project, designed together so the house works as one plan.' },
      { title: 'Finishes throughout', body: 'Flooring, trim, doors, stairs, lighting and paint, so the house feels new rather than patched.' },
      { title: 'Living arrangements', body: 'A clear plan for whether you can stay, which rooms stay usable, and for how long.' },
    ],
    price: 'The range is wide. A cosmetic refresh and a full gut with new wiring, plumbing and structure are very different projects. We price yours after walking the house, and tell you upfront what a house of its age tends to hide.',
    timeline: [
      { label: 'Design and selections', weeks: [4, 10] },
      { label: 'Permits', weeks: [6, 12] },
      { label: 'Construction', weeks: [14, 28] },
    ],
    know: [
      { title: 'Open walls change budgets', body: 'Older GTA homes can hide knob-and-tube wiring, galvanized pipes, asbestos in plaster or vermiculite, and undersized beams. We price a contingency for it and tell you what we find before we fix it.' },
      { title: 'Permits aren’t optional', body: 'Structural, plumbing and HVAC changes need a building permit in every GTA municipality. Unpermitted work surfaces at resale and in insurance claims.' },
      { title: 'Order early', body: 'Windows, cabinetry and some flooring have lead times of 6 to 12 weeks. Making those choices before demolition keeps the job moving.' },
    ],
    faqs: [
      { q: 'Can we stay in the house?', a: 'For a full gut renovation, no; it isn’t safe or practical with services disconnected. For a phased renovation, often yes. We plan the phases so you keep a working kitchen or bathroom for as long as possible, and tell you upfront which weeks you’ll need to be elsewhere.' },
      { q: 'What if you find problems behind the walls?', a: 'We stop, show you, explain the options and price them before doing any extra work. Nothing is added to your bill without your written approval, and for older houses we discuss a contingency from the start.' },
      { q: 'Do you use subcontractors?', a: 'Yes, for licensed trades like electrical, plumbing and gas, and for specialists like stone and tile, because the best results come from people who do one trade every day. Our project manager schedules and supervises every trade, and we stand behind all of their work.' },
      { q: 'Can you work with my designer?', a: 'Yes. We regularly build from designers’ and architects’ drawings and review them early for cost, sequencing and buildability. If you don’t have a designer, we can bring one in.' },
      { q: 'Will a renovation qualify for rebates?', a: 'Insulation, air sealing, windows and heat pumps often qualify for Ontario’s Home Renovation Savings Program, and some upgrades need an energy assessment before work starts. We flag eligible items during planning and itemize them on your quote so claiming is straightforward.' },
      { q: 'Where do we start?', a: 'With a site visit. We walk the house with you, look at the structure and mechanicals, talk through priorities and budget, and then outline the scope and next steps in writing.', cta: 'Book a site visit' },
    ],
    articles: ['renovate-add-or-rebuild', 'removing-a-load-bearing-wall', 'older-home-surprises', 'ontario-home-renovation-rebates', 'heat-pumps-older-gta-homes', 'aging-in-place-renovation-gta'],
  },
  {
    slug: 'kitchen-renovations',
    name: 'Kitchen renovations',
    zh: '厨房装修',
    short: 'Kitchens planned around how you cook, including wok and second kitchens with ventilation that works.',
    title: 'Kitchen Renovations in Toronto, Markham and Richmond Hill',
    description: 'Kitchen renovations across the GTA: layout, custom cabinetry, stone, lighting, ventilation and wok kitchens. See real EZU kitchens and typical costs.',
    image: eto1,
    imageAlt: 'White shaker kitchen with quartz waterfall island and white oak hood, Etobicoke',
    imageIsProject: true,
    introImage: { src: introRhKitchen, alt: 'White kitchen with tall cabinetry and a long island with a dark stone top', caption: 'Our Richmond Hill kitchen renovation.' },
    band: { src: bandVaughanKitchen, alt: 'Kitchen with glass-front upper cabinets, marble island and stone range wall', caption: 'Kitchen in our Vaughan custom home.' },
    intro: [
      'A kitchen is the most expensive room per square foot in a house and the one used most, so the layout matters more than the finishes. We start with how you cook and who is in the room: where the groceries land, where things are washed, prepped and cooked, where children do homework, and how much heat and smoke the cooking produces.',
      'Then we build it: demolition, any wall or plumbing changes, electrical and lighting, cabinetry, stone, tile, ventilation and appliances, by trades who install kitchens every week.',
    ],
    includes: [
      { title: 'Layout and plan', body: 'Clearances, work zones, storage and seating worked out to scale before anything is ordered.' },
      { title: 'Cabinetry', body: 'Custom or semi-custom cabinetry, including full-height pantry walls, integrated appliance panels and interior lighting.' },
      { title: 'Stone and backsplash', body: 'Quartz, porcelain slab or natural stone, including full-height slab backsplashes and waterfall islands.' },
      { title: 'Ventilation', body: 'Hoods sized for real cooking and ducted outside, with make-up air where the code requires it.' },
      { title: 'Wok and second kitchens', body: 'A separate high-heat cooking room or spice kitchen with its own exhaust, so the main kitchen stays clean.' },
      { title: 'Lighting and electrical', body: 'Dedicated circuits, under-cabinet and interior lighting, and enough outlets in the right places.' },
    ],
    price: 'Layout changes drive kitchen budgets more than anything: moving plumbing, gas or walls costs far more than keeping them. After that come cabinetry, stone and appliances, where the range between options is very wide.',
    timeline: [
      { label: 'Design and selections', weeks: [3, 6] },
      { label: 'Cabinet lead time', weeks: [4, 8] },
      { label: 'On site', weeks: [5, 9] },
    ],
    know: [
      { title: 'Cabinets set the schedule', body: 'Cabinetry is usually the longest lead item. We finalize the cabinet drawings early and do demolition and rough-in while it’s being made.' },
      { title: 'Big hoods need make-up air', body: 'High-capacity range hoods can depressurize a house and pull exhaust from gas appliances. Where the code requires it, we add make-up air that’s interlocked with the hood.' },
      { title: 'A permit may be needed', body: 'A cosmetic kitchen usually doesn’t need a building permit. Removing a wall, moving plumbing or adding a gas line does.' },
    ],
    faqs: [
      { q: 'How long will we be without a kitchen?', a: 'Usually five to nine weeks on site, depending on layout changes and cabinet lead times. We can set up a temporary sink and counter elsewhere in the house so you can still make coffee and wash dishes.' },
      { q: 'Can you build a wok kitchen?', a: 'Yes. A wok kitchen or spice kitchen needs its own ventilation plan: a high-capacity hood ducted outside, fire-resistant finishes, and make-up air where the code requires it. Our wok kitchen guide covers the details, and we can plan it alongside the main kitchen.' },
      { q: 'Do you supply the cabinets, or can we buy our own?', a: 'Either. We work with cabinet makers we trust, and we also install cabinetry clients source themselves, provided we review the drawings and site measurements before the order is placed.' },
      { q: 'Quartz or natural stone?', a: 'Quartz is more forgiving day to day and resists stains. Natural stone like marble or quartzite has a depth quartz can’t replicate but needs sealing and care. We show you full slabs of both before you choose.' },
      { q: 'Can you move the sink, the range or a wall?', a: 'Usually, yes. Moving plumbing, gas or a load-bearing wall adds cost and sometimes a permit, so we confirm what’s behind the walls and price each option before you commit.' },
      { q: 'Do you help with design?', a: 'Yes. We plan the layout with you around how you cook and use the room, then work through cabinetry, counters, lighting and appliances with our cabinet and stone partners.', cta: 'Start your kitchen consultation' },
    ],
    articles: ['kitchen-renovation-cost-gta', 'wok-kitchen-ventilation', 'best-kitchen-layouts-gta-homes', 'removing-a-load-bearing-wall', 'condo-renovation-toronto-rules'],
  },
  {
    slug: 'bathroom-renovations',
    name: 'Bathroom renovations',
    zh: '浴室装修',
    short: 'Bathrooms waterproofed properly, ventilated properly and finished to last.',
    title: 'Bathroom Renovations in Toronto and York Region',
    description: 'Bathroom renovations across the GTA: waterproofed curbless showers, heated floors, custom vanities and proper ventilation. What’s included and how it works.',
    image: condoBath,
    imageAlt: 'Renovated bathroom with shaker vanity, marble-look quartz top, black fixtures and walnut slat wall',
    imageIsProject: true,
    introImage: { src: introTub, alt: 'Bathroom with a freestanding tub and marble-look walls' },
    band: { src: torEnsuite, alt: 'Ensuite with a floating wood double vanity and backlit mirrors', caption: 'Ensuite in our Toronto whole-home renovation.' },
    intro: [
      'Most of what makes a bathroom last is invisible once it’s finished: the waterproofing membrane behind the tile, the slope of the shower floor, the size of the exhaust fan and where it vents. Those are the parts we spend the most care on, because they’re the most expensive to redo.',
      'The visible parts matter too: a vanity at the right height, tile laid out so cuts land where they should, niches where the bottles actually go, and lighting at the mirror rather than only overhead.',
    ],
    includes: [
      { title: 'Waterproofing', body: 'Sheet or liquid membranes on shower walls and floors, tested before tile goes on.' },
      { title: 'Showers', body: 'Curbless and low-curb walk-in showers with linear or point drains, niches and frameless glass.' },
      { title: 'Heated floors', body: 'Electric radiant heat under tile on its own thermostat.' },
      { title: 'Vanities and storage', body: 'Custom or furniture-style vanities, medicine cabinets and linen storage.' },
      { title: 'Ventilation', body: 'Exhaust fans sized to the room, ducted outside, on a timer or humidity control.' },
      { title: 'Accessibility', body: 'Blocking for grab bars, wider doors, and barrier-free showers for aging in place.' },
    ],
    price: 'Size, layout changes (moving the toilet or drain), tile and stone, glass and fixtures decide the price. We show you where the money goes before you choose.',
    timeline: [
      { label: 'Design and selections', weeks: [2, 4] },
      { label: 'Ordering', weeks: [2, 4] },
      { label: 'On site', weeks: [3, 5] },
    ],
    know: [
      { title: 'Tile isn’t waterproof', body: 'Grout and tile let water through. The membrane underneath does the work, so ask how it’s installed and whether it’s flood-tested.' },
      { title: 'Fans are often undersized', body: 'A fan that’s too small, or that vents into the attic, leads to mould. We size and duct fans properly.' },
      { title: 'Moving the toilet costs more', body: 'Relocating a toilet means moving a large drain. It’s possible, but it’s the single biggest cost driver in a bathroom layout change.' },
    ],
    faqs: [
      { q: 'How long does a bathroom renovation take?', a: 'Three to five weeks on site for most bathrooms, once selections are made and long-lead items like vanities and custom glass have arrived. We order early so the room never sits half finished waiting on a delivery.' },
      { q: 'Is a curbless shower worth it?', a: 'For a primary bathroom, usually yes. It looks clean, it’s easier to clean, and it works at every stage of life. It needs careful floor framing and waterproofing, which are built into the price.' },
      { q: 'Do I need a permit for a bathroom?', a: 'Replacing fixtures in the same location usually doesn’t. Adding a new bathroom, moving drains or changing walls generally does, and we handle the application and inspections when it’s needed.' },
      { q: 'How do you prevent leaks and mould?', a: 'With a continuous waterproofing membrane behind the tile, properly sloped floors, and an exhaust fan sized for the room and ducted outdoors. These are the parts you never see, and the ones we take the most care over.' },
      { q: 'Can you add heated floors?', a: 'Yes. Electric radiant heat under tile is affordable to install during a renovation and runs on its own thermostat. It’s one of the most appreciated upgrades in a primary bathroom.' },
      { q: 'Do you renovate condo bathrooms?', a: 'Yes. Condo work involves building management approval, elevator bookings and restricted working hours, and we plan around all of them from the start.', cta: 'Tell us about your bathroom' },
    ],
    articles: ['bathroom-renovation-cost-gta', 'master-bathroom-renovation-features-gta', 'multigenerational-home-design-gta', 'aging-in-place-renovation-gta', 'condo-renovation-toronto-rules'],
  },
  {
    slug: 'basement-renovations',
    name: 'Basements and second suites',
    zh: '地下室装修与合法出租单元',
    short: 'Finished basements and legal second units, with waterproofing, egress and fire separation done right.',
    title: 'Basement Renovations and Legal Second Suites in the GTA',
    description: 'Basement finishing, underpinning and legal second suites across Toronto, Markham, Richmond Hill and Vaughan. Egress, fire separation, permits and typical costs.',
    image: lakeAfterLower,
    imageAlt: 'Finished lower-level family room with light plank flooring',
    imageIsProject: true,
    introImage: { src: introBasementStairs, alt: 'Finished basement with a new stair, pot lights and vinyl plank flooring' },
    band: { src: basementFinished, alt: 'Finished basement with light walls, vinyl plank flooring and a laundry area' },
    intro: [
      'A basement is either the most affordable square footage in your house or the most expensive mistake, and the difference is moisture. We start by finding where water gets in, or could, and deal with it before a single stud goes up.',
      'From there it depends on the goal. A family room or gym needs good insulation, lighting and ceiling height. A legal second unit needs more: a separate entrance, egress windows, fire separation, interconnected alarms and a building permit. Since 2022, Ontario allows a second and third unit on most residential lots as of right, which makes a legal suite one of the most useful renovations you can do.',
    ],
    includes: [
      { title: 'Moisture assessment', body: 'Grading, downspouts, foundation cracks, sump and drainage checked first, with interior or exterior waterproofing if needed.' },
      { title: 'Insulation and framing', body: 'Foundation walls insulated and framed to keep the basement dry and warm, with moisture-tolerant materials at the floor.' },
      { title: 'Legal second units', body: 'Separate entrance, egress windows, fire separation, smoke and CO alarms, and the permit, for a unit you can rent or give to family.' },
      { title: 'Ceiling height', body: 'Underpinning or bench footings where the existing height is too low for living space.' },
      { title: 'Bathrooms and kitchens', body: 'Below-grade plumbing, including ejector pumps where drains can’t run by gravity.' },
      { title: 'Finishes', body: 'Flooring, drywall, lighting and millwork that make it feel like part of the house.' },
    ],
    price: 'Water, ceiling height and whether the space becomes a legal second unit decide most of the budget. Underpinning, if the basement is too low, is a separate and significant cost.',
    timeline: [
      { label: 'Design and drawings', weeks: [3, 6] },
      { label: 'Permit', weeks: [4, 10] },
      { label: 'Construction', weeks: [8, 14] },
    ],
    know: [
      { title: 'Second and third units are allowed', body: 'Provincial rules let most detached, semi-detached and townhouses in urban areas have up to three units, and those units are exempt from development charges.' },
      { title: 'Egress is non-negotiable', body: 'Every bedroom in a basement needs a window or door that meets the code’s size and sill-height rules. That often means cutting the foundation and adding a window well.' },
      { title: 'Low ceilings have options', body: 'Underpinning lowers the floor by deepening the footings. A bench footing is cheaper but uses floor space. Our guide explains when each makes sense.' },
    ],
    faqs: [
      { q: 'Do I need a permit to finish my basement?', a: 'In most GTA municipalities, yes, for new walls, plumbing or a second unit. A permit protects you at resale and makes insurance claims straightforward, and we prepare and submit it for you.' },
      { q: 'Can I legalize an existing basement apartment?', a: 'Usually. We assess what’s there against the building and fire codes, then quote the upgrades needed: typically egress windows, fire separation, interconnected alarms and sometimes electrical.', cta: 'Book a legalization assessment' },
      { q: 'How high does the ceiling need to be?', a: 'For a second unit in an existing house, the code’s compliance alternatives generally allow about 1.95 m clear under beams and ducts; new construction requires more. We measure before we design, and if the basement is too low, underpinning or a bench footing can add height.' },
      { q: 'What about a separate entrance?', a: 'Most legal suites need one. A side-yard walk-down with a new door in the foundation is common. It has to meet setback and drainage rules, which we check during design.' },
      { q: 'What if my basement gets damp?', a: 'We find and fix the source first, whether that’s grading, downspouts, foundation cracks or a failed waterproofing membrane. Finishing over moisture is the most expensive mistake a basement can make.' },
      { q: 'Does a legal suite pay for itself?', a: 'Often, over time. It depends on construction cost and local rents. Our basement cost guide walks through the numbers, and we can price your basement after a site visit.', cta: 'Get a basement quote' },
    ],
    articles: ['basement-renovation-cost-gta', 'financing-a-secondary-suite', 'toronto-basement-flooding-subsidy', 'how-many-units-on-your-lot-gta-2026', 'toronto-secondary-suite-legalization-guide', 'additional-residential-units-york-region', 'basement-underpinning-vs-bench-footing'],
  },
  {
    slug: 'laneway-garden-suites',
    name: 'Laneway and garden suites',
    zh: '后巷屋与花园屋',
    short: 'Detached backyard homes for family or rental income, from eligibility check to occupancy.',
    title: 'Laneway and Garden Suite Builder in Toronto and the GTA',
    description: 'Design and construction of laneway suites, garden suites and other detached additional residential units in Toronto, Markham, Richmond Hill and Vaughan.',
    image: suiteBackyard,
    imageAlt: 'Detached two-storey backyard suite behind a house, across a lawn',
    imageIsProject: false,
    introImage: { src: introBackyard, alt: 'Compact loader working in a narrow backyard' },
    band: { src: suiteModern, alt: 'Compact modern backyard suite with dark vertical siding and a small deck' },
    intro: [
      'A laneway or garden suite is a small, complete house in your backyard. It’s also a full construction project: foundations, framing, envelope, mechanicals and finishes, built in a tight space, often with limited access and with services run from the main house or the lane.',
      'Toronto has permitted laneway suites since 2018 and garden suites since 2022, and the province now allows one detached unit on most urban residential lots. We check your lot’s eligibility, take the suite through design and permits, and build it.',
    ],
    includes: [
      { title: 'Eligibility review', body: 'Lot size, rear yard depth, separation from the house, fire access and trees checked against current rules.' },
      { title: 'Design and permits', body: 'Architectural and structural drawings, the building permit and any variance if the lot needs one.' },
      { title: 'Servicing', body: 'Water, sewer and power run from the main house or the street, sized for a separate dwelling.' },
      { title: 'Construction', body: 'Foundations, framing, envelope and finishes, planned around tight access and neighbours on three sides.' },
    ],
    price: 'Every suite is priced from its design and its lot. Service runs from the main house, access for equipment, protected trees and the finishes you choose all move the number.',
    timeline: [
      { label: 'Feasibility and design', weeks: [8, 16] },
      { label: 'Permits', weeks: [10, 20] },
      { label: 'Construction', weeks: [24, 36] },
    ],
    know: [
      { title: 'Fire access matters', body: 'Emergency access to the suite, through the lane or along a side path, is one of the first things a plans examiner checks.' },
      { title: 'Development charges are waived', body: 'Under provincial rules, an additional unit in an accessory building on an eligible lot is exempt from development charges.' },
      { title: 'Rules differ by city', body: 'Toronto’s laneway and garden suite by-laws are the most detailed. Markham, Richmond Hill and Vaughan permit accessory units under their own zoning rules.' },
    ],
    faqs: [
      { q: 'Is my lot eligible?', a: 'It depends on lot depth, distance from the house, firefighter access and protected trees. Send us your address and a survey if you have one, and we’ll check eligibility before you pay for design.', cta: 'Check my lot' },
      { q: 'Can I sever it and sell it separately?', a: 'Generally no. Laneway and garden suites stay on the same lot as the main house and can’t be sold on their own.' },
      { q: 'Can I rent it out?', a: 'Yes. Many owners build one for rental income; others build for family, such as aging parents or adult children who want independence close to home.' },
      { q: 'How are services connected?', a: 'Water, sewer and power usually run from the main house, sometimes with upgraded capacity. The length and route of those runs is one of the biggest cost factors, so we plan them early.' },
      { q: 'Are development charges waived?', a: 'Under provincial rules, an additional unit in an accessory building on an eligible lot is exempt from development charges. We confirm the current requirements with the municipality during design.' },
      { q: 'How long does it take?', a: 'Typically 8 to 16 weeks of design, 10 to 20 weeks for permits, and six to nine months of construction. We give you a realistic schedule once we’ve reviewed your lot.' },
    ],
    articles: ['how-many-units-on-your-lot-gta-2026', 'laneway-suite-cost-toronto', 'financing-a-secondary-suite', 'basement-suite-vs-laneway-suite-toronto', 'additional-residential-units-york-region', 'multigenerational-home-design-gta'],
  },
  {
    slug: 'trades',
    name: 'Trades and repairs',
    zh: '各工种施工与维修',
    short: 'Drywall, flooring, tile, painting, interlock and more, done by the specialists we trust.',
    title: 'Drywall, Flooring, Tile, Painting and Interlock in the GTA',
    description: 'Drywall, flooring, tile, painting, interlock, framing, windows, siding and roofing across the GTA, coordinated and supervised by EZU Construction.',
    image: tileSetting,
    imageAlt: 'Tile setter laying large-format porcelain tile on thinset',
    imageIsProject: false,
    introImage: { src: introDrywall, alt: 'Drywall being taped and finished in a bright room' },
    band: { src: bandInterlock, alt: 'Interlocking stone driveway and walkway' },
    intro: [
      'Not every job is a renovation. Sometimes you need a floor replaced, a ceiling repaired after a leak, a bathroom retiled or a walkway rebuilt. Over years of building and renovating whole houses we’ve worked alongside a lot of tradespeople, and we keep working with the best of them.',
      'When you call us for a single trade, you get that specialist, scheduled and supervised by us, with one point of contact and one invoice. Electrical, plumbing and gas work is always done by licensed trades, as Ontario requires.',
    ],
    includes: [
      { title: 'Drywall', body: 'New board, taping and finishing to a level 4 or level 5 finish, ceiling repairs, texture removal and water-damage patches.' },
      { title: 'Flooring', body: 'Hardwood, engineered wood, luxury vinyl and tile, including subfloor repair, levelling and stair cladding.' },
      { title: 'Tile', body: 'Floors, walls, backsplashes and showers, including large-format porcelain and waterproofed wet areas.' },
      { title: 'Painting', body: 'Interior and exterior painting, cabinet refinishing and trim, with proper surface preparation.' },
      { title: 'Interlocking and hardscape', body: 'Driveways, walkways, patios and steps on a compacted granular base, graded to drain away from the house.' },
      { title: 'Framing and structural', body: 'Walls, beams, headers and floor systems, built to engineered drawings where required.' },
      { title: 'Electrical, plumbing and HVAC', body: 'Panel upgrades, new circuits, fixture moves, heat pumps and ductwork, by licensed electricians, plumbers and gas technicians.' },
      { title: 'Insulation', body: 'Spray foam, batt and blown insulation for attics, walls and rim joists, often eligible for rebates.' },
      { title: 'Windows and doors', body: 'Replacement windows, entry doors and patio doors, installed and sealed to keep water out.' },
      { title: 'Siding and roofing', body: 'Fibre cement, vinyl and engineered wood siding; shingle and metal roofing; soffit, fascia and eavestroughs.' },
    ],
    price: 'Single-trade work is priced after a site visit. Send us photos and we can usually tell you what to expect before we come out.',
    know: [
      { title: 'Licensed where it counts', body: 'In Ontario, electrical work must be done by an ESA-licensed electrical contractor and gas work by a TSSA-registered technician. We only use licensed trades for both.' },
      { title: 'Small jobs, same standard', body: 'A patch, a floor or a walkway gets the same supervision and clean-up as a full renovation.' },
      { title: 'Bundle when you can', body: 'If you’re planning several small jobs, doing them in one visit saves on mobilization and gets them finished in the right order.' },
    ],
    faqs: [
      { q: 'Is there a minimum job size?', a: 'We take on smaller jobs when we can schedule them well alongside larger projects. Call or send photos and we’ll confirm whether the work is a good fit and when we can start.', cta: 'Send us photos' },
      { q: 'Can you match existing flooring or drywall texture?', a: 'Usually. Matching older flooring depends on what’s still manufactured, while drywall textures and paint can almost always be matched so repairs disappear.' },
      { q: 'Do you repair water damage?', a: 'Yes, once the source of the leak is fixed. We open up, dry out, replace and refinish, and we can work directly with your insurance adjuster.' },
      { q: 'Who does the work?', a: 'Specialists from our long-standing network: flooring installers, tile setters, painters, drywall finishers and interlock crews, scheduled and supervised by our team. Electrical, plumbing and gas work is always done by licensed trades.' },
      { q: 'Is smaller work covered by a warranty?', a: 'Yes. Every job, large or small, is covered by our written workmanship warranty.' },
      { q: 'Can you combine several trades in one visit?', a: 'Yes, and it’s usually more efficient. Flooring, paint and trim, for example, can be sequenced back to back under one invoice.' },
    ],
    articles: ['older-home-surprises', 'how-to-compare-renovation-quotes', 'do-i-need-a-building-permit-ontario', 'window-door-replacement-cost-gta'],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
