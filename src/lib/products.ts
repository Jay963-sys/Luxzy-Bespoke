export interface Product {
  id: string;
  slug: string;
  name: {
    prefix: string;
    numeral: string;
  };
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
    name: { prefix: "Curation No.", numeral: "001" },
    tag: "The Signature Slide",
    price: 25000,
    description:
      "A testament to minimal architecture. This piece features a single-cut leather strap, hand-burnished edges, and an anatomically contoured footbed designed for permanence.",
    images: ["/x15.jpg", "/x23.jpg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Full-Grain Calfskin" },
      { label: "Origin", value: "Hand-lasted in Lagos" },
    ],
  },
  {
    id: "lx-002",
    slug: "curation-002",
    name: { prefix: "Curation No.", numeral: "002" },
    tag: "The Obsidian Edition",
    price: 25000,
    description:
      "Exploring the depth of midnight tones. This model focuses on texture contrast, pairing matte obsidian leather with a polished edge finish for a subtle, tiered aesthetic.",
    images: ["/x19.jpg", "/x21.jpg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Matte Box Calf" },
      { label: "Finish", value: "Hand-Waxed Edges" },
    ],
  },
  {
    id: "lx-003",
    slug: "curation-003",
    name: { prefix: "Curation No.", numeral: "003" },
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/2.jpg", "/x16.jpg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-004",
    slug: "curation-004",
    name: { prefix: "Curation No.", numeral: "004" },
    tag: "The Heritage",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/1.jpg", "/x14.jpg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-005",
    slug: "curation-005",
    name: { prefix: "Curation No.", numeral: "005" },
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/x20.jpg", "/x8.jpg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-006",
    slug: "curation-006",
    name: { prefix: "Curation No.", numeral: "006" },
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/x7.jpg", "/x5.jpg"],
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
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/x10.jpg", "/x11.jpg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-008",
    slug: "curation-008",
    name: { prefix: "Curation No.", numeral: "008" },
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/x15.jpg", "/x16.jpg"],
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
    tag: "The Heritage ",
    price: 25000,
    description:
      "A bridge between traditional craftsmanship and modern utility. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
    images: ["/x18.jpg", "/x16.jpg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);
