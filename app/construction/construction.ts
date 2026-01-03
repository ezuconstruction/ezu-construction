export interface ConstructionData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  introText: string;
  whyChooseUs: {
    image: string;
    title: string;
    points: string[];
  };
  types?: {
    title: string;
    image: string;
    description: string;
  }[];
  considerations: {
    title: string;
    icon: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  portfolio: {
    title: string;
    image: string;
    alt: string;
    description: string;
    link: string;
    linkTitle: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  bgImage: string;
}

export const constructionData: ConstructionData[] = [
  {
    slug: "drywall",
    title: "Drywall Installation and Repair",
    subtitle: "Professional drywall services for seamless walls and ceilings.",
    heroImage: "/images/construction/drywall-title.webp",
    introText: "Expert drywall installation and repair services to create smooth, flawless walls and ceilings. Our skilled craftsmen ensure precision in every project, from new construction to renovations and repairs.",
    bgImage: "/images/backgrounds/bg-3.jpg",
    whyChooseUs: {
      image: "/images/services/kitchen-renovations.jpg",
      title: "Why Choose Our Drywall Services?",
      points: [
        "Expert installation and seamless finishing",
        "Quick and efficient repair services",
        "Professional taping and mudding techniques",
        "Texture matching for existing surfaces",
        "Clean, dust-free work environment"
      ]
    },
    types: [
      {
        title: "Hardwood Flooring",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Classic hardwood installation and refinishing for timeless elegance and durability."
      },
      {
        title: "Laminate & Luxury Vinyl",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Modern, affordable flooring options that mimic natural materials with easy maintenance."
      },
      {
        title: "Tile Flooring",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Ceramic, porcelain, and natural stone tile installation for beautiful, long-lasting floors."
      }
    ],
    considerations: [
      {
        title: "Surface Preparation",
        icon: "/stars.svg",
        description: "Proper preparation ensures smooth, long-lasting results. We assess the area, address any underlying issues, and prepare surfaces for optimal adhesion."
      },
      {
        title: "Material Selection",
        icon: "/stars.svg",
        description: "Choosing the right drywall type (standard, moisture-resistant, fire-rated) based on the application and building codes."
      },
      {
        title: "Finishing Quality",
        icon: "/stars.svg",
        description: "Professional taping, mudding, and sanding techniques to achieve smooth, seamless surfaces ready for paint or texture."
      },
      {
        title: "Timeline & Efficiency",
        icon: "/stars.svg",
        description: "Efficient installation and finishing processes to minimize disruption while maintaining the highest quality standards."
      }
    ],
    process: [
      {
        step: "Step 1",
        title: "Assessment & Planning",
        description: "We evaluate the project scope, measure the area, and determine the best approach for installation or repair. This includes identifying any structural issues that need attention."
      },
      {
        step: "Step 2",
        title: "Material Selection & Preparation",
        description: "Selecting appropriate drywall types and materials, then preparing the work area. We ensure proper framing, insulation, and vapor barriers are in place."
      },
      {
        step: "Step 3",
        title: "Installation or Repair",
        description: "Precise cutting and installation of drywall sheets, or careful repair of damaged areas. We ensure proper fastening and alignment for seamless results."
      },
      {
        step: "Step 4",
        title: "Taping & Finishing",
        description: "Professional taping, mudding, and sanding to create smooth, seamless surfaces. Multiple coats ensure a flawless finish ready for paint or texture."
      },
      {
        step: "Step 5",
        title: "Final Inspection & Cleanup",
        description: "Thorough inspection of the finished work, addressing any imperfections. We clean up the work area, leaving your space ready for the next phase of your project."
      }
    ],
    portfolio: [
      {
        title: "Complete Home Drywall Installation",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Smooth, seamless walls throughout entire home",
        description: "Professional drywall installation for new construction, ensuring perfect walls and ceilings throughout.",
        link: "/projects/drywall-installation",
        linkTitle: "View Project"
      },
      {
        title: "Ceiling Repair & Texture Match",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Repaired ceiling with perfectly matched texture",
        description: "Expert repair and texture matching to restore damaged ceilings to their original appearance.",
        link: "/projects/ceiling-repair",
        linkTitle: "View Project"
      },
      {
        title: "Basement Finishing",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Finished basement with professional drywall",
        description: "Complete basement finishing with moisture-resistant drywall and professional finishing.",
        link: "/projects/basement-drywall",
        linkTitle: "View Project"
      }
    ],
    faqs: [
      {
        question: "How long does drywall installation take?",
        answer: "The timeline depends on the project size. A single room might take 2-3 days, while a full home installation could take 1-2 weeks. We provide detailed timelines based on your specific project."
      },
      {
        question: "Do you match existing textures?",
        answer: "Yes, we specialize in matching existing textures and finishes. Our team can replicate various texture patterns to ensure seamless integration with your existing walls and ceilings."
      },
      {
        question: "What types of drywall do you use?",
        answer: "We use standard, moisture-resistant, and fire-rated drywall depending on the application. We'll recommend the best type for your specific needs and local building codes."
      },
      {
        question: "Can you repair water-damaged drywall?",
        answer: "Yes, we assess water damage, remove affected areas, ensure proper drying, and replace with appropriate moisture-resistant materials when needed. We also address any underlying moisture issues."
      }
    ]
  },
  {
    slug: "flooring",
    title: "Flooring Installation and Repair",
    subtitle: "Beautiful, durable flooring solutions for every room in your home.",
    heroImage: "/images/construction/flooring-title.avif",
    introText: "Transform your home with professional flooring installation and repair services. From hardwood and laminate to tile and luxury vinyl, we provide expert installation and repair for all flooring types.",
    bgImage: "/images/backgrounds/bg-2.jpg",
    whyChooseUs: {
      image: "/images/services/kitchen-renovations.jpg",
      title: "Why Choose Our Flooring Services?",
      points: [
        "Expert installation of all flooring types",
        "Professional subfloor preparation",
        "Precise cutting and fitting techniques",
        "Quality materials and craftsmanship",
        "Comprehensive repair and restoration services"
      ]
    },
    types: [
      {
        title: "Hardwood Flooring",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Classic hardwood installation and refinishing for timeless elegance and durability."
      },
      {
        title: "Laminate & Luxury Vinyl",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Modern, affordable flooring options that mimic natural materials with easy maintenance."
      },
      {
        title: "Tile Flooring",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Ceramic, porcelain, and natural stone tile installation for beautiful, long-lasting floors."
      }
    ],
    considerations: [
      {
        title: "Subfloor Preparation",
        icon: "/stars.svg",
        description: "Proper subfloor preparation is crucial for long-lasting floors. We assess, level, and prepare surfaces to ensure optimal installation conditions."
      },
      {
        title: "Material Selection",
        icon: "/stars.svg",
        description: "Choosing the right flooring material based on room usage, traffic patterns, moisture levels, and your aesthetic preferences."
      },
      {
        title: "Installation Technique",
        icon: "/stars.svg",
        description: "Professional installation techniques specific to each flooring type, ensuring proper expansion gaps, alignment, and finishing."
      },
      {
        title: "Maintenance & Care",
        icon: "/stars.svg",
        description: "Understanding the maintenance requirements and care instructions for your chosen flooring to maximize its lifespan and appearance."
      }
    ],
    process: [
      {
        step: "Step 1",
        title: "Consultation & Material Selection",
        description: "We discuss your flooring needs, preferences, and budget. We help you select the perfect flooring material for each room and provide samples."
      },
      {
        step: "Step 2",
        title: "Site Assessment & Preparation",
        description: "Thorough assessment of existing floors and subfloors. We prepare surfaces, address any issues, and ensure proper conditions for installation."
      },
      {
        step: "Step 3",
        title: "Professional Installation",
        description: "Expert installation using industry best practices. Precise cutting, fitting, and finishing to ensure beautiful, long-lasting results."
      },
      {
        step: "Step 4",
        title: "Finishing & Sealing",
        description: "Proper finishing touches including baseboards, transitions, and sealing where applicable. We ensure every detail is perfect."
      },
      {
        step: "Step 5",
        title: "Final Inspection & Care Instructions",
        description: "Comprehensive inspection of the completed work and detailed care instructions to help you maintain your new floors for years to come."
      }
    ],
    portfolio: [
      {
        title: "Hardwood Floor Installation",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Beautiful hardwood floors throughout home",
        description: "Professional hardwood installation with expert finishing for a timeless, elegant look.",
        link: "/projects/hardwood-installation",
        linkTitle: "View Project"
      },
      {
        title: "Luxury Vinyl Plank",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Modern luxury vinyl flooring",
        description: "Waterproof luxury vinyl installation perfect for high-traffic areas and moisture-prone spaces.",
        link: "/projects/luxury-vinyl",
        linkTitle: "View Project"
      },
      {
        title: "Tile Floor Restoration",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Restored tile floors with new grout",
        description: "Expert tile repair and grout restoration to bring old floors back to life.",
        link: "/projects/tile-restoration",
        linkTitle: "View Project"
      }
    ],
    faqs: [
      {
        question: "What types of flooring do you install?",
        answer: "We install hardwood, laminate, luxury vinyl, tile (ceramic, porcelain, natural stone), carpet, and engineered flooring. We can help you choose the best option for your needs and budget."
      },
      {
        question: "How long does flooring installation take?",
        answer: "Installation time varies by material and room size. A single room might take 1-2 days, while a full home installation could take 1-2 weeks. We provide detailed timelines for your project."
      },
      {
        question: "Do you remove old flooring?",
        answer: "Yes, we handle complete removal of old flooring, including proper disposal. We also assess and prepare subfloors for the new installation."
      },
      {
        question: "Can you repair damaged flooring?",
        answer: "Absolutely. We provide repair services for all flooring types, from fixing individual planks or tiles to refinishing hardwood and restoring grout. We'll assess the damage and recommend the best solution."
      }
    ]
  },
  {
    slug: "tile",
    title: "Tile Installation and Repair",
    subtitle: "Expert tile work for floors, walls, and backsplashes that lasts.",
    heroImage: "/images/construction/tiling-title.webp",
    introText: "Professional tile installation and repair services for bathrooms, kitchens, and throughout your home. Our skilled tile setters ensure precise installation, beautiful patterns, and long-lasting results.",
    bgImage: "/images/backgrounds/bg-3.jpg",
    whyChooseUs: {
      image: "/images/services/kitchen-renovations.jpg",
      title: "Why Choose Our Tile Services?",
      points: [
        "Expert installation of all tile types",
        "Precise cutting and pattern work",
        "Professional grouting and sealing",
        "Beautiful backsplash and feature wall designs",
        "Comprehensive repair and restoration"
      ]
    },
    types: [
      {
        title: "Bathroom Tile",
        image: "/images/services/bathroom-renovations.jpg",
        description: "Waterproof tile installation for showers, floors, and walls with proper waterproofing systems."
      },
      {
        title: "Kitchen Backsplashes",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Beautiful backsplash installations with intricate patterns and modern designs."
      },
      {
        title: "Floor Tile",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Durable floor tile installation for high-traffic areas with proper subfloor preparation."
      }
    ],
    considerations: [
      {
        title: "Waterproofing",
        icon: "/stars.svg",
        description: "Proper waterproofing is essential in wet areas. We install appropriate membranes and systems to prevent water damage and ensure long-lasting results."
      },
      {
        title: "Substrate Preparation",
        icon: "/stars.svg",
        description: "Proper surface preparation ensures tiles adhere correctly and remain level. We assess and prepare substrates to meet manufacturer specifications."
      },
      {
        title: "Layout & Pattern Design",
        icon: "/stars.svg",
        description: "Thoughtful layout planning ensures balanced patterns, minimal cuts, and optimal visual appeal. We work with you to create beautiful designs."
      },
      {
        title: "Grout & Sealing",
        icon: "/stars.svg",
        description: "Professional grouting and sealing protect your investment. We use appropriate grout types and sealers based on the tile and application."
      }
    ],
    process: [
      {
        step: "Step 1",
        title: "Design Consultation",
        description: "We discuss your tile preferences, patterns, and design goals. We help you select tiles, grout colors, and create a layout plan that maximizes visual appeal."
      },
      {
        step: "Step 2",
        title: "Surface Preparation",
        description: "Thorough preparation of surfaces including waterproofing where needed, substrate leveling, and ensuring proper conditions for tile installation."
      },
      {
        step: "Step 3",
        title: "Precise Installation",
        description: "Expert tile installation with precise cutting, spacing, and alignment. We ensure proper adhesive application and follow manufacturer specifications."
      },
      {
        step: "Step 4",
        title: "Grouting & Finishing",
        description: "Professional grouting with appropriate materials, followed by cleaning and sealing where necessary to protect and enhance the finished appearance."
      },
      {
        step: "Step 5",
        title: "Final Inspection & Care",
        description: "Comprehensive inspection and detailed care instructions. We ensure every detail is perfect and provide guidance on maintaining your new tile work."
      }
    ],
    portfolio: [
      {
        title: "Modern Bathroom Tile",
        image: "/images/services/bathroom-renovations.jpg",
        alt: "Beautiful modern bathroom with tile walls and floor",
        description: "Complete bathroom tile installation with waterproofing and modern design patterns.",
        link: "/projects/bathroom-tile",
        linkTitle: "View Project"
      },
      {
        title: "Kitchen Backsplash",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Intricate kitchen backsplash tile work",
        description: "Custom backsplash installation with intricate patterns and premium materials.",
        link: "/projects/backsplash",
        linkTitle: "View Project"
      },
      {
        title: "Tile Floor Restoration",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Restored tile floors with new grout",
        description: "Expert tile and grout repair to restore old floors to like-new condition.",
        link: "/projects/tile-repair",
        linkTitle: "View Project"
      }
    ],
    faqs: [
      {
        question: "What types of tile do you install?",
        answer: "We install ceramic, porcelain, natural stone (marble, granite, travertine), glass, and mosaic tiles for floors, walls, and backsplashes. We can help you choose the best option for your space."
      },
      {
        question: "How long does tile installation take?",
        answer: "Timeline depends on the project scope. A bathroom might take 3-5 days, a kitchen backsplash 1-2 days, and larger floor installations 1-2 weeks. We provide detailed timelines for your project."
      },
      {
        question: "Do you provide waterproofing?",
        answer: "Yes, we provide comprehensive waterproofing for wet areas like showers and bathrooms. We use industry-standard waterproofing membranes and systems to ensure long-lasting protection."
      },
      {
        question: "Can you repair damaged tiles?",
        answer: "Absolutely. We can replace individual tiles, repair grout, and restore tile surfaces. We'll match existing tiles when possible and ensure seamless repairs."
      },
      {
        question: "What's included in tile installation?",
        answer: "Our service includes surface preparation, waterproofing (where needed), tile installation, grouting, sealing (where applicable), and cleanup. We handle all materials and ensure proper installation techniques."
      }
    ]
  },
  {
    slug: "interlocking",
    title: "Interlocking Paving",
    subtitle: "Beautiful, durable interlocking stone and paver installations.",
    heroImage: "/images/construction/interlocking-title.jpeg",
    introText: "Transform your outdoor spaces with professional interlocking paving services. From driveways and walkways to patios and pool decks, we create beautiful, durable surfaces that enhance your property's curb appeal and functionality.",
    bgImage: "/images/backgrounds/bg-5.jpg",
    whyChooseUs: {
      image: "/images/services/kitchen-renovations.jpg",
      title: "Why Choose Our Interlocking Services?",
      points: [
        "Expert installation of all interlocking materials",
        "Proper base preparation for durability",
        "Beautiful pattern designs and layouts",
        "Professional edging and finishing",
        "Comprehensive repair and maintenance"
      ]
    },
    types: [
      {
        title: "Driveways",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Durable interlocking driveways that withstand heavy vehicle traffic and harsh weather conditions."
      },
      {
        title: "Patios & Walkways",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Beautiful patio and walkway installations for outdoor living and entertainment spaces."
      },
      {
        title: "Pool Decks",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Slip-resistant interlocking surfaces perfect for pool areas and outdoor recreation spaces."
      }
    ],
    considerations: [
      {
        title: "Base Preparation",
        icon: "/stars.svg",
        description: "Proper base preparation is critical for interlocking durability. We ensure adequate excavation, proper drainage, and a stable base layer."
      },
      {
        title: "Drainage & Grading",
        icon: "/stars.svg",
        description: "Proper grading and drainage prevent water pooling and ensure long-lasting results. We design systems that direct water away from structures."
      },
      {
        title: "Material Selection",
        icon: "/stars.svg",
        description: "Choosing the right interlocking material based on traffic, climate, and aesthetic preferences. Options include concrete, natural stone, and permeable pavers."
      },
      {
        title: "Pattern & Design",
        icon: "/stars.svg",
        description: "Thoughtful pattern selection and layout design create visually appealing surfaces that complement your property's architecture and landscape."
      }
    ],
    process: [
      {
        step: "Step 1",
        title: "Design Consultation",
        description: "We discuss your vision, assess the site, and help you select materials and patterns. We create a design plan that maximizes both aesthetics and functionality."
      },
      {
        step: "Step 2",
        title: "Site Preparation",
        description: "Proper excavation, grading, and base preparation. We ensure adequate depth, proper drainage, and a stable foundation for the interlocking installation."
      },
      {
        step: "Step 3",
        title: "Base Installation",
        description: "Installation of proper base materials including gravel, sand, and compaction to create a stable foundation that prevents settling and shifting."
      },
      {
        step: "Step 4",
        title: "Interlocking Installation",
        description: "Precise installation of interlocking stones with proper spacing, alignment, and pattern execution. We ensure level surfaces and proper edge restraints."
      },
      {
        step: "Step 5",
        title: "Finishing & Sealing",
        description: "Final compaction, joint sand installation, and optional sealing. We ensure proper finishing and provide maintenance instructions for long-lasting beauty."
      }
    ],
    portfolio: [
      {
        title: "Interlocking Driveway",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Beautiful interlocking driveway installation",
        description: "Durable interlocking driveway with proper base and professional installation for long-lasting results.",
        link: "/projects/interlocking-driveway",
        linkTitle: "View Project"
      },
      {
        title: "Patio Installation",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Elegant interlocking patio",
        description: "Beautiful patio installation with intricate patterns perfect for outdoor entertaining.",
        link: "/projects/interlocking-patio",
        linkTitle: "View Project"
      },
      {
        title: "Walkway Restoration",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Restored interlocking walkway",
        description: "Expert repair and restoration of existing interlocking surfaces to like-new condition.",
        link: "/projects/walkway-restoration",
        linkTitle: "View Project"
      }
    ],
    faqs: [
      {
        question: "How long does interlocking installation take?",
        answer: "Timeline depends on project size and complexity. A small walkway might take 2-3 days, while a large driveway could take 1-2 weeks. Weather conditions can also affect timelines."
      },
      {
        question: "What's the difference between interlocking and regular pavers?",
        answer: "Interlocking pavers have special edges that lock together, providing better stability and load distribution. They're ideal for driveways and high-traffic areas, while regular pavers work well for patios and walkways."
      },
      {
        question: "Do you provide warranties?",
        answer: "Yes, we provide warranties on our installation work. The specific warranty terms depend on the project and materials used. We stand behind our craftsmanship and ensure proper installation."
      },
      {
        question: "Can you repair existing interlocking?",
        answer: "Absolutely. We can repair settling, replace damaged stones, re-level surfaces, and restore the appearance of existing interlocking installations. We'll assess the issues and provide solutions."
      },
      {
        question: "What maintenance is required?",
        answer: "Interlocking requires minimal maintenance. Regular sweeping, occasional power washing, and periodic joint sand replenishment keep surfaces looking great. We provide detailed maintenance instructions."
      }
    ]
  },
  {
    slug: "painting",
    title: "Painting Services",
    subtitle: "Professional interior and exterior painting for beautiful, lasting results.",
    heroImage: "/images/construction/painting-title.png",
    introText: "Transform your home with professional painting services. From interior walls and ceilings to exterior siding and trim, we deliver flawless finishes that enhance your property's beauty and value.",
    bgImage: "/images/backgrounds/bg-3.jpg",
    whyChooseUs: {
      image: "/images/services/kitchen-renovations.jpg",
      title: "Why Choose Our Painting Services?",
      points: [
        "Expert preparation and surface treatment",
        "High-quality paints and materials",
        "Flawless finish and attention to detail",
        "Interior and exterior painting expertise",
        "Clean, professional work environment"
      ]
    },
    types: [
      {
        title: "Interior Painting",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Professional interior painting for walls, ceilings, trim, and cabinets with careful preparation and flawless finishes."
      },
      {
        title: "Exterior Painting",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Durable exterior painting for siding, trim, doors, and decks with weather-resistant paints and proper surface preparation."
      },
      {
        title: "Specialty Finishes",
        image: "/images/services/kitchen-renovations.jpg",
        description: "Custom finishes including faux painting, texture work, and decorative techniques for unique design elements."
      }
    ],
    considerations: [
      {
        title: "Surface Preparation",
        icon: "/stars.svg",
        description: "Proper preparation is essential for lasting results. We clean, sand, patch, and prime surfaces to ensure optimal paint adhesion and finish quality."
      },
      {
        title: "Paint Selection",
        icon: "/stars.svg",
        description: "Choosing the right paint type and finish based on the surface, location (interior/exterior), and desired appearance. We recommend quality products for durability."
      },
      {
        title: "Color Consultation",
        icon: "/stars.svg",
        description: "Expert color consultation to help you select the perfect shades that complement your space, lighting, and design aesthetic."
      },
      {
        title: "Protection & Cleanup",
        icon: "/stars.svg",
        description: "Comprehensive protection of furniture, floors, and landscaping during painting, followed by thorough cleanup to leave your space spotless."
      }
    ],
    process: [
      {
        step: "Step 1",
        title: "Consultation & Color Selection",
        description: "We discuss your vision, assess the surfaces to be painted, and help you select colors and finishes. We provide samples and recommendations based on your preferences."
      },
      {
        step: "Step 2",
        title: "Surface Preparation",
        description: "Thorough preparation including cleaning, sanding, patching holes and cracks, and priming where necessary. Proper preparation ensures a flawless, long-lasting finish."
      },
      {
        step: "Step 3",
        title: "Protection & Setup",
        description: "Comprehensive protection of furniture, floors, fixtures, and landscaping. We set up a clean, organized work area to minimize disruption."
      },
      {
        step: "Step 4",
        title: "Professional Painting",
        description: "Expert application using quality paints and professional techniques. Multiple coats where needed, with careful attention to edges, trim, and detail work."
      },
      {
        step: "Step 5",
        title: "Final Inspection & Cleanup",
        description: "Thorough inspection of the finished work, touch-ups where needed, and complete cleanup. We remove all protection materials and leave your space ready to enjoy."
      }
    ],
    portfolio: [
      {
        title: "Complete Interior Paint",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Beautifully painted interior rooms",
        description: "Professional interior painting throughout the home with careful preparation and flawless finishes.",
        link: "/projects/interior-paint",
        linkTitle: "View Project"
      },
      {
        title: "Exterior Home Painting",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Freshly painted exterior with new color",
        description: "Complete exterior painting with proper preparation and weather-resistant paints for lasting beauty.",
        link: "/projects/exterior-paint",
        linkTitle: "View Project"
      },
      {
        title: "Cabinet Refinishing",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Refinished kitchen cabinets",
        description: "Expert cabinet painting and refinishing to transform kitchens and bathrooms without replacement.",
        link: "/projects/cabinet-paint",
        linkTitle: "View Project"
      }
    ],
    faqs: [
      {
        question: "How long does a painting project take?",
        answer: "Timeline depends on project size. A single room might take 1-2 days, while a full interior could take 1-2 weeks. Exterior painting typically takes 3-7 days depending on home size and weather conditions."
      },
      {
        question: "Do you provide color consultation?",
        answer: "Yes, we offer color consultation services to help you select the perfect colors for your space. We consider lighting, existing decor, and your preferences to create a cohesive color scheme."
      },
      {
        question: "What type of paint do you use?",
        answer: "We use high-quality paints from reputable manufacturers. We'll recommend the best paint type (latex, oil-based, specialty) and finish (flat, eggshell, satin, semi-gloss, gloss) based on the surface and application."
      },
      {
        question: "Do you move furniture?",
        answer: "We can move and protect furniture as part of our service. We'll discuss your preferences and ensure all items are properly protected during the painting process."
      },
      {
        question: "Can you paint over existing paint?",
        answer: "Yes, in most cases we can paint over existing paint after proper preparation. We'll assess the condition of existing paint and prepare surfaces accordingly to ensure optimal results."
      },
      {
        question: "What's included in your painting service?",
        answer: "Our service includes surface preparation, priming (where needed), painting, cleanup, and protection of your belongings. We use quality materials and provide detailed care instructions for your newly painted surfaces."
      }
    ]
  }
];

