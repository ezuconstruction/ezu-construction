import type { ImageMetadata } from 'astro';
import vaughanKitchen from '../assets/projects/vaughan-custom-home-kitchen.jpg';
import vaughanLiving from '../assets/projects/vaughan-custom-home-living.jpg';
import vaughanOffice from '../assets/projects/vaughan-custom-home-office.jpg';
import eto1 from '../assets/projects/etobicoke-kitchen-1.jpg';
import eto2 from '../assets/projects/etobicoke-kitchen-2.jpg';
import eto3 from '../assets/projects/etobicoke-kitchen-3.jpg';
import eto4 from '../assets/projects/etobicoke-kitchen-4.jpg';
import rhBefore from '../assets/projects/richmond-hill-kitchen-before.jpg';
import rhAfter from '../assets/projects/richmond-hill-kitchen-after.jpg';
import torBefore from '../assets/projects/toronto-kitchen-before.jpg';
import torAfter from '../assets/projects/toronto-kitchen-after.jpg';
import condoBefore from '../assets/projects/condo-kitchen-before.jpg';
import condoAfter from '../assets/projects/condo-kitchen-after.jpg';
import condoBath from '../assets/projects/condo-bathroom.jpg';
import customExterior from '../assets/projects/custom-home-exterior.jpg';
import lakeBeforeLower from '../assets/projects/lakeside-before-lower.jpg';
import lakeBeforeLiving from '../assets/projects/lakeside-before-living.jpg';
import lakeAfterLower from '../assets/projects/lakeside-after-lower.jpg';
import lakeFurnished from '../assets/projects/lakeside-living-furnished.jpg';
import lakeExterior from '../assets/projects/lakeside-exterior.jpg';
import torMainFloor from '../assets/projects/toronto-house-main-floor.jpg';
import torStair from '../assets/projects/toronto-house-stair.jpg';
import torFamily from '../assets/projects/toronto-house-family-room.jpg';
import torEntry from '../assets/projects/toronto-house-entry.jpg';
import torUpperHall from '../assets/projects/toronto-house-upper-hall.jpg';
import torHallway from '../assets/projects/toronto-house-hallway.jpg';
import torEnsuite from '../assets/projects/toronto-house-ensuite.jpg';
import torPowder from '../assets/projects/toronto-house-powder.jpg';
import rhModernFront from '../assets/projects/richmond-hill-modern-front.jpg';
import rhModernWinter from '../assets/projects/richmond-hill-modern-winter.jpg';

type Shot = { src: ImageMetadata; alt: string; caption?: string };

export interface Project {
  slug: string;
  title: string;
  service: string; // service slug
  type: string;
  location: string;
  city: string; // matches a location slug where one exists
  year: string;
  summary: string;
  story: string[];
  scope: string[];
  facts: { label: string; value: string }[];
  cover: Shot;
  gallery: Shot[];
  galleryTitle?: string;
  pairs?: { before: Shot; after: Shot; note: string }[];
}

