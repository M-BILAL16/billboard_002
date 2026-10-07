export const phone = {
  display: "(718) 784-7444",
  href: "tel:+17187847444",
};

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#catalog", label: "Catalog" },
  { href: "#industries", label: "Industries" },
];

export const intro =
  "From illuminated storefront channel letters and architectural metalwork to corporate lobby branding and fleet graphics.";

export const credentials = [
  { value: 35, suffix: "+", unit: "Years", label: "Serving NYC since 1989", note: "Licensed & Insured in All 5 Boroughs" },
  { value: 10000, suffix: "", unit: "Sq Ft", label: "Fabrication facility", note: "CNC • Laser • Welding • Bending" },
  { value: 100, suffix: "%", unit: "Permit ready", label: "DOB permit expediting", note: "3M Certified Professional Installers" },
  { value: 24, suffix: "/7", unit: "Emergency", label: "Emergency sign service", note: "After-Hours & Rapid Upkeep" },
];

export const industriesCopy =
  "From high-traffic retail storefronts and Michelin-starred dining facades to DOB-permitted construction safety signs, campus wayfinding, and corporate lobby branding. Explore tailored signage solutions engineered for your industry.";

export const industries = [
  { id: "retail", title: "Retail" },
  { id: "restaurants", title: "Restaurants" },
  { id: "museums", title: "Museums" },
  { id: "property", title: "Property" },
  { id: "education", title: "Education" },
  { id: "religious", title: "Religious" },
  { id: "charity", title: "Charity" },
  { id: "political", title: "Political" },
  { id: "government", title: "Government" },
  { id: "healthcare", title: "Healthcare" },
  { id: "convention", title: "Convention" },
  { id: "arenas", title: "Arenas" },
  { id: "transportation", title: "Transportation" },
  { id: "contractors", title: "Contractors" },
  { id: "pop-up-store", title: "Pop-Up Store" },
].map((item) => ({ ...item, image: `/industries/${item.id}.jpg` }));

export type Transformation = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  borough: string;
  before: string;
  after: string;
  beforeDesc: string;
  afterDesc: string;
  specs: { label: string; value: string }[];
  stat: string;
  statLabel: string;
};

const specs = (material: string, finish: string, compliance: string, impact: string) => [
  { label: "Material", value: material },
  { label: "Finish", value: finish },
  { label: "Compliance", value: compliance },
  { label: "Impact", value: impact },
];

