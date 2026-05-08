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
  category: Category;
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
    name: { prefix: "Classic Billonaire", numeral: "Loafers" },
    category: "Loafers",
    tag: "The Signature Edition",
    price: 115000, // Updated
    description:
      "A refined velvet slip-on designed for elegance and comfort.Finished with a bold gold crest embroidery, smooth inner lining, and clean polished edges for a timeless luxury look.",
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
    category: "Slippers",
    tag: "The Obsidian Edition",
    price: 50000, // Updated
    description:
      "Cleanly crafted for comfort and ease.Features a soft suede finish, dual strap design,and lightweight sole for everyday luxury.",
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
    name: { prefix: "Signature", numeral: "Set" },
    category: "Accessories",
    tag: "Everyday Luxury",
    price: 55000, // Updated
    description:
      "Complete your look, effortlessly. Premium leather build with clean edge finishing and neat, durable stitching. Includes belt, wallet, and wrist band—built for everyday luxury.",
    images: ["/u.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Hardware", value: "Solid Metal Buckle" },
      { label: "Details", value: "Secure Snap Closure" },
    ],
  },
  {
    id: "lx-004",
    slug: "curation-004",
    name: { prefix: "Classic Tassel", numeral: "Loafers" },
    category: "Loafers",
    tag: "Signature Stud",
    price: 115000, // Updated
    description:
      "Crafted with a smooth leather finish and nature tassel detailing. Designed for comfort, durability, and timeless style. Made to stand the test of time.",
    images: ["/w99.jpg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Patent & Velvet" },
      { label: "Construction", value: "Cushioned Slip-on" },
    ],
  },
  {
    id: "lx-044",
    slug: "curation-044",
    name: { prefix: "Premium", numeral: "Loafers" },
    category: "Loafers",
    tag: "The Heritage",
    price: 115000, // Updated
    description:
      "Built for presence, not permission. A masterclass in sophisticated design featuring a clean silhouette and unmistakable luxury. Slip-on ease meets structured comfort for the modern man.",
    images: ["/w28.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Premium Calfskin" },
      { label: "Construction", value: "Bespoke Hand-Welt" },
    ],
  },
  {
    id: "lx-005",
    slug: "curation-005",
    name: { prefix: "Premium", numeral: "Slippers" },
    category: "Slippers",
    tag: "The Heritage ",
    price: 50000, // Updated
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
    id: "lx-055",
    slug: "curation-055",
    name: { prefix: "Dress", numeral: "Mule" },
    category: "Mules",
    tag: "The Heritage ",
    price: 75000, // Updated
    description: "Elegance in every step",
    images: ["/660.jpg"],
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
    price: 75000, // Updated
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
    price: 75000, // Updated
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
    price: 75000, // Updated
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
    price: 75000, // Updated
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
    tag: "The Signature Sandal",
    price: 99500, // Updated
    description:
      "Command attention without saying a word. This is not your regular sandal—it's a structured leather piece designed for men who move with intention. Premium leather that ages beautifully, firm multi-strap hold, and an adjustable buckle for the perfect fit.",
    images: ["/w25.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Fit", value: "Firm Multi-Strap Hold" },
      { label: "Hardware", value: "Adjustable Buckle" },
    ],
  },
  {
    id: "lx-067",
    slug: "curation-067",
    name: { prefix: "Curation No.", numeral: "067" },
    category: "Sandals",
    tag: "Command Attention",
    price: 99500, // Updated
    description:
      "Once you wear this, basic sandals won't feel the same. Clean lines, secure fit, and premium comfort, all in one silhouette. Built for comfort, styled for presence.",
    images: ["/w26.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Premium Aged Leather" },
      { label: "Fit", value: "Secure Adjustable Fit" },
    ],
  },
  {
    id: "lx-017",
    slug: "curation-017",
    name: { prefix: "Curation No.", numeral: "017" },
    category: "Sandals",
    tag: "Styled For Presence",
    price: 99500, // Updated
    description:
      "A structured leather piece designed for men who move with intention. Features a firm multi-strap hold so there is no loose feel. Premium comfort meets unmistakble luxury.",
    images: ["/w27.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Hardware", value: "Adjustable Buckle" },
    ],
  },
  {
    id: "lx-008",
    slug: "curation-008",
    name: { prefix: "Premium", numeral: "Slippers" },
    category: "Slippers",
    tag: "The Signature Slide",
    price: 50000, // Updated
    description:
      "A testament to minimal architecture. This piece features a single-cut leather strap, hand-burnished edges, and an anatomically contoured footbed designed for permanence.",
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
    tag: "Everyday Luxury",
    price: 50000, // Updated
    description:
      "Clean silhouette, bold texture, unmistakable luxury. A bridge between traditional craftsmanship and modern utility.",
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
    price: 50000, // Updated
    description:
      "Designed for permanence. Featuring a structured silhouette that softens and molds to the wearer's unique gait over time.",
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
    tag: "Quiet Luxury",
    price: 50000, // Updated
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
    price: 50000, // Updated
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
    name: { prefix: "Leather", numeral: "Accessories" },
    category: "Accessories",
    tag: "Clean Silhouette",
    price: 15000, // Updated
    description:
      "Signature Bracelet Minimal and refined with a clean inscription finish Designed for everyday style and comfort",
    images: ["/w10.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Hardware", value: "Solid Metal Buckle" },
    ],
  },
  {
    id: "lx-011",
    slug: "curation-011",
    name: { prefix: "Wrist", numeral: "Band" },
    category: "Accessories",
    tag: "Everyday Luxury",
    price: 15000, // Updated
    description:
      "Signature Bracelet Minimal and refined with a clean inscription finish Designed for everyday style and comfort",
    images: ["/w12.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Premium Grain Leather" },
      { label: "Finish", value: "Hand-Burnished Edges" },
    ],
  },
  {
    id: "lx-012",
    slug: "curation-012",
    name: { prefix: "Leather", numeral: "Wallet" },
    category: "Accessories",
    tag: "The Details",
    price: 20000, // Updated
    description:
      "The final touch to your aesthetic. Crafted with neat, durable stitching and a secure snap closure. Complete your look effortlessly.",
    images: ["/w13.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Premium Leather" },
      { label: "Hardware", value: "Secure Snap Closure" },
    ],
  },
  {
    id: "lx-013",
    slug: "curation-013",
    name: { prefix: "Curation No.", numeral: "013" },
    category: "Accessories",
    tag: "Everyday Luxury",
    price: 15000, // Updated
    description:
      "Signature Bracelet Minimal and refined with a clean inscription finish Designed for everyday style and comfort",
    images: ["/w14.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Origin", value: "Handcrafted in Lagos" },
    ],
  },
  {
    id: "lx-014",
    slug: "curation-014",
    name: { prefix: "Curation No.", numeral: "014" },
    category: "Accessories",
    tag: "Signature Details",
    price: 15000, // Updated
    description:
      "Signature Bracelet Minimal and refined with a clean inscription finish Designed for everyday style and comfort",
    images: ["/w15.jpeg"],
    leadTime: "1-2 weeks",
    stats: [
      { label: "Material", value: "Vegetable Tanned Leather" },
      { label: "Origin", value: "Handcrafted in Lagos" },
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);
