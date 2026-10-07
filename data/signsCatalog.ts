export type CatalogItem = {
  name: string;
  description: string;
  image: string;
  designs: number;
  types: number;
};

export type CatalogCategory = { id: string; name: string; items: CatalogItem[] };

export type Borough = "Manhattan" | "Brooklyn" | "Queens" | "The Bronx" | "Staten Island";

export type Pin = {
  id: string;
  name: string;
  clientType: string;
  borough: Borough;
  neighborhood: string;
  address: string;
  signType: string;
  installed: string;
  permit: string;
  x: number;
  y: number;
};

export type Review = {
  id: string;
  name: string;
  role: string;
  company: string;
  borough: string;
  category: string;
  year: string;
  highlight: string;
  quote: string;
  specs: string;
  result: string;
};

export const catalog: CatalogCategory[] = [
  {
    "id": "indoor-signs",
    "name": "Indoor Signs",
    "items": [
      {
        "name": "Office Signs",
        "description": "Professional signs that make your office easy to navigate and give every room a clear identity—ideal for nameplates, departments, and meeting rooms.",
        "image": "/catalog/indoor-signs/office-signs.webp",
        "designs": 6,
        "types": 6
      },
      {
        "name": "Metal Letters",
        "description": "Durable and sleek, metal letters add a polished look to your brand. Great for indoor lobbies or building exteriors where you want to stand out.",
        "image": "/catalog/indoor-signs/metal-letters.webp",
        "designs": 9,
        "types": 17
      },
      {
        "name": "Metal Plaques",
        "description": "Elegant and long-lasting, these plaques are perfect for commemorating achievements, marking offices, or giving your space a premium look.",
        "image": "/catalog/indoor-signs/metal-plaques.webp",
        "designs": 0,
        "types": 7
      },
      {
        "name": "Plastic Letters",
        "description": "Lightweight and versatile, plastic letters offer a clean, bold appearance—ideal for logos, business names, and eye-catching interior walls.",
        "image": "/catalog/indoor-signs/plastic-letters.webp",
        "designs": 9,
        "types": 17
      },
      {
        "name": "Standoff Signs",
        "description": "Modern and stylish signs that literally stand off the wall, creating a floating effect. Perfect for businesses that want a contemporary feel.",
        "image": "/catalog/indoor-signs/standoff-signs.webp",
        "designs": 0,
        "types": 0
      },
      {
        "name": "Door Signs",
        "description": "Simple yet effective signage to identify rooms, offices, and suites—keeping your space organized and professional.",
        "image": "/catalog/indoor-signs/door-signs.webp",
        "designs": 0,
        "types": 7
      },
      {
        "name": "Lobby Signs",
        "description": "Make a great first impression with lobby signs that reflect your brand’s personality and welcome visitors the right way.",
        "image": "/catalog/indoor-signs/lobby-signs.webp",
        "designs": 0,
        "types": 0
      },
      {
        "name": "Magnetic Menu Boards",
        "description": "An easy-to-update solution for cafes, restaurants, and food trucks. Switch out items anytime without needing to redesign your whole board.",
        "image": "/catalog/indoor-signs/magnetic-menu-boards.webp",
        "designs": 0,
        "types": 3
      },
      {
        "name": "Window Frosting",
        "description": "Add privacy and a touch of elegance to your windows while still allowing light in. Great for offices, clinics, and storefronts.",
        "image": "/catalog/indoor-signs/window-frosting.webp",
        "designs": 0,
        "types": 0
      },
      {
        "name": "Neon Signs",
        "description": "Bring energy and retro flair to your business with glowing neon signs that turn heads—day or night.",
        "image": "/catalog/indoor-signs/neon-signs.webp",
        "designs": 0,
        "types": 8
      },
      {
        "name": "ADA Signs",
        "description": "ADA-compliant signage designed for accessibility and inclusivity, ensuring your business meets federal standards.",
        "image": "/catalog/indoor-signs/ada-signs.webp",
        "designs": 0,
        "types": 8
      },
      {
        "name": "Aisle Signs",
        "description": "Directional signage with clear symbols and labels, helping customers and visitors navigate aisles with ease.",
        "image": "/catalog/indoor-signs/aisle-signs.webp",
        "designs": 0,
        "types": 11
      },
      {
        "name": "Directory Signs",
        "description": "Organized signage to display departments, suites, or room listings—commonly used in hospitals, offices, and malls.",
        "image": "/catalog/indoor-signs/directory-signs.webp",
        "designs": 6,
        "types": 0
      },
      {
        "name": "Foam Letters",
        "description": "Lightweight 3D letters that create bold, dimensional branding for walls, events, or promotions.",
        "image": "/catalog/indoor-signs/foam-letters.webp",
        "designs": 9,
        "types": 9
      },
      {
        "name": "PVC Letters",
        "description": "Durable, lightweight PVC lettering ideal for indoor branding, displays, and wall-mounted designs.",
        "image": "/catalog/indoor-signs/pvc-letters.webp",
        "designs": 6,
        "types": 0
      },
      {
        "name": "SEG Light Box Signs",
        "description": "Slim illuminated displays with stretch fabric graphics—great for retail and trade shows.",
        "image": "/catalog/indoor-signs/seg-light-box-signs.webp",
        "designs": 0,
        "types": 16
      },
      {
        "name": "Regulatory Signs",
        "description": "Compliance-driven signs that display warnings, restrictions, and rules.",
        "image": "/catalog/indoor-signs/regulatory-signs.webp",
        "designs": 9,
        "types": 4
      }
    ]
  },
  {
    "id": "outdoor-signs",
    "name": "Outdoor Signs",
    "items": [
      {
        "name": "Retractable Awnings",
        "description": "Shade when you need it, sun when you don’t—ideal for storefronts, patios, and restaurants.",
        "image": "/catalog/outdoor-signs/retractable-awnings.webp",
        "designs": 0,
        "types": 16
      },
      {
        "name": "Commercial Awnings",
        "description": "Durable, stylish awnings that add coverage and branding to your business façade.",
        "image": "/catalog/outdoor-signs/commercial-awnings.webp",
        "designs": 0,
        "types": 12
      },
      {
        "name": "Vestibules",
        "description": "Seasonal or permanent structures that provide weather protection and create a welcoming entrance.",
        "image": "/catalog/outdoor-signs/vestibules.webp",
        "designs": 9,
        "types": 0
      },
      {
        "name": "Blade Signs",
        "description": "Perpendicular signs that extend outward, grabbing attention from pedestrians and street traffic.",
        "image": "/catalog/outdoor-signs/blade-signs.webp",
        "designs": 8,
        "types": 5
      },
      {
        "name": "Aluminum Metal Signs",
        "description": "Strong, sleek aluminum signage that offers a modern, professional look for outdoor branding.",
        "image": "/catalog/outdoor-signs/aluminum-metal-signs.webp",
        "designs": 0,
        "types": 9
      },
      {
        "name": "Carved Signs",
        "description": "Classic engraved signs with depth and character—perfect for traditional, timeless appeal.",
        "image": "/catalog/outdoor-signs/carved-signs.webp",
        "designs": 0,
        "types": 11
      },
      {
        "name": "Channel Letters",
        "description": "Illuminated 3D letters that shine brightly, day or night, for maximum visibility.",
        "image": "/catalog/outdoor-signs/channel-letters.webp",
        "designs": 0,
        "types": 7
      },
      {
        "name": "Hand Painted Signs",
        "description": "Custom artistic signage with a personal, handcrafted touch for a vintage or boutique look.",
        "image": "/catalog/outdoor-signs/hand-painted-signs.webp",
        "designs": 0,
        "types": 4
      },
      {
        "name": "A Frame Signs",
        "description": "Portable, foldable signs ideal for sidewalks, promotions, menus, or event advertising.",
        "image": "/catalog/outdoor-signs/a-frame-signs.webp",
        "designs": 0,
        "types": 5
      },
      {
        "name": "Light Box Signs",
        "description": "Backlit signs with vibrant graphics that stay visible even after dark.",
        "image": "/catalog/outdoor-signs/light-box-signs.webp",
        "designs": 0,
        "types": 17
      },
      {
        "name": "Lighted Signs",
        "description": "General illuminated signage designed to ensure your business is seen at all hours.",
        "image": "/catalog/outdoor-signs/lighted-signs.webp",
        "designs": 0,
        "types": 7
      },
      {
        "name": "Lollipop Signs",
        "description": "Round, pole-mounted signs that provide visibility at eye level—great for pubs, cafés, and shops.",
        "image": "/catalog/outdoor-signs/lollipop-signs.webp",
        "designs": 0,
        "types": 6
      },
      {
        "name": "Real Estate Signs",
        "description": "Durable, customizable signs for property listings, open houses, and real estate branding.",
        "image": "/catalog/outdoor-signs/real-estate-signs.webp",
        "designs": 0,
        "types": 0
      },
      {
        "name": "Sidewalk Barriers",
        "description": "Functional and branded barriers for outdoor cafés, restaurants, and crowd control.",
        "image": "/catalog/outdoor-signs/sidewalk-barriers.webp",
        "designs": 8,
        "types": 0
      },
      {
        "name": "Wall Pan Signs",
        "description": "Flat-panel wall-mounted signs that provide a sleek, professional look for building exteriors.",
        "image": "/catalog/outdoor-signs/wall-pan-signs.webp",
        "designs": 0,
        "types": 6
      },
      {
        "name": "Solaray Sequin Signs",
        "description": "Decorative sequin panel signs that shimmer and catch attention with movement and light.",
        "image": "/catalog/outdoor-signs/solaray-sequin-signs.webp",
        "designs": 0,
        "types": 15
      }
    ]
  },
  {
    "id": "building-signs",
    "name": "Building Signs",
    "items": [
      {
        "name": "Boiler Room Signs",
        "description": "Mandatory boiler room labels for safety, compliance, and restricted access.",
        "image": "/catalog/building-signs/boiler-room-signs.webp",
        "designs": 0,
        "types": 11
      },
      {
        "name": "HPD Signs",
        "description": "NYC Housing Preservation & Development–compliant signs for safety and legal requirements in residential and commercial buildings.",
        "image": "/catalog/building-signs/hpd-signs.webp",
        "designs": 0,
        "types": 18
      },
      {
        "name": "Video Surveillance Signs",
        "description": "Warning signs indicating areas are under 24-hour CCTV monitoring.",
        "image": "/catalog/building-signs/video-surveillance-signs.webp",
        "designs": 0,
        "types": 2
      },
      {
        "name": "Fire Safety Signs",
        "description": "Emergency and safety instructions for fire protection systems.",
        "image": "/catalog/building-signs/fire-safety-signs.webp",
        "designs": 0,
        "types": 11
      },
      {
        "name": "Safety Signs",
        "description": "General safety signage for hazards, protective equipment, and workplace compliance.",
        "image": "/catalog/building-signs/safety-signs.webp",
        "designs": 0,
        "types": 7
      }
    ]
  },
  {
    "id": "construction-signs",
    "name": "Construction Signs",
    "items": [
      {
        "name": "Work in Progress Signs",
        "description": "Commercial signs for ongoing projects.",
        "image": "/catalog/construction-signs/work-in-progress-signs.webp",
        "designs": 0,
        "types": 7
      },
      {
        "name": "Sidewalk Closed Signs",
        "description": "Sidewalk closed ahead. Cross here.",
        "image": "/catalog/construction-signs/sidewalk-closed-signs.webp",
        "designs": 0,
        "types": 7
      },
      {
        "name": "Road Closed Signs",
        "description": "Lane closed ahead.",
        "image": "/catalog/construction-signs/road-closed-signs.webp",
        "designs": 0,
        "types": 5
      },
      {
        "name": "Blueprints Printing",
        "description": "Site safety mandatory: Safety glasses, safety boots, hard hats, high visibility vests, ear protection, hand protection.",
        "image": "/catalog/construction-signs/blueprints-printing.webp",
        "designs": 0,
        "types": 3
      },
      {
        "name": "Scaffolding Wraps",
        "description": "Custom wraps for scaffolding for branding and safety purposes.",
        "image": "/catalog/construction-signs/scaffolding-wraps.webp",
        "designs": 0,
        "types": 0
      }
    ]
  },
  {
    "id": "event-signs",
    "name": "Event Signs",
    "items": [
      {
        "name": "Kiosk Signs",
        "description": "Branded signs for self-service kiosks, enhancing usability and visibility.",
        "image": "/catalog/event-signs/kiosk-signs.webp",
        "designs": 0,
        "types": 8
      },
      {
        "name": "Podium Signs",
        "description": "Professional signage for podiums at conferences, ceremonies, or events.",
        "image": "/catalog/event-signs/podium-signs.webp",
        "designs": 0,
        "types": 8
      },
      {
        "name": "Standee and Cutouts",
        "description": "Life-size promotional cutouts and standees for events, retail, and exhibitions.",
        "image": "/catalog/event-signs/standee-and-cutouts.webp",
        "designs": 0,
        "types": 7
      }
    ]
  },
  {
    "id": "large-format-printing",
    "name": "Large Format Printing",
    "items": [
      {
        "name": "Backdrops",
        "description": "Custom printed backdrops for events, stages, and photography.",
        "image": "/catalog/large-format-printing/backdrops.webp",
        "designs": 0,
        "types": 5
      },
      {
        "name": "Banner Stands",
        "description": "Portable banner displays for trade shows and promotions.",
        "image": "/catalog/large-format-printing/banner-stands.webp",
        "designs": 0,
        "types": 12
      },
      {
        "name": "Billboard Printing",
        "description": "Large-format billboard graphics for outdoor advertising.",
        "image": "/catalog/large-format-printing/billboard-printing.webp",
        "designs": 8,
        "types": 0
      },
      {
        "name": "Canvas Printing",
        "description": "High-quality canvas prints for décor, branding, or promotions.",
        "image": "/catalog/large-format-printing/canvas-printing.webp",
        "designs": 0,
        "types": 4
      },
      {
        "name": "Duratrans Printing",
        "description": "Backlit film graphics for vivid, illuminated displays.",
        "image": "/catalog/large-format-printing/duratrans-printing.webp",
        "designs": 0,
        "types": 0
      },
      {
        "name": "Mesh Banners",
        "description": "Perforated outdoor banners designed to withstand wind.",
        "image": "/catalog/large-format-printing/mesh-banners.webp",
        "designs": 0,
        "types": 4
      },
      {
        "name": "Paper Poster Printing",
        "description": "Affordable printed posters for campaigns and promotions.",
        "image": "/catalog/large-format-printing/paper-poster-printing.webp",
        "designs": 0,
        "types": 0
      },
      {
        "name": "Pole Banners and Flags",
        "description": "Vertical banners for poles, streets, and event branding.",
        "image": "/catalog/large-format-printing/pole-banners-and-flags.webp",
        "designs": 0,
        "types": 4
      },
      {
        "name": "Step and Repeat Banners",
        "description": "Photography backdrops with repeating logos/branding.",
        "image": "/catalog/large-format-printing/step-and-repeat-banners.webp",
        "designs": 0,
        "types": 4
      },
      {
        "name": "Tabletop Signs",
        "description": "Compact, desk or counter-top signs for promotions and events.",
        "image": "/catalog/large-format-printing/tabletop-signs.webp",
        "designs": 0,
        "types": 5
      },
      {
        "name": "Vinyl Banners",
        "description": "Durable vinyl banners suitable for indoor and outdoor advertising.",
        "image": "/catalog/large-format-printing/vinyl-banners.webp",
        "designs": 0,
        "types": 12
      }
    ]
  },
  {
    "id": "rigid-signs",
    "name": "Rigid Signs",
    "items": [
      {
        "name": "Coroplast Signs",
        "description": "Lightweight corrugated plastic signs for temporary use.",
        "image": "/catalog/rigid-signs/coroplast-signs.webp",
        "designs": 8,
        "types": 0
      },
      {
        "name": "Dibond Signs",
        "description": "Aluminum composite signs, rigid and long-lasting.",
        "image": "/catalog/rigid-signs/dibond-signs.webp",
        "designs": 8,
        "types": 0
      },
      {
        "name": "Foam Board Signs",
        "description": "Lightweight foam-core signs ideal for presentations and displays.",
        "image": "/catalog/rigid-signs/foam-board-signs.webp",
        "designs": 9,
        "types": 0
      },
      {
        "name": "PVC Signs",
        "description": "Rigid PVC signs for indoor and outdoor use.",
        "image": "/catalog/rigid-signs/pvc-signs.webp",
        "designs": 8,
        "types": 0
      },
      {
        "name": "Yard Signs",
        "description": "Full or partial wraps for buses with impactful branding.",
        "image": "/catalog/rigid-signs/yard-signs.webp",
        "designs": 8,
        "types": 0
      }
    ]
  },
  {
    "id": "vehicle-wraps",
    "name": "Vehicle Wraps",
    "items": [
      {
        "name": "Bus Wrapping",
        "description": "This area is restricted to authorized personnel only for safety and security reasons.",
        "image": "/catalog/vehicle-wraps/bus-wrapping.webp",
        "designs": 6,
        "types": 0
      },
      {
        "name": "Car Wrapping",
        "description": "Complete or partial vehicle wraps for personal or commercial use.",
        "image": "/catalog/vehicle-wraps/car-wrapping.webp",
        "designs": 6,
        "types": 0
      },
      {
        "name": "Food Truck Wrapping",
        "description": "Custom wraps that turn food trucks into mobile billboards.",
        "image": "/catalog/vehicle-wraps/food-truck-wrapping.webp",
        "designs": 6,
        "types": 6
      },
      {
        "name": "Magnetic Signs",
        "description": "Removable magnetic car door signs for business use.",
        "image": "/catalog/vehicle-wraps/magnetic-signs.webp",
        "designs": 6,
        "types": 0
      },
      {
        "name": "Trailer Wrapping",
        "description": "Branding wraps for trailers of any size.",
        "image": "/catalog/vehicle-wraps/trailer-wrapping.webp",
        "designs": 6,
        "types": 0
      },
      {
        "name": "Truck Wrapping",
        "description": "Bold wraps for box trucks and delivery vehicles.",
        "image": "/catalog/vehicle-wraps/truck-wrapping.webp",
        "designs": 8,
        "types": 0
      },
      {
        "name": "Van Wrapping",
        "description": "Professional vinyl wraps for vans and fleet vehicles.",
        "image": "/catalog/vehicle-wraps/van-wrapping.webp",
        "designs": 9,
        "types": 0
      },
      {
        "name": "Truck Lettering",
        "description": "Vinyl-cut lettering and logos applied directly to vehicles.",
        "image": "/catalog/vehicle-wraps/truck-lettering.webp",
        "designs": 6,
        "types": 0
      }
    ]
  },
  {
    "id": "vinyl-graphics",
    "name": "Vinyl Graphics",
    "items": [
      {
        "name": "Bottle Labels",
        "description": "Custom printed adhesive labels for bottles and packaging.",
        "image": "/catalog/vinyl-graphics/bottle-labels.webp",
        "designs": 0,
        "types": 16
      },
      {
        "name": "Custom Decals",
        "description": "Versatile decals for walls, windows, and products.",
        "image": "/catalog/vinyl-graphics/custom-decals.webp",
        "designs": 6,
        "types": 6
      },
      {
        "name": "Custom Wall Graphics",
        "description": "Large-format vinyl graphics for wall décor and branding.",
        "image": "/catalog/vinyl-graphics/custom-wall-graphics.webp",
        "designs": 8,
        "types": 6
      },
      {
        "name": "Dance Floor Wraps",
        "description": "Customized wraps for events, weddings, and parties.",
        "image": "/catalog/vinyl-graphics/dance-floor-wraps.webp",
        "designs": 0,
        "types": 0
      },
      {
        "name": "Die-Cut Stickers",
        "description": "Stickers cut precisely to custom shapes.",
        "image": "/catalog/vinyl-graphics/die-cut-stickers.webp",
        "designs": 0,
        "types": 9
      },
      {
        "name": "Elevator Wraps",
        "description": "Full wraps for elevator doors and interiors.",
        "image": "/catalog/vinyl-graphics/elevator-wraps.webp",
        "designs": 8,
        "types": 3
      },
      {
        "name": "Floor Graphics",
        "description": "Durable decals designed for floor advertising.",
        "image": "/catalog/vinyl-graphics/floor-graphics.webp",
        "designs": 8,
        "types": 0
      },
      {
        "name": "Glitter Decals",
        "description": "Sparkly vinyl decals that stand out.",
        "image": "/catalog/vinyl-graphics/glitter-decals.webp",
        "designs": 0,
        "types": 4
      },
      {
        "name": "Gold Leaf Lettering",
        "description": "Premium vinyl lettering with a gold leaf finish.",
        "image": "/catalog/vinyl-graphics/gold-leaf-lettering.webp",
        "designs": 0,
        "types": 0
      },
      {
        "name": "Holographic Decals",
        "description": "Eye-catching holographic effect decals.",
        "image": "/catalog/vinyl-graphics/holographic-decals.webp",
        "designs": 0,
        "types": 7
      },
      {
        "name": "Kiss-Cut Stickers",
        "description": "Easy-peel stickers on backing sheets.",
        "image": "/catalog/vinyl-graphics/kiss-cut-stickers.webp",
        "designs": 0,
        "types": 9
      },
      {
        "name": "Product Labels",
        "description": "Custom product packaging labels.",
        "image": "/catalog/vinyl-graphics/product-labels.webp",
        "designs": 0,
        "types": 6
      },
      {
        "name": "Roll Labels",
        "description": "Bulk-printed labels on rolls for easy application.",
        "image": "/catalog/vinyl-graphics/roll-labels.webp",
        "designs": 0,
        "types": 6
      },
      {
        "name": "Sticker Sheets",
        "description": "Multiple custom designs on a single sheet.",
        "image": "/catalog/vinyl-graphics/sticker-sheets.webp",
        "designs": 0,
        "types": 14
      },
      {
        "name": "Transfer Stickers",
        "description": "Vinyl graphics with transfer tape for easy installation.",
        "image": "/catalog/vinyl-graphics/transfer-stickers.webp",
        "designs": 0,
        "types": 3
      },
      {
        "name": "Wall Decals",
        "description": "Decorative and promotional vinyl decals for walls.",
        "image": "/catalog/vinyl-graphics/wall-decals.webp",
        "designs": 12,
        "types": 0
      },
      {
        "name": "Window Decals",
        "description": "Adhesive graphics for glass surfaces.",
        "image": "/catalog/vinyl-graphics/window-decals.webp",
        "designs": 0,
        "types": 0
      },
      {
        "name": "Window Wraps",
        "description": "Full or partial vinyl wraps for storefront or vehicle windows.",
        "image": "/catalog/vinyl-graphics/window-wraps.webp",
        "designs": 8,
        "types": 4
      },
      {
        "name": "Perforated Window Wraps",
        "description": "One-way vision window graphics made with micro-perforated vinyl, allowing people inside to see out while displaying vibrant full-color graphics on the outside.",
        "image": "/catalog/vinyl-graphics/perforated-window-wraps.webp",
        "designs": 8,
        "types": 0
      }
    ]
  }
];