export const transformations: Transformation[] = [
  {
    id: "elevator",
    category: "Elevator Wraps",
    title: "Commercial Elevator Architectural Wrap",
    subtitle: "Luxury Fitness & Gym Elevator Transformation",
    borough: "Midtown Manhattan, NYC",
    before: "/portfolio/elevator-before.jpg",
    after: "/portfolio/elevator-after.webp",
    beforeDesc: "Standard industrial brushed steel doors offering zero branded engagement for gym members.",
    afterDesc: "High-tensile 3M architectural cast wrap with custom dynamic matte branding and anti-scuff laminate.",
    specs: specs(
      "3M IJ180Cv3 Cast Architectural Vinyl",
      "Matte Slip & Scratch-Resistant Overlaminate",
      "ASTM E84 Class A Fire & Smoke Rated",
      "+180% Brand Engagement & Wayfinding Recall",
    ),
    stat: "+180%",
    statLabel: "Brand Recall Boost",
  },
  {
    id: "window",
    category: "Window Wraps",
    title: "Physical Therapy & Clinic Window Wrap",
    subtitle: "One-Way Optical Perforated Privacy & Anatomy Graphics",
    borough: "Long Island City, Queens",
    before: "/portfolio/window-before.jpg",
    after: "/portfolio/window-after.jpg",
    beforeDesc: "Clear transparent storefront glass exposing interior treatment floor, desks, and street glare.",
    afterDesc:
      "Precision skeletal & muscle biomechanics perforated graphics providing patient privacy while preserving natural outward daylight.",
    specs: specs(
      "Medical-Grade 70/30 One-Way Micro-Perforated Vinyl",
      "Optically Clear UV-Protective Overlaminate (Anti-Glare)",
      "HIPAA Visual Patient Privacy & NYC Commercial Code",
      "+92% Patient Comfort & +100% Streetfront Privacy",
    ),
    stat: "+92%",
    statLabel: "Patient Privacy Rating",
  },
  {
    id: "awning",
    category: "Commercial Awnings",
    title: "Architectural Waterproof Retractable Awning",
    subtitle: "Boutique Facade Canopy & Streetfront Shade",
    borough: "Upper East Side, Manhattan",
    before: "/portfolio/awning-before.jpg",
    after: "/portfolio/awning-after.jpg",
    beforeDesc: "Dated striped fabric awning with aged pattern, providing zero bespoke identity for luxury boutique.",
    afterDesc:
      "Bespoke matte charcoal architectural awning with crisp white typography, floral wreath emblem, and contact valance.",
    specs: specs(
      "Sunbrella Marine-Grade Solution-Dyed Acrylic",
      "Heavy-Duty Welded Aluminum Truss System",
      "NYC DOB Canopy Permit & NYC Fire Marshal Cert",
      "Expanded Sidewalk All-Weather Visibility",
    ),
    stat: "35°F",
    statLabel: "Surface Temp Drop",
  },
  {
    id: "barrier",
    category: "Sidewalk Cafe Barriers",
    title: "Modular Restaurant Outdoor Dining Barriers",
    subtitle: "DOT-Compliant Modular Cafe Enclosure",
    borough: "Williamsburg, Brooklyn",
    before: "/portfolio/barrier-before.jpg",
    after: "/portfolio/barrier-after.jpg",
    beforeDesc: "Open sidewalk cafe with tables exposed directly to pedestrian walkway and zero perimeter enclosure.",
    afterDesc:
      "Heavyweight powder-coated navy steel modular barriers with branded Banyan Grill canvas inserts and safety bases.",
    specs: specs(
      "Tubular Steel Frame with Marine Vinyl Inserts",
      "Outdoor Industrial Matte Powder Coat (UV Stable)",
      "NYC DOT Open Restaurants Cafe Code Approved",
      "+35% Outdoor Table Turnover & Dining Comfort",
    ),
    stat: "+35%",
    statLabel: "Outdoor Table Capacity",
  },
  {
    id: "bus",
    category: "Bus & Coach Wraps",
    title: "Full Fleet Luxury Coach Bus Wrap",
    subtitle: "Mobile Highway Landmark & Travel Branding",
    borough: "Tri-State & 5 Boroughs Transit",
    before: "/portfolio/bus-before.jpg",
    after: "/portfolio/bus-after.jpg",
    beforeDesc: "Factory plain white luxury coach bus with blank body panels and zero brand presence.",
    afterDesc:
      "Full 360° cosmic galaxy wrap with 3M perforated window graphics turning every mile into high-ROI marketing.",
    specs: specs(
      "3M Controltac Comply Wrap Film with Micro-Air",
      "Gloss High-Lustre UV & Salt Shield Clear Coat",
      "DOT & NYC TLC Commercial Fleet Certified",
      "1.2 Million Monthly Tri-State Commuter Views",
    ),
    stat: "1.2M",
    statLabel: "Monthly Impressions",
  },
  {
    id: "truck",
    category: "Food Truck Wraps",
    title: "Artisan Coffee & Espresso Food Truck",
    subtitle: "Matte Charcoal & Gold Leaf Mobile Cafe",
    borough: "DUMBO & Brooklyn Navy Yard",
    before: "/portfolio/truck-before.jpg",
    after: "/portfolio/truck-after.jpg",
    beforeDesc: "Weathered primer-grey step van looking like an uninviting utility vehicle.",
    afterDesc:
      "Turned into an upscale artisan espresso bar with ornate Victorian filigree, matte wrap, and menu lettering.",
    specs: specs(
      "Avery Dennison Supreme Wrapping Cast Film",
      "Deep Matte Charcoal with Gold Metallic Accents",
      "NYC DOHMH Food Truck Health Code Approved",
      "+240% Daily Average Order Volume at NYC Parks",
    ),
    stat: "+240%",
    statLabel: "Daily Sales Surge",
  },
  {
    id: "van",
    category: "Fleet Vehicle Wraps",
    title: "Mercedes Sprinter Commercial Fleet Wrap",
    subtitle: "High-Impact Brand Landscape Wrap",
    borough: "Long Island City & Manhattan Commercial Routes",
    before: "/portfolio/van-before.jpg",
    after: "/portfolio/van-after.jpg",
    beforeDesc: "Plain generic white work van generating zero customer inquiries while driving 2,000 miles/month.",
    afterDesc: "Vibrant scenic mountain vector landscape with razor-sharp contact info and reflective contour accents.",
    specs: specs(
      "3M Envision Non-PVC Sustainable Wrap Film",
      "Scratch-Proof Semi-Gloss Anti-Graffiti Laminate",
      "Commercial Vehicle Registration & DOT Standards",
      "Estimated 65,000 Daily Drive-By NYC Impressions",
    ),
    stat: "65K",
    statLabel: "Daily Drive-By Views",
  },
];

export const boroughsCopy =
  "3,240 installations across New York, from Fifth Avenue flagships to the St. George ferry. Open a borough for the address, the permit, and what was fabricated.";

export const quoteOptions = {
  boroughs: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island", "Tri-State Area"],
  signTypes: [
    "Illuminated Channel Letters",
    "Blade / Projecting Sign",
    "Lobby & Reception Sign",
    "Storefront Awning & Fascia",
    "Metal Plaque & Dimensional",
    "Custom Neon & LED",
    "Window & Wall Vinyl Wraps",
    "DOB Permit Expediting Only",
  ],
  timelines: ["Emergency (Under 1 Week)", "Standard (1-2 Weeks)", "Flexible (1+ Month)"],
};

export const quoteReceives = [
  {
    title: "Itemized Fabrication Scope",
    copy: "Complete breakdown of laser-cut aluminum, acrylic, UL-listed LED modules, and power supplies.",
  },
  {
    title: "NYC DOB & LPC Permit Review",
    copy: "Zoning compliance check for street projection, height regulations, and landmark district approvals.",
  },
  {
    title: "Rapid Production Timeline",
    copy: "Standard 3-7 business day turnaround directly from our 10,000 sq ft NYC fabrication facility.",
  },
];

export const contact = {
  salesEmail: "sales@signsny.com",
  infoEmail: "info@signsny.com",
  officePhone: { display: "(718) 453-8300", href: "tel:+17184538300" },
  plant: "10,000 Sq Ft Facility • Long Island City, NY",
};

export const footerLinks = {
  navigation: [
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#about" },
    { label: "Custom Signs", href: "#catalog" },
    { label: "Services", href: "#services" },
    { label: "Wholesale", href: "#contact" },
    { label: "Portfolio", href: "#portfolio" },
  ],
  services: [
    { label: "Storefront Channel Letters", href: "#catalog" },
    { label: "Indoor & Lobby Signs", href: "#catalog" },
    { label: "Commercial Awnings", href: "#catalog" },
    { label: "Scaffolding & Banners", href: "#catalog" },
    { label: "Fleet Vehicle Wraps", href: "#portfolio" },
    { label: "DOB Permit Expediting", href: "#services" },
  ],
  social: ["Instagram", "Facebook", "LinkedIn", "YouTube"],
};
