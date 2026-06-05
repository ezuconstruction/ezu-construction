export interface ServiceData {
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
  types: {
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

export const servicesData: ServiceData[] = [
  {
    slug: "custom-homes",
    title: "Custom Homes",
    subtitle: "Building your dream home from the ground up, tailored to your unique vision.",
    heroImage: "/images/services/custom-home-title.jpg",
    introText: "A custom home is the one time you get to design around how you actually live - not how a builder guessed someone might live. We handle the full design to build process, from early feasibility to construction, and final finishes, so the project stays coherent, predictable, and high quality.",
    whyChooseUs: {
      image: "/images/services/custom-home-builders.jpg",
      title: "Why Build Your Custom Home with Us?",
      points: [
        "Personalized design-build approach for unique homes",
        "Expert guidance from land acquisition to final touches",
        "Uncompromising quality and superior craftsmanship",
        "Transparent processes and clear communication",
        "Commitment to delivering your home on time and on budget",
      ],
    },
    types: [
      {
        title: "Modern & Contemporary",
        image: "/images/services/modern-home.jpg",
        description: "Clean lines, open spaces, large windows, and innovative materials define these cutting-edge homes.",
      },
      {
        title: "Transitional Style",
        image: "/images/services/traditional-home.jpg",
        description: "A harmonious blend of traditional and contemporary elements, offering comfort with a modern edge.",
      },
      {
        title: "Luxury & Estate Homes",
        image: "/images/services/estate-home.jpg",
        description: "Bespoke designs, premium materials, and expansive layouts tailored for ultimate comfort and prestige.",
      },
    ],
    considerations: [
      {
        title: "Site Selection & Feasibility",
        icon: "/stars.svg",
        description: "We assess lot constraints (setbacks, grading, access, services, and neighbourhood rules) early so the design and budget are grounded in reality.",
      },
      {
        title: "Budgeting & Financial Planning",
        icon: "/stars.svg",
        description: "We build a detailed scope and allowances plan up front, then track changes transparently so you stay in control of costs from start to finish.",
      },
      {
        title: "Sustainable & Energy-Efficient Design",
        icon: "/stars.svg",
        description: "High-performance envelopes, smart HVAC planning, and durable materials reduce operating costs and improve comfort year-round.",
      },
      {
        title: "Material Selection & Sourcing",
        icon: "/stars.svg",
        description: "We guide selections for structural systems and finishes, balancing availability, lead times, durability, and the look you want.",
      },
    ],
    process: [
      {
        step: "Phase 1",
        title: "Vision & Site Assessment",
        description: "We define goals, priorities, and must-haves, then evaluate the site to confirm what is practical within zoning, budget, and timeline.",
      },
      {
        step: "Phase 2",
        title: "Architectural Design & Permitting",
        description: "We develop layouts, elevations, and construction-ready details, coordinate consultants as needed, and manage the permit process.",
      },
      {
        step: "Phase 3",
        title: "Pre-Construction & Material Sourcing",
        description: "We finalize specifications, confirm allowances, order long-lead items, and lock in a schedule so construction can run smoothly.",
      },
      {
        step: "Phase 4",
        title: "Construction & Quality Assurance",
        description: "We build with disciplined site management, inspections, and milestone check-ins, keeping you updated and ensuring workmanship meets expectations.",
      },
    ],
    portfolio: [
      {
        title: "Modern Oasis",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Sleek lines and expansive windows for contemporary living.",
        description: "Designing and building modern homes that blend innovative architecture with functional elegance.",
        link: "/projects/modern-oasis",
        linkTitle: "Explore Modern",
      },
      {
        title: "Traditional Elegance",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Classic design with timeless appeal and intricate details.",
        description: "Crafting homes that embody traditional charm, offering comfort and enduring beauty.",
        link: "/projects/traditional-elegance",
        linkTitle: "Discover Classic",
      },
      {
        title: "Luxury Estate",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Grand scale and bespoke finishes for unparalleled luxury.",
        description: "Building high-end estates with custom amenities and exquisite craftsmanship for discerning clients.",
        link: "/projects/luxury-estate",
        linkTitle: "View Luxury",
      },
    ],
    faqs: [
      {
        question: "How long does a custom home take in the GTA?",
        answer: "Most projects run several months to over a year depending on complexity, permitting, and material lead times. The best way to shorten the timeline is strong early planning and ordering long-lead items before construction starts.",
      },
      {
        question: "Can you help with design, engineering, and permits?",
        answer: "Yes. We coordinate design, required consultants, and permitting as part of a design-build workflow so the drawings, budget, and construction plan stay aligned.",
      },
      {
        question: "How do changes affect pricing?",
        answer: "Changes are priced and documented before proceeding. You see the cost and schedule impact up front, not after the fact.",
      },
      {
        question: "Do you build energy-efficient homes?",
        answer: "Yes. We can incorporate higher-performance insulation, air sealing, efficient HVAC, and smart material choices based on your goals and budget.",
      },
    ],
    bgImage: "/images/backgrounds/bg-2.jpg",
  },
  {
    slug: "home-renovations",
    title: "Home Renovations",
    subtitle: "Transforming your living space with quality craftsmanship and timeless design in the GTA.",
    heroImage: "/images/services/home-renovation-title.jpg",
    introText: "Renovations should solve problems, not create new ones. We plan the scope, design, and sequencing so structural work, mechanicals, and finishes come together cleanly. The result is a home that functions better, looks better, and is built to last.",
    whyChooseUs: {
      image: "/images/services/whole-home-renovation.jpg",
      title: "Why Choose Us for Your Renovation?",
      points: [
        "Full-service design-build expertise",
        "Licensed, insured, and experienced professionals",
        "Transparent pricing and detailed project plans",
        "Commitment to quality craftsmanship and timely completion",
        "Personalized approach tailored to your unique needs",
      ],
    },
    types: [
      {
        title: "Full Home Remodels",
        image: "/images/services/full-home-remodel.jpeg",
        description: "Comprehensive renovations covering multiple rooms or the entire house, ensuring a unified design.",
      },
      {
        title: "Basement Finishing & Development",
        image: "/images/services/basement-finishing.jpg",
        description: "Transforming unfinished basements into functional living areas, rental units, or custom spaces.",
      },
      {
        title: "Structural & Layout Changes",
        image: "/images/services/structural-changes.jpg",
        description: "Modifying floor plans, removing walls, or adding structural elements to optimize space and flow.",
      },
    ],
    considerations: [
      {
        title: "Layout & Structural Changes",
        icon: "/stars.svg",
        description: "Removing walls or changing room layouts can require beams, posts, and engineering. We validate structure before design decisions become expensive.",
      },
      {
        title: "Permits, Codes, and Building Constraints",
        icon: "/stars.svg",
        description: "We confirm what requires permits and ensure work meets Ontario Building Code requirements, including fire separations, egress, and electrical/plumbing rules.",
      },
      {
        title: "Budget & Scope Control",
        icon: "/stars.svg",
        description: "We set realistic allowances and document the scope so you can compare options without scope creep quietly inflating costs.",
      },
      {
        title: "Materials, Finishes, and Lead Times",
        icon: "/stars.svg",
        description: "Flooring, cabinetry, tile, and fixtures can have long lead times. We plan selections early to avoid delays and substitutions you do not want.",
      },
    ],
    process: [
      {
        step: "Step 1",
        title: "Consultation & Goals",
        description: "We walk through the space, identify pain points, and set clear priorities and constraints (budget, timeline, and must-haves).",
      },
      {
        step: "Step 2",
        title: "Design & Detailed Scope",
        description: "We produce a plan and finish direction, then convert that into a detailed scope and estimate so decisions are explicit and comparable.",
      },
      {
        step: "Step 3",
        title: "Build Preparation",
        description: "We handle permits (when needed), finalize materials, and schedule trades. This is where we prevent mid-project surprises.",
      },
      {
        step: "Step 4",
        title: "Construction & Close-Out",
        description: "We execute the work with site supervision and quality checks, then complete deficiencies and a final walkthrough before handover.",
      },
    ],
    portfolio: [
      {
        title: "Whole Home Transformation",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Complete overhaul of an entire residential property.",
        description: "Bringing your entire home up to modern standards with a cohesive design and enhanced functionality.",
        link: "/projects/whole-home-transformation",
        linkTitle: "View Project",
      },
      {
        title: "Basement Development",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Converting an unfinished basement into livable space.",
        description: "Unlock hidden potential by transforming your basement into a new apartment, entertainment area, or extra bedrooms.",
        link: "/projects/basement-development",
        linkTitle: "View Project",
      },
      {
        title: "Exterior Facelift",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Modernizing the exterior facade and landscaping.",
        description: "Boost curb appeal and property value with updated siding, roofing, windows, and outdoor living spaces.",
        link: "/projects/exterior-facelift",
        linkTitle: "View Project",
      },
    ],
    faqs: [
      {
        question: "Do I need a permit for my renovation?",
        answer: "Often, yes-especially for structural changes, additions, new plumbing layouts, or electrical work. We identify permit requirements early and handle the process when applicable.",
      },
      {
        question: "Can we live in the home during the renovation?",
        answer: "Sometimes. It depends on scope, dust/noise, kitchen/bath access, and safety. For major work, temporary relocation is usually the least stressful option.",
      },
      {
        question: "How do you manage unexpected issues in older homes?",
        answer: "We plan contingency where appropriate and communicate immediately when conditions differ from assumptions (e.g., hidden water damage or outdated wiring). Decisions are documented before extra work proceeds.",
      },
      {
        question: "How do you keep projects on schedule?",
        answer: "By locking in scope, ordering materials early, sequencing trades properly, and avoiding mid-stream design changes that force rework.",
      },
    ],
    bgImage: "/images/backgrounds/bg-3.jpg",
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    subtitle: "Expand your living space and enhance your home's value with seamless additions.",
    heroImage: "/images/services/home-addition-title.jpg",
    introText: "A well-designed addition should feel like it was always part of the house. We plan structure, rooflines, mechanicals, and exterior finishes so the new space integrates cleanly, performs well, and supports long-term value.",
    whyChooseUs: {
      image: "/images/services/home-additions.jpg",
      title: "Why Choose Us for Your Home Addition?",
      points: [
        "Expertise in complex structural and design integration",
        "Meticulous planning to ensure seamless transitions",
        "Comprehensive permit and zoning navigation",
        "Quality craftsmanship that extends your home's lifespan",
        "Dedicated project management for a smooth build",
      ],
    },
    types: [
      {
        title: "Second-Story Additions",
        image: "/images/services/second-story-addition.jpg",
        description: "Adding a new floor or expanding an existing one upwards, ideal for maximizing space on smaller lots.",
      },
      {
        title: "Rear & Side Extensions",
        image: "/images/services/side-extention.jpg",
        description: "Expanding your home outwards to create larger kitchens, family rooms, or new bedrooms.",
      },
      {
        title: "Sunrooms & Conservatories",
        image: "/images/services/house-sunroom.jpg",
        description: "Bright, climate-controlled spaces that extend your living area and bring the outdoors in.",
      },
    ],
    considerations: [
      {
        title: "Structural Integration",
        icon: "/stars.svg",
        description: "Additions often require new foundations, beams, or tie-ins to existing framing. We engineer the connection so loads transfer correctly and cracking is minimized.",
      },
      {
        title: "Zoning, Setbacks, and Permits",
        icon: "/stars.svg",
        description: "We confirm allowable footprint, height, and coverage, then manage permits and inspections so the addition is legal and insurable.",
      },
      {
        title: "Matching Exterior & Building Systems",
        icon: "/stars.svg",
        description: "We align cladding, roofing, insulation, windows, and mechanical systems so the addition looks consistent and performs like the rest of the home-or better.",
      },
      {
        title: "Timeline & Household Impact",
        icon: "/stars.svg",
        description: "We sequence demolition, framing, and interior work to reduce disruption, with clear milestones so you know what to expect week to week.",
      },
    ],
    process: [
      {
        step: "Step 1",
        title: "Feasibility & Concept Planning",
        description: "We review your goals and property constraints, then outline viable options with a realistic budget and schedule range.",
      },
      {
        step: "Step 2",
        title: "Design, Engineering & Approvals",
        description: "We develop drawings, coordinate required engineering, and submit for permits so the build is compliant and constructible.",
      },
      {
        step: "Step 3",
        title: "Site Prep & Structural Work",
        description: "We prepare the site, build foundations and framing, and complete tie-ins to the existing home with careful weatherproofing.",
      },
      {
        step: "Step 4",
        title: "Finishes & Final Inspection",
        description: "We complete mechanicals and interior finishes, then close out with inspections, deficiencies, and final handover.",
      },
    ],
    portfolio: [
      {
        title: "Second-Story Extension",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Adding an entire new floor to an existing bungalow.",
        description: "Expand upwards to gain significant living space without sacrificing yard area.",
        link: "/projects/second-story-addition",
        linkTitle: "View Project",
      },
      {
        title: "Rear Family Room Addition",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Seamlessly integrated new family room at the back of the house.",
        description: "Create spacious new living areas, perfect for entertaining or growing families.",
        link: "/projects/family-room-addition",
        linkTitle: "View Project",
      },
      {
        title: "Garage Conversion & Loft",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Transforming a garage into living space with an overhead loft.",
        description: "Repurpose underutilized spaces into functional, stylish new rooms.",
        link: "/projects/garage-conversion",
        linkTitle: "View Project",
      },
    ],
    faqs: [
      {
        question: "Will a home addition increase resale value?",
        answer: "Usually, yes-if the addition is well integrated, legally permitted, and adds high-demand space (bedrooms, bathrooms, or a larger main floor). The best ROI comes from additions that improve layout and usability, not just square footage.",
      },
      {
        question: "Can you match my existing exterior?",
        answer: "Yes. We plan cladding, trim, and roofing to match closely, and we can also modernize the whole exterior if an exact match is impractical.",
      },
      {
        question: "How long does an addition typically take?",
        answer: "It depends on size and complexity, but additions are multi-month projects. Permitting and long-lead materials can be as impactful as the construction itself.",
      },
      {
        question: "Do you handle permits and inspections?",
        answer: "Yes. We coordinate drawings, submissions, and the inspection sequence so approvals do not become a bottleneck.",
      },
    ],
    bgImage: "/images/backgrounds/bg-4.jpg",
  },
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    subtitle: "Crafting functional, beautiful, and inspiring kitchens for your home.",
    heroImage: "/images/services/kitchen-renovation-title.jpg",
    introText: "Kitchens fail for predictable reasons: poor workflow, not enough storage, bad lighting, and materials that do not survive real use. We redesign kitchens around how you cook and live-then build them with durable finishes, clean detailing, and disciplined project management.",
    whyChooseUs: {
      image: "/images/services/kitchen-renovations.jpg",
      title: "Why Trust Us with Your Kitchen?",
      points: [
        "Specialized expertise in modern kitchen design & build",
        "Seamless integration of smart appliances and tech",
        "Innovative storage solutions for every kitchen size",
        "Premium material selection for durability and style",
        "Dedicated project management from concept to completion",
      ],
    },
    types: [
      {
        title: "Full Kitchen Remodel",
        image: "/images/services/kitchen-remodel.png",
        description: "Complete transformation including layout changes, new cabinetry, countertops, and appliances.",
      },
      {
        title: "Kitchen Refresh & Update",
        image: "/images/services/kitchen-refresh.jpg",
        description: "Cosmetic updates like new paint, backsplash, countertop replacement, or cabinet refacing for a fresh look.",
      },
      {
        title: "Open-Concept Kitchen Conversion",
        image: "/images/services/open-concept-kitchen.jpg",
        description: "Removing walls to create a spacious, integrated kitchen, dining, and living area.",
      },
    ],
    considerations: [
      {
        title: "Layout, Workflow & Clearances",
        icon: "/stars.svg",
        description: "We design around prep, cooking, cleanup, and traffic flow. Proper clearances around islands and appliances prevent daily frustration.",
      },
      {
        title: "Cabinetry, Storage & Function",
        icon: "/stars.svg",
        description: "Smart storage (pantries, pull-outs, corner solutions) often matters more than extra square footage. We design cabinetry around your habits.",
      },
      {
        title: "Electrical, Plumbing & Ventilation",
        icon: "/stars.svg",
        description: "Lighting plans, outlet placement, and proper exhaust ventilation are non-negotiable for a kitchen that feels good and stays clean.",
      },
      {
        title: "Appliance Integration & Lead Times",
        icon: "/stars.svg",
        description: "Appliance specs affect cabinet sizing, power, plumbing, and venting. We confirm selections early to avoid costly redesigns.",
      },
    ],
    process: [
      {
        step: "Step 1",
        title: "Needs Assessment & Measurements",
        description: "We review your current kitchen's pain points, take detailed measurements, and define priorities (storage, seating, appliances, and style).",
      },
      {
        step: "Step 2",
        title: "Design, Selections & Pricing",
        description: "We create a layout and finish plan, then convert that into a detailed scope with allowances so you can make informed tradeoffs.",
      },
      {
        step: "Step 3",
        title: "Permits, Ordering & Scheduling",
        description: "Where required, we handle permits and coordinate ordering of cabinets, counters, fixtures, and long-lead appliances before demolition starts.",
      },
      {
        step: "Step 4",
        title: "Build, Install & Final Walkthrough",
        description: "We execute demolition, rough-ins, cabinetry, counters, and finishes with quality checks throughout, ending with a final deficiency pass.",
      },
    ],
    portfolio: [
      {
        title: "Modern Minimalist Kitchen",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Sleek, handle-less cabinets with integrated appliances.",
        description: "Achieve a contemporary look with clean lines, minimalist design, and smart storage solutions for a clutter-free space.",
        link: "/projects/modern-kitchen",
        linkTitle: "View Project",
      },
      {
        title: "Compact Urban Kitchen",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Optimized small space with multi-functional features.",
        description: "Maximize every inch of your urban kitchen with clever layouts, space-saving appliances, and efficient storage.",
        link: "/projects/urban-kitchen",
        linkTitle: "View Project",
      },
      {
        title: "Luxury Chef's Kitchen",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "High-end appliances, custom cabinetry, and premium finishes.",
        description: "Designed for the culinary enthusiast, blending professional-grade functionality with exquisite style and comfort.",
        link: "/projects/chef-kitchen",
        linkTitle: "View Project",
      },
    ],
    faqs: [
      {
        question: "How long does a kitchen renovation take?",
        answer: "A standard renovation is typically several weeks, but timelines depend heavily on cabinet/counter lead times and any structural or plumbing changes.",
      },
      {
        question: "Can you do an open-concept kitchen?",
        answer: "Yes-when it makes sense. We confirm structure and mechanical routing first; otherwise, open-concept becomes an expensive surprise instead of an upgrade.",
      },
      {
        question: "Do I need to move out during a kitchen reno?",
        answer: "Not always, but plan for limited cooking. Many clients set up a temporary kitchenette for the duration of demolition and rough-ins.",
      },
      {
        question: "How do you prevent budget blowouts?",
        answer: "By locking scope, using realistic allowances, and pricing changes before they happen. Kitchens get expensive when decisions are delayed.",
      },
    ],
    bgImage: "/images/backgrounds/bg-5.jpg",
  },
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    subtitle: "Crafting serene, functional, and stylish bathrooms for ultimate comfort.",
    heroImage: "/images/services/bathroom-renovation-title.png",
    introText: "Bathrooms are unforgiving: moisture finds every shortcut. We build bathrooms with proper waterproofing, ventilation, and durable materials-then layer on lighting and layout decisions that make the space feel calm and functional.",
    whyChooseUs: {
      image: "/images/services/bathroom-renovations.jpg",
      title: "Why Trust Us with Your Bathroom Renovation?",
      points: [
        "Expertise in waterproofing and moisture management",
        "Innovative space-saving solutions for all bathroom sizes",
        "Selection of durable, high-quality fixtures and finishes",
        "Focus on optimal ventilation and lighting design",
        "Seamless project management from start to spa-like finish",
      ],
    },
    types: [
      {
        title: "Powder Room Refresh",
        image: "/images/services/powder-room.jpg",
        description: "A quick, impactful update for your half-bath, focusing on aesthetics and guest appeal.",
      },
      {
        title: "Guest Bathroom Upgrade",
        image: "/images/services/guest-bathroom.jpg",
        description: "A quick, impactful update for your half-bath, focusing on aesthetics and guest appeal.",
      },
      {
        title: "Waterproofing & Ventilation",
        image: "/images/services/bathroom-waterproofing.jpg",
        description: "Crucial for preventing mold, mildew, and structural damage. We ensure proper vapor barriers, waterproofing, and adequate ventilation systems.",
      },
    ],
    considerations: [
      {
        title: "Waterproofing & Drainage",
        icon: "/stars.svg",
        description: "Correct membranes, slopes, and detailing behind tile are what prevent mold and rot. We treat waterproofing as a system, not an afterthought.",
      },
      {
        title: "Ventilation & Moisture Control",
        icon: "/stars.svg",
        description: "Proper exhaust sizing, ducting, and make-up air planning reduce humidity, protect finishes, and keep the room comfortable.",
      },
      {
        title: "Fixtures, Finishes & Durability",
        icon: "/stars.svg",
        description: "We help select materials that handle water, cleaners, and daily use-without turning the space into a maintenance project.",
      },
      {
        title: "Layout, Storage & Accessibility",
        icon: "/stars.svg",
        description: "Good bathrooms use space efficiently. We optimize clearances and can incorporate accessibility features when needed.",
      },
    ],
    process: [
      {
        step: "Step 1",
        title: "Assessment & Layout Planning",
        description: "We review current conditions, define priorities, and propose layouts that improve usability and storage.",
      },
      {
        step: "Step 2",
        title: "Selections & Detailed Scope",
        description: "We confirm tile, fixtures, vanity, lighting, and hardware, then produce a clear scope and pricing plan.",
      },
      {
        step: "Step 3",
        title: "Demolition, Rough-Ins & Waterproofing",
        description: "We complete demolition, update plumbing/electrical as needed, then execute waterproofing before any finishes go in.",
      },
      {
        step: "Step 4",
        title: "Finishes, Fixtures & Close-Out",
        description: "We install tile, vanities, fixtures, and accessories, then complete final testing and a walkthrough.",
      },
    ],
    portfolio: [
      {
        title: "Bathroom 1",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Fully upgraded kitchen with modern finishes",
        description: "Get a functional, stylish kitchen upgrade with better storage, smarter layouts, and high-end finishes.",
        link: "/projects",
        linkTitle: "Learn More",
      },
      {
        title: "Bathroom 2",
        image: "/images/projects/placeholder-image.jpg",
        alt: "Remodeled bathroom with walk-in shower",
        description: "Upgrade your bathroom with custom tiling, better lighting, and spa-inspired features - efficient and elegant.",
        link: "/projects",
        linkTitle: "Learn More",
      },
      {
        title: "Bathroom 3",
        image: "/images/services/bedroom-renovations.png",
        alt: "Cozy renovated bedroom with lighting",
        description: "Refresh your bedroom with custom storage, modern finishes, and a layout designed for comfort and style.",
        link: "/projects",
        linkTitle: "Learn More",
      },
    ],
    faqs: [
      {
        question: "Is waterproofing really that important if we use tile?",
        answer: "Yes. Tile and grout are not waterproof. The waterproofing system behind the tile is what actually protects the structure.",
      },
      {
        question: "Can you do a curbless or walk-in shower?",
        answer: "Often, yes. Feasibility depends on joist direction, drain placement, and floor buildup. We evaluate it during planning.",
      },
      {
        question: "How do you prevent mold issues after the renovation?",
        answer: "Proper waterproofing, correct ventilation, and good detailing around penetrations are the trifecta. Skipping any one of them is asking for trouble.",
      },
      {
        question: "Do you handle small bathrooms?",
        answer: "Yes. Small bathrooms benefit the most from smart layouts, storage planning, and layered lighting.",
      },
    ],
    bgImage: "/images/backgrounds/bg-5.jpg",
  },
  {
    slug: "home-office-renovations",
    title: "Home Office Renovations",
    subtitle: "Designing productive, inspiring, and comfortable workspaces within your home.",
    heroImage: "/images/services/home-office-renovation-title.jpg",
    introText: "A home office should support deep work, not feel like a temporary corner. We design offices with ergonomics, lighting, acoustics, and practical storage so the space works all day and still looks like part of your home.",
    whyChooseUs: {
      image: "/images/services/home-office.jpg",
      title: "Why Choose Us for Your Home Office?",
      points: [
        "Ergonomic design for comfort and productivity",
        "Smart storage solutions to minimize clutter",
        "Optimized lighting and sound control",
        "Seamless integration of technology and connectivity",
        "Custom built-ins and finishes to match your style",
      ],
    },
    types: [
      {
        title: "Dedicated Office Build-Out",
        image: "/images/services/home-office.jpg",
        description: "Transforming an unused room or building a new extension specifically for a home office.",
      },
      {
        title: "Spare Room Conversion",
        image: "/images/services/spare-room.jpg",
        description: "Transforming an unused room or building a new extension specifically for a home office.",
      },
      {
        title: "Integrated Work Nook",
        image: "/images/services/work-nook.jpg",
        description: "Transforming an unused room or building a new extension specifically for a home office.",
      },
    ],
    considerations: [
      {
        title: "Ergonomics & Layout",
        icon: "/stars.svg",
        description: "Desk placement, monitor height, and circulation matter. We plan the room so you can work comfortably for long sessions.",
      },
      {
        title: "Lighting & Glare Control",
        icon: "/stars.svg",
        description: "We combine ambient, task, and video-call friendly lighting while reducing glare on screens and harsh shadows on your face.",
      },
      {
        title: "Power, Data & Connectivity",
        icon: "/stars.svg",
        description: "Enough outlets in the right places, tidy cable routing, and reliable networking are the difference between 'fine' and frictionless.",
      },
      {
        title: "Acoustics, Privacy & Background",
        icon: "/stars.svg",
        description: "We use doors, insulation, and finishes to reduce noise, and we can design built-ins so your camera background looks intentional.",
      },
    ],
    process: [
      {
        step: "Step 1",
        title: "Workstyle Discovery",
        description: "We discuss how you work (calls, focus time, equipment, storage needs) and evaluate the existing room or area.",
      },
      {
        step: "Step 2",
        title: "Design & Built-In Planning",
        description: "We propose layouts, built-ins, and finishes, then confirm a scope and budget that fits the level of upgrade you want.",
      },
      {
        step: "Step 3",
        title: "Electrical, Lighting & Prep",
        description: "We add outlets, lighting, and networking where required, then prep surfaces so the build phase is efficient and clean.",
      },
      {
        step: "Step 4",
        title: "Installation & Final Setup",
        description: "We install cabinetry, desks, shelving, and finishes, then complete a walkthrough and ensure the space is ready for day-one use.",
      },
    ],
    portfolio: [
      {
        title: "Modern Minimalist Office",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Sleek design with integrated storage and ergonomic setup.",
        description: "Creating a clean, distraction-free workspace that fosters focus and productivity.",
        link: "/projects/modern-office",
        linkTitle: "View Project",
      },
      {
        title: "Dual-Purpose Guest Room Office",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Cleverly designed space that functions as both office and guest bedroom.",
        description: "Maximizing functionality in smaller homes with versatile, multi-functional room designs.",
        link: "/projects/dual-purpose-office",
        linkTitle: "View Project",
      },
      {
        title: "Executive Home Study",
        image: "/images/services/kitchen-renovations.jpg",
        alt: "Luxurious home office with custom built-ins and high-end finishes.",
        description: "Crafting sophisticated and comfortable executive-level home offices for focused work.",
        link: "/projects/executive-study",
        linkTitle: "View Project",
      },
    ],
    faqs: [
      {
        question: "Can you improve sound isolation for calls?",
        answer: "Yes. Options range from solid-core doors and weatherstripping to insulation upgrades and acoustic treatments, depending on how much isolation you need.",
      },
      {
        question: "What is the biggest mistake in home office setups?",
        answer: "Not planning power, lighting, and storage up front. People optimize the desk and chair and then live with glare, cables, and clutter.",
      },
      {
        question: "Can you build custom shelving and built-ins?",
        answer: "Yes. Built-ins are usually the best way to maximize function while keeping the room visually clean.",
      },
      {
        question: "Can you design for video calls?",
        answer: "Yes. We can plan lighting, camera angle, and background elements so you look good without turning your office into a film studio.",
      },
    ],
    bgImage: "/images/backgrounds/bg-2.jpg",
  },
  {
    slug: "laneway-garden-suites",
    title: "Laneway & Garden Suites",
    subtitle: "Design, permits, and construction of laneway and garden suites in Toronto & GTA.",
    heroImage: "/images/services/custom-home-title.jpg",
    introText: "Toronto's laneway and garden suite program lets homeowners add a fully independent dwelling unit on their property — generating rental income, housing family, or simply adding long-term value. We handle the entire process: zoning review, architectural design, permits, and construction, so you don't need to coordinate multiple contractors.",
    whyChooseUs: {
      image: "/images/services/custom-home-builders.jpg",
      title: "Why Build Your Laneway Suite with EZU?",
      points: [
        "End-to-end service: zoning, design, permits, and construction",
        "Deep experience with City of Toronto laneway suite bylaws",
        "Fixed-price contracts — no surprise invoices mid-project",
        "In-house trades reduce coordination delays",
        "Rental income potential from day one of occupancy",
      ],
    },
    types: [
      {
        title: "Laneway Suites",
        image: "/images/services/modern-home.jpg",
        description: "Fully detached residential units built above or adjacent to the rear laneway garage. City of Toronto approved and rental-ready.",
      },
      {
        title: "Garden Suites",
        image: "/images/services/traditional-home.jpg",
        description: "Standalone accessory dwelling units in the rear yard, available across the GTA. Ideal for multi-generational families or rental income.",
      },
      {
        title: "Coach Houses",
        image: "/images/services/estate-home.jpg",
        description: "Purpose-built detached suites above a new or existing garage structure, maximizing use of your rear lot.",
      },
    ],
    considerations: [
      {
        title: "Zoning & Bylaw Eligibility",
        icon: "/stars.svg",
        description: "Not every property qualifies. We assess your lot against City of Toronto or municipal bylaws before you invest in design — saving time and money.",
      },
      {
        title: "Design & Architectural Plans",
        icon: "/stars.svg",
        description: "We produce construction-ready drawings and coordinate engineering so your permit submission is complete and accurate the first time.",
      },
      {
        title: "Utility Connections & Mechanical",
        icon: "/stars.svg",
        description: "Laneway suites require independent electrical, plumbing, and HVAC connections. We plan these from the start to avoid expensive retrofits.",
      },
      {
        title: "Rental Income & ROI Planning",
        icon: "/stars.svg",
        description: "A well-built laneway suite in Toronto can generate $2,000–$3,500/month in rental income. We help you size and spec the suite to maximize your return.",
      },
    ],
    process: [
      {
        step: "Step 1",
        title: "Feasibility & Zoning Review",
        description: "We assess your lot dimensions, lane access, and applicable bylaws to confirm eligibility and outline viable suite configurations.",
      },
      {
        step: "Step 2",
        title: "Architectural Design & Engineering",
        description: "We produce full architectural drawings, coordinate structural engineering, and prepare a complete permit submission package.",
      },
      {
        step: "Step 3",
        title: "Permit Approval & Pre-Construction",
        description: "We manage the permit process, coordinate utility connection applications, and finalize material selections before construction begins.",
      },
      {
        step: "Step 4",
        title: "Construction & Occupancy",
        description: "We build the suite with in-house trades and disciplined site management, completing inspections and delivering a rental-ready unit.",
      },
    ],
    portfolio: [
      {
        title: "Modern Laneway Suite",
        image: "/images/projects/luxury-kitchen-renovation-toronto/after-1.jpg",
        alt: "Modern laneway suite exterior in Toronto",
        description: "A contemporary 600 sq ft laneway suite generating $2,800/month rental income for the homeowner.",
        link: "/projects",
        linkTitle: "View Projects",
      },
      {
        title: "Garden Suite Addition",
        image: "/images/projects/lakeside-bungalow/after-1.jpg",
        alt: "Detached garden suite in rear yard",
        description: "A 550 sq ft detached garden suite designed for multi-generational living with private entrance.",
        link: "/projects",
        linkTitle: "View Projects",
      },
      {
        title: "Coach House Build",
        image: "/images/services/custom-home-builders.jpg",
        alt: "Coach house above garage in Toronto",
        description: "Two-storey coach house above a new double garage — maximizing the rear lot while preserving parking.",
        link: "/projects",
        linkTitle: "View Projects",
      },
    ],
    faqs: [
      {
        question: "Is my property eligible for a laneway suite in Toronto?",
        answer: "Eligibility depends on lot size, lane access, setbacks, and zoning. Most properties in Toronto with rear lane access qualify. We assess eligibility at no charge during the initial consultation.",
      },
      {
        question: "How much does a laneway suite cost in Toronto?",
        answer: "Laneway suites typically range from $280,000–$450,000 depending on size, finishes, and existing conditions. The investment is often offset by rental income within 8–12 years.",
      },
      {
        question: "How long does it take to build a laneway suite?",
        answer: "From initial design to occupancy, most laneway suite projects take 12–18 months: 3–5 months for design and permitting, 6–9 months for construction.",
      },
      {
        question: "Do you handle all permits for laneway suites?",
        answer: "Yes. We manage the full permit process including the building permit, utility connection applications, and all required inspections through to occupancy.",
      },
    ],
    bgImage: "/images/backgrounds/bg-3.jpg",
  },
  {
    slug: "basement-renovations",
    title: "Basement Renovations",
    subtitle: "Transforming unfinished basements into legal suites, family rooms, home gyms, and income-generating spaces.",
    heroImage: "/images/services/home-renovation-title.jpg",
    introText: "A finished basement adds living space, property value, and often a significant income stream. Whether you want a legal second suite, a family entertainment room, or a home gym, we design and build basements that are properly waterproofed, code-compliant, and built to last.",
    whyChooseUs: {
      image: "/images/services/whole-home-renovation.jpg",
      title: "Why Trust EZU with Your Basement?",
      points: [
        "Ontario Building Code expertise for legal suite requirements",
        "Proper waterproofing and moisture management — done first",
        "Licensed electrical, plumbing, and HVAC trades in-house",
        "Basement suites that generate $1,500–$2,500/month rental income",
        "Full-service from design and permits to final finishes",
      ],
    },
    types: [
      {
        title: "Legal Second Suite",
        image: "/images/services/full-home-remodel.jpeg",
        description: "A fully separate, OBC-compliant rental unit with independent entrance, kitchen, bathroom, and egress windows.",
      },
      {
        title: "Family Room & Entertainment",
        image: "/images/services/basement-finishing.jpg",
        description: "Open-concept finished basements designed for home theatres, playrooms, bars, and family gathering spaces.",
      },
      {
        title: "Home Gym & Wellness",
        image: "/images/services/structural-changes.jpg",
        description: "Purpose-built gym spaces with proper flooring, ventilation, ceiling height consideration, and rubber underlayment.",
      },
    ],
    considerations: [
      {
        title: "Waterproofing & Moisture Control",
        icon: "/stars.svg",
        description: "Basement moisture is the root cause of most failures. We address drainage, vapour barriers, and waterproofing before any framing or finishes go in.",
      },
      {
        title: "Legal Suite Requirements (OBC)",
        icon: "/stars.svg",
        description: "Legal suites require minimum ceiling heights, egress windows, fire separations, and separate mechanical systems. We design to code from day one.",
      },
      {
        title: "Ceiling Height & Underpinning",
        icon: "/stars.svg",
        description: "Low ceilings can often be addressed through underpinning or bench footing. We evaluate options and costs honestly before you commit.",
      },
      {
        title: "Permits & Inspections",
        icon: "/stars.svg",
        description: "Basement renovations frequently require building permits, especially for suites, structural changes, and new plumbing. We handle the full permit process.",
      },
    ],
    process: [
      {
        step: "Step 1",
        title: "Assessment & Design",
        description: "We assess existing conditions (moisture, heights, mechanical), define the scope, and produce a layout that maximizes the space.",
      },
      {
        step: "Step 2",
        title: "Permits & Material Planning",
        description: "We handle permit submissions, confirm material selections, and schedule trades so the build starts without delays.",
      },
      {
        step: "Step 3",
        title: "Waterproofing & Rough-Ins",
        description: "We address moisture first, then complete structural, plumbing, electrical, and HVAC rough-ins before closing walls.",
      },
      {
        step: "Step 4",
        title: "Finishes & Inspection",
        description: "We install drywall, flooring, cabinetry, fixtures, and trim, then complete all required inspections and final walkthrough.",
      },
    ],
    portfolio: [
      {
        title: "Legal Basement Suite",
        image: "/images/projects/kitchen-renovation-etobicoke/after-1.jpg",
        alt: "Finished legal basement suite with kitchen and bathroom",
        description: "A fully permitted legal suite generating $2,200/month — built with fire separation, egress windows, and independent entry.",
        link: "/projects",
        linkTitle: "View Projects",
      },
      {
        title: "Home Theatre Basement",
        image: "/images/projects/luxury-kitchen-renovation-toronto/after-2.jpg",
        alt: "Finished basement home theatre",
        description: "Open-concept entertainment basement with home theatre nook, wet bar, and custom millwork storage.",
        link: "/projects",
        linkTitle: "View Projects",
      },
      {
        title: "Basement Gym & Wellness",
        image: "/images/services/whole-home-renovation.jpg",
        alt: "Finished basement home gym",
        description: "Purpose-built gym space with rubber flooring, mirrored wall, and commercial-grade ventilation.",
        link: "/projects",
        linkTitle: "View Projects",
      },
    ],
    faqs: [
      {
        question: "Do I need a permit to finish my basement?",
        answer: "Most basement finishing projects require a permit — especially if you're adding a bathroom, creating a rental suite, or making structural changes. We identify permit requirements upfront.",
      },
      {
        question: "How much does a basement renovation cost in Toronto?",
        answer: "A standard finished basement runs $50,000–$100,000+. A legal suite with separate kitchen and bathroom typically costs $80,000–$130,000 depending on existing conditions and finishes.",
      },
      {
        question: "What makes a basement suite 'legal' in Ontario?",
        answer: "Legal suites require OBC-minimum ceiling heights (1.95m), egress windows, fire-rated separation, a separate entrance, and independent mechanical systems. We build to these standards.",
      },
      {
        question: "Can you fix an existing damp or leaky basement?",
        answer: "Yes. We address interior waterproofing (drainage channels, sump pumps, vapour barriers) and can coordinate exterior waterproofing where needed before finishing the space.",
      },
    ],
    bgImage: "/images/backgrounds/bg-4.jpg",
  },
  {
    slug: "sunroom-outdoor-living",
    title: "Sunrooms & Outdoor Living",
    subtitle: "Extending your living space into the outdoors with four-season sunrooms, covered patios, and outdoor kitchens.",
    heroImage: "/images/services/home-addition-title.jpg",
    introText: "A well-built sunroom or covered outdoor living space adds usable square footage, increases property value, and transforms how you use your home year-round. We design and build three-season and four-season rooms, covered decks, pergolas, and outdoor kitchens that integrate seamlessly with your existing home.",
    whyChooseUs: {
      image: "/images/services/home-additions.jpg",
      title: "Why Build Outdoor Living with EZU?",
      points: [
        "Three-season and four-season rooms built to Ontario climate standards",
        "Seamless exterior integration — matches your existing home",
        "Energy-efficient glazing options for year-round comfort",
        "Permit management included for all structural additions",
        "Turnkey: from design and foundation to electrical and finishes",
      ],
    },
    types: [
      {
        title: "Four-Season Sunrooms",
        image: "/images/services/house-sunroom.jpg",
        description: "Fully insulated, heated and cooled rooms with thermally broken frames and triple-pane glazing — usable year-round even in Canadian winters.",
      },
      {
        title: "Three-Season Rooms & Screen Rooms",
        image: "/images/services/side-extention.jpg",
        description: "Covered, screened living areas that connect the indoors to the outdoors from spring through fall.",
      },
      {
        title: "Covered Patios & Outdoor Kitchens",
        image: "/images/services/second-story-addition.jpg",
        description: "Permanent covered patio structures with optional outdoor kitchen, gas fireplace, and weatherproof finishes.",
      },
    ],
    considerations: [
      {
        title: "Foundation & Structural Support",
        icon: "/stars.svg",
        description: "Sunrooms and additions require proper footings below the frost line. We engineer foundations that won't settle or heave through Toronto winters.",
      },
      {
        title: "Glazing & Thermal Performance",
        icon: "/stars.svg",
        description: "The right glazing system is the difference between a cold greenhouse and a comfortable four-season room. We spec glazing matched to your climate goals.",
      },
      {
        title: "Permits & Zoning",
        icon: "/stars.svg",
        description: "All structural additions require building permits. We confirm setback compliance and manage the full permit process.",
      },
      {
        title: "Exterior Matching & Aesthetics",
        icon: "/stars.svg",
        description: "We align rooflines, cladding, and trim so the addition looks like it was always part of the house, not an afterthought.",
      },
    ],
    process: [
      {
        step: "Step 1",
        title: "Design & Zoning Review",
        description: "We confirm setbacks, lot coverage, and propose a design that meets your goals and passes permit review.",
      },
      {
        step: "Step 2",
        title: "Engineering & Permits",
        description: "We coordinate structural engineering and submit a complete permit package, managing any revision requests from the city.",
      },
      {
        step: "Step 3",
        title: "Foundation & Structure",
        description: "We build frost-proof footings, frame the structure, install glazing systems, and weatherproof the envelope.",
      },
      {
        step: "Step 4",
        title: "Interior Finishes & Handover",
        description: "We complete electrical, flooring, trim, and any outdoor kitchen elements, then walk through the completed space with you.",
      },
    ],
    portfolio: [
      {
        title: "Four-Season Sunroom",
        image: "/images/services/house-sunroom.jpg",
        alt: "Four-season sunroom addition",
        description: "A 400 sq ft four-season room with radiant floor heating and floor-to-ceiling glazing.",
        link: "/projects",
        linkTitle: "View Projects",
      },
      {
        title: "Covered Outdoor Kitchen",
        image: "/images/services/home-additions.jpg",
        alt: "Covered outdoor kitchen and patio",
        description: "A 300 sq ft covered outdoor kitchen with gas grill, stone counters, and integrated lighting.",
        link: "/projects",
        linkTitle: "View Projects",
      },
      {
        title: "Three-Season Screen Room",
        image: "/images/services/side-extention.jpg",
        alt: "Three-season screened porch",
        description: "A screened room addition seamlessly connected to the main living area through new French doors.",
        link: "/projects",
        linkTitle: "View Projects",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a three-season and four-season sunroom?",
        answer: "A three-season room is screened or lightly glazed and usable spring through fall. A four-season room is fully insulated, heated, and cooled — comfortable in Canadian winters.",
      },
      {
        question: "Do sunroom additions require a permit?",
        answer: "Yes, all structural additions require building permits. We manage the full permit process including drawings, submissions, and inspections.",
      },
      {
        question: "How much does a sunroom cost in Toronto?",
        answer: "Three-season rooms typically range from $40,000–$80,000. Four-season rooms with proper insulation and glazing typically run $80,000–$150,000+.",
      },
      {
        question: "Can you match my existing home exterior?",
        answer: "Yes. We align rooflines, siding, and trim to match your existing home's style as closely as possible.",
      },
    ],
    bgImage: "/images/backgrounds/bg-5.jpg",
  },
  {
    slug: "garage-conversions",
    title: "Garage Conversions",
    subtitle: "Converting attached or detached garages into living space, home offices, studios, or rental suites.",
    heroImage: "/images/services/home-renovation-title.jpg",
    introText: "An underused garage is one of the most cost-effective spaces to convert in the GTA. Converting a garage into a legal suite, home office, gym, or studio adds significant value without the cost of a full addition — because the structure and roof already exist. We handle design, permits, insulation, mechanical, and finishes.",
    whyChooseUs: {
      image: "/images/services/whole-home-renovation.jpg",
      title: "Why Convert Your Garage with EZU?",
      points: [
        "Significant value add at a lower cost than a full addition",
        "Legal suite conversions that comply with OBC requirements",
        "All trades in-house: electrical, plumbing, HVAC, insulation",
        "Permit management included — we handle all submissions",
        "Fast turnaround: most conversions complete in 8–14 weeks",
      ],
    },
    types: [
      {
        title: "Legal Suite Conversion",
        image: "/images/services/full-home-remodel.jpeg",
        description: "Converting a detached or attached garage into a legal accessory dwelling unit with kitchen, bathroom, and egress windows.",
      },
      {
        title: "Home Office & Studio",
        image: "/images/services/home-office.jpg",
        description: "Transforming a garage into a fully insulated, soundproofed, and temperature-controlled home office or creative studio.",
      },
      {
        title: "Gym & Recreation Room",
        image: "/images/services/basement-finishing.jpg",
        description: "Purpose-built gym space with rubber flooring, high ceilings, and proper ventilation — separated from the main house.",
      },
    ],
    considerations: [
      {
        title: "Structural Assessment",
        icon: "/stars.svg",
        description: "Garage slabs are typically not insulated and may need to be built up or replaced. We assess existing conditions before committing to a scope.",
      },
      {
        title: "Insulation & Thermal Envelope",
        icon: "/stars.svg",
        description: "Garages have minimal insulation. Proper wall, ceiling, and slab insulation is essential for year-round comfort in Ontario's climate.",
      },
      {
        title: "Permits & Zoning",
        icon: "/stars.svg",
        description: "Converting a garage to living space always requires a building permit. We confirm zoning compatibility and manage the full permit process.",
      },
      {
        title: "Mechanical Systems",
        icon: "/stars.svg",
        description: "New suites or offices need independent electrical panels, heating/cooling, and plumbing where applicable. We plan mechanical systems from the start.",
      },
    ],
    process: [
      {
        step: "Step 1",
        title: "Assessment & Design",
        description: "We assess the existing structure, confirm zoning eligibility, and design the converted space to your intended use.",
      },
      {
        step: "Step 2",
        title: "Permits & Pre-Construction",
        description: "We submit for building permits, finalize material selections, and coordinate utility connections as required.",
      },
      {
        step: "Step 3",
        title: "Structural & Mechanical Rough-Ins",
        description: "We upgrade insulation, complete electrical and plumbing rough-ins, and address any structural modifications required.",
      },
      {
        step: "Step 4",
        title: "Finishes & Handover",
        description: "We install drywall, flooring, fixtures, and trim, then complete inspections and final walkthrough.",
      },
    ],
    portfolio: [
      {
        title: "Garage to Rental Suite",
        image: "/images/projects/kitchen-renovation-richmond-hill/after-1.jpg",
        alt: "Converted garage rental suite",
        description: "A detached garage converted to a 400 sq ft legal rental suite generating $1,800/month.",
        link: "/projects",
        linkTitle: "View Projects",
      },
      {
        title: "Garage Home Office",
        image: "/images/services/home-office.jpg",
        alt: "Garage converted to home office",
        description: "A double garage converted into a soundproofed, fully climate-controlled home office and meeting room.",
        link: "/projects",
        linkTitle: "View Projects",
      },
      {
        title: "Garage Gym Conversion",
        image: "/images/services/basement-finishing.jpg",
        alt: "Garage converted to home gym",
        description: "Single garage converted to a private home gym with rubber flooring, mirrors, and dedicated electrical.",
        link: "/projects",
        linkTitle: "View Projects",
      },
    ],
    faqs: [
      {
        question: "Can I legally live in a converted garage in Ontario?",
        answer: "Yes, if the conversion meets OBC requirements for minimum ceiling heights, egress, fire separation, and mechanical systems. We design conversions to be fully code-compliant.",
      },
      {
        question: "How much does a garage conversion cost?",
        answer: "Garage conversions typically cost $60,000–$120,000 depending on the intended use, existing conditions, and whether plumbing is required.",
      },
      {
        question: "Do I need a permit to convert my garage?",
        answer: "Yes. Converting a garage to any form of living space always requires a building permit. We manage the full permit process.",
      },
      {
        question: "Will converting my garage affect my property value?",
        answer: "A well-executed, permitted conversion almost always adds value — especially in the GTA where additional living space and rental income are highly prized.",
      },
    ],
    bgImage: "/images/backgrounds/bg-2.jpg",
  },
  {
    slug: "secondary-suites",
    title: "Secondary Suites",
    subtitle: "Building legal, income-generating secondary suites within your existing home.",
    heroImage: "/images/services/home-renovation-title.jpg",
    introText: "Secondary suites — whether in a basement, above a garage, or carved from existing main-floor space — are one of the most financially effective investments a GTA homeowner can make. We design and build OBC-compliant secondary suites that pass all inspections, generate real rental income, and integrate cleanly into your home.",
    whyChooseUs: {
      image: "/images/services/whole-home-renovation.jpg",
      title: "Why Build a Secondary Suite with EZU?",
      points: [
        "Deep expertise in Ontario Building Code secondary suite requirements",
        "Permit management from design through to occupancy permit",
        "All trades in-house: electrical, plumbing, framing, insulation, finishes",
        "Suites that generate $1,500–$2,500/month in rental income",
        "Multigenerational family configurations handled with care and discretion",
      ],
    },
    types: [
      {
        title: "Basement Secondary Suite",
        image: "/images/services/basement-finishing.jpg",
        description: "OBC-compliant basement suite with fire separation, egress windows, separate entry, and independent mechanical systems.",
      },
      {
        title: "Above-Garage Suite",
        image: "/images/services/second-story-addition.jpg",
        description: "Suite built above an existing or new garage, providing complete separation from the main residence.",
      },
      {
        title: "Main Floor In-Law Suite",
        image: "/images/services/full-home-remodel.jpeg",
        description: "A self-contained suite carved from main-floor space — ideal for multigenerational families needing accessible, single-level accommodation.",
      },
    ],
    considerations: [
      {
        title: "Fire Separation Requirements",
        icon: "/stars.svg",
        description: "OBC requires fire-rated separation between the suite and the main dwelling. We build this correctly from the start — it cannot be retrofitted cheaply.",
      },
      {
        title: "Egress Windows",
        icon: "/stars.svg",
        description: "Every bedroom in a secondary suite requires a minimum-sized egress window. We factor this into the design and confirm window sizing before construction.",
      },
      {
        title: "Separate Mechanical Systems",
        icon: "/stars.svg",
        description: "Legal suites require independent heating, electrical panels, and metering in most municipalities. We plan mechanical separation from day one.",
      },
      {
        title: "Rental Registration",
        icon: "/stars.svg",
        description: "Some GTA municipalities require secondary suite registration. We advise on local requirements so you can rent legally and insure the unit properly.",
      },
    ],
    process: [
      {
        step: "Step 1",
        title: "Feasibility & Design",
        description: "We assess your home's existing conditions, confirm OBC requirements, and design a suite layout that maximizes livability and rental appeal.",
      },
      {
        step: "Step 2",
        title: "Permit Submission",
        description: "We prepare and submit a complete permit package including drawings, fire separation details, and mechanical specifications.",
      },
      {
        step: "Step 3",
        title: "Construction & Rough-Ins",
        description: "We complete framing, fire-rated assemblies, electrical, plumbing, and HVAC rough-ins with inspections at each required stage.",
      },
      {
        step: "Step 4",
        title: "Finishes & Occupancy",
        description: "We install finishes, pass final inspections, and hand over a rental-ready suite with all occupancy requirements met.",
      },
    ],
    portfolio: [
      {
        title: "Basement Legal Suite",
        image: "/images/projects/kitchen-renovation-etobicoke/after-1.jpg",
        alt: "Finished legal basement secondary suite",
        description: "Two-bedroom legal suite with separate entry, full kitchen, and $2,100/month rental income.",
        link: "/projects",
        linkTitle: "View Projects",
      },
      {
        title: "In-Law Suite Conversion",
        image: "/images/services/whole-home-renovation.jpg",
        alt: "Main floor in-law suite conversion",
        description: "A main-floor bedroom wing converted to a self-contained accessible suite for a multigenerational family.",
        link: "/projects",
        linkTitle: "View Projects",
      },
      {
        title: "Above-Garage Suite",
        image: "/images/services/second-story-addition.jpg",
        alt: "Suite built above existing garage",
        description: "500 sq ft suite above an existing double garage with private external staircase and separate utility metering.",
        link: "/projects",
        linkTitle: "View Projects",
      },
    ],
    faqs: [
      {
        question: "What makes a secondary suite 'legal' in Ontario?",
        answer: "A legal secondary suite must comply with the Ontario Building Code: minimum ceiling heights, egress windows in bedrooms, fire separation, separate mechanical systems, and a separate entry. It must also be permitted by the municipality.",
      },
      {
        question: "How much rental income can a secondary suite generate?",
        answer: "In the GTA, secondary suites typically generate $1,500–$2,800/month depending on size, location, and quality of finishes.",
      },
      {
        question: "How long does it take to build a secondary suite?",
        answer: "Most secondary suite projects take 3–6 months from permit approval to occupancy, depending on scope and existing conditions.",
      },
      {
        question: "Can I add a secondary suite to a semi-detached or townhouse?",
        answer: "Yes, in most cases. We assess your specific property and confirm zoning and OBC compliance before committing to a scope.",
      },
    ],
    bgImage: "/images/backgrounds/bg-3.jpg",
  },
];

