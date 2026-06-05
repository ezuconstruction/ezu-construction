export interface LocationData {
  slug: string;
  name: string;
  region: string;
  description: string;
  localContext: string;
  nearbyProjects: { title: string; slug: string }[];
  latitude: string;
  longitude: string;
}

export const locationsData: LocationData[] = [
  {
    slug: "toronto",
    name: "Toronto",
    region: "City of Toronto",
    description: "Custom home builders and renovation contractors serving all Toronto neighbourhoods — from downtown condos to Annex century homes to North York bungalows.",
    localContext: "Toronto's housing stock ranges from Victorian-era semis and post-war bungalows to 1970s high-rise condos and new infill builds. Our team has hands-on experience with the structural quirks of older Toronto homes, City of Toronto permit processes, laneway suite eligibility, and the specific building codes that apply to Toronto's diverse neighbourhoods.",
    nearbyProjects: [
      { title: "Contemporary Apartment Kitchen Renovation", slug: "apartment-kitchen-renovation" },
      { title: "Luxury Kitchen Renovation Toronto", slug: "luxury-kitchen-renovation-toronto" },
    ],
    latitude: "43.6532",
    longitude: "-79.3832",
  },
  {
    slug: "markham",
    name: "Markham",
    region: "York Region",
    description: "Renovation contractors and custom home builders headquartered in Markham, ON — our backyard. Fast response times and deep familiarity with York Region permits.",
    localContext: "Markham is EZU Construction's home base. We know the York Region permit process, the common housing types (1980s–2000s detached homes, newer infill builds, and estate lots in Unionville and Cornell), and the local trades network. For Markham homeowners, we offer some of the fastest project starts and most competitive pricing.",
    nearbyProjects: [
      { title: "Luxury Custom Home Construction", slug: "custom-home-construction-vaughan" },
    ],
    latitude: "43.8561",
    longitude: "-79.3370",
  },
  {
    slug: "north-york",
    name: "North York",
    region: "City of Toronto",
    description: "Renovation specialists and custom home builders serving North York — Bayview Village, Don Mills, Willowdale, and surrounding neighbourhoods.",
    localContext: "North York's housing stock is predominantly 1950s–1980s bungalows, sidesplits, and backsplits on generous lots — ideal candidates for second-storey additions, rear extensions, and full-home renovations. We regularly work in Bayview Village, Willowdale, Ledbury Park, Don Mills, and Lawrence Park, and we're familiar with the specific structural considerations of the area's postwar construction.",
    nearbyProjects: [
      { title: "Lakeside Bungalow Whole Home Renovation", slug: "lakeside-bungalow-whole-home-renovation" },
    ],
    latitude: "43.7615",
    longitude: "-79.4111",
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "City of Toronto",
    description: "Home renovation contractors and builders serving Scarborough — The Beaches, Cliffside, Danforth Village, Agincourt, and Malvern.",
    localContext: "Scarborough offers some of the GTA's best value in detached housing — and many of these homes are prime renovation candidates. We work extensively in Scarborough on kitchen and bathroom updates, basement suite conversions, and full-home renovations. The area's older housing stock often requires attention to electrical panels, plumbing systems, and insulation before cosmetic upgrades begin.",
    nearbyProjects: [
      { title: "Kitchen Renovation Etobicoke", slug: "kitchen-renovation-etobicoke" },
    ],
    latitude: "43.7764",
    longitude: "-79.2318",
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    region: "City of Toronto",
    description: "Custom renovation and construction services in Etobicoke — Bloor West Village, Rexdale, Mimico, and Long Branch.",
    localContext: "Etobicoke's mix of post-war bungalows, mid-century sidesplits, and newer infill builds makes it one of our most active renovation markets. We handle kitchen and bathroom updates, open-concept conversions, second-storey additions, and full-home renovations throughout Etobicoke's established neighbourhoods.",
    nearbyProjects: [
      { title: "Kitchen Renovation Etobicoke", slug: "kitchen-renovation-etobicoke" },
    ],
    latitude: "43.6905",
    longitude: "-79.5647",
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    region: "York Region",
    description: "Custom home builders and luxury renovation contractors serving Vaughan — Woodbridge, Maple, Kleinburg, and Concord.",
    localContext: "Vaughan is one of the GTA's fastest-growing markets, with a mix of 1990s–2000s executive homes and newer luxury builds. We regularly build custom homes, high-end kitchen and bathroom renovations, and large-scale additions throughout Woodbridge, Kleinburg, and Maple — areas where homeowners expect premium finishes and a seamless project experience.",
    nearbyProjects: [
      { title: "Luxury Custom Home Construction Vaughan", slug: "custom-home-construction-vaughan" },
    ],
    latitude: "43.8372",
    longitude: "-79.5083",
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    region: "York Region",
    description: "Home renovation contractors and builders serving Richmond Hill — Oak Ridges, Jefferson, Bayview Hill, and surrounding communities.",
    localContext: "Richmond Hill's established executive neighbourhoods feature large 1990s–2010s homes on mature lots — well-suited for kitchen and bathroom renovations, home additions, and basement suite development. We've completed multiple kitchen renovations in Richmond Hill and are familiar with the area's design preferences and York Region permit timelines.",
    nearbyProjects: [
      { title: "Modern Kitchen Renovation Richmond Hill", slug: "kitchen-renovation-richmond-hill" },
    ],
    latitude: "43.8828",
    longitude: "-79.4403",
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "Peel Region",
    description: "Renovation specialists serving Mississauga — Port Credit, Streetsville, Erin Mills, Meadowvale, and surrounding neighbourhoods.",
    localContext: "Mississauga's housing ranges from Port Credit character homes and Streetsville century buildings to large Erin Mills and Meadowvale family homes. We handle the full spectrum — from heritage-sensitive renovations in older neighbourhoods to modern open-concept conversions and basement suite development in Mississauga's newer subdivisions.",
    nearbyProjects: [
      { title: "Luxury Kitchen Renovation Toronto", slug: "luxury-kitchen-renovation-toronto" },
    ],
    latitude: "43.5890",
    longitude: "-79.6441",
  },
  {
    slug: "oakville",
    name: "Oakville",
    region: "Halton Region",
    description: "Luxury custom home builders and renovation contractors serving Oakville — Old Oakville, Glen Abbey, Joshua Creek, and River Oaks.",
    localContext: "Oakville's premium housing market demands premium results. We work in Old Oakville heritage homes, Glen Abbey executive properties, and Joshua Creek luxury builds — delivering high-end kitchen and bathroom renovations, custom home additions, and complete home renovations to the quality standard Oakville homeowners expect.",
    nearbyProjects: [
      { title: "Lakeside Bungalow Whole Home Renovation", slug: "lakeside-bungalow-whole-home-renovation" },
    ],
    latitude: "43.4675",
    longitude: "-79.6877",
  },
];
