export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  shortDescription: string;
  location?: string;
  year?: string;
  features: string[];
  gallery?: Array<string | { src: string; caption?: string }>;
  details: {
    label: string;
    value: string;
  }[];
}

export const projectsData: ProjectData[] = [
  {
  slug: "custom-home-construction-vaughan",
  title: "Luxury Custom Home Construction",
  category: "Custom Home Construction",
  image: "/images/projects/custom-home-vaughan-after.png",
  description: "A ground-up custom home construction designed with a focus on refined craftsmanship, architectural detail, and timeless luxury. This Vaughan residence features bespoke millwork, coffered ceilings, premium stone surfaces, and thoughtfully integrated built-ins, delivering a cohesive high-end aesthetic across every living space.",
  shortDescription: "A luxury custom-built home showcasing bespoke millwork, architectural ceilings, and premium finishes throughout.",
  location: "Vaughan, ON",
  year: "2025",
  features: [
    "Custom millwork and cabinetry with decorative panel detailing",
    "Coffered and tray ceilings with integrated recessed lighting",
    "Statement stone feature walls with built-in linear fireplaces",
    "Premium hardwood flooring installed throughout main living areas",
    "Built-in shelving and storage designed for both function and display",
    "High-end finishes and precise detailing across all interior spaces"
  ],
  gallery: [
    {
      src: "/images/projects/custom-home-vaughan-after-living.png",
      caption: "Elegant living space featuring a stunning marble fireplace surround as the focal point, complemented by custom built-in cabinetry with open shelving, rich light hardwood flooring, and sophisticated architectural details throughout."
    },
    {
      src: "/images/projects/custom-home-vaughan-after.png",
      caption: "Luxury kitchen showcasing bespoke white cabinetry with decorative artisan doors, dramatic book-matched marble countertops and island, professional-grade range hood, coffered ceiling with intricate detailing, and dark hardwood flooring that flows seamlessly through the space."
    },
    {
      src: "/images/projects/custom-home-vaughan-after-office.png",
      caption: "Sophisticated executive office featuring a dramatic coffered ceiling, stunning book-matched marble fireplace wall with linear fireplace, custom built-in cabinetry and shelving, sleek dark flooring, and abundant natural light creating an impressive professional workspace."
    }
  ],
  details: [
    { label: "Project Type", value: "Custom Home Construction" },
    { label: "Property Type", value: "Detached Residential Home" },
    { label: "Style", value: "Luxury Contemporary / Transitional" },
    { label: "Location", value: "Vaughan, Ontario" },
    { label: "Year", value: "2025" }
  ]
},
  {
  slug: "apartment-kitchen-renovation",
  title: "Contemporary Apartment Kitchen Renovation",
  category: "Apartment Renovation",
  image: "/images/projects/apartment-kitchen-renovation-after.jpeg",
  description: "A complete transformation of a dated apartment kitchen into a clean, contemporary space. The renovation replaces traditional cabinetry and finishes with high-gloss modern surfaces, integrated appliances, upgraded lighting, and a streamlined layout that maximizes storage and visual openness despite a compact footprint.",
  shortDescription: "A full apartment kitchen upgrade with modern cabinetry, integrated appliances, and a brighter, more efficient layout.",
  location: "Toronto, ON",
  year: "2024",
  features: [
    "High-gloss flat-panel cabinetry for a clean, modern aesthetic",
    "Quartz countertops with straight-edge profile",
    "Integrated refrigerator and concealed range hood",
    "Upgraded modern lighting fixtures with warm LED output",
    "Contemporary backsplash with subtle veining",
    "Optimized storage layout designed for apartment-scale kitchens"
  ],
  gallery: [
    {src: "/images/projects/apartment-kitchen-renovation-before.jpeg", caption : "Simple but dated kitchen with light wood cabinetry, dark countertops, and basic tile flooring - a clean slate ready for transformation."},
    {src: "/images/projects/apartment-kitchen-renovation-after.jpeg", caption : "Stunning modern renovation featuring elegant quartz countertops and backsplash, contemporary vertical wood paneling, and warm hardwood flooring throughout."},
  ],
  details: [
    { label: "Project Type", value: "Apartment Kitchen Renovation" },
    { label: "Duration", value: "6 weeks" },
    { label: "Square Footage", value: "Approx. 250 sq ft" },
    { label: "Style", value: "Contemporary / Modern" },
    { label: "Location", value: "Burlington, Ontario" },
    { label: "Year", value: "2025" },
  ]
},
{
  slug: "luxury-kitchen-renovation-toronto",
  title: "Luxury Contemporary Kitchen Renovation",
  category: "Kitchen Renovation",
  image: "/images/after.png",
  description: "A dramatic transformation of a traditional kitchen into a refined, high-end contemporary space. This renovation introduces custom full-height cabinetry, layered lighting, premium materials, and a bold island centerpiece, turning the kitchen into a functional showpiece designed for both everyday living and entertaining.",
  shortDescription: "A high-end kitchen renovation featuring custom cabinetry, statement lighting, and a large multifunctional island.",
  location: "Toronto, ON",
  year: "2025",
  features: [
    "Custom full-height matte cabinetry with brass hardware accents",
    "Oversized island with integrated seating and waterfall-style stone surface",
    "Premium quartz countertops and full-height matching backsplash",
    "Statement pendant lighting paired with recessed ceiling lights",
    "Integrated built-in appliances for a seamless appearance",
    "Warm engineered hardwood flooring for contrast and balance"
  ],
  gallery: [
    {
      src: "/images/before.png",
      caption: "Original kitchen with light wood cabinetry, tiled flooring, and a central island that lacked visual impact and modern functionality."
    },
    {
      src: "/images/after.png",
      caption: "Striking contemporary renovation showcasing custom dark cabinetry, elegant stone surfaces, dramatic pendant lighting, and a spacious island designed for entertaining."
    }
  ],
  details: [
    { label: "Project Type", value: "Full Kitchen Renovation" },
    { label: "Duration", value: "8 weeks" },
    { label: "Square Footage", value: "Approx. 400 sq ft" },
    { label: "Style", value: "Luxury Contemporary" },
    { label: "Location", value: "Toronto, Ontario" },
    { label: "Year", value: "2025" }
  ]
  
},
{
  slug: "lakeside-bungalow-whole-home-renovation",
  title: "Lakeside Bungalow Whole Home Renovation",
  category: "Whole Home Renovation",
  image: "/images/after3.png",
  description: "A full-scale renovation of a dated lakeside bungalow, transforming enclosed, underlit interiors into a bright, open, and modern living environment. The project reimagines the home from top to bottom with structural reconfiguration, updated finishes, improved lighting, and contemporary materials—balancing modern comfort with the relaxed character of a waterfront property.",
  shortDescription: "A complete bungalow transformation featuring open-concept living, modern finishes, and improved natural light throughout.",
  location: "Carrying Place, ON",
  year: "2024",
  features: [
    "Full interior demolition and reconfiguration for open-concept living",
    "New drywall, ceilings, and recessed LED lighting throughout",
    "Modern flooring installed across all living spaces",
    "Redesigned living and dining areas with improved flow",
    "Updated wall finishes with neutral, contemporary colour palette",
    "Enhanced natural light through enlarged and repositioned windows"
  ],
  gallery: [
    {
      src: "/images/projects/lakeside-bungalow-renovation-before-1.png",
      caption: "Original interior with compartmentalized rooms, dated finishes, and limited natural light typical of older bungalow layouts."
    },
    {
      src: "/images/before3.png",
      caption: "Pre-renovation basement and living areas showing low ceilings, exposed structural elements, and worn flooring."
    },
    {
      src: "/images/before2.png",
      caption: "Dated basement space with worn gray carpet, and cluttered furniture creating a dreary, uninviting atmosphere that desperately needs modernization."
    },
    {
      src: "/images/projects/lakeside-bungalow-renovation-after-1.png",
      caption: "Bright, open-concept living and dining space with modern flooring, clean white walls, and recessed lighting."
    },
    {
      src: "/images/after2.jpg",
      caption: "Reimagined lower level featuring contemporary finishes, improved lighting, and a functional recreational layout."
    },
    {
      src: "/images/after3.png",
      caption: "Spacious modern living area with defined zones for entertaining, dining, and relaxation while maintaining an open feel."
    }
  ],
  details: [
    { label: "Project Type", value: "Whole Home Renovation" },
    { label: "Duration", value: "12 weeks" },
    { label: "Property Type", value: "Lakeside Bungalow" },
    { label: "Style", value: "Modern Contemporary" },
    { label: "Location", value: "Carrying Place, Ontario" },
    { label: "Year", value: "2024" }
  ]
},
{
  slug: "kitchen-renovation-etobicoke",
  title: "Transitional Kitchen Renovation",
  category: "Kitchen Renovation",
  image: "/images/projects/etobicoke-kitchen-renovation-1.png",
  description: "A thoughtfully designed kitchen renovation blending timeless cabinetry with modern detailing. This Etobicoke project emphasizes balance—clean white millwork, warm wood accents, and elegant stone surfaces—resulting in a bright, functional space that feels refined without being over-designed.",
  shortDescription: "A bright, transitional kitchen featuring custom cabinetry, quartz surfaces, and warm wood accents.",
  location: "Etobicoke, ON",
  year: "2023",
  features: [
    "Custom shaker-style cabinetry with brass hardware",
    "Quartz countertops with subtle marble veining",
    "Full-height quartz backsplash for a seamless finish",
    "Statement wood-clad range hood with integrated lighting",
    "Glass-front display cabinets with interior LED lighting",
    "Recessed ceiling lighting for even, ambient illumination"
  ],
  gallery: [
    {
      src: "/images/projects/etobicoke-kitchen-renovation-1.png",
      caption: "Spacious kitchen layout showcasing a large quartz island with integrated sink and refined brass fixtures."
    },
    {
      src: "/images/projects/etobicoke-kitchen-renovation-2.png",
      caption: "Cooking area highlighted by a custom wood range hood, gas cooktop, and full-height quartz backsplash."
    },
    {
      src: "/images/projects/etobicoke-kitchen-renovation-3.png",
      caption: "Built-in cabinetry wall combining storage, display shelving, and integrated appliances for a cohesive look."
    },
    {
      src: "/images/projects/etobicoke-kitchen-renovation-4.png",
      caption: "Glass-front cabinets with soft interior lighting adding depth and visual interest to the kitchen design."
    }
  ],
  details: [
    { label: "Project Type", value: "Kitchen Renovation" },
    { label: "Style", value: "Transitional / Contemporary" },
    { label: "Duration", value: "10 weeks" },
    { label: "Square Footage", value: "Approx. 300 sq ft" },
    { label: "Location", value: "Etobicoke, Ontario" },
    { label: "Year", value: "2023" }
  ]
},
{
  slug: "kitchen-renovation-richmond-hill",
  title: "Modern Kitchen Renovation",
  category: "Kitchen Renovation",
  image: "/images/projects/richmond-hill-kitchen-renovation-1.jpeg",
  description: "A complete kitchen transformation modernizing a once dark and enclosed space into a bright, functional, and contemporary kitchen. The renovation focuses on clean white cabinetry, streamlined layouts, and improved lighting to enhance usability while maintaining a warm, inviting feel.",
  shortDescription: "A bright, modern kitchen renovation with white cabinetry, updated lighting, and a refined island layout.",
  location: "Richmond Hill, ON",
  year: "2024",
  features: [
    "Full-height white shaker-style cabinetry for a clean, timeless look",
    "Large central island with dark stone countertop for contrast",
    "Updated recessed ceiling lighting for even illumination",
    "Integrated appliance panels for a seamless appearance",
    "Modern pendant lighting above the island",
    "Refinished hardwood flooring to unify the space"
  ],
  gallery: [
    {
      src: "/images/projects/richmond-hill-kitchen-renovation-2.jpeg",
      caption: "Outdated kitchen with dark cherry cabinetry, black granite countertops, and cluttered counters showing wear and tear, with mismatched appliances and dated pendant lighting that made the space feel heavy and closed in."
    },
    {
      src: "/images/projects/richmond-hill-kitchen-renovation-1.jpeg",
      caption: "Bright, transformative kitchen renovation featuring crisp white cabinetry with extended height for maximum storage, sleek dark countertops, modern under-cabinet lighting, stainless steel appliances making a clean, sophisticated culinary space."
    }
  ],
  details: [
    { label: "Project Type", value: "Kitchen Renovation" },
    { label: "Style", value: "Transitional" },
    { label: "Duration", value: "5 weeks" },
    { label: "Square Footage", value: "Approx. 300 sq ft" },
    { label: "Location", value: "Richmond Hill, Ontario" },
    { label: "Year", value: "2024" }
  ]
}

];

