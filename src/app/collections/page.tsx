"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, Category } from "@/lib/products";

// We add "All" to the categories array for the filter UI
const FILTER_CATEGORIES: ("All" | Category)[] = [
  "All",
  "Slippers",
  "Sandals",
  "Mules",
  "Loafers",
  "Accessories",
  "Custom",
];

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | Category>(
    "All",
  );

  // Filter logic
  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#faf9f8] pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 xl:px-16">
        {/* Page Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-amber-700 font-bold mb-6 block">
              The Archive
            </span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] text-neutral-900 mb-8 uppercase">
              Complete <br />
              <span className="font-serif italic lowercase text-neutral-500">
                Collection
              </span>
            </h1>
            <p className="text-base text-neutral-500 font-light leading-relaxed max-w-lg">
              Explore our full range of bespoke footwear and leather goods.
              Every silhouette is a canvas for your personal measurements and
              material preferences.
            </p>
          </motion.div>
        </div>

        {/* Filter Navigation */}
        <div className="mb-16 overflow-x-auto hide-scrollbar border-b border-neutral-200 pb-4">
          <div className="flex items-center gap-8 min-w-max">
            {FILTER_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 pb-2 ${
                  selectedCategory === category
                    ? "text-neutral-900 font-bold"
                    : "text-neutral-400 hover:text-amber-700"
                }`}
              >
                {category}
                {/* Active Indicator Line */}
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute -bottom-[17px] left-0 w-full h-[1px] bg-neutral-900"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout // Enables smooth shuffling when filtering
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] bg-white p-4 shadow-sm mb-6 overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={`${product.name.prefix} ${product.name.numeral}`}
                    fill
                    className="object-cover p-2 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-[8px] uppercase tracking-[0.3em] text-amber-700 font-medium block mb-1">
                        {product.category}
                      </span>
                      <h3 className="text-lg md:text-xl font-light tracking-tight text-neutral-900 uppercase">
                        {product.name.prefix}{" "}
                        <span className="font-serif italic">
                          {product.name.numeral}
                        </span>
                      </h3>
                    </div>
                    {/* Price */}
                    <span className="text-sm font-medium text-neutral-900 mt-1">
                      ₦{product.price.toLocaleString()}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-500 font-light mb-8 line-clamp-2 italic">
                    "{product.description}"
                  </p>

                  {/* Shop Now Button */}
                  <Link
                    href={`/product/${product.slug}`}
                    className="mt-auto w-full block bg-transparent border border-neutral-200 text-center text-neutral-900 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Fallback */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center"
          >
            <p className="text-neutral-400 font-light tracking-widest uppercase text-sm">
              No items currently available in this collection.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