export const projects: Project[] = [
  {
    slug: 'custom-home-construction-vaughan',
    title: 'A custom home in Vaughan',
    service: 'custom-homes',
    type: 'New custom home',
    location: 'Vaughan, Ontario',
    city: 'vaughan',
    year: '2025',
    summary: 'A detached home built from the foundation up, with coffered ceilings, book-matched stone and millwork designed for the rooms it sits in.',
    story: [
      'This house was built new on its lot, so every room could be planned around how the family actually lives rather than adapted from an existing floor plan. The brief was a traditional, finely detailed interior that would still feel bright: white painted millwork, natural stone, and ceilings with enough height to carry layered trim.',
      'The kitchen is the centre of the main floor. Glass-front upper cabinets run to the ceiling, the range wall is clad in a single book-matched slab with a brass-banded hood, and the island carries a marble top over painted panelled cabinetry.',
      'In the living room and the office the same language continues: stone fireplace walls with linear fireplaces, built-in shelving on either side, and coffered or tray ceilings with recessed lighting set into the coffers rather than scattered across a flat ceiling.',
    ],
    scope: [
      'Construction of a new detached home, foundation to finishes',
      'Coffered and tray ceilings with integrated recessed lighting',
      'Custom kitchen with full-height cabinetry, stone slab backsplash and feature hood',
      'Book-matched stone fireplace walls with linear fireplaces',
      'Built-in shelving and millwork throughout the main floor',
      'Hardwood flooring throughout the main living areas',
    ],
    facts: [
      { label: 'Project', value: 'New custom home' },
      { label: 'Location', value: 'Vaughan, ON' },
      { label: 'Completed', value: '2025' },
      { label: 'Home', value: 'Detached, two storeys' },
      { label: 'Style', value: 'Transitional' },
    ],
    cover: { src: vaughanKitchen, alt: 'White kitchen with glass-front upper cabinets running to a coffered ceiling, marble island and stone slab range wall' },
    gallery: [
      { src: vaughanLiving, alt: 'Living room with marble fireplace wall and built-in shelving', caption: 'Living room. The stone wall frames a linear fireplace, with open shelving and closed storage on either side.' },
      { src: vaughanKitchen, alt: 'White kitchen with glass-front upper cabinets, marble island and stone slab range wall with brass hood', caption: 'Kitchen. Glass-front uppers run to the coffered ceiling above a marble-topped island.' },
      { src: vaughanOffice, alt: 'Home office with coffered ceiling, marble fireplace wall and built-in cabinets', caption: 'Office with a coffered ceiling and a second stone fireplace wall.' },
    ],
  },
  {
    slug: 'modern-custom-home-richmond-hill',
    title: 'A modern custom home in Richmond Hill',
    service: 'custom-homes',
    type: 'New custom home',
    location: 'Richmond Hill, Ontario',
    city: 'richmond-hill',
    year: '2023',
    summary: 'A contemporary two-storey home with a layered panel facade, floor-to-ceiling glazing and a glass-railed balcony across the front.',
    story: [
      'A contemporary home built new on an established Richmond Hill street. The design sets clean, layered volumes against the brick and stone of its neighbours: warm large-format panels at the base, crisp white surfaces above, and a charcoal band that wraps the second floor.',
      'Floor-to-ceiling black-framed windows bring daylight deep into the main living spaces, and a glass-railed balcony runs across the front of the upper floor. At grade, wide front steps with glass railings lead to the entry beside a double garage with a black glass-panel door.',
      'Infill homes like this are planned around the lot from the outset, including setbacks, height limits and protected trees, so the house sits comfortably on its street as well as serving the family who lives in it.',
    ],
    scope: [
      'Construction of a new two-storey detached home',
      'Large-format panel cladding with contrasting white and charcoal volumes',
      'Floor-to-ceiling black-framed windows',
      'Second-floor balcony with glass railing',
      'Front steps with glass railings and an interlocking driveway',
      'Double garage with a glass-panel door',
    ],
    facts: [
      { label: 'Project', value: 'New custom home' },
      { label: 'Location', value: 'Richmond Hill, ON' },
      { label: 'Completed', value: '2023' },
      { label: 'Home', value: 'Detached, two storeys' },
      { label: 'Style', value: 'Contemporary' },
    ],
    cover: { src: rhModernWinter, alt: 'Contemporary two-storey home in winter, with beige panel cladding, black-framed windows, a glass balcony and a double garage' },
    gallery: [
      { src: rhModernFront, alt: 'Front of the modern custom home in summer, with landscaping and an interlocking driveway', caption: 'The front elevation in summer, with the landscaping complete.' },
    ],
  },
  {
    slug: 'luxury-kitchen-renovation-toronto',
    title: 'A whole-home renovation in Toronto',
    service: 'home-renovations',
    type: 'Whole-home renovation',
    location: 'Toronto, Ontario',
    city: 'toronto',
    year: '2025',
    summary: 'A house renovated throughout as one design: a charcoal and walnut kitchen, a curved open stair, wide-plank floors and refined bathrooms.',
    story: [
      'The family loved the house but not its interior: a dated maple kitchen, tile floors that broke the main floor into separate zones, and finishes from room to room that never quite matched. The brief was a home that felt cohesive from the front door to the bedrooms.',
      'The kitchen became the centrepiece. Cabinetry runs floor to ceiling in matte charcoal with brass pulls, broken by a band of fluted walnut that ties the wall units to the hood, and the island pairs a stone-topped working block with a long walnut waterfall table where the family sits.',
      'Beyond the kitchen, wide-plank engineered hardwood runs through the main floor, and a curved open stair with wrought-iron balusters and a stained rail rises to a gallery landing. Upstairs, the ensuite has a floating double vanity and backlit mirrors, and the powder room is finished with a dark textured feature wall.',
      'Lighting was planned room by room, with pot lights for general light and sculptural pendants over the stair and landing. The result is a house that reads as one design, with the same materials and level of detail from the entry doors to the ensuite.',
    ],
    scope: [
      'Full demolition of existing cabinets, counters and tile floor',
      'Full-height flat-panel cabinetry with integrated wall ovens',
      'Fluted walnut detailing and a framed stone range wall',
      'Two-part island: stone prep block and walnut waterfall table',
      'Wide-plank engineered hardwood through the main floor',
      'New lighting plan with pot lights and feature pendants',
      'Curved open staircase with wrought-iron balusters',
      'Ensuite and powder room renovations',
    ],
    facts: [
      { label: 'Project', value: 'Whole-home renovation' },
      { label: 'Location', value: 'Toronto, ON' },
      { label: 'Completed', value: '2025' },
      { label: 'Kitchen', value: 'About 400 sq ft' },
    ],
    cover: { src: torAfter, alt: 'Charcoal kitchen with fluted walnut band, walnut waterfall island and geometric brass pendants' },
    galleryTitle: 'Throughout the house',
    gallery: [
      { src: torMainFloor, alt: 'Main floor with a curved open staircase and wide-plank flooring', caption: 'Main floor, with a curved open stair and wide-plank flooring throughout.' },
      { src: torStair, alt: 'Curved staircase with wrought-iron balusters and a dark stained rail', caption: 'Curved stair with wrought-iron balusters and a stained rail.' },
      { src: torFamily, alt: 'Two-storey family room seen from the upper landing, with tall windows and a lantern pendant', caption: 'Two-storey family room, seen from the upper landing.' },
      { src: torEntry, alt: 'Double wood-grain entry doors set into a stone facade', caption: 'Double entry doors in a stone surround.' },
      { src: torUpperHall, alt: 'Upper hallway with a gallery railing and a cascading pendant light', caption: 'Upper hall and gallery landing.' },
      { src: torEnsuite, alt: 'Ensuite with a floating wood double vanity and backlit mirrors', caption: 'Ensuite with a floating double vanity and backlit mirrors.' },
      { src: torHallway, alt: 'Upper hallway with a sculptural pendant over the stairwell', caption: 'Upper hallway, with a sculptural pendant over the stairwell.' },
      { src: torPowder, alt: 'Powder room with a dark textured feature wall and wall-hung toilet', caption: 'Powder room with a textured feature wall.' },
    ],
    pairs: [
      {
        before: { src: torBefore, alt: 'Original kitchen with maple shaker cabinets, curved island and beige floor tile' },
        after: { src: torAfter, alt: 'Renovated kitchen with charcoal cabinets and walnut island' },
        note: 'Same room, same footprint. The layout stayed; the storage, island and finishes didn’t.',
      },
    ],
  },
  {
    slug: 'kitchen-renovation-etobicoke',
    title: 'A bright transitional kitchen in Etobicoke',
    service: 'kitchen-renovations',
    type: 'Kitchen renovation',
    location: 'Etobicoke, Toronto',
    city: 'toronto',
    year: '2023',
    summary: 'White shaker cabinetry, a quartz waterfall island and a white oak hood, with lighting built into the cabinets instead of added afterward.',
    story: [
      'The homeowners wanted a kitchen that felt calm and bright without being stark. The answer was a restrained palette, white painted shaker doors, marble-look quartz and brushed brass, warmed up with white oak in two places: the range hood and the open shelving.',
      'The quartz runs from the counters up the walls as a full-height backsplash, so there are no grout lines behind the cooktop or sink. The island is a single waterfall piece with the prep sink set into it, facing the room.',
      'Lighting was planned with the cabinetry rather than after it. The glass-front cabinets have interior lights, the shelving has lighting above it, and recessed pot lights handle general light. The result is a room that works at night as well as it does in daylight.',
    ],
    scope: [
      'Custom shaker cabinetry with glass-front display units',
      'Quartz counters with full-height quartz backsplash',
      'Waterfall island with integrated prep sink',
      'White oak range hood and floating shelves',
      'Interior cabinet lighting, under-shelf lighting and pot lights',
      'Brushed brass hardware and fixtures',
    ],
    facts: [
      { label: 'Project', value: 'Kitchen renovation' },
      { label: 'Location', value: 'Etobicoke, Toronto' },
      { label: 'Completed', value: '2023' },
      { label: 'Duration', value: '10 weeks' },
      { label: 'Area', value: 'About 300 sq ft' },
    ],
    cover: { src: eto1, alt: 'White shaker kitchen with marble-look quartz waterfall island, white oak hood and brass pendant lights' },
    gallery: [
      { src: eto1, alt: 'Full view of the white kitchen with waterfall island', caption: 'The island faces the room, with the prep sink set into a single waterfall piece of quartz.' },
      { src: eto2, alt: 'Cooktop wall with white oak hood and full-height quartz backsplash', caption: 'The quartz backsplash runs to the ceiling behind the cooktop. No grout lines to clean.' },
      { src: eto3, alt: 'Tall cabinetry wall with integrated storage and open shelving', caption: 'A full wall of storage with a lit display niche and open oak shelves.' },
      { src: eto4, alt: 'Glass-front cabinets with interior lighting above the counter', caption: 'Interior cabinet lighting was wired during rough-in, not added later.' },
    ],
  },
  {
    slug: 'kitchen-renovation-richmond-hill',
    title: 'Opening up a dark kitchen in Richmond Hill',
    service: 'kitchen-renovations',
    type: 'Kitchen renovation',
    location: 'Richmond Hill, Ontario',
    city: 'richmond-hill',
    year: '2024',
    summary: 'Dark cherry cabinets and black granite replaced with tall white cabinetry, a long island and a lighting plan that finally reaches the corners.',
    story: [
      'This kitchen had good bones and a good size, but dark cherry cabinets, black granite and dated pendants made it feel closed in. The family wanted it lighter and easier to keep tidy, without losing the generous storage they were used to.',
      'New white cabinetry runs taller than the original to add storage at the top, and integrated panels on the refrigerator keep the long wall calm. The island kept its central position and gained a dark stone top, which carries a little contrast through the room and hides daily wear better than a white surface would.',
      'The original hardwood was refinished rather than replaced. It was in good condition under the wear, and refinishing it saved budget for the cabinetry and lighting.',
    ],
    scope: [
      'Removal of existing cabinetry, counters and pendants',
      'Full-height white shaker-style cabinetry with integrated appliance panels',
      'Island with dark stone countertop',
      'New recessed lighting and pendants over the island',
      'Refinishing of the existing hardwood floor',
    ],
    facts: [
      { label: 'Project', value: 'Kitchen renovation' },
      { label: 'Location', value: 'Richmond Hill, ON' },
      { label: 'Completed', value: '2024' },
      { label: 'Duration', value: '5 weeks' },
      { label: 'Area', value: 'About 300 sq ft' },
    ],
    cover: { src: rhAfter, alt: 'White kitchen with tall cabinetry, a long island with dark stone top and refinished hardwood floor' },
    gallery: [],
    pairs: [
      {
        before: { src: rhBefore, alt: 'Original kitchen with dark cherry cabinets, black granite and cluttered counters' },
        after: { src: rhAfter, alt: 'Renovated kitchen with white cabinets and dark stone island top' },
        note: 'Dark cherry and black granite replaced with full-height white cabinetry and a stone-topped island.',
      },
    ],
  },
  {
    slug: 'custom-home-stone-and-stucco',
    title: 'A stone and stucco custom home in Richmond Hill',
    service: 'custom-homes',
    type: 'New custom home',
    location: 'Richmond Hill, Ontario',
    city: 'richmond-hill',
    year: '',
    summary: 'A two-storey infill home with an ashlar stone facade, arched dormers, a covered entry and a double garage under a projecting bay.',
    story: [
      'Infill houses like this one replace an older, smaller home on an established street, which means the design has to fit its lot, its setbacks and its neighbours as well as the family moving in.',
      'The front elevation pairs natural ashlar stone with smooth stucco bands, sills and surrounds, and the roofline breaks into two arched dormers so the second floor gets full-height windows without the house reading as a box. A covered porch on square columns shelters double wood entry doors with a transom, reached by curved flagstone steps.',
      'On the right, the garage sits beneath a projecting bay with a band of black-framed windows, and the wood-look garage doors pick up the warmth of the entry. Exterior lighting is mounted on the columns and stone returns rather than on the stucco, which keeps the face of the house clean.',
    ],
    scope: [
      'Construction of a new two-storey detached home',
      'Natural ashlar stone cladding with stucco bands, sills and surrounds',
      'Arched dormers with full-height second-floor windows',
      'Covered entry porch with double wood doors and transom',
      'Curved flagstone front steps and interlocking driveway',
      'Double garage with wood-look modern doors',
    ],
    facts: [
      { label: 'Project', value: 'New custom home' },
      { label: 'Location', value: 'Richmond Hill, ON' },
      { label: 'Home', value: 'Detached, two storeys' },
      { label: 'Facade', value: 'Natural stone and stucco' },
      { label: 'Garage', value: 'Double, under a projecting bay' },
    ],
    cover: { src: customExterior, alt: 'Two-storey custom home with ashlar stone facade, stucco trim, arched dormers, covered porch with wood double doors and a double garage' },
    gallery: [
      { src: customExterior, alt: 'Front elevation of the stone and stucco custom home', caption: 'Front elevation: ashlar stone, stucco detailing and arched dormers.' },
    ],
  },
  {
    slug: 'apartment-kitchen-renovation',
    title: 'A condo kitchen and bathroom, rebuilt',
    service: 'kitchen-renovations',
    type: 'Condo renovation',
    location: 'Burlington, Ontario',
    city: '',
    year: '2025',
    summary: 'A tired condo turned around: a high-gloss kitchen with a stone peninsula, and a bathroom with a walnut slat wall and black fixtures.',
    story: [
      'Condo kitchens are small, and every decision shows. This one had maple cabinets, a black laminate-look counter and tile that stopped short of the living area, so the kitchen felt like a separate box by the front door.',
      'The new kitchen uses flat high-gloss doors to bounce light around, a marble-look stone peninsula that wraps down to the floor, and the same stone on the backsplash. Vertical wood slat panels on either side frame the kitchen and hide the transition to the hallway.',
      'The bathroom follows the same palette so the unit reads as one renovation: a shaker vanity with a marble-look quartz top, matte black faucet and mirror frame, large-format floor tile, a frameless glass shower and a walnut slat wall behind the toilet.',
      'Condo work has its own rules: building management approval, elevator bookings, restricted working hours and noise limits. We plan the schedule around them from the start so the job doesn’t stall halfway.',
    ],
    scope: [
      'Removal of existing kitchen, bathroom finishes and floor tile',
      'High-gloss flat-panel cabinetry with integrated fridge',
      'Stone peninsula with waterfall end and matching backsplash',
      'Vertical wood slat feature panels in the kitchen and bathroom',
      'Bathroom vanity, quartz top, frameless glass shower and large-format tile',
      'Coordination with condo management, bookings and working hours',
    ],
    facts: [
      { label: 'Project', value: 'Condo kitchen and bathroom' },
      { label: 'Location', value: 'Burlington, ON' },
      { label: 'Completed', value: '2025' },
      { label: 'Duration', value: '6 weeks' },
      { label: 'Kitchen', value: 'About 250 sq ft' },
    ],
    cover: { src: condoAfter, alt: 'Condo kitchen with white high-gloss cabinets, marble-look stone peninsula and vertical wood slat panels' },
    gallery: [
      { src: condoBath, alt: 'Condo bathroom with shaker vanity, marble-look quartz top, black faucet and mirror, and a walnut slat wall', caption: 'Bathroom. Black fixtures and a walnut slat wall tie it to the kitchen.' },
    ],
    pairs: [
      {
        before: { src: condoBefore, alt: 'Original condo kitchen with maple cabinets, dark counter and tile floor' },
        after: { src: condoAfter, alt: 'Renovated condo kitchen with white cabinets and stone peninsula' },
        note: 'Flooring now runs continuously from the entry through the kitchen.',
      },
    ],
  },
  {
    slug: 'lakeside-bungalow-whole-home-renovation',
    title: 'A lakeside bungalow, renovated top to bottom',
    service: 'home-renovations',
    type: 'Whole-home renovation',
    location: 'Carrying Place, Ontario',
    city: '',
    year: '2024',
    summary: 'Closed-in rooms, worn carpet and low light replaced with an open main floor, new ceilings and lighting, and a usable lower level.',
    story: [
      'The bungalow had a beautiful lakeside setting and an interior that ignored it: small closed-in rooms, brown carpet, textured ceilings and windows that lit only the edges of each room.',
      'We stripped the interior and reworked the main floor into one open living and dining space, with new ceilings, recessed lighting and flooring throughout, so the large front window now lights the whole room. Downstairs, the lower level became a proper family room rather than a storage space with a sofa in it.',
      'Finishes were kept light and consistent from one level to the next, which makes the house feel larger than its footprint. Seen from the garden, the bungalow sits back among the trees, and the renovated interior finally makes the most of that setting.',
    ],
    scope: [
      'Interior demolition and reconfiguration of the main floor',
      'New drywall and ceilings with recessed LED lighting',
      'New flooring through the main and lower levels',
      'Lower-level family room renovation',
      'Interior painting throughout',
    ],
    facts: [
      { label: 'Project', value: 'Whole-home renovation' },
      { label: 'Location', value: 'Carrying Place, ON' },
      { label: 'Completed', value: '2024' },
      { label: 'Duration', value: '12 weeks' },
      { label: 'Home', value: 'Bungalow' },
    ],
    cover: { src: lakeFurnished, alt: 'Furnished open living and dining area with a large window onto the trees' },
    gallery: [
      { src: lakeExterior, alt: 'The bungalow seen across a wide lawn, with a screened gazebo among the trees', caption: 'The bungalow from the garden, with the screened gazebo.' },
    ],
    pairs: [
      {
        before: { src: lakeBeforeLiving, alt: 'Original living area with bare subfloor, beige walls and a single window' },
        after: { src: lakeFurnished, alt: 'Furnished open living and dining area with a large window onto the trees' },
        note: 'Closed-in rooms opened into one bright living and dining space.',
      },
      {
        before: { src: lakeBeforeLower, alt: 'Lower level with grey carpet, textured ceiling and a support post' },
        after: { src: lakeAfterLower, alt: 'Finished lower level family room with light flooring and a games table' },
        note: 'An unused lower level turned into a family games room.',
      },
    ],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
