export const siteConfig = {
  brand: "Nepora Exports",
  email: "hello@nepora.example",
  phone: "+977 01 555 0101",
  whatsapp: "/contact",
  social: {
    instagram: "#contact-footer",
    facebook: "#contact-footer",
    linkedin: "#contact-footer",
  },
  showReviews: true,
  showContact: true,
  showAnnouncement: true,
  heroVideo: false,
};
const asset = (n: number) => `/images/home/editorial-${n}.webp`;
export const navigation = [
  {
    label: "Shawls",
    href: "/collections?category=Shawls",
    children: ["Solid Pashmina", "Ombre Pashmina", "Patterned Pashmina"],
  },
  {
    label: "Wraps",
    href: "/collections?category=Wraps",
    children: ["Everyday Wraps", "Evening Wraps"],
  },
  { label: "Scarves", href: "/collections?category=Scarves" },
  { label: "Men's", href: "/collections?category=Men" },
  { label: "Home", href: "/" },
  { label: "Treasures of India", href: "/#featured" },
  {
    label: "Shop By",
    href: "/collections",
    children: ["Heritage", "Most Viewed"],
  },
  { label: "About Us", href: "/about" },
  { label: "Editorial", href: "/#editorial" },
];
export const announcements = ["Guaranteed Authenticity", "Kathmandu, Nepal"];
export const recognition = [
  {
    year: "2024",
    title: "A craft passed from hand to hand",
    description:
      "The beauty of Pashmina lives in the knowledge shared across generations of makers.",
    image: asset(1),
    alt: "Editorial photograph of plum shawl and textile pattern",
  },
  {
    year: "2025",
    title: "An invitation to slow down",
    description:
      "We celebrate the quiet moments of weaving, finishing, and wearing something made to last.",
    image: asset(2),
    alt: "Artisan hands working at a traditional loom",
  },
];
export const crafts = {
  Women: [
    { title: "Solid Pashmina", image: asset(1) },
    { title: "Ombre Pashmina", image: asset(2) },
    { title: "Patterned Pashmina", image: asset(3) },
    { title: "Reversible Pashmina", image: asset(4) },
  ],
  Men: [
    { title: "Classic Wraps", image: asset(4) },
    { title: "Woven Scarves", image: asset(3) },
    { title: "Evening Shawls", image: asset(2) },
    { title: "Travel Layers", image: asset(1) },
  ],
};
export const heritage = [
  "Border / Palla",
  "All Over / Jaal",
  "Jamawar",
  "Kalamkari",
  "Zari / Tilla",
  "Kani",
].map((title, i) => ({
  title,
  description: [
    "A graceful border that frames every gesture.",
    "An all-over pattern of patient, intricate detail.",
    "Rich motifs with a story in every weave.",
    "Hand-drawn artistry meets the softness of Pashmina.",
    "A quiet glimmer of metallic thread.",
    "Colour and pattern brought together on the loom.",
  ][i],
  image: asset((i % 4) + 1),
  href: "/collections",
  alt: `Editorial photograph of textile for ${title}`,
}));
export const featured = [
  {
    title: "The Heirloom Edit",
    description:
      "Special pieces chosen for their artistry and enduring beauty.",
    image: "/images/banner1.webp",
    alt: "Ornate handmade rug displayed in a sunlit heritage interior",
    href: "/collections",
  },
  {
    title: "Objects of Warmth",
    description: "Thoughtful accents for the spaces and moments we share.",
    image: "/images/banner2.webp",
    alt: "Ornate handmade rug displayed in a sunlit heritage interior",
    href: "/collections",
  },
];
export const products = [
  "The Saffron Dawn Shawl",
  "The Kashmir Bloom Wrap",
  "The Evening Plum Pashmina",
  "The Willow Weave Scarf",
  "The Rose Mist Shawl",
  "The Heritage Border Wrap",
].map((name, i) => ({
  id: `p${i}`,
  slug: name.toLowerCase().replaceAll(" ", "-"),
  name,
  category: ["Shawls", "Wraps", "Shawls", "Scarves", "Men", "Wraps"][i],
  material: "Handwoven Pashmina",
  image: `/images/pashmina${(i % 3) + 1}.webp`,
  images: [0, 1, 2].map(
    (offset) => `/images/pashmina${((i + offset) % 3) + 1}.webp`,
  ),
  alt: `Pashmina photograph for ${name}`,
  href: `/collections/${name.toLowerCase().replaceAll(" ", "-")}`,
}));
export const artisans = [
  {
    name: "Zahoor Ahmad",
    craft: "Master Weaver",
    image: asset(1),
    alt: "Folded burgundy shawl, artisan portrait placeholder",
  },
  {
    name: "Nusrat Begum",
    craft: "Needlework Artist",
    image: asset(2),
    alt: "Artisan hands at a loom, portrait placeholder",
  },
  {
    name: "Irfan Ali",
    craft: "Pattern Maker",
    image: asset(3),
    alt: "Model in an ivory shawl, artisan portrait placeholder",
  },
  {
    name: "Meher Khan",
    craft: "Finishing Artisan",
    image: asset(4),
    alt: "Patterned textile on a chair, artisan portrait placeholder",
  },
];
export const articles = [
  {
    title: "A thread through the valley",
    category: "CRAFT",
    date: "12 AUG 2026",
    excerpt: "Tracing the patient journey from fibre to finished shawl.",
    image: asset(4),
    alt: "Editorial photograph of woven textile",
    href: "#editorial",
  },
  {
    title: "The language of the loom",
    category: "STORIES",
    date: "28 JUL 2026",
    excerpt: "What a maker sees in every small decision.",
    image: asset(2),
    alt: "Editorial photograph of patterned textile",
    href: "#editorial",
  },
  {
    title: "How to keep an heirloom",
    category: "GUIDE",
    date: "10 JUN 2026",
    excerpt: "Simple ways to care for a piece made to last.",
    image: asset(3),
    alt: "Editorial photograph of burgundy textile",
    href: "#editorial",
  },
];
export const faqs = [
  {
    question: "What is Pashmina?",
    answer:
      "Pashmina is a fine cashmere fibre traditionally hand-spun and woven into shawls and wraps. Its softness and light warmth make it treasured for generations.",
  },
  {
    question: "How should I care for a Pashmina?",
    answer:
      "Store it clean and folded in a breathable bag. Air it between wears and use a specialist cleaner when needed.",
  },
  {
    question: "Is each piece handmade?",
    answer:
      "Our collection celebrates handwork, from weaving to detailed finishing. Specific techniques can vary by piece.",
  },
  {
    question: "How do I style a Pashmina shawl?",
    answer:
      "Drape it loosely over the shoulders, wrap it once around the neck, or fold it as a light evening layer.",
  },
  {
    question: "What makes a heritage weave different?",
    answer:
      "Heritage weaves use distinctive patterns and techniques that take considerable time and practiced skill to make.",
  },
  {
    question: "Can I enquire from outside Nepal?",
    answer:
      "Yes. Visitors from any country can contact us to learn more about the collection and its craft.",
  },
  {
    question: "Can I give a Pashmina as a gift?",
    answer:
      "Yes. A handwoven Pashmina is a thoughtful gift for milestones and celebrations.",
  },
  {
    question: "What is the difference between a shawl and a scarf?",
    answer:
      "Shawls are generally larger and can cover the shoulders, while scarves are narrower and typically worn around the neck.",
  },
];
export const footerGroups = [
  {
    title: "Collections",
    links: [
      { label: "All Pieces", href: "/collections" },
      { label: "Shawls", href: "/collections?category=Shawls" },
      { label: "Wraps", href: "/collections?category=Wraps" },
      { label: "Scarves", href: "/collections?category=Scarves" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Our Artisans", href: "/#artisans" },
      { label: "Editorial", href: "/#editorial" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/#faq" },
      { label: "Collection enquiries", href: "/contact" },
    ],
  },
];
