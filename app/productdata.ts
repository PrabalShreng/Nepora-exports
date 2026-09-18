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
      descriptionImages: [asset(61), asset(61), asset(61)],
    },
    {
      slug: "aa craft-multicolor-handwoven-striped-pashmina",
      name: "Multicolor Handwoven Striped Pashmina",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "Multicolour stripes bring a lively rhythm to this handwoven Pashmina.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(60),
      descriptionImages: [asset(60), asset(60), asset(60)],
    },
    {
      slug: "craft-diamond-weave-pashmina",
      name: "Diamond Weave Pashmina",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "A diamond weave gives this Pashmina its repeating geometric texture.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(5),
      descriptionImages: [asset(5), asset(40), asset(37)],
    },
    {
      slug: "craft-plain-solid-pashmina-shawl",
      name: "Plain Solid Pashmina Shawl",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "A plain solid shawl with a simple finish, ready to drape over the shoulders.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(49),
      descriptionImages: [asset(49), asset(53), asset(53)],
    },
    {
      slug: "craft-plain-weave-pashmina-shawl",
      name: "Plain Weave Pashmina Shawl",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "A plain weave Pashmina with an understated surface for versatile styling.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(30),
      descriptionImages: [asset(30), asset(18), asset(18)],
    },
    {
      slug: "craft-solid-pashmina-shawl",
      name: "Solid Pashmina Shawl",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "A solid Pashmina shawl with a clean look that complements everyday layers.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(27),
      descriptionImages: [asset(27), asset(22), asset(22)],
    },
    {
      slug: "craft-ring-shawl-pashmina",
      name: "Ring shawl Pashmina",
      category: "Shawls",
      material: "Handwoven Pashmina",
      description: "A ring shawl Pashmina with a delicate appearance and an elegant drape.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(31),
      descriptionImages: [asset(31), asset(17), asset(16)],
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
      descriptionImages: [asset(7), asset(8), asset(6)],
    },
    {
      slug: "craft-windowpane-check-pashmina",
      name: "Windowpane Check Pashmina",
      category: "Men",
      material: "Handwoven Pashmina",
      description: "Windowpane checks give this Pashmina a clear geometric pattern.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(13),
      descriptionImages: [asset(13), asset(11), asset(11)],
    },
    {
      slug: "craft-solid-twill-weave-pashmina",
      name: "Solid Twill Weave Pashmina",
      category: "Men",
      material: "Handwoven Pashmina",
      description: "A solid twill weave brings subtle diagonal texture to this Pashmina.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(50),
      descriptionImages: [asset(50), asset(55), asset(55)],
    },
    {
      slug: "craft-herringbone-weave-pashmina",
      name: "Herringbone Weave Pashmina",
      category: "Men",
      material: "Handwoven Pashmina",
      description: "A herringbone weave creates a repeating chevron texture in this Pashmina.",
      notes: "Drape it over the shoulders or fold it into a layer around the neck.",
      mainImage: asset(46),
      descriptionImages: [asset(46), asset(47), asset(48)],
    },
  ]),
};

// ONE-OF-A-KIND PASHMINA
export const oneOfAKindProducts = defineProducts([
  {
    slug: "heritage-border-palla",
    name: "Classic Border Pashmina Stole",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "A soft woven pashmina featuring elegant contrasting border stripes, offering a timeless look with lightweight warmth and a luxurious drape..",
    notes: "Explore the Border / Palla design in the gallery and contact us for details about this piece.",
    mainImage: asset(1),
    descriptionImages: [asset(1), asset(2), asset(3)],
  },
  {
    slug: "heritage-all-over-jaal",
    name: "Herringbone Color-Block Pashmina Stole",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "Crafted with a refined herringbone weave and modern color-block design, this versatile pashmina combines classic craftsmanship with contemporary style.",
    notes: "Explore the All Over / Jaal design in the gallery and contact us for details about this piece.",
    mainImage: asset(6),
    descriptionImages: [asset(6), asset(2), asset(3)],
  },
  {
    slug: "heritage-jamawar",
    name: "Checkered Pashmina Stole",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "A premium woven pashmina with a subtle oversized check pattern, designed for everyday elegance, comfort, and all-season wear.",
    notes: "Explore the Jamawar design in the gallery and contact us for details about this piece.",
    mainImage: asset(12),
    descriptionImages: [asset(12), asset(11), asset(13)],
  },
  {
    slug: "heritage-kalamkari",
    name: "Floral Print Pashmina Stole",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "A lightweight pashmina adorned with vibrant floral prints, adding a fresh, feminine touch while remaining soft, breathable, and easy to style..",
    notes: "Explore the Kalamkari design in the gallery and contact us for details about this piece.",
    mainImage: asset(15),
    descriptionImages: [asset(15), asset(14), asset(25)],
  },
  {
    slug: "heritage-zari-tilla",
    name: "Ombre Pashmina Stole",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "Featuring a graceful gradient (ombre) effect with delicate fringed edges, this pashmina offers a sophisticated blend of color and luxurious softness.",
    notes: "Explore the Zari / Tilla design in the gallery and contact us for details about this piece.",
    mainImage: asset(17),
    descriptionImages: [asset(17), asset(16), asset(31)],
  },
  {
    slug: "heritage-kani",
    name: "Watercolor Floral Pashmina Stole",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "A beautifully printed pashmina showcasing artistic watercolor floral motifs, perfect for adding effortless elegance and lightweight comfort to any outfit.",
    notes: "Explore the Kani design in the gallery and contact us for details about this piece.",
    mainImage: asset(20),
    descriptionImages: [asset(20), asset(19), asset(26)],
  },
]);

