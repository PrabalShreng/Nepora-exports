// Product content for the three homepage sections and their shared detail pages.
// Edit names, descriptions, notes, materials, categories, and images here.
// asset(12) uses public/Img/IMG-12.jpg.
// mainImage: homepage and collection card. descriptionImages: detail-page gallery.
// Edit each gallery independently; the first gallery image is shown initially.
// Keep at least one image. Keep slugs unique and stable to preserve product URLs.
const asset = (n: number) => `/Img/IMG-${n}.jpg`;

type ProductInput = {
  slug: string;
  name: string;
  category: "Shawls" | "Wraps" | "Scarves" | "Men";
  material: string;
  description: string;
  notes: string;
  mainImage: string;
  descriptionImages: [string, ...string[]];
};

function defineProducts(entries: ProductInput[]) {
  return entries.map((product) => ({
    ...product,
    id: product.slug,
    title: product.name,
    image: product.mainImage,
    alt: `Pashmina photograph for ${product.name}`,
    href: `/collections/${product.slug}`,
  }));
}

export type Product = ReturnType<typeof defineProducts>[number];

// OUR CRAFTS — separate products for the Women and Men tabs.
export const craftProducts = {
  Women: defineProducts([
    {
      slug: "craft-basket-weave-pashmina",
      name: "Basket Weave Pashmina",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "Basket weave texture gives this Pashmina a distinctive surface and an understated finish.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(61),
      descriptionImages: [asset(1), asset(2), asset(3)],
    },
    {
      slug: "aa craft-multicolor-handwoven-striped-pashmina",
      name: "Multicolor Handwoven Striped Pashmina",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "Multicolour stripes bring a lively rhythm to this handwoven Pashmina.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(60),
      descriptionImages: [asset(1), asset(2), asset(3)],
    },
    {
      slug: "craft-diamond-weave-pashmina",
      name: "Diamond Weave Pashmina",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "A diamond weave gives this Pashmina its repeating geometric texture.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(5),
      descriptionImages: [asset(1), asset(2), asset(3)],
    },
    {
      slug: "craft-plain-solid-pashmina-shawl",
      name: "Plain Solid Pashmina Shawl",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "A plain solid shawl with a simple finish, ready to drape over the shoulders.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(49),
      descriptionImages: [asset(1), asset(2), asset(3)],
    },
    {
      slug: "craft-plain-weave-pashmina-shawl",
      name: "Plain Weave Pashmina Shawl",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "A plain weave Pashmina with an understated surface for versatile styling.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(30),
      descriptionImages: [asset(1), asset(2), asset(3)],
    },
    {
      slug: "craft-solid-pashmina-shawl",
      name: "Solid Pashmina Shawl",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "A solid Pashmina shawl with a clean look that complements everyday layers.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(27),
      descriptionImages: [asset(1), asset(2), asset(3)],
    },
    {
      slug: "craft-ring-shawl-pashmina",
      name: "Ring shawl Pashmina",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "A ring shawl Pashmina with a delicate appearance and an elegant drape.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(31),
      descriptionImages: [asset(1), asset(2), asset(3)],
    },
  ]),
  Men: defineProducts([
    {
      slug: "craft-reversible-two-tone-pashmina",
      name: "Reversible Two-Tone Pashmina",
      category: "Men",
      material: "Handwoven Pashmina",
      description: "Two contrasting tones offer different ways to wear this reversible Pashmina.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(7),
      descriptionImages: [asset(1), asset(2), asset(3)],
    },
    {
      slug: "craft-windowpane-check-pashmina",
      name: "Windowpane Check Pashmina",
      category: "Men",
      material: "Handwoven Pashmina",
      description: "Windowpane checks give this Pashmina a clear geometric pattern.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(13),
      descriptionImages: [asset(1), asset(2), asset(3)],
    },
    {
      slug: "craft-solid-twill-weave-pashmina",
      name: "Solid Twill Weave Pashmina",
      category: "Men",
      material: "Handwoven Pashmina",
      description: "A solid twill weave brings subtle diagonal texture to this Pashmina.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(50),
      descriptionImages: [asset(1), asset(2), asset(3)],
    },
    {
      slug: "craft-herringbone-weave-pashmina",
      name: "Herringbone Weave Pashmina",
      category: "Men",
      material: "Handwoven Pashmina",
      description: "A herringbone weave creates a repeating chevron texture in this Pashmina.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(46),
      descriptionImages: [asset(1), asset(2), asset(3)],
    },
  ]),
};

