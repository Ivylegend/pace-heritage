export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  heroImage: string;
  features: string[];
  details: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "paceheritage-ice-cream",
    name: "Ice Cream",
    brand: "PACEHERITAGE",
    category: "Retail Ice Cream",
    tagline: "Nigeria's Favourite Premium Ice Cream",
    description:
      "Pace Heritage Ice Cream is crafted with premium ingredients to deliver an authentic, creamy experience loved by Nigerians. Available in a wide range of flavours, our retail ice cream line is trusted by retailers and consumers nationwide.",
    image: "/images/ice-cream.png",
    heroImage: "/images/ice-cream.png",
    features: [
      "Premium dairy ingredients",
      "Wide range of flavours",
      "Consistent texture and taste",
      "Hygienic, factory-sealed packaging",
      "Nationwide retailer availability",
    ],
    details: [
      { label: "Brand", value: "PACEHERITAGE" },
      { label: "Category", value: "Retail Ice Cream" },
      { label: "Origin", value: "Made in Nigeria" },
      { label: "Shelf Life", value: "18 months (frozen)" },
      { label: "Storage", value: "Keep frozen at -18°C" },
    ],
  },
  {
    slug: "venezia-gourmet-ice-cream",
    name: "One Pint Gourmet Ice Cream",
    brand: "VENEZIA",
    category: "Retail Ice Cream",
    tagline: "Italian-Inspired Gourmet Indulgence",
    description:
      "Venezia One Pint Gourmet Ice Cream brings the elegance of European-style ice cream to the African market. Made with rich, authentic ingredients and crafted in small-batch inspired processes, each pint is a premium indulgence.",
    image: "/images/gourmet.png",
    heroImage: "/images/gourmet.png",
    features: [
      "European-inspired gourmet recipe",
      "Rich, dense cream base",
      "Artisan flavour profiles",
      "Premium one-pint format",
      "Ideal for gifting & premium retail",
    ],
    details: [
      { label: "Brand", value: "VENEZIA" },
      { label: "Category", value: "Retail Ice Cream" },
      { label: "Format", value: "One Pint" },
      { label: "Shelf Life", value: "18 months (frozen)" },
      { label: "Storage", value: "Keep frozen at -18°C" },
    ],
  },
  {
    slug: "venezia-italian-gelato",
    name: "Italian Gelato",
    brand: "VENEZIA",
    category: "Retail Ice Cream",
    tagline: "Authentic Italian Gelato, Crafted in Nigeria",
    description:
      "Venezia Italian Gelato is made using traditional Italian techniques to deliver a denser, silkier frozen dessert with an intense flavour profile. Lower in fat and air than regular ice cream, it offers a more authentic gelato experience.",
    image: "/images/gelato.png",
    heroImage: "/images/gelato.png",
    features: [
      "Traditional Italian gelato method",
      "Denser, silkier texture",
      "Intense natural flavours",
      "Lower overrun than standard ice cream",
      "Premium retail & food service format",
    ],
    details: [
      { label: "Brand", value: "VENEZIA" },
      { label: "Category", value: "Retail Ice Cream" },
      { label: "Style", value: "Italian Gelato" },
      { label: "Shelf Life", value: "18 months (frozen)" },
      { label: "Storage", value: "Keep frozen at -18°C" },
    ],
  },
  {
    slug: "comprital-soft-ice-cream-premix",
    name: "Soft Ice Cream Premix",
    brand: "COMPRITAL",
    category: "Manufacturing Ingredients",
    tagline: "Professional-Grade Soft Serve Premix",
    description:
      "COMPRITAL Soft Ice Cream Premix is a professional-grade dry mix designed for ice cream parlours, restaurants, and manufacturers. Simply blend with water or milk for a consistently smooth, creamy soft serve every time.",
    image: "/images/product-dry-mix.png",
    heroImage: "/images/product-dry-mix.png",
    features: [
      "Easy-mix dry powder format",
      "Consistent soft-serve results",
      "Professional ice cream parlour quality",
      "Long shelf life — no refrigeration needed",
      "Available in bulk for manufacturers",
    ],
    details: [
      { label: "Brand", value: "COMPRITAL" },
      { label: "Category", value: "Manufacturing Ingredients" },
      { label: "Format", value: "Dry Powder Mix" },
      { label: "Shelf Life", value: "24 months (ambient)" },
      { label: "Storage", value: "Cool, dry place" },
    ],
  },
  {
    slug: "pace-ice-cream-cones",
    name: "Ice Cream Cones",
    brand: "PACE",
    category: "Manufacturing Ingredients",
    tagline: "Crispy, Freshly-Baked Wafer Cones",
    description:
      "PACE Ice Cream Cones are freshly baked wafer cones designed for use with retail and parlour ice cream products. Available in multiple sizes and styles — from classic wafer to sugar cones — they offer the perfect crunch to complement every scoop.",
    image: "/images/product-cone.png",
    heroImage: "/images/cone.png",
    features: [
      "Freshly baked wafer cones",
      "Multiple sizes available",
      "Classic wafer & sugar cone styles",
      "Ideal for retail & food service",
      "Sealed packaging for freshness",
    ],
    details: [
      { label: "Brand", value: "PACE" },
      { label: "Category", value: "Manufacturing Ingredients" },
      { label: "Styles", value: "Wafer, Sugar Cone" },
      { label: "Shelf Life", value: "12 months (ambient)" },
      { label: "Storage", value: "Cool, dry place" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