// SELECTED PASHMINA WITH NATURAL COLORS
export const selectedPashminaProducts = defineProducts([
  {
    slug: "the-saffron-dawn-shawl",
    name: "The Saffron Dawn Shawl",
    category: "Shawls",
    material: "Handwoven Pashmina",
    description: "The Saffron Dawn Shawl is a Pashmina layer for relaxed draping and everyday styling.",
    notes: "Contact us to learn more about the size, finish, and availability of The Saffron Dawn Shawl.",
    mainImage: asset(52),
    descriptionImages: [asset(52), asset(52), asset(52)],
  },
  {
    slug: "the-kashmir-bloom-wrap",
    name: "The Kashmir Bloom Wrap",
    category: "Wraps",
    material: "Handwoven Pashmina",
    description: "The Kashmir Bloom Wrap offers a versatile way to finish an outfit, worn open or gathered at the neck.",
    notes: "Contact us to learn more about the size, finish, and availability of The Kashmir Bloom Wrap.",
    mainImage: asset(47),
    descriptionImages: [asset(47), asset(46), asset(48)],
  },
  {
    slug: "the-evening-plum-pashmina",
    name: "The Evening Plum Pashmina",
    category: "Scarves",
    material: "Handwoven Pashmina",
    description: "The Evening Plum Pashmina is a finishing layer for evening outfits and special occasions.",
    notes: "Contact us to learn more about the size, finish, and availability of The Evening Plum Pashmina.",
    mainImage: asset(49),
    descriptionImages: [asset(49), asset(49), asset(49)],
  },
  {
    slug: "the-willow-weave-scarf",
    name: "The Willow Weave Scarf",
    category: "Men",
    material: "Handwoven Pashmina",
    description: "The Willow Weave Scarf is a Pashmina accent to fold, wrap, and style around the neck.",
    notes: "Contact us to learn more about the size, finish, and availability of The Willow Weave Scarf.",
    mainImage: asset(50),
    descriptionImages: [asset(50), asset(50), asset(50)],
  },
  {
    slug: "the-rose-mist-shawl",
    name: "The Rose Mist Shawl",
    category: "Wraps",
    material: "Handwoven Pashmina",
    description: "The Rose Mist Shawl is a Pashmina layer to wear loosely across the shoulders.",
    notes: "Contact us to learn more about the size, finish, and availability of The Rose Mist Shawl.",
    mainImage: asset(51),
    descriptionImages: [asset(51), asset(51), asset(51)],
  },
  {
    slug: "the-heritage-border-wrap",
    name: "The Heritage Border Wrap",
    category: "Wraps",
    material: "Handwoven Pashmina",
    description: "The Heritage Border Wrap brings a framed finish to a draped Pashmina silhouette.",
    notes: "Contact us to learn more about the size, finish, and availability of The Heritage Border Wrap.",
    mainImage: asset(45),
    descriptionImages: [asset(45), asset(45), asset(45)],
  },
]);

// All products use the same /collections/[slug] page layout.
export const allProducts = [
  ...craftProducts.Women,
  ...craftProducts.Men,
  ...oneOfAKindProducts,
  ...selectedPashminaProducts,
];
