"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/products";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 xl:px-16">
        {/* Page Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-light mb-6 block">
              The Archive
            </span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] text-neutral-900 mb-8">
              Complete <br />
              <span className="font-serif italic">Collection</span>
            </h1>
            <p className="text-base text-neutral-500 font-light leading-relaxed max-w-lg">
              Explore our full range of bespoke footwear. Every silhouette is a
              canvas for your personal measurements and material preferences.
            </p>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/product/${product.slug}`}>
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/5] bg-neutral-50 overflow-hidden mb-6">
                  <Image
                    src={product.images[0]}
                    alt={`${product.name.prefix} ${product.name.numeral}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                {/* Product Info */}
                <div className="flex flex-col items-center text-center">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 mb-3 block">
                    {product.tag}
                  </span>
                  <h3 className="text-lg font-serif italic text-neutral-900 mb-2">
                    {product.name.prefix} {product.name.numeral}{" "}
                  </h3>
                  <p className="text-xs font-light text-neutral-500 tracking-widest">
                    ₦{product.price.toLocaleString()}
                  </p>

                  {/* Hover Underline Effect */}
                  <div className="mt-4 overflow-hidden">
                    <span className="inline-block text-[9px] uppercase tracking-[0.2em] text-black font-medium pb-1 relative">
                      View Commission
                      <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