// ONE-OF-A-KIND PASHMINA
export const oneOfAKindProducts = defineProducts([
  {
    slug: "heritage-border-palla",
    name: "Border / Palla",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "A graceful border that frames every gesture.",
    notes: "Explore the Border / Palla design in the gallery and contact us for details about this piece.",
    mainImage: asset(1),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
  {
    slug: "heritage-all-over-jaal",
    name: "All Over / Jaal",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "An all-over pattern of patient, intricate detail.",
    notes: "Explore the All Over / Jaal design in the gallery and contact us for details about this piece.",
    mainImage: asset(9),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
  {
    slug: "heritage-jamawar",
    name: "Jamawar",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "Rich motifs with a story in every weave.",
    notes: "Explore the Jamawar design in the gallery and contact us for details about this piece.",
    mainImage: asset(16),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
  {
    slug: "heritage-kalamkari",
    name: "Kalamkari",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "Hand-drawn artistry meets the softness of Pashmina.",
    notes: "Explore the Kalamkari design in the gallery and contact us for details about this piece.",
    mainImage: asset(4),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
  {
    slug: "heritage-zari-tilla",
    name: "Zari / Tilla",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "A quiet glimmer of metallic thread.",
    notes: "Explore the Zari / Tilla design in the gallery and contact us for details about this piece.",
    mainImage: asset(5),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
  {
    slug: "heritage-kani",
    name: "Kani",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "Colour and pattern brought together on the loom.",
    notes: "Explore the Kani design in the gallery and contact us for details about this piece.",
    mainImage: asset(6),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
]);

// SELECTED PASHMINA
export const selectedPashminaProducts = defineProducts([
  {
    slug: "the-saffron-dawn-shawl",
    name: "The Saffron Dawn Shawl",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "The Saffron Dawn Shawl is a Pashmina layer for relaxed draping and everyday styling.",
    notes: "Contact us to learn more about the size, finish, and availability of The Saffron Dawn Shawl.",
    mainImage: asset(1),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
  {
    slug: "the-kashmir-bloom-wrap",
    name: "The Kashmir Bloom Wrap",
    category: "Wraps",
    material: "Handwoven Pashmina",
    description: "The Kashmir Bloom Wrap offers a versatile way to finish an outfit, worn open or gathered at the neck.",
    notes: "Contact us to learn more about the size, finish, and availability of The Kashmir Bloom Wrap.",
    mainImage: asset(2),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
  {
    slug: "the-evening-plum-pashmina",
    name: "The Evening Plum Pashmina",
    category: "Scarves",
    material: "Handwoven Pashmina",
    description: "The Evening Plum Pashmina is a finishing layer for evening outfits and special occasions.",
    notes: "Contact us to learn more about the size, finish, and availability of The Evening Plum Pashmina.",
    mainImage: asset(3),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
  {
    slug: "the-willow-weave-scarf",
    name: "The Willow Weave Scarf",
    category: "Men",
    material: "Handwoven Pashmina",
    description: "The Willow Weave Scarf is a Pashmina accent to fold, wrap, and style around the neck.",
    notes: "Contact us to learn more about the size, finish, and availability of The Willow Weave Scarf.",
    mainImage: asset(4),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
  {
    slug: "the-rose-mist-shawl",
    name: "The Rose Mist Shawl",
    category: "Wraps",
    material: "Handwoven Pashmina",
    description: "The Rose Mist Shawl is a Pashmina layer to wear loosely across the shoulders.",
    notes: "Contact us to learn more about the size, finish, and availability of The Rose Mist Shawl.",
    mainImage: asset(5),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
  {
    slug: "the-heritage-border-wrap",
    name: "The Heritage Border Wrap",
    category: "Wraps",
    material: "Handwoven Pashmina",
    description: "The Heritage Border Wrap brings a framed finish to a draped Pashmina silhouette.",
    notes: "Contact us to learn more about the size, finish, and availability of The Heritage Border Wrap.",
    mainImage: asset(6),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
]);

// All products use the same /collections/[slug] page layout.
export const allProducts = [
  ...craftProducts.Women,
  ...craftProducts.Men,
  ...oneOfAKindProducts,
  ...selectedPashminaProducts,
];