export const pins: Pin[] = [
  {
    "id": "m1",
    "name": "Lumina Jewelry Flagship",
    "clientType": "Luxury Retail Flagship",
    "borough": "Manhattan",
    "neighborhood": "Midtown East",
    "address": "580 Fifth Avenue, New York, NY 10036",
    "signType": "Illuminated 3D Brushed-Metal Channel Letters & Halo Glow",
    "installed": "2024",
    "permit": "DOB-NY-449120",
    "x": 46.2,
    "y": 41.8
  },
  {
    "id": "m2",
    "name": "SoHo Designer Atelier",
    "clientType": "High-Fashion Storefront",
    "borough": "Manhattan",
    "neighborhood": "SoHo Historic District",
    "address": "432 Broadway, New York, NY 10013",
    "signType": "Architectural Cast Bronze Blade Sign & Carved Gold Leaf",
    "installed": "2023",
    "permit": "LPC-DOB-88319",
    "x": 43.1,
    "y": 48.2
  },
  {
    "id": "m3",
    "name": "Hudson Yards Corporate HQ",
    "clientType": "Commercial Office Tower",
    "borough": "Manhattan",
    "neighborhood": "Hudson Yards",
    "address": "500 W 33rd Street, New York, NY 10001",
    "signType": "Executive Lobby Dimensional Brushed Acrylic & Wayfinding Monolith",
    "installed": "2024",
    "permit": "DOB-NY-612984",
    "x": 43.5,
    "y": 41.2
  },
  {
    "id": "m4",
    "name": "Wall Street Capital Partners",
    "clientType": "Financial Services",
    "borough": "Manhattan",
    "neighborhood": "Financial District",
    "address": "14 Wall Street, New York, NY 10005",
    "signType": "Solid Cast Architectural Bronze Plaque & Directory",
    "installed": "2022",
    "permit": "DOB-NY-320911",
    "x": 41.4,
    "y": 53.1
  },
  {
    "id": "m5",
    "name": "Madison Avenue Haute Horlogerie",
    "clientType": "Luxury Watches & Jewelry",
    "borough": "Manhattan",
    "neighborhood": "Upper East Side",
    "address": "710 Madison Avenue, New York, NY 10065",
    "signType": "Precision Reverse Halo-Lit Titanium Letters",
    "installed": "2023",
    "permit": "LPC-DOB-55210",
    "x": 48.1,
    "y": 34.6
  },
  {
    "id": "m6",
    "name": "Harlem Heritage Theatre & Stage",
    "clientType": "Arts & Cultural Venue",
    "borough": "Manhattan",
    "neighborhood": "Central Harlem",
    "address": "253 W 125th Street, New York, NY 10027",
    "signType": "Custom Heritage Marquee Neon & Front-Lit LED Display",
    "installed": "2023",
    "permit": "DOB-NY-774190",
    "x": 49.3,
    "y": 26.5
  },
  {
    "id": "b1",
    "name": "Brooklyn Roasting & Bakehouse",
    "clientType": "Artisanal Cafe & Bakery",
    "borough": "Brooklyn",
    "neighborhood": "DUMBO Historic Waterfront",
    "address": "25 Jay Street, Brooklyn, NY 11201",
    "signType": "Hand-Welded Industrial Steel Blade Sign & Filament Illumination",
    "installed": "2024",
    "permit": "LPC-BK-91823",
    "x": 44.5,
    "y": 54.8
  },
  {
    "id": "b2",
    "name": "Williamsburg Craft Brewery & Tap",
    "clientType": "Brewery & Hospitality",
    "borough": "Brooklyn",
    "neighborhood": "Williamsburg",
    "address": "180 Bedford Avenue, Brooklyn, NY 11249",
    "signType": "Custom Neon Gas-Tube Lettering & Weathered Steel Wall Pan",
    "installed": "2023",
    "permit": "DOB-BK-339108",
    "x": 48.2,
    "y": 50.1
  },
  {
    "id": "b3",
    "name": "Industry City Innovation Campus",
    "clientType": "Industrial Creative Campus",
    "borough": "Brooklyn",
    "neighborhood": "Sunset Park",
    "address": "220 36th Street, Brooklyn, NY 11232",
    "signType": "Campus Wayfinding Monoliths & High-Durability Building IDs",
    "installed": "2024",
    "permit": "DOB-BK-748291",
    "x": 42.1,
    "y": 67.8
  },
  {
    "id": "b4",
    "name": "Downtown Brooklyn Metrotech",
    "clientType": "Technology Campus",
    "borough": "Brooklyn",
    "neighborhood": "Downtown Brooklyn",
    "address": "1 MetroTech Center, Brooklyn, NY 11201",
    "signType": "Comprehensive ADA Tactile Signage & Architectural Pylon",
    "installed": "2022",
    "permit": "DOB-BK-501832",
    "x": 46.1,
    "y": 58.2
  },
  {
    "id": "b5",
    "name": "Greenpoint Promenade Residences",
    "clientType": "Luxury Residential",
    "borough": "Brooklyn",
    "neighborhood": "Greenpoint Waterfront",
    "address": "21 India Street, Brooklyn, NY 11222",
    "signType": "Cast Stainless Steel Letters & Backlit Canopy Entrance",
    "installed": "2023",
    "permit": "DOB-BK-662810",
    "x": 49,
    "y": 46.1
  },
  {
    "id": "b6",
    "name": "Coney Island Boardwalk Grill",
    "clientType": "Oceanfront Entertainment",
    "borough": "Brooklyn",
    "neighborhood": "Coney Island",
    "address": "1205 Boardwalk West, Brooklyn, NY 11224",
    "signType": "Salt-Air Marine-Grade Weatherproof Illuminated Fascia Sign",
    "installed": "2023",
    "permit": "DOB-BK-192044",
    "x": 47.2,
    "y": 91.8
  },
  {
    "id": "q1",
    "name": "Long Island City Studio Lofts",
    "clientType": "Creative Production Campus",
    "borough": "Queens",
    "neighborhood": "Long Island City",
    "address": "43-01 22nd Street, Queens, NY 11101",
    "signType": "Perforated Aluminum Facade Wrap & Illuminated Steel Letters",
    "installed": "2024",
    "permit": "DOB-QN-554210",
    "x": 50.4,
    "y": 42.1
  },
  {
    "id": "q2",
    "name": "Astoria Seafood & Greek Grill",
    "clientType": "Fine Dining Restaurant",
    "borough": "Queens",
    "neighborhood": "Astoria",
    "address": "31-15 30th Avenue, Queens, NY 11102",
    "signType": "Carved High-Density Urethane (HDU) 23k Gold Leaf Blade",
    "installed": "2023",
    "permit": "DOB-QN-338290",
    "x": 52.4,
    "y": 35.2
  },
  {
    "id": "q3",
    "name": "Flushing Grand Heritage Plaza",
    "clientType": "Commercial Center",
    "borough": "Queens",
    "neighborhood": "Downtown Flushing",
    "address": "136-20 38th Avenue, Queens, NY 11354",
    "signType": "Multi-Tenant Commercial Pylon & Ultra-Bright LED Modules",
    "installed": "2024",
    "permit": "DOB-QN-882019",
    "x": 65.2,
    "y": 38.3
  },
  {
    "id": "q4",
    "name": "Sunnyside Regional Care Center",
    "clientType": "Healthcare Facility",
    "borough": "Queens",
    "neighborhood": "Sunnyside",
    "address": "47-01 Queens Boulevard, Queens, NY 11104",
    "signType": "Emergency Code Compliant Backlit Signage & Directional Grid",
    "installed": "2022",
    "permit": "DOB-QN-419082",
    "x": 54.2,
    "y": 44.1
  },
  {
    "id": "q5",
    "name": "JFK Air Cargo Terminal 8",
    "clientType": "Aviation Logistics",
    "borough": "Queens",
    "neighborhood": "JFK International Airport",
    "address": "Building 14, JFK Airport, Jamaica, NY 11430",
    "signType": "Reflective High-Elevation Industrial Warehouse Identification",
    "installed": "2023",
    "permit": "PA-DOB-91024",
    "x": 74.5,
    "y": 70.2
  },
  {
    "id": "x1",
    "name": "Mott Haven Soundstage Studios",
    "clientType": "Film & Media Facility",
    "borough": "The Bronx",
    "neighborhood": "Mott Haven Waterfront",
    "address": "2417 Third Avenue, Bronx, NY 10451",
    "signType": "Direct UV-Printed Industrial Metal Wall Panels & Roof ID",
    "installed": "2024",
    "permit": "DOB-BX-220194",
    "x": 52.2,
    "y": 24.5
  },
  {
    "id": "x2",
    "name": "Arthur Avenue Italian Salumeria",
    "clientType": "Historic Deli & Market",
    "borough": "The Bronx",
    "neighborhood": "Belmont / Little Italy",
    "address": "2364 Arthur Avenue, Bronx, NY 10458",
    "signType": "Glass-Gilded 24k Gold Foil Storefront & Metal Canopy Blade",
    "installed": "2023",
    "permit": "DOB-BX-678120",
    "x": 54.3,
    "y": 17.2
  },
  {
    "id": "x3",
    "name": "Hunts Point Wholesale Distribution",
    "clientType": "Industrial Distribution",
    "borough": "The Bronx",
    "neighborhood": "Hunts Point",
    "address": "770 Food Center Drive, Bronx, NY 10474",
    "signType": "Stainless Steel Heavy Logistics Signage & Loading Bay Numbers",
    "installed": "2023",
    "permit": "DOB-BX-510982",
    "x": 57.1,
    "y": 25.4
  },
  {
    "id": "x4",
    "name": "Grand Concourse Health Plaza",
    "clientType": "Medical Plaza",
    "borough": "The Bronx",
    "neighborhood": "Concourse",
    "address": "1650 Grand Concourse, Bronx, NY 10457",
    "signType": "DOB-Permitted Illuminated Ground Monument Sign",
    "installed": "2022",
    "permit": "DOB-BX-334190",
    "x": 51.4,
    "y": 21
  },
  {
    "id": "s1",
    "name": "St. George Terminal Ferry Plaza",
    "clientType": "Civic Transit Hub",
    "borough": "Staten Island",
    "neighborhood": "St. George",
    "address": "1 Richmond Terrace, Staten Island, NY 10301",
    "signType": "Marine-Grade 316 Stainless Steel Monoliths & Directional Signs",
    "installed": "2024",
    "permit": "DOB-SI-992104",
    "x": 34.2,
    "y": 63.4
  },
  {
    "id": "s2",
    "name": "Staten Island Regional Mall Anchor",
    "clientType": "Department Store & Retail",
    "borough": "Staten Island",
    "neighborhood": "New Springville",
    "address": "2655 Richmond Avenue, Staten Island, NY 10314",
    "signType": "Massive Halo-Lit LED Channel Letters & Highway Pylon Panel",
    "installed": "2023",
    "permit": "DOB-SI-442109",
    "x": 26.3,
    "y": 74.2
  },
  {
    "id": "s3",
    "name": "Tottenville Marina & Yacht Basin",
    "clientType": "Maritime & Harbor",
    "borough": "Staten Island",
    "neighborhood": "Tottenville",
    "address": "250 Main Street, Staten Island, NY 10307",
    "signType": "UV-Protected Anodized Aluminum Channel Sign & Dock Identifiers",
    "installed": "2022",
    "permit": "DOB-SI-110294",
    "x": 18.2,
    "y": 88.4
  }
];

