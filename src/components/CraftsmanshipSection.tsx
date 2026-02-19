"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CraftsmanshipSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  // Parallax effect for the background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const pillars = [
    {
      number: "01",
      title: "Material Selection",
      description:
        "Premium Italian calfskin meets grade-A local hides, curated for their distinct patina and lasting structural integrity.",
      image: "/10.jpg",
    },
    {
      number: "02",
      title: "Artisan Sculpting",
      description:
        "Our master carvers spend upwards of 48 hours on a single pair, ensuring the last perfectly mirrors the natural anatomy of the foot.",
      image: "/11.jpg",
    },
    {
      number: "03",
      title: "Final Refinement",
      description:
        "Each edge is hand-burnished with natural waxes, a final ritual that seals the soul of the shoe before it reaches you.",
      image: "/12.jpg",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F9F9F9] py-32 md:py-48 overflow-hidden"
    >
      {/* Background Decorative Text */}
      <motion.div
        style={{ x: textX }}
        className="absolute top-20 left-0 text-[15vw] font-serif italic text-neutral-100 whitespace-nowrap select-none pointer-events-none"
      >
        Handcrafted Excellence — Precision — Heritage
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-40 gap-8">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-medium mb-8 block">
              The Luxzy Standard
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9] text-neutral-900 uppercase">
              The Soul is in <br />
              <span className="font-serif italic lowercase ml-4 md:ml-12">
                the details
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-sm md:text-base text-neutral-500 font-light max-w-xs leading-relaxed italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.8 } : {}}
            transition={{ delay: 0.5 }}
          >
            "In a world of mass production, we choose the slow path. Every
            stitch is a signature of our commitment to permanence."
          </motion.p>
        </div>

        {/* Dynamic Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Image with Reveal Animation */}
              <div className="relative aspect-[3/4] mb-10 overflow-hidden bg-neutral-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Text Meta */}
              <div className="flex items-start gap-6">
                <span className="text-[10px] font-medium text-neutral-300 mt-1.5 tracking-widest uppercase">
                  {item.number}
                </span>
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-neutral-900 tracking-tight uppercase">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500 font-light max-w-[260px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
