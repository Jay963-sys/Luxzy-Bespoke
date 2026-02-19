"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, Product } from "@/lib/products";

export default function FeaturedCollection() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="bg-neutral-50 pt-24 md:pt-32">
      {/* Section Header */}
      <div className="container mx-auto px-6 md:px-12 xl:px-16 mb-16 md:mb-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-light mb-4 block">
            Curated For You
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-6">
            Featured <span className="font-serif italic">Selections</span>
          </h2>
          <div className="h-[0.5px] w-12 bg-neutral-900 mx-auto" />
        </div>
      </div>

      {featuredProducts.map((product, index) => (
        <CollectionSection key={product.id} product={product} index={index} />
      ))}

      {/* Footer Section */}
      <div className="py-24 md:py-32 flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-2xl md:text-3xl font-serif italic mb-4 text-neutral-900">
          The Complete Archive
        </h3>
        <p className="text-sm text-neutral-500 font-light mb-10 max-w-md mx-auto">
          Discover our full range of bespoke silhouettes. Each pair is
          meticulously hand-crafted to your unique specifications.
        </p>
        <Link
          href="/collections"
          className="inline-block bg-transparent text-black border border-black px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-300"
        >
          Explore All Collections
        </Link>
      </div>
    </section>
  );
}

function CollectionSection({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={sectionRef}
      className="relative border-b border-neutral-200 last:border-none"
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* IMAGE SIDE */}
          <div
            className={`lg:col-span-7 xl:col-span-8 py-20 lg:py-32 space-y-20 ${
              isReversed ? "lg:order-2" : ""
            }`}
          >
            <motion.div
              className="relative aspect-[4/5] bg-white p-4 shadow-sm"
              initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src={product.images[0]}
                alt={`${product.name.prefix} ${product.name.numeral}`}
                fill
                className="object-cover p-2"
              />
            </motion.div>

            <motion.div
              className="relative aspect-[4/5] w-2/3 ml-auto bg-white p-4 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={product.images[1] || product.images[0]}
                alt={`${product.name.prefix} ${product.name.numeral} Detail View`}
                fill
                className="object-cover p-2"
              />
            </motion.div>
          </div>

          {/* CONTENT SIDE (STICKY) */}
          <div
            className={`lg:col-span-5 xl:col-span-4 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-20 lg:py-0 ${
              isReversed ? "lg:order-1" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 font-light mb-6 block">
                {product.tag}
              </span>

              {/* SYSTEMATIC NAMING UI (Using Object directly) */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-[0.9] text-neutral-900 mb-8 uppercase">
                {product.name.prefix} <br />
                <span className="font-serif italic text-neutral-500">
                  {product.name.numeral}
                </span>
              </h2>

              <div className="h-[0.5px] w-12 bg-neutral-900 mb-8" />

              <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-light mb-10 max-w-sm italic">
                "{product.description}"
              </p>

              <div className="space-y-4 mb-12">
                {product.stats?.map((stat, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-baseline pb-2 border-b border-neutral-100"
                  >
                    <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                      {stat.label}
                    </span>
                    <span className="text-xs text-neutral-900 font-light">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={`/product/${product.slug}`}
                  className="inline-block bg-black text-white px-10 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-neutral-800 transition-colors text-center w-full md:w-auto"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
