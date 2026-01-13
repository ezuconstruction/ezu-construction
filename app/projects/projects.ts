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
  gallery?: string[];
  details: {
    label: string;
    value: string;
  }[];
}

export const projectsData: ProjectData[] = [
  {
    slug: "modern-kitchen",
    title: "Modern Minimalist Kitchen",
    category: "Kitchen Renovation",
    image: "/images/services/kitchen-renovations.jpg",
    description: "A stunning modern kitchen transformation featuring sleek, modern cabinets with soft-close mechanisms, integrated appliances, and smart storage solutions. This project showcases how minimalist design can create a clutter-free, highly functional space that serves as the heart of the home.",
    shortDescription: "Sleek, modern cabinets with soft-close mechanisms and integrated appliances for a contemporary look with smart storage.",
    location: "Toronto, ON",
    year: "2024",
    features: [
      "Sleek modern brushed metal cabinetry with soft-close mechanisms",
      "Integrated smart appliances with touch controls",
      "Quartz countertops with waterfall edge",
      "Hidden storage solutions with pull-out trays",
      "LED under-cabinet lighting with dimmer controls",
      "Large format porcelain tile flooring with subtle texture"
    ],
    gallery: [
      "/images/services/kitchen-renovations.jpg",
      "/images/services/kitchen-remodel.png",
      "/images/services/open-concept-kitchen.jpg"
    ],
    details: [
      { label: "Project Type", value: "Full Kitchen Renovation" },
      { label: "Duration", value: "8 weeks" },
      { label: "Square Footage", value: "350 sq ft" },
      { label: "Style", value: "Modern Minimalist" }
    ]
  },
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
