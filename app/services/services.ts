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
        title: "Sustainable & Energy‑Efficient Design",
        icon: "/stars.svg",
        description: "High‑performance envelopes, smart HVAC planning, and durable materials reduce operating costs and improve comfort year‑round.",
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
        description: "We define goals, priorities, and must‑haves, then evaluate the site to confirm what is practical within zoning, budget, and timeline.",
      },
      {
        step: "Phase 2",
        title: "Architectural Design & Permitting",
        description: "We develop layouts, elevations, and construction-ready details, coordinate consultants as needed, and manage the permit process.",
      },
      {
        step: "Phase 3",
        title: "Pre‑Construction & Material Sourcing",
        description: "We finalize specifications, confirm allowances, order long‑lead items, and lock in a schedule so construction can run smoothly.",
      },
      {
        step: "Phase 4",
        title: "Construction & Quality Assurance",
        description: "We build with disciplined site management, inspections, and milestone check‑ins, keeping you updated and ensuring workmanship meets expectations.",
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
        answer: "Most projects run several months to over a year depending on complexity, permitting, and material lead times. The best way to shorten the timeline is strong early planning and ordering long‑lead items before construction starts.",
      },
      {
        question: "Can you help with design, engineering, and permits?",
        answer: "Yes. We coordinate design, required consultants, and permitting as part of a design‑build workflow so the drawings, budget, and construction plan stay aligned.",
      },
      {
        question: "How do changes affect pricing?",
        answer: "Changes are priced and documented before proceeding. You see the cost and schedule impact up front, not after the fact.",
      },
      {
        question: "Do you build energy‑efficient homes?",
        answer: "Yes. We can incorporate higher‑performance insulation, air sealing, efficient HVAC, and smart material choices based on your goals and budget.",
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
        description: "Modifying floor plans, removing walls, or adding structural elemeglobe.svgtimize space and flow.",
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
        description: "We walk through the space, identify pain points, and set clear priorities and constraints (budget, timeline, and must‑haves).",
      },
      {
        step: "Step 2",
        title: "Design & Detailed Scope",
        description: "We produce a plan and finish direction, then convert that into a detailed scope and estimate so decisions are explicit and comparable.",
      },
      {
        step: "Step 3",
        title: "Build Preparation",
        description: "We handle permits (when needed), finalize materials, and schedule trades. This is where we prevent mid‑project surprises.",
      },
      {
        step: "Step 4",
        title: "Construction & Close‑Out",
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
        answer: "By locking in scope, ordering materials early, sequencing trades properly, and avoiding mid‑stream design changes that force rework.",
      },
    ],
    bgImage: "/images/backgrounds/bg-3.jpg",
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    subtitle: "Expand your living space and enhance your home's value with seamless additions.",
    heroImage: "/images/services/home-addition-title.jpg",
    introText: "A well‑designed addition should feel like it was always part of the house. We plan structure, rooflines, mechanicals, and exterior finishes so the new space integrates cleanly, performs well, and supports long‑term value.",
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
        description: "Additions often require new foundations, beams, or tie‑ins to existing framing. We engineer the connection so loads transfer correctly and cracking is minimized.",
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
        description: "We prepare the site, build foundations and framing, and complete tie‑ins to the existing home with careful weatherproofing.",
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
        answer: "Usually, yes-if the addition is well integrated, legally permitted, and adds high‑demand space (bedrooms, bathrooms, or a larger main floor). The best ROI comes from additions that improve layout and usability, not just square footage.",
      },
      {
        question: "Can you match my existing exterior?",
        answer: "Yes. We plan cladding, trim, and roofing to match closely, and we can also modernize the whole exterior if an exact match is impractical.",
      },
      {
        question: "How long does an addition typically take?",
        answer: "It depends on size and complexity, but additions are multi‑month projects. Permitting and long‑lead materials can be as impactful as the construction itself.",
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
        description: "Smart storage (pantries, pull‑outs, corner solutions) often matters more than extra square footage. We design cabinetry around your habits.",
      },
      {
        title: "Electrical, Plumbing & Ventilation",
        icon: "/stars.svg",
        description: "Lighting plans, outlet placement, and proper exhaust ventilation are non‑negotiable for a kitchen that feels good and stays clean.",
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
        description: "We review your current kitchen’s pain points, take detailed measurements, and define priorities (storage, seating, appliances, and style).",
      },
      {
        step: "Step 2",
        title: "Design, Selections & Pricing",
        description: "We create a layout and finish plan, then convert that into a detailed scope with allowances so you can make informed tradeoffs.",
      },
      {
        step: "Step 3",
        title: "Permits, Ordering & Scheduling",
        description: "Where required, we handle permits and coordinate ordering of cabinets, counters, fixtures, and long‑lead appliances before demolition starts.",
      },
      {
        step: "Step 4",
        title: "Build, Install & Final Walkthrough",
        description: "We execute demolition, rough‑ins, cabinetry, counters, and finishes with quality checks throughout, ending with a final deficiency pass.",
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
        question: "Can you do an open‑concept kitchen?",
        answer: "Yes-when it makes sense. We confirm structure and mechanical routing first; otherwise, open‑concept becomes an expensive surprise instead of an upgrade.",
      },
      {
        question: "Do I need to move out during a kitchen reno?",
        answer: "Not always, but plan for limited cooking. Many clients set up a temporary kitchenette for the duration of demolition and rough‑ins.",
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
        description: "Proper exhaust sizing, ducting, and make‑up air planning reduce humidity, protect finishes, and keep the room comfortable.",
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
        title: "Demolition, Rough‑Ins & Waterproofing",
        description: "We complete demolition, update plumbing/electrical as needed, then execute waterproofing before any finishes go in.",
      },
      {
        step: "Step 4",
        title: "Finishes, Fixtures & Close‑Out",
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
        description: "Enough outlets in the right places, tidy cable routing, and reliable networking are the difference between “fine” and frictionless.",
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
        title: "Design & Built‑In Planning",
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
  }
];
