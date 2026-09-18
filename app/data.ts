export const siteConfig = {
  brand: "Nepora Exports",
  email: "neporaexports@gmail.com",
  phone: "+977 9860086222",
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
const asset = (n: number) => `/Img/IMG-${n}.jpg`;
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
  { label: "Treasures of Nepal", href: "/#featured" },
  {
    label: "Shop By",
    href: "/collections",
    children: ["Heritage", "Most Viewed"],
  },
  { label: "About Us", href: "/about" },
  { label: "Editorial", href: "/#editorial" },
];
export const announcements = ["Guaranteed Authentic Pashmina, Tailored to Your Requirements", "Kathmandu, Nepal"];
export const recognition = [
  {
    year: "2024",
    title: "A craft passed from hand to hand",
    description:
      "The beauty of Pashmina lives in the knowledge shared across generations of makers.",
    image: "/images/nep-1.png",
    alt: "Editorial photograph of plum shawl and textile pattern",
  },
  {
    year: "2025",
    title: "An invitation to slow down",
    description:
      "We celebrate the quiet moments of weaving, finishing, and wearing something made to last.",
    image: "/Img/IMG-69.jpg",
    alt: "Artisan hands working at a traditional loom",
  },
];
export const crafts = {
  Women: [
    { title: "Basket Weave Pashmina", image: asset(61) },
    { title: "Multicolor Handwoven Striped Pashmina", image: asset(60) },
    { title: "Diamond Weave Pashmina", image: asset(5) },
    { title: "Plain Solid Pashmina Shawl", image: asset(49) },
    { title: "Plain Weave Pashmina Shawl", image: asset(30) },
    { title: "Solid Pashmina Shawl", image: asset(27) },
    { title: "Ring shawl Pashmina", image: asset(31) },
  ],
  Men: [
    { title: "Reversible Two-Tone Pashmina", image: asset(7) },
    { title: "Windowpane Check Pashmina", image: asset(13) },
    { title: "Solid Twill Weave Pashmina", image: asset(50) },
    { title: "Herringbone Weave Pashmina", image: asset(46) },
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
  image: "/Img/IMG-49.jpg",
  href: "/collections",
  alt: `Editorial photograph of textile for ${title}`,
}));
export const featured = [
  {
    title: "The Heirloom Edit",
    description:
      "Special pieces chosen for their artistry and enduring beauty.",
    image: "/Img/IMG-25.jpg",
    alt: "Ornate handmade rug displayed in a sunlit heritage interior",
    href: "/collections",
  },
  {
    title: "Objects of Warmth",
    description: "Thoughtful accents for the spaces and moments we share.",
    image: "/Img/IMG-26.jpg",
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
  category: ["Shawls", "Wraps", "Scarves", "Men", "Wraps"][i],
  material: "Handwoven Pashmina",
  image: `/images/pashmina${(i % 27) + 1}.webp`,
  images: [0, 1, 2].map(
    (offset) => `/images/pashmina${((i + offset) % 27) + 1}.webp`,
  ),
  alt: `Pashmina photograph for ${name}`,
  href: `/collections/${name.toLowerCase().replaceAll(" ", "-")}`,
}));
// export const artisans = [
//   {
//     name: "Zahoor Ahmad",
//     craft: "Master Weaver",
//     image: asset(1),
//     alt: "Folded burgundy shawl, artisan portrait placeholder",
//   },
//   {
//     name: "Nusrat Begum",
//     craft: "Needlework Artist",
//     image: asset(2),
//     alt: "Artisan hands at a loom, portrait placeholder",
//   },
//   {
//     name: "Irfan Ali",
//     craft: "Pattern Maker",
//     image: asset(3),
//     alt: "Model in an ivory shawl, artisan portrait placeholder",
//   },
//   {
//     name: "Meher Khan",
//     craft: "Finishing Artisan",
//     image: asset(4),
//     alt: "Patterned textile on a chair, artisan portrait placeholder",
//   },
// ];
export const articles = [
  {
    title: "Artisan Heritage",
    excerpt: "Handwoven with generations of craftsmanship, every piece celebrates Nepal's rich textile tradition.",
    image: asset(37),
    alt: "Editorial photograph of woven textile",
    href: "#editorial",
  },
  {
    title: "Exceptional Softness",
    excerpt: "Crafted from premium natural fibers to deliver unmatched comfort and refined elegance.",
    image: asset(35),
    alt: "Editorial photograph of patterned textile",
    href: "#editorial",
  },
  {
    title: "Signature Weaves",
    excerpt: "Distinctive textures and intricate patterns define the beauty of authentic luxury.",
    image: asset(33),
    alt: "Editorial photograph of burgundy textile",
    href: "#editorial",
  },
  {
    title: "Luxury Without Compromise",
    excerpt: "Timeless pashmina designed to be treasured for years, combining elegance with lasting quality.",
    image: asset(58),
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