/*
{
    slug: "luxury-bathroom",
    title: "Luxury Master Bathroom",
    category: "Bathroom Renovation",
    image: "/images/services/bathroom-renovations.jpg",
    description: "A spa-inspired master bathroom renovation featuring a walk-in shower with rain head, freestanding tub, and custom vanity. Premium materials and thoughtful design create a luxurious retreat for daily relaxation.",
    shortDescription: "Spa-inspired bathroom with walk-in shower and freestanding tub.",
    location: "Mississauga, ON",
    year: "2024",
    features: [
      "Walk-in shower with rain head and body jets",
      "Freestanding soaking tub",
      "Custom double vanity with quartz countertops",
      "Heated tile floors",
      "Smart mirror with LED lighting",
      "Premium tile work throughout"
    ],
    gallery: [
      "/images/services/bathroom-renovations.jpg",
      "/images/services/accessible-bathroom.jpg",
      "/images/guest-bathroom.jpg"
    ],
    details: [
      { label: "Project Type", value: "Master Bathroom Renovation" },
      { label: "Duration", value: "6 weeks" },
      { label: "Square Footage", value: "180 sq ft" },
      { label: "Style", value: "Modern Spa" }
    ]
  },
  {
    slug: "custom-home-estate",
    title: "Luxury Estate Home",
    category: "Custom Home",
    image: "/images/services/estate-home.jpg",
    description: "A stunning custom-built estate home featuring modern architecture, premium finishes, and smart home technology. This 5,000 sq ft home showcases the perfect blend of luxury and functionality.",
    shortDescription: "Grand scale and bespoke finishes for unparalleled luxury living.",
    location: "Oakville, ON",
    year: "2023",
    features: [
      "Open concept main floor",
      "Premium hardwood throughout",
      "Smart home automation system",
      "Energy-efficient windows and insulation",
      "Custom millwork and built-ins",
      "Landscaped outdoor living spaces"
    ],
    gallery: [
      "/images/estate-home.jpg",
      "/images/services/modern-home.jpg",
      "/images/traditional-home.jpg"
    ],
    details: [
      { label: "Project Type", value: "Custom Home Build" },
      { label: "Duration", value: "18 months" },
      { label: "Square Footage", value: "5,000 sq ft" },
      { label: "Style", value: "Modern Estate" }
    ]
  },
  {
    slug: "second-story-addition",
    title: "Second Story Addition",
    category: "Home Addition",
    image: "/images/services/second-story-addition.jpg",
    description: "A complete second-story addition to a bungalow, adding 1,200 sq ft of living space including three bedrooms and two bathrooms. The addition seamlessly integrates with the existing home's architecture.",
    shortDescription: "Adding an entire new floor to maximize living space.",
    location: "Brampton, ON",
    year: "2024",
    features: [
      "Three new bedrooms",
      "Two full bathrooms",
      "Master suite with walk-in closet",
      "Structural reinforcement of existing foundation",
      "Matching exterior finishes",
      "New HVAC and electrical systems"
    ],
    gallery: [
      "/images/second-story-addition.jpg",
      "/images/services/side-extention.jpg",
      "/images/home-additions.jpg"
    ],
    details: [
      { label: "Project Type", value: "Second Story Addition" },
      { label: "Duration", value: "12 weeks" },
      { label: "Square Footage Added", value: "1,200 sq ft" },
      { label: "Style", value: "Seamless Integration" }
    ]
  },
  {
    slug: "basement-finishing",
    title: "Basement Development",
    category: "Home Renovation",
    image: "/images/services/basement-finishing.jpg",
    description: "Complete basement finishing transforming an unfinished space into a functional family room, home office, and guest suite. Features include proper moisture management, egress windows, and modern finishes.",
    shortDescription: "Converting unfinished basement into livable, functional space.",
    location: "Markham, ON",
    year: "2024",
    features: [
      "Family entertainment area",
      "Dedicated home office space",
      "Guest bedroom with ensuite",
      "Moisture-resistant drywall and flooring",
      "Egress windows for safety",
      "Recessed lighting throughout"
    ],
    gallery: [
      "/images/basement-finishing.jpg",
      "/images/services/spare-room.jpg",
      "/images/work-nook.jpg"
    ],
    details: [
      { label: "Project Type", value: "Basement Finishing" },
      { label: "Duration", value: "10 weeks" },
      { label: "Square Footage", value: "1,000 sq ft" },
      { label: "Style", value: "Modern Functional" }
    ]
  },
  {
    slug: "whole-home-renovation",
    title: "Complete Home Transformation",
    category: "Home Renovation",
    image: "/images/services/whole-home-renovation.jpg",
    description: "A comprehensive whole-home renovation updating every room with modern finishes, improved layouts, and enhanced functionality. This project transformed a 1980s home into a contemporary living space.",
    shortDescription: "Complete overhaul bringing entire home to modern standards.",
    location: "Richmond Hill, ON",
    year: "2023",
    features: [
      "Updated kitchen and all bathrooms",
      "New flooring throughout",
      "Fresh interior paint",
      "Updated electrical and plumbing",
      "New windows and doors",
      "Improved insulation and HVAC"
    ],
    gallery: [
      "/images/whole-home-renovation.jpg",
      "/images/services/full-home-remodel.jpeg",
      "/images/structural-changes.jpg"
    ],
    details: [
      { label: "Project Type", value: "Whole Home Renovation" },
      { label: "Duration", value: "16 weeks" },
      { label: "Square Footage", value: "2,800 sq ft" },
      { label: "Style", value: "Contemporary" }
    ]
  },
  {
    slug: "home-office-renovation",
    title: "Executive Home Office",
    category: "Home Office Renovation",
    image: "/images/services/home-office.jpg",
    description: "A sophisticated home office renovation featuring custom built-ins, ergonomic design, and integrated technology. This space provides a professional work environment with optimal productivity features.",
    shortDescription: "Luxurious home office with custom built-ins and high-end finishes.",
    location: "Aurora, ON",
    year: "2024",
    features: [
      "Custom built-in desk and shelving",
      "Ergonomic design elements",
      "Integrated cable management",
      "Soundproofing for video calls",
      "Layered lighting system",
      "Premium hardwood flooring"
    ],
    gallery: [
      "/images/home-office.jpg",
      "/images/services/work-nook.jpg",
      "/images/spare-room.jpg"
    ],
    details: [
      { label: "Project Type", value: "Home Office Renovation" },
      { label: "Duration", value: "4 weeks" },
      { label: "Square Footage", value: "150 sq ft" },
      { label: "Style", value: "Executive Modern" }
    ]
  },
  {
    slug: "interlocking-driveway",
    title: "Interlocking Driveway & Walkway",
    category: "Construction",
    image: "/images/services/kitchen-renovations.jpg",
    description: "A beautiful interlocking driveway and walkway installation featuring premium materials and intricate patterns. This project enhances curb appeal while providing durable, long-lasting surfaces.",
    shortDescription: "Durable interlocking installation with beautiful patterns.",
    location: "Vaughan, ON",
    year: "2024",
    features: [
      "Premium interlocking pavers",
      "Proper base preparation",
      "Intricate pattern design",
      "Professional edging",
      "Proper drainage system",
      "Sealed finish for longevity"
    ],
    gallery: [
      "/images/services/kitchen-renovations.jpg",
      "/images/placeholder-image.jpg"
    ],
    details: [
      { label: "Project Type", value: "Interlocking Installation" },
      { label: "Duration", value: "5 days" },
      { label: "Square Footage", value: "800 sq ft" },
      { label: "Style", value: "Classic Elegant" }
    ]
  }
*/
