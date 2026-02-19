"use client";

import { useState, use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/useCartStore";
import { Ruler } from "lucide-react";
import { getProductBySlug } from "@/lib/products";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const addItem = useCartStore((state) => state.addItem);
  const [isAdding, setIsAdding] = useState(false);

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-[10px] uppercase tracking-widest text-neutral-400">
          Product Not Found
        </span>
      </div>
    );

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size for your bespoke commission.");
      return;
    }

    setIsAdding(true);

    addItem({
      id: product.id,
      name: `${product.name.prefix} ${product.name.numeral}`,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
      quantity: quantity,
    });

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32">
      <div className="container mx-auto px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            {product.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-[4/5] bg-neutral-50 overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`${product.name.prefix} ${product.name.numeral}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Right: Details (Sticky) */}
          <div className="lg:sticky lg:top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
              {product.tag}
            </span>

            <h1 className="text-4xl md:text-5xl font-serif mt-4 mb-6 uppercase text-neutral-900">
              {product.name.prefix} {product.name.numeral}{" "}
            </h1>

            <p className="text-2xl font-medium mb-8 text-neutral-900">
              ₦{product.price.toLocaleString()}
            </p>

            <div className="h-px w-full bg-neutral-100 mb-8" />

            <p className="text-sm leading-relaxed text-neutral-700 mb-10 font-light">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase tracking-widest text-neutral-900">
                  Select Size (EU)
                </span>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">
                  <Ruler size={14} /> Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[39, 40, 41, 42, 43, 44, 45, 46].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size.toString())}
                    className={`py-3 border text-xs transition-all duration-300 ${
                      selectedSize === size.toString()
                        ? "bg-black text-white border-black"
                        : "border-neutral-200 text-neutral-400 hover:border-black hover:text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Production Note */}
            <div className="bg-neutral-50 p-4 mb-8 flex items-start gap-4 border border-neutral-100">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5" />
              <p className="text-[10px] text-neutral-500 leading-relaxed uppercase tracking-wider">
                Bespoke Production Lead Time: {product.leadTime}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between mb-8 border-b border-neutral-100 pb-4">
              <span className="text-[10px] uppercase tracking-widest text-neutral-900">
                Quantity
              </span>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-neutral-400 hover:text-black transition-colors"
                >
                  —
                </button>
                <span className="text-neutral-900 text-sm font-light w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-neutral-400 hover:text-black transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full text-white py-5 text-[10px] uppercase tracking-[0.4em] transition-all duration-300 ${
                isAdding ? "bg-neutral-400" : "bg-black hover:bg-neutral-800"
              }`}
            >
              {isAdding ? "Added to Selection" : "Add to Selection"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
