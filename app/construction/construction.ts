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
      image: "/images/construction/drywall-installation-taping-mudding-finishing-contractor.webp",
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
        title: "New Drywall Installation",
        image: "/images/construction/new-drywall-installation-sheets-on-framing.avif",
        description: "Full drywall installation for new builds, additions, and renovations, including hanging, fastening, and rough finishing."
      },
      {
        title: "Drywall Repair & Patching",
        image: "/images/construction/drywall-repair-patching-hole-before-after.avif",
        description: "Repairs for holes, cracks, dents, and water-damaged areas with clean patches and blended finishes."
      },
      {
        title: "Taping, Mudding & Sanding",
        image: "/images/construction/drywall-taping-mudding-sanding-finishing.webp",
        description: "Professional joint taping, compound application, and sanding for smooth walls ready for primer and paint."
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
        image: "/images/construction/new-construction-drywall-install-seamless-walls-ceilings.jpg",
        alt: "Smooth, seamless walls throughout entire home",
        description: "Professional drywall installation for new construction, ensuring perfect walls and ceilings throughout.",
        link: "/projects/drywall-installation",
        linkTitle: "View Project"
      },
      {
        title: "Ceiling Repair & Texture Match",
        image: "/images/construction/ceiling-drywall-repair-texture-matching-popcorn-ceiling.webp",
        alt: "Repaired ceiling with perfectly matched texture",
        description: "Expert repair and texture matching to restore damaged ceilings to their original appearance.",
        link: "/projects/ceiling-repair",
        linkTitle: "View Project"
      },
      {
        title: "Basement Finishing",
        image: "/images/construction/basement-finishing-drywall-moisture-resistant-finished-basement.jpg",
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
      image: "/images/construction/hardwood-flooring-installation-modern-living-room.avif",
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
        image: "/images/construction/hardwood-flooring-installation-oak-maple-living-room.webp",
        description: "Classic hardwood installation and refinishing for timeless elegance and durability."
      },
      {
        title: "Laminate & Luxury Vinyl",
        image: "/images/construction/luxury-vinyl-plank-flooring-installation-modern.jpg",
        description: "Modern, affordable flooring options that mimic natural materials with easy maintenance."
      },
      {
        title: "Tile Flooring",
        image: "/images/construction/porcelain-floor-tile-installation-modern.jpg",
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
        image: "/images/construction/hardwood-flooring-installation-crew-sanding.jpg",
        alt: "Beautiful hardwood floors throughout home",
        description: "Professional hardwood installation with expert finishing for a timeless, elegant look.",
        link: "/projects/hardwood-installation",
        linkTitle: "View Project"
      },
      {
        title: "Luxury Vinyl Plank",
        image: "/images/construction/luxury-vinyl-plank-flooring-closeup-installed.jpg",
        alt: "Modern luxury vinyl flooring",
        description: "Waterproof luxury vinyl installation perfect for high-traffic areas and moisture-prone spaces.",
        link: "/projects/luxury-vinyl",
        linkTitle: "View Project"
      },
      {
        title: "Tile Floor Restoration",
        image: "/images/construction/tile-floor-regrout-restore-cleaning.jpg",
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
      image: "/images/construction/tile-installation-ceramic-porcelain-backsplash-contractor.webp",
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
        image: "/images/construction/modern-bathroom-shower-wall-tile-installation.webp",
        description: "Waterproof tile installation for showers, floors, and walls with proper waterproofing systems."
      },
      {
        title: "Kitchen Backsplashes",
        image: "/images/construction/subway-tile-kitchen-backsplash-installation.jpg",
        description: "Beautiful backsplash installations with intricate patterns and modern designs."
      },
      {
        title: "Floor Tile",
        image: "/images/construction/large-format-porcelain-floor-tile-installation.avif",
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
        image: "/images/construction/modern-bathroom-tile-shower-niche.webp",
        alt: "Beautiful modern bathroom with tile walls and floor",
        description: "Complete bathroom tile installation with waterproofing and modern design patterns.",
        link: "/projects/bathroom-tile",
        linkTitle: "View Project"
      },
      {
        title: "Kitchen Backsplash",
        image: "/images/construction/kitchen-backsplash-subway-tile-closeup.webp",
        alt: "Intricate kitchen backsplash tile work",
        description: "Custom backsplash installation with intricate patterns and premium materials.",
        link: "/projects/backsplash",
        linkTitle: "View Project"
      },
      {
        title: "Tile Floor Restoration",
        image: "/images/construction/tile-floor-regrout-restore-cleaning.jpg",
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
      image: "/images/construction/interlocking-paver-driveway-stone-walkway-patio.jpg",
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
        image: "/images/construction/driveway-interlocking.png",
        description: "Durable interlocking driveways that withstand heavy vehicle traffic and harsh weather conditions."
      },
      {
        title: "Patios & Walkways",
        image: "/images/construction/interlocking-paver-driveway-stone-walkway-patio.jpg",
        description: "Beautiful patio and walkway installations for outdoor living and entertainment spaces."
      },
      {
        title: "Pool Decks",
        image: "/images/construction/pool-deck-interlocking.jpg",
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
        image: "/images/construction/driveway-interlocking.png",
        alt: "Beautiful interlocking driveway installaion",
        description: "Durable interlocking driveway with proper base and professional installation for long-lasting results.",
        link: "/projects/interlocking-driveway",
        linkTitle: "View Project"
      },
      {
        title: "Patio Installation",
        image: "/images/construction/patio-interlocking.jpg",
        alt: "Elegant interlocking patio",
        description: "Beautiful patio installation with intricate patterns perfect for outdoor entertaining.",
        link: "/projects/interlocking-patio",
        linkTitle: "View Project"
      },
      {
        title: "Walkway Restoration",
        image: "/images/construction/walkway-interlocking.jpg",
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
      image: "/images/construction/professional-interior-house-painting-roller-brush.webp",
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
        image: "/images/construction/interior-house-painting-living-room-painter-rolling.png",
        description: "Professional interior painting for walls, ceilings, trim, and cabinets with careful preparation and flawless finishes."
      },
      {
        title: "Exterior Painting",
        image: "/images/construction/exterior-house-painting-crew-ladder-siding.jpg",
        description: "Durable exterior painting for siding, trim, doors, and decks with weather-resistant paints and proper surface preparation."
      },
      {
        title: "Specialty Finishes",
        image: "/images/construction/feature-wall-accent-paint-textured-finish.jpg",
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
        image: "/images/construction/freshly-painted-interior-walls-trim.jpg",
        alt: "Beautifully painted interior rooms",
        description: "Professional interior painting throughout the home with careful preparation and flawless finishes.",
        link: "/projects/interior-paint",
        linkTitle: "View Project"
      },
      {
        title: "Exterior Home Painting",
        image: "/images/construction/painted-exterior-house-modern-color-scheme.jpg",
        alt: "Freshly painted exterior with new color",
        description: "Complete exterior painting with proper preparation and weather-resistant paints for lasting beauty.",
        link: "/projects/exterior-paint",
        linkTitle: "View Project"
      },
      {
        title: "Cabinet Refinishing",
        image: "/images/construction/kitchen-cabinet-refinishing-spray-painting.jpg",
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
  },
  {
    slug: "framing",
    title: "Framing & Structural",
    subtitle: "Precision wood and steel framing for new builds, additions, and renovations across the GTA.",
    heroImage: "/images/construction/drywall-title.webp",
    introText: "Framing is the skeleton of every project. Whether it's a new custom home, a second-storey addition, or a structural wall removal, we build frames that are square, plumb, and engineered to carry the loads above. Our licensed crew works from structural drawings and coordinates with inspectors at every stage.",
    bgImage: "/images/backgrounds/bg-2.jpg",
    whyChooseUs: {
      image: "/images/services/custom-home-builders.jpg",
      title: "Why Choose EZU for Framing?",
      points: [
        "Licensed framing crew with custom home and addition experience",
        "Works from engineering drawings — no guesswork",
        "Inspections coordinated at every required stage",
        "Wood and light-gauge steel framing capabilities",
        "Clean, organized sites that keep subsequent trades on schedule",
      ],
    },
    considerations: [
      {
        title: "Structural Engineering",
        icon: "/stars.svg",
        description: "Load-bearing changes, additions, and beam installations require stamped engineering drawings. We coordinate engineers and ensure framing matches specs exactly.",
      },
      {
        title: "Permits & Inspections",
        icon: "/stars.svg",
        description: "Framing inspections are required before walls are closed. We schedule and pass all required inspections on the first visit.",
      },
      {
        title: "Material Selection & Moisture",
        icon: "/stars.svg",
        description: "We specify kiln-dried lumber where required and protect framing from weather exposure during construction.",
      },
      {
        title: "Coordination with Trades",
        icon: "/stars.svg",
        description: "Framing sets the schedule for all subsequent trades. We communicate openings, chases, and blocking requirements so nothing gets missed.",
      },
    ],
    process: [
      { step: "Step 1", title: "Drawing Review", description: "We review architectural and structural drawings, confirm material lists, and identify any conflicts before work begins." },
      { step: "Step 2", title: "Foundation & Layout", description: "We establish layout lines, confirm anchor bolt positions, and begin sill plate installation." },
      { step: "Step 3", title: "Wall & Floor Framing", description: "We frame walls, floors, and stairs in sequence, coordinating with the framing inspection at the required stage." },
      { step: "Step 4", title: "Roof Framing & Sheathing", description: "We complete roof structure, install sheathing, and ensure the building is weathertight before other trades begin." },
    ],
    portfolio: [
      { title: "Custom Home Framing", image: "/images/services/custom-home-builders.jpg", alt: "Custom home framing in progress", description: "Complete framing package for a 3,200 sq ft custom home in Markham.", link: "/projects", linkTitle: "View Projects" },
      { title: "Second Storey Addition", image: "/images/services/second-story-addition.jpg", alt: "Second storey addition framing", description: "Full second-storey addition framing integrated with existing structure.", link: "/projects", linkTitle: "View Projects" },
      { title: "Structural Wall Removal", image: "/images/services/structural-changes.jpg", alt: "Structural beam installation", description: "LVL beam installation for open-concept main floor conversion.", link: "/projects", linkTitle: "View Projects" },
    ],
    faqs: [
      { question: "Do I need engineering drawings for framing?", answer: "For any structural change, addition, or load-bearing work — yes. We coordinate engineers and ensure drawings are permit-ready." },
      { question: "What is light-gauge steel framing?", answer: "Light-gauge steel studs are used in commercial and some residential applications where non-combustible construction is required. We work in both wood and steel." },
      { question: "How do you handle existing load-bearing walls?", answer: "We identify bearing walls, design the temporary support, install beams to proper specifications, and coordinate the structural inspection." },
      { question: "Can you frame around unusual or complex roof lines?", answer: "Yes. We handle hip roofs, dormers, cathedral ceilings, and complex roof geometries — working from engineer-stamped drawings." },
    ],
  },
  {
    slug: "electrical",
    title: "Electrical",
    subtitle: "Licensed electrical installation and upgrade services for residential and light commercial projects in the GTA.",
    heroImage: "/images/construction/drywall-title.webp",
    introText: "Safe, code-compliant electrical work is non-negotiable. Our licensed electricians handle panel upgrades, rough-in for new construction, complete home rewires, EV charger installation, and all renovation electrical work. Every job is permitted and inspected by the Electrical Safety Authority (ESA).",
    bgImage: "/images/backgrounds/bg-3.jpg",
    whyChooseUs: {
      image: "/images/services/whole-home-renovation.jpg",
      title: "Why Choose EZU for Electrical?",
      points: [
        "Licensed electricians — ESA-inspected work",
        "Panel upgrades, rewires, and new construction rough-ins",
        "EV charger and smart home electrical integration",
        "All permits and ESA inspections managed for you",
        "Coordinated with other trades for clean, on-schedule execution",
      ],
    },
    considerations: [
      { title: "Panel Capacity", icon: "/stars.svg", description: "Older GTA homes often have undersized panels (60–100A). Most modern renovations require a 200A service upgrade. We assess capacity before any rough-in begins." },
      { title: "ESA Permits & Inspections", icon: "/stars.svg", description: "All electrical work requires an ESA permit and inspection. We pull permits and schedule inspections — work is never closed up before passing." },
      { title: "Code Compliance", icon: "/stars.svg", description: "Ontario Electrical Safety Code requirements for outlet spacing, GFCI/AFCI protection, and smoke/CO detector placement are strictly followed." },
      { title: "Smart Home Integration", icon: "/stars.svg", description: "We plan for smart switches, panels, EV chargers, and home automation wiring during rough-in — far cheaper than retrofitting after drywall." },
    ],
    process: [
      { step: "Step 1", title: "Load Assessment & Plan", description: "We assess existing panel capacity, map the new circuit requirements, and produce a permit-ready electrical plan." },
      { step: "Step 2", title: "ESA Permit", description: "We pull the ESA permit before any work begins. All inspections are scheduled at the required stages." },
      { step: "Step 3", title: "Rough-In", description: "We run conduit and wire, install boxes, and complete the rough-in before drywall — coordinated with framing and HVAC trades." },
      { step: "Step 4", title: "Trim-Out & ESA Inspection", description: "We install devices, fixtures, and panel connections, then complete the ESA final inspection before energizing." },
    ],
    portfolio: [
      { title: "200A Panel Upgrade", image: "/images/services/home-renovations.jpg", alt: "Electrical panel upgrade", description: "Full 200A service upgrade for a 1970s GTA home being renovated.", link: "/projects", linkTitle: "View Projects" },
      { title: "New Construction Electrical", image: "/images/services/custom-home-builders.jpg", alt: "New home electrical rough-in", description: "Complete electrical package for a custom home including smart panel and EV charger.", link: "/projects", linkTitle: "View Projects" },
      { title: "Kitchen Renovation Electrical", image: "/images/services/kitchen-renovations.jpg", alt: "Kitchen renovation electrical work", description: "Dedicated circuits, under-cabinet lighting, and GFCI outlets for a full kitchen renovation.", link: "/projects", linkTitle: "View Projects" },
    ],
    faqs: [
      { question: "Do I need an ESA permit for electrical work in Ontario?", answer: "Yes. Any electrical work beyond minor repairs requires an ESA permit and inspection. We manage this for every project." },
      { question: "When should I upgrade my electrical panel?", answer: "If your panel is under 200A, has fuses instead of breakers, or is a Federal Pacific or Zinsco panel — upgrade it. These are safety issues, not just inconveniences." },
      { question: "Can you install EV chargers?", answer: "Yes. We install Level 2 (240V) EV chargers and manage the ESA permit. We can also run the circuit during a renovation rough-in for lower cost." },
      { question: "What is AFCI protection and do I need it?", answer: "Arc-fault circuit interrupters are required by the Ontario Electrical Safety Code for bedrooms and most living areas in renovated spaces. We install them as standard." },
    ],
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    subtitle: "Licensed plumbing installation and rough-in for renovations, additions, and new construction across the GTA.",
    heroImage: "/images/construction/drywall-title.webp",
    introText: "Plumbing done wrong is expensive to fix after the fact. Our licensed plumbers handle drain rough-ins, fixture installation, water service upgrades, and all renovation plumbing. Every project is permitted by the local building authority and inspected before walls are closed.",
    bgImage: "/images/backgrounds/bg-4.jpg",
    whyChooseUs: {
      image: "/images/services/bathroom-renovations.jpg",
      title: "Why Choose EZU for Plumbing?",
      points: [
        "Licensed plumbers — permitted and inspected work",
        "Drain rough-ins, fixture installs, and water service upgrades",
        "Basement suite plumbing and backwater valve installation",
        "Coordinated with framing and electrical for clean rough-ins",
        "Camera inspection of existing drains on older homes",
      ],
    },
    considerations: [
      { title: "Drain Slope & Stack Proximity", icon: "/stars.svg", description: "Moving plumbing fixtures requires maintaining correct drain slope. We evaluate proximity to the main stack before committing to a layout." },
      { title: "Building Permits", icon: "/stars.svg", description: "All new plumbing rough-ins require a building permit and inspection. We manage permits and pass inspections before closing walls." },
      { title: "Backwater Valves", icon: "/stars.svg", description: "Toronto mandates backwater valves for many renovation permits. We install them correctly and coordinate the required inspection." },
      { title: "Water Pressure & Supply", icon: "/stars.svg", description: "Older homes may have galvanized supply lines that restrict flow. We assess and upgrade supply piping where required." },
    ],
    process: [
      { step: "Step 1", title: "Scope & Permit", description: "We define the plumbing scope, pull building permits, and confirm drain and supply routing before any demolition." },
      { step: "Step 2", title: "Drain Rough-In", description: "We cut and install drain lines, stack connections, and vent penetrations before framing is closed." },
      { step: "Step 3", title: "Supply Rough-In", description: "We run hot and cold supply lines, pressure-test the system, and coordinate the rough-in inspection." },
      { step: "Step 4", title: "Fixture Trim-Out", description: "We install all fixtures, faucets, and appliance connections after finishes, then do a final leak check and inspection." },
    ],
    portfolio: [
      { title: "Bathroom Addition Plumbing", image: "/images/services/bathroom-renovations.jpg", alt: "Bathroom plumbing rough-in", description: "Full plumbing rough-in for a new ensuite bathroom added to a second-storey addition.", link: "/projects", linkTitle: "View Projects" },
      { title: "Basement Suite Plumbing", image: "/images/services/basement-finishing.jpg", alt: "Basement suite plumbing installation", description: "Drain rough-in, backwater valve, and kitchen/bathroom plumbing for a legal basement suite.", link: "/projects", linkTitle: "View Projects" },
      { title: "Kitchen Plumbing Relocation", image: "/images/services/kitchen-renovations.jpg", alt: "Kitchen plumbing relocation", description: "Island sink drain and supply relocation for an open-concept kitchen renovation.", link: "/projects", linkTitle: "View Projects" },
    ],
    faqs: [
      { question: "Do I need a permit to move plumbing in Ontario?", answer: "Yes. Any new plumbing rough-in or fixture relocation requires a building permit and inspection in Ontario." },
      { question: "What is a backwater valve and do I need one?", answer: "A backwater valve prevents sewage from backing up into your home during storm events. Many Toronto building permits now require them — we install them as part of basement and renovation projects." },
      { question: "Can you relocate a kitchen sink to an island?", answer: "Yes. We route the drain through the floor with proper slope and run supply lines to the island location. We confirm feasibility based on joist direction before committing." },
      { question: "How do you prevent pipes from freezing in exterior walls?", answer: "We avoid running supply lines in exterior walls where possible. Where unavoidable, we use proper insulation placement and pipe insulation to prevent freezing." },
    ],
  },
  {
    slug: "insulation",
    title: "Insulation",
    subtitle: "High-performance insulation installation for new construction, renovations, and energy efficiency upgrades in the GTA.",
    heroImage: "/images/construction/drywall-title.webp",
    introText: "Insulation is the most cost-effective energy upgrade you can make. Done right, it reduces heating and cooling bills, eliminates drafts and cold floors, and significantly improves comfort. We install all insulation types — batt, blown-in, rigid foam, and spray foam — and specify the right system for each application.",
    bgImage: "/images/backgrounds/bg-5.jpg",
    whyChooseUs: {
      image: "/images/services/whole-home-renovation.jpg",
      title: "Why Choose EZU for Insulation?",
      points: [
        "Correct insulation spec for each application — no guesswork",
        "Air sealing integrated with insulation for maximum performance",
        "Blown-in, batt, rigid foam, and spray foam capabilities",
        "Ontario building code compliance for all assemblies",
        "Eligible projects identified for government rebate programs",
      ],
    },
    considerations: [
      { title: "Thermal Bridging", icon: "/stars.svg", description: "Framing members conduct heat out of the building. We use continuous rigid insulation layers to break thermal bridges in walls and roofs." },
      { title: "Air Sealing", icon: "/stars.svg", description: "Insulation without air sealing underperforms significantly. We integrate air barrier work with insulation installation for real-world results." },
      { title: "Vapour Control", icon: "/stars.svg", description: "In Ontario's climate, vapour control placement is critical. We specify vapour barriers and retarders based on the assembly type and climate zone." },
      { title: "Government Rebates", icon: "/stars.svg", description: "Canada Greener Homes and Ontario rebate programs can offset insulation upgrade costs. We identify eligible measures during the scope phase." },
    ],
    process: [
      { step: "Step 1", title: "Assessment & Specification", description: "We assess existing insulation levels, identify deficiencies, and specify the right insulation system for each area of the building." },
      { step: "Step 2", title: "Air Sealing", description: "We seal all penetrations, plate lines, and junction boxes before insulation is installed — this step is what makes insulation actually perform." },
      { step: "Step 3", title: "Insulation Installation", description: "We install insulation to specified R-values and thickness, ensuring no voids, compression, or missing areas." },
      { step: "Step 4", title: "Inspection & Documentation", description: "We document installed R-values for permit records and rebate applications, and coordinate any required building inspections." },
    ],
    portfolio: [
      { title: "Attic Blown-In Insulation", image: "/images/services/home-renovations.jpg", alt: "Attic blown-in insulation installation", description: "R-60 blown-in insulation upgrade for a 1980s GTA home — 30% reduction in heating costs.", link: "/projects", linkTitle: "View Projects" },
      { title: "New Home Wall Insulation", image: "/images/services/custom-home-builders.jpg", alt: "New home wall insulation", description: "High-performance wall assembly with continuous rigid foam for a new custom home build.", link: "/projects", linkTitle: "View Projects" },
      { title: "Basement Insulation", image: "/images/services/basement-finishing.jpg", alt: "Basement insulation installation", description: "Spray foam rim joists and rigid foam wall insulation for a basement finishing project.", link: "/projects", linkTitle: "View Projects" },
    ],
    faqs: [
      { question: "What R-value do I need in Ontario?", answer: "Ontario Building Code requires R-31 in above-grade walls, R-31 in basement walls, and R-50+ in attics for new construction. We spec to code minimums or higher." },
      { question: "Is spray foam worth the extra cost?", answer: "In rim joists, crawl spaces, and cathedral ceilings — yes. Spray foam provides both insulation and air sealing in one step. In open wall cavities, batts or blown-in are usually more cost-effective." },
      { question: "Can I get government rebates for insulation upgrades?", answer: "Yes. Canada Greener Homes and Enbridge rebate programs cover attic, wall, and basement insulation upgrades. We identify eligible measures and help you access available rebates." },
      { question: "What is the difference between vapour barrier and air barrier?", answer: "A vapour barrier slows moisture diffusion; an air barrier stops air movement. You need both — and they are often in different locations in the wall assembly depending on the climate zone." },
    ],
  },
  {
    slug: "windows-doors",
    title: "Windows & Doors",
    subtitle: "Energy-efficient window and door replacement and installation for GTA homes.",
    heroImage: "/images/construction/drywall-title.webp",
    introText: "Windows and doors are the largest source of heat loss in most GTA homes. We supply and install ENERGY STAR certified windows and doors — casements, sliders, picture windows, patio doors, entry doors, and more — with proper flashing, air sealing, and trim to ensure long-term performance.",
    bgImage: "/images/backgrounds/bg-2.jpg",
    whyChooseUs: {
      image: "/images/services/home-additions.jpg",
      title: "Why Choose EZU for Windows & Doors?",
      points: [
        "ENERGY STAR certified products for the Ontario climate zone",
        "Proper flashing and air sealing — not just product installation",
        "Supply-and-install service with one point of responsibility",
        "Eligible for Canada Greener Homes rebates",
        "Interior and exterior trim matching your home's style",
      ],
    },
    considerations: [
      { title: "Energy Performance Ratings", icon: "/stars.svg", description: "ER (Energy Rating) and U-factor matter more than marketing claims. We specify windows with ratings appropriate for Ontario's climate zone." },
      { title: "Flashing & Water Management", icon: "/stars.svg", description: "Most window failures start with improper flashing, not window quality. We flash every opening correctly — sill pan, jambs, and head — before installation." },
      { title: "Air Sealing at Rough Opening", icon: "/stars.svg", description: "The gap between the window frame and rough opening must be air-sealed with low-expansion foam and tape. We treat this as a non-negotiable step." },
      { title: "Interior & Exterior Trim", icon: "/stars.svg", description: "We complete casing, sills, and exterior trim to match your home's existing style — the installation looks finished, not patched." },
    ],
    process: [
      { step: "Step 1", title: "Measurement & Product Selection", description: "We measure all openings, review performance requirements, and help you select products that match your style and energy goals." },
      { step: "Step 2", title: "Order & Lead Time", description: "We order product with confirmed lead times so installation can be scheduled with confidence." },
      { step: "Step 3", title: "Installation & Flashing", description: "We remove existing units, flash the opening, install the new window or door, and air-seal the perimeter." },
      { step: "Step 4", title: "Trim & Finishing", description: "We install interior and exterior trim, check operation, and clean up the work area." },
    ],
    portfolio: [
      { title: "Whole Home Window Replacement", image: "/images/services/home-renovations.jpg", alt: "New windows installed on GTA home", description: "22-window replacement project with ENERGY STAR triple-pane units — significant reduction in drafts and heating bills.", link: "/projects", linkTitle: "View Projects" },
      { title: "New Front Entry Door", image: "/images/services/home-additions.jpg", alt: "New insulated front door installation", description: "Insulated fibreglass entry door with sidelights and transom — improved security, insulation, and curb appeal.", link: "/projects", linkTitle: "View Projects" },
      { title: "Patio Door Replacement", image: "/images/services/house-sunroom.jpg", alt: "New sliding patio door installation", description: "8-foot sliding patio door with Low-E glass and thermal break frame replacing a dated unit.", link: "/projects", linkTitle: "View Projects" },
    ],
    faqs: [
      { question: "What is an ENERGY STAR window?", answer: "ENERGY STAR certified windows meet minimum thermal performance standards for their climate zone. In Ontario, look for ENERGY STAR Most Efficient or windows with ER ≥ 34 and U-factor ≤ 1.22." },
      { question: "Can I get rebates for window replacement?", answer: "Yes. Canada Greener Homes and Enbridge offer rebates for ENERGY STAR certified window and door replacements. We identify eligible products and help with rebate applications." },
      { question: "How long do window replacements take?", answer: "Most window replacement projects complete in 1–3 days depending on the number of units. Lead times for the product are typically 4–8 weeks." },
      { question: "Do you replace just the glass or the full frame?", answer: "We typically replace the full window unit (frame and glass) for best performance. Insert replacements are possible where the existing frame is in good condition." },
    ],
  },
  {
    slug: "exterior-cladding",
    title: "Exterior Cladding & Siding",
    subtitle: "Durable, weather-tight exterior cladding installation and replacement for GTA homes.",
    heroImage: "/images/construction/drywall-title.webp",
    introText: "Exterior cladding is your home's first line of defense against Ontario weather. We install and replace all types of residential cladding — vinyl, fibre cement, engineered wood, brick veneer, and stucco — with proper water-resistive barriers, drainage planes, and flashing details that protect the structure for decades.",
    bgImage: "/images/backgrounds/bg-3.jpg",
    whyChooseUs: {
      image: "/images/services/home-renovations.jpg",
      title: "Why Choose EZU for Exterior Cladding?",
      points: [
        "Proper WRB (water-resistive barrier) and drainage plane installation",
        "All cladding types: vinyl, fibre cement, brick, stone veneer, stucco",
        "Integrated flashing at windows, doors, and penetrations",
        "Full exterior packages: cladding, trim, soffits, and fascia",
        "Curb appeal and property value improvement",
      ],
    },
    considerations: [
      { title: "Water-Resistive Barrier", icon: "/stars.svg", description: "No cladding is completely waterproof. The WRB behind the cladding is what keeps water out of the wall assembly. We install it correctly every time." },
      { title: "Flashings at Penetrations", icon: "/stars.svg", description: "Windows, doors, and utility penetrations are the most common leak points. We flash every penetration with compatible materials and proper lapping." },
      { title: "Cladding Attachment & Clearances", icon: "/stars.svg", description: "Proper fastening schedules and ground clearances prevent premature failure. We follow manufacturer specs and OBC requirements for every material." },
      { title: "Exterior Insulation Integration", icon: "/stars.svg", description: "Adding continuous rigid foam insulation under new cladding significantly improves wall thermal performance. We integrate insulation upgrades with re-cladding projects." },
    ],
    process: [
      { step: "Step 1", title: "Assessment & Material Selection", description: "We assess existing cladding condition, recommend material options based on your goals and budget, and produce a scope for the project." },
      { step: "Step 2", title: "Demolition & WRB Installation", description: "We remove existing cladding, inspect sheathing for damage, and install the water-resistive barrier and any exterior insulation." },
      { step: "Step 3", title: "Cladding Installation", description: "We install cladding with correct fastening, alignment, and joint detailing — including all flashing at windows, doors, and transitions." },
      { step: "Step 4", title: "Trim, Soffits & Finishing", description: "We install trim, corner boards, soffits, fascia, and caulking, then complete a full perimeter inspection before sign-off." },
    ],
    portfolio: [
      { title: "Full Fibre Cement Re-Clad", image: "/images/services/home-renovations.jpg", alt: "Fibre cement siding installation", description: "Complete re-cladding of a 1970s GTA home with Hardie fibre cement board and batten.", link: "/projects", linkTitle: "View Projects" },
      { title: "Vinyl Siding Replacement", image: "/images/services/home-additions.jpg", alt: "Vinyl siding installation", description: "Full vinyl siding replacement with continuous rigid foam insulation upgrade.", link: "/projects", linkTitle: "View Projects" },
      { title: "Stone Veneer Accent", image: "/images/services/estate-home.jpg", alt: "Stone veneer cladding accent", description: "Manufactured stone veneer accent panels added to the front facade of a renovated home.", link: "/projects", linkTitle: "View Projects" },
    ],
    faqs: [
      { question: "What is the best siding material for the GTA climate?", answer: "Fibre cement (Hardie) and engineered wood are the top performers for durability, dimensional stability, and aesthetics in Ontario's freeze-thaw climate. Vinyl is more affordable but expands and contracts more with temperature swings." },
      { question: "How long does exterior re-cladding take?", answer: "A full exterior re-cladding project typically takes 2–4 weeks depending on home size, material selection, and any sheathing repairs required." },
      { question: "Can you add insulation when replacing siding?", answer: "Yes. Re-cladding is the ideal time to add continuous rigid foam insulation under the new cladding. This is one of the most cost-effective ways to improve wall thermal performance." },
      { question: "Does new siding require a building permit?", answer: "Replacing like-for-like siding typically does not require a permit. Structural changes, adding insulation, or changing the cladding system type may require one. We confirm before starting." },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing",
    subtitle: "Professional residential roofing installation, replacement, and repair for GTA homes.",
    heroImage: "/images/construction/drywall-title.webp",
    introText: "A failing roof puts everything below it at risk. We install, replace, and repair residential roofs in the GTA — asphalt shingles, architectural shingles, flat roofing membranes, and metal roofing — with proper underlayment, ventilation, and flashing details that protect your home for decades.",
    bgImage: "/images/backgrounds/bg-4.jpg",
    whyChooseUs: {
      image: "/images/services/home-renovations.jpg",
      title: "Why Choose EZU for Roofing?",
      points: [
        "Proper ventilation designed into every roof system",
        "Correct ice-and-water shield installation for Ontario winters",
        "All flashing replaced or re-flashed — not just shingles",
        "Manufacturer warranty-compliant installation methods",
        "Clean job sites — all debris removed and disposed of daily",
      ],
    },
    considerations: [
      { title: "Attic Ventilation", icon: "/stars.svg", description: "Inadequate attic ventilation causes ice dams, premature shingle failure, and moisture problems. We assess and correct ventilation as part of every roof replacement." },
      { title: "Ice & Water Shield", icon: "/stars.svg", description: "Ontario Building Code requires ice-and-water shield at eaves and valleys. We install it correctly and extend it where icing conditions demand it." },
      { title: "Flashing at Penetrations", icon: "/stars.svg", description: "Most roof leaks originate at chimneys, skylights, and wall-to-roof intersections — not through the shingles. We replace or re-flash all penetrations." },
      { title: "Decking Condition", icon: "/stars.svg", description: "We inspect sheathing during tear-off and replace any rotted or delaminated sections before new roofing goes down." },
    ],
    process: [
      { step: "Step 1", title: "Inspection & Scope", description: "We inspect existing roofing, assess ventilation, identify any structural issues, and provide a detailed scope and material specification." },
      { step: "Step 2", title: "Tear-Off & Decking Inspection", description: "We remove existing roofing, inspect and repair sheathing, and address any ventilation corrections before new material goes down." },
      { step: "Step 3", title: "Underlayment & Ice Shield", description: "We install ice-and-water shield at eaves and valleys, then synthetic underlayment across the deck before shingles or membrane." },
      { step: "Step 4", title: "Shingles, Flashing & Cleanup", description: "We install shingles or membrane, flash all penetrations and transitions, install ridge cap, and complete a thorough cleanup." },
    ],
    portfolio: [
      { title: "Full Roof Replacement", image: "/images/services/home-renovations.jpg", alt: "Asphalt shingle roof replacement", description: "Complete tear-off and replacement of a 3,000 sq ft GTA home with architectural shingles.", link: "/projects", linkTitle: "View Projects" },
      { title: "Flat Roof Membrane", image: "/images/services/home-additions.jpg", alt: "Flat roof membrane installation", description: "TPO membrane installation on a low-slope addition roof with proper drainage and insulation.", link: "/projects", linkTitle: "View Projects" },
      { title: "Chimney Re-Flashing", image: "/images/services/custom-home-builders.jpg", alt: "Chimney flashing repair", description: "Chimney re-step-flashing and counter-flashing to resolve chronic leak at a 1960s chimney.", link: "/projects", linkTitle: "View Projects" },
    ],
    faqs: [
      { question: "How do I know when my roof needs replacing?", answer: "Signs include curling, missing, or granule-shedding shingles, visible sagging, interior water stains, or a roof over 20–25 years old. We provide free inspections." },
      { question: "How long does an asphalt shingle roof last in Ontario?", answer: "Quality architectural shingles last 25–35 years with proper installation and ventilation. Basic 3-tab shingles typically last 15–20 years." },
      { question: "What causes ice dams?", answer: "Ice dams form when heat escapes through the roof deck and melts snow, which then refreezes at the cold eaves. The solution is proper attic insulation and ventilation — not just more ice shield." },
      { question: "Can you repair a section of my roof, or does the whole thing need to go?", answer: "It depends on the extent of damage and age of the existing roofing. We inspect honestly and recommend repair when it makes financial sense, replacement when it doesn't." },
    ],
  },
];