export const reviews: Review[] = [
  {
    "id": "marcus-vance",
    "name": "Marcus Vance",
    "role": "VP of Retail Development",
    "company": "SoHo Luxury Group",
    "borough": "SoHo, Manhattan",
    "category": "Storefront Channel Letters",
    "year": "2025",
    "highlight": "Flawless Landmark DOB Permits & Halo Fabrication",
    "quote": "Signs NYC handled our entire SoHo flagship package from complex landmark preservation permits to precision halo channel letters. Having a real 10,000 sq ft NYC fabrication facility behind our buildout made all the difference.",
    "specs": "Reverse Halo LED • Brushed Brass",
    "result": "LPC Approved on 1st Submission • 42% Foot Traffic Lift"
  },
  {
    "id": "elena-rostova",
    "name": "Elena Rostova",
    "role": "Operations Director",
    "company": "Metro Hospitality NYC",
    "borough": "Midtown, Manhattan",
    "category": "Commercial Retractable Awnings",
    "year": "2025",
    "highlight": "Emergency Response & Storm Repair Within Hours",
    "quote": "When a severe squall damaged our restaurant entrance canopy in Midtown at 8 PM, Signs NYC had emergency crews on-site within hours. Their 24/7 service and fabrication quality are unmatched across the five boroughs.",
    "specs": "Sunbrella Marine Acrylic • Motorized Truss",
    "result": "24/7 Emergency Dispatch • Zero Operating Downtime"
  },
  {
    "id": "david-chen",
    "name": "David Chen",
    "role": "General Manager",
    "company": "The Banyan Grill",
    "borough": "Williamsburg, Brooklyn",
    "category": "Sidewalk Cafe Barriers",
    "year": "2025",
    "highlight": "Passed NYC DOT Inspection on Day One",
    "quote": "Our outdoor dining barriers passed DOT inspection on the first visit. Heavy-duty powder-coated steel with custom branded canvas inserts that withstand Brooklyn winters and street traffic effortlessly.",
    "specs": "Welded Tubular Steel • UV Canvas Inserts",
    "result": "100% NYC DOT Outdoor Dining Compliant"
  },
  {
    "id": "dr-aris-thorne",
    "name": "Dr. Aris Thorne",
    "role": "Clinical Director",
    "company": "Peak Performance Physical Therapy",
    "borough": "Long Island City, Queens",
    "category": "Perforated Window Wraps",
    "year": "2025",
    "highlight": "100% Patient Privacy with Full Natural Daylight",
    "quote": "The 70/30 micro-perforated window wrap gives our rehabilitation patients complete privacy while filling our facility with beautiful natural light. Client bookings jumped within the first two weeks of installation.",
    "specs": "70/30 One-Way Perf • Optically Clear Overlam",
    "result": "Full HIPAA Privacy Maintained • Daylight Transmission"
  },
  {
    "id": "sarah-jenkins",
    "name": "Sarah Jenkins",
    "role": "Brand Experience Lead",
    "company": "Flatiron Silicon Alley Tech",
    "borough": "Flatiron District, Manhattan",
    "category": "Corporate Lobby Signs",
    "year": "2025",
    "highlight": "Museum-Grade 14-Foot Stainless Steel Logo",
    "quote": "We commissioned a 14-foot brushed stainless steel illuminated logo for our 28th-floor headquarters. From CAD engineering to structural mounting, the Signs NYC team delivered museum-grade perfection.",
    "specs": "Waterjet Cut 316 Stainless • Edge-Lit Acrylic",
    "result": "Precision Sub-Millimeter Tolerances Across 14 Feet"
  },
  {
    "id": "anthony-moretti",
    "name": "Anthony Moretti",
    "role": "Principal Partner",
    "company": "Moretti & Sons Contractors",
    "borough": "Financial District, Manhattan",
    "category": "DOB Sign Permits & Banners",
    "year": "2024",
    "highlight": "Zero DOB Violations & Expedited Approvals",
    "quote": "Navigating NYC Department of Buildings sign permits is normally a nightmare. Signs NYC's in-house permit expediting team had our illuminated blade sign and sidewalk shed banners approved in record time.",
    "specs": "DOB Class 1 Expediting • Wind-Vented Mesh",
    "result": "Approved in 11 Business Days with Full Seal"
  },
  {
    "id": "claire-delacroix",
    "name": "Claire Delacroix",
    "role": "Creative Director",
    "company": "Farima Perry Florals",
    "borough": "Upper East Side, Manhattan",
    "category": "Bespoke Retail Awnings",
    "year": "2025",
    "highlight": "Immediate Footfall Increase on Madison Ave",
    "quote": "Replacing our dated striped awning with a custom matte charcoal canopy with crisp dimensional lettering transformed our storefront into a Madison Avenue landmark. Footfall increased immediately.",
    "specs": "Matte Charcoal Sunbrella • Dimensional Letters",
    "result": "Madison Ave LPC District Compliant"
  },
  {
    "id": "roberto-gomez",
    "name": "Roberto Gomez",
    "role": "Fleet Logistics Director",
    "company": "Tri-State Charter Express",
    "borough": "Mott Haven, The Bronx",
    "category": "Coach Bus Wraps",
    "year": "2025",
    "highlight": "360° Seamless Multi-Bus Fleet Alignment",
    "quote": "We wrapped our fleet of luxury 45-foot coach buses with full 3M cast vinyl. The seamless alignment across curves, luggage bays, and window perf is proof of genuine master craftsmanship.",
    "specs": "3M Controltac Cast • Gloss UV Salt Shield",
    "result": "Full 7-Year 3M MCS Certified Fleet Warranty"
  },
  {
    "id": "maya-lin-bauer",
    "name": "Maya Lin-Bauer",
    "role": "Curator of Public Spaces",
    "company": "Brooklyn Contemporary Arts",
    "borough": "DUMBO, Brooklyn",
    "category": "Architectural Monuments",
    "year": "2025",
    "highlight": "Heavy Bronze-Patina Resisting Harbor Salt Air",
    "quote": "Signs NYC fabricated our exterior bronze-patina directional monument. It looks like it was carved from the industrial heritage of the Brooklyn Navy Yard itself. Flawless durability against harbor salt air.",
    "specs": "Architectural Bronze Patina • Core-Ten Framing",
    "result": "Marine Grade Coating • Coastal Salt Proofed"
  },
  {
    "id": "jameson-cole",
    "name": "Jameson Cole",
    "role": "Founder & Head Roaster",
    "company": "DUMBO Artisan Coffee Co.",
    "borough": "DUMBO, Brooklyn",
    "category": "Food Truck Vehicle Wraps",
    "year": "2024",
    "highlight": "Turned a Utility Van into an Icon",
    "quote": "They transformed our beat-up utility step van into a luxury matte charcoal and gold leaf mobile espresso bar. People photograph our truck wherever we park around Prospect Park and Brooklyn Heights.",
    "specs": "Avery Supreme Wrap • 23k Gold Leaf Foil",
    "result": "Over 50,000 Social Impressions in First Month"
  },
  {
    "id": "victoria-sterling",
    "name": "Victoria Sterling",
    "role": "Managing Director",
    "company": "Sterling Asset Management",
    "borough": "Midtown East, Manhattan",
    "category": "Boardroom Titanium Signs",
    "year": "2025",
    "highlight": "Clean, Silent Off-Hours Night Installation",
    "quote": "Our executive boardroom sign with edge-lit acrylic and brushed titanium backer was delivered ahead of our investor summit. Clean, quiet night installation without disrupting our trading floor operations.",
    "specs": "Brushed Titanium • Low-Voltage Diffusion LED",
    "result": "Zero Day-Shift Downtime • Stamped UL Listed"
  },
  {
    "id": "antoine-mercier",
    "name": "Antoine Mercier",
    "role": "Owner & Executive Chef",
    "company": "Bistro Vivienne",
    "borough": "West Village, Manhattan",
    "category": "Handcrafted Neon Signs",
    "year": "2025",
    "highlight": "Bleecker Street’s Most Photographed Landmark",
    "quote": "True hand-bent neon is becoming a lost art in New York, but Signs NYC has real artisans. Our glowing warm amber blade sign is now the most photographed visual on Bleecker Street.",
    "specs": "Hand-Bent Glass Neon • Weatherproof Transformer",
    "result": "Featured in Eater NYC & New York Times Dining"
  },
  {
    "id": "kevin-oconnor",
    "name": "Kevin O'Connor",
    "role": "Facilities Director",
    "company": "St. George Academic Campus",
    "borough": "St. George, Staten Island",
    "category": "Campus Wayfinding Monuments",
    "year": "2024",
    "highlight": "60+ Wayfinding Totems Anchored in Stone",
    "quote": "Over 60 exterior directional signs, campus maps, and building markers delivered and anchored into stone. Heavy-duty, vandal-resistant, and 100% compliant with NYC accessibility standards.",
    "specs": "Heavy Aluminum Pylon • Anti-Graffiti Overlam",
    "result": "Complete Campus Navigation Overhaul"
  },
  {
    "id": "grace-kim",
    "name": "Grace Kim",
    "role": "Retail Operations VP",
    "company": "K-Beauty Global Flagship",
    "borough": "Koreatown, Manhattan",
    "category": "High-Lumen LED Lightboxes",
    "year": "2025",
    "highlight": "Zero Hotspots Across 20-Foot Vertical Frame",
    "quote": "In the brightest corridor of Manhattan, our 20-foot vertical ultra-bright LED lightbox cuts through the visual noise with immaculate color balance, vivid saturation, and zero hot spots.",
    "specs": "Frameless Silicone Edge Graphic (SEG) • 6500K LED",
    "result": "6500K Ultra-High CRI Color Balance"
  },
  {
    "id": "julian-rossi",
    "name": "Julian Rossi",
    "role": "Construction Superintendent",
    "company": "Apex Urban Developers",
    "borough": "Hudson Yards, Manhattan",
    "category": "Construction Jobsite Safety",
    "year": "2024",
    "highlight": "Turnkey Compliance Across 3 High-Rise Sites",
    "quote": "They handle all our DOB site safety signs, perimeter fence mesh, and project architect renderings across three concurrent high-rise jobsites. Never a delay, always 100% compliant.",
    "specs": "13oz Heavyweight PVC • Fire Marshal Certified",
    "result": "Zero Safety Audit Fines Across 18 Months"
  },
  {
    "id": "natasha-vass",
    "name": "Natasha Vass",
    "role": "Hospitality Director",
    "company": "The Grandview Rooftop Lounge",
    "borough": "Chelsea, Manhattan",
    "category": "Skyline Rooftop Signs",
    "year": "2025",
    "highlight": "Engineered for 120 MPH Hudson River Gale Winds",
    "quote": "Engineering a rooftop sign exposed to 60+ MPH Hudson River winds requires serious structural calculations. Signs NYC's structural engineers stamped and anchored our beacon flawlessly.",
    "specs": "Structural Steel I-Beam • PE Certified Stamped",
    "result": "Engineered & Stamped for 120 MPH NYC Wind Loads"
  },
  {
    "id": "dmitri-volkov",
    "name": "Dmitri Volkov",
    "role": "Logistics Manager",
    "company": "Metro NYC Delivery Fleet",
    "borough": "Astoria, Queens",
    "category": "Sprinter Van Fleet Wraps",
    "year": "2025",
    "highlight": "18 Commercial Vans Wrapped Over Two Weekends",
    "quote": "Wrapped 18 Mercedes Sprinter vans over two weekends so our delivery operations suffered zero downtime. Crisp printing, edge-wrapped seams, and heavy-duty protective overlaminates.",
    "specs": "Avery MPI 1105 Cast • Anti-Scuff Overlam",
    "result": "Zero Weekend Downtime for Commercial Logistics"
  },
  {
    "id": "hannah-bernstein",
    "name": "Hannah Bernstein",
    "role": "President",
    "company": "LES Historic Preservation Trust",
    "borough": "Lower East Side, Manhattan",
    "category": "Historic Wooden Sign Restoration",
    "year": "2024",
    "highlight": "1920s Traditional Gold Leaf Preserved",
    "quote": "Signs NYC restored our 1920s hand-carved guilded wooden sign with traditional gold leaf technique. They preserved historical integrity while adding discreet modern weatherproofing.",
    "specs": "23 Karat Gold Leaf • Hand-Carved HDU Substrate",
    "result": "Historic Preservation Award Winner 2024"
  },
  {
    "id": "tariq-al-mansoor",
    "name": "Tariq Al-Mansoor",
    "role": "General Counsel",
    "company": "Starlight Broadway Theatricals",
    "borough": "Theater District, Manhattan",
    "category": "Building Wraps & Mesh Banners",
    "year": "2025",
    "highlight": "90-Foot Times Square Facade Wrap Overnight",
    "quote": "When we launched our theatrical run, Signs NYC produced and hung a 90-foot building wrap overnight. Vibrant UV-cured ink that looked razor sharp under the intense Times Square halogen lights.",
    "specs": "Heavyweight Air-Mesh • UV Curable Pigment",
    "result": "Overnight Rigging & Crane Mounting in Times Square"
  },
  {
    "id": "dr-rachel-levin",
    "name": "Dr. Rachel Levin",
    "role": "Medical Director",
    "company": "Park Slope Medical Associates",
    "borough": "Park Slope, Brooklyn",
    "category": "ADA Braille Wayfinding",
    "year": "2025",
    "highlight": "Complete 3-Story ADA Compliant Sign System",
    "quote": "Complete interior wayfinding system for our three-story clinic: tactile Braille signs, photoluminescent egress markers, and sleek brushed aluminum exam room directories. Flawless inspection pass.",
    "specs": "Photopolymer Raised Braille • Grade 2 ADA",
    "result": "100% Pass Rate on NYC Health Dept Inspection"
  },
  {
    "id": "samuel-brody",
    "name": "Samuel Brody",
    "role": "Principal Architect",
    "company": "Brody & Wright Architecture",
    "borough": "NoHo, Manhattan",
    "category": "Bespoke Architectural Signage",
    "year": "2024",
    "highlight": "Direct Revit Integration & Sub-Millimeter Cut",
    "quote": "As architects, we have zero tolerance for sloppy tolerances. Signs NYC works directly with our Revit models and CNC cuts with micrometer precision. They are our definitive signage partner.",
    "specs": "5-Axis CNC Milling • Anodized Architectural Finish",
    "result": "Direct BIM / Revit CAD Integration"
  },
  {
    "id": "lucia-mendez",
    "name": "Lucia Mendez",
    "role": "Store Director",
    "company": "SoHo Fashion Boutique",
    "borough": "Spring Street, SoHo",
    "category": "Dusted Crystal Glass Vinyl",
    "year": "2025",
    "highlight": "Looks Like Hand-Etched Acid Glass",
    "quote": "The frosted dusted crystal vinyl graphics on our entrance doors and display vitrines look like genuine sandblasted acid-etched glass at a fraction of the weight and turnaround time.",
    "specs": "3M Dusted Crystal • Precision Plotter Cut",
    "result": "Turnaround in 48 Hours Before Fashion Week"
  },
  {
    "id": "patrick-gallagher",
    "name": "Patrick Gallagher",
    "role": "Owner",
    "company": "The Kerryman Pub & Tavern",
    "borough": "Riverdale, The Bronx",
    "category": "Carved 3D HDU Signs",
    "year": "2024",
    "highlight": "Routed Celtic Knotwork with 23k Gold Trim",
    "quote": "Hand-routed 3D Celtic knotwork and 23k gold leaf on HDU that will outlive us all without rotting or splitting like natural wood. It's the talk of our whole neighborhood in the Bronx.",
    "specs": "High-Density Urethane • 23k Gilding • Enamel Coat",
    "result": "Rot-Proof Lifetime Architectural Guarantee"
  },
  {
    "id": "zoe-krevsky",
    "name": "Zoe Krevsky",
    "role": "Marketing VP",
    "company": "Equinox Luxury Health Clubs",
    "borough": "Tribeca, Manhattan",
    "category": "Elevator Architectural Wraps",
    "year": "2025",
    "highlight": "Class A Fire Rated Elevator Cab Overhaul",
    "quote": "3M architectural matte cast wraps inside our passenger elevators. Scratch-resistant, fire-rated, and member engagement skyrocketed. Signs NYC executed the night installs cleanly without any disruption.",
    "specs": "3M DI-NOC Architectural • ASTM E84 Class A",
    "result": "Class A ASTM E84 Fire Rating Fully Certified"
  }
];

export const steps = [
  {
    "number": "01",
    "title": "CONSULTATION & SITE SURVEY",
    "copy": "Share your sign vision, architectural plans, or storefront photos. Our engineers inspect facade mounts and measure sightlines."
  },
  {
    "number": "02",
    "title": "DESIGN & DOB EXPEDITING",
    "copy": "We draft CAD drawings, photorealistic mockups, and submit full permit applications directly to the NYC Department of Buildings."
  },
  {
    "number": "03",
    "title": "IN-HOUSE FABRICATION",
    "copy": "Crafted in our 10,000 sq ft facility in NYC with precision CNC routing, laser cutting, channel bending, and UL-certified electrical assembly."
  },
  {
    "number": "04",
    "title": "LICENSED INSTALLATION",
    "copy": "Our 3M certified sign installers and licensed crane crews mount your sign with complete DOB structural sign-off and warranty."
  }
];
