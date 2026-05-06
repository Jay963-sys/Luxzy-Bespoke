"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export default function FeaturedCollection() {
  // Grab 3 products for a perfect 3-column grid
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="bg-[#faf9f8] py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-700 font-bold mb-4 block">
            Featured Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-6 uppercase">
            Signature{" "}
            <span className="font-serif italic lowercase text-neutral-500">
              Selections
            </span>
          </h2>
          <div className="h-[0.5px] w-12 bg-neutral-900 mx-auto" />
        </div>

        {/* THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              {/* Clear Image */}
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

                <p className="text-xs text-neutral-500 font-light mb-8 line-clamp-5 italic leading-relaxed">
                  "{product.description}"
                </p>

                {/* Shop Now Button (Requested by Client) */}
                <Link
                  href={`/product/${product.slug}`}
                  className="mt-auto w-full block bg-transparent border border-neutral-200 text-center text-neutral-900 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-24 text-center">
          <Link
            href="/collections"
            className="inline-block bg-black text-white px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-neutral-800 transition-colors"
          >
            Explore All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
