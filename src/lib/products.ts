export type Category =
  | "Slippers"
  | "Sandals"
  | "Mules"
  | "Loafers"
  | "Accessories"
  | "Custom";

export interface Product {
  id: string;
  slug: string;
  name: {
    prefix: string;
    numeral: string;
  };
  category: Category; // NEW
  tag: string;
  price: number;
  description: string;
  images: string[];
  leadTime: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "lx-001",
    slug: "curation-001",
    name: { prefix: "Classic", numeral: "Loafers" },
    category: "Loafers", // Added Category
    tag: "The Signature Edition",
    price: 25000,
    description:
      "A testament to minimal architecture. This piece features a single-cut leather strap, hand-burnished edges, and an anatomically contoured footbed designed for permanence.",
    images: ["/w.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Full-Grain Calfskin" },
      { label: "Origin", value: "Hand-lasted in Lagos" },
    ],
  },
  {
    id: "lx-002",
    slug: "curation-002",
    name: { prefix: "Premium", numeral: "Slippers" },
    category: "Slippers", // Added Category
    tag: "The Obsidian Edition",
    price: 25000,
    description:
      "Exploring the depth of midnight tones. This model focuses on texture contrast, pairing matte obsidian leather with a polished edge finish for a subtle, tiered aesthetic.",
    images: ["/t.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Matte Box Calf" },
      { label: "Finish", value: "Hand-Waxed Edges" },
    ],
  },
  {
    id: "lx-003",
    slug: "curation-003",
    name: { prefix: "Leather", numeral: "Accessories" },
    category: "Accessories", // Added Category
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/u.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-004",
    slug: "curation-004",
    name: { prefix: "Premium", numeral: "Loafers" },
    category: "Loafers",
    tag: "The Heritage",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w29.jpg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-044",
    slug: "curation-044",
    name: { prefix: "Premium", numeral: "Loafers" },
    category: "Loafers",
    tag: "The Heritage",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w28.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-005",
    slug: "curation-005",
    name: { prefix: "Premium", numeral: "Slippers" },
    category: "Slippers",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/x20.jpg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-006",
    slug: "curation-006",
    name: { prefix: "Casual", numeral: "Mule" },
    category: "Mules",
    tag: "The Heritage ",
    price: 25000,
    description: "Available in Colors",
    images: ["/w16.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-077",
    slug: "curation-077",
    name: { prefix: "Casual", numeral: "Mule" },
    category: "Mules",
    tag: "The Heritage ",
    price: 25000,
    description: "Made from animal skin",
    images: ["/w17.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-088",
    slug: "curation-088",
    name: { prefix: "Dress", numeral: "Mule" },
    category: "Mules",
    tag: "The Heritage ",
    price: 25000,
    description: "Elegance in every step",
    images: ["/w18.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-099",
    slug: "curation-099",
    name: { prefix: "Dress", numeral: "Mule" },
    category: "Mules",
    tag: "The Heritage ",
    price: 25000,
    description: "Speaks quiet Luxury",
    images: ["/w19.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-097",
    slug: "curation-097",
    name: { prefix: "Dress", numeral: "Mule" },
    category: "Mules",
    tag: "The Heritage ",
    price: 25000,
    description: "Speaks quiet Luxury",
    images: ["/w20.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-007",
    slug: "curation-007",
    name: { prefix: "Curation No.", numeral: "007" },
    category: "Sandals",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w25.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-067",
    slug: "curation-067",
    name: { prefix: "Curation No.", numeral: "007" },
    category: "Sandals",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w26.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-017",
    slug: "curation-017",
    name: { prefix: "Curation No.", numeral: "007" },
    category: "Sandals",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w27.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-008",
    slug: "curation-008",
    name: { prefix: "Premium", numeral: "Slippers" },
    category: "Slippers",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/x15.jpg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-018",
    slug: "curation-018",
    name: { prefix: "Premium", numeral: "Slippers" },
    category: "Slippers",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w21.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-028",
    slug: "curation-028",
    name: { prefix: "Premium", numeral: "Slippers" },
    category: "Slippers",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w22.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-048",
    slug: "curation-048",
    name: { prefix: "Premium", numeral: "Slippers" },
    category: "Slippers",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w23.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-058",
    slug: "curation-058",
    name: { prefix: "Premium", numeral: "Slippers" },
    category: "Slippers",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w24.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-009",
    slug: "curation-009",
    name: { prefix: "Curation No.", numeral: "009" },
    category: "Accessories",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w10.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },

  {
    id: "lx-011",
    slug: "curation-011",
    name: { prefix: "Curation No.", numeral: "011" },
    category: "Accessories",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w12.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-012",
    slug: "curation-012",
    name: { prefix: "Curation No.", numeral: "012" },
    category: "Accessories",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w13.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-013",
    slug: "curation-013",
    name: { prefix: "Curation No.", numeral: "013" },
    category: "Accessories",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w14.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-014",
    slug: "curation-014",
    name: { prefix: "Curation No.", numeral: "014" },
    category: "Accessories",
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/w15.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);
