"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stages = [
  {
    title: "The Consultation",
    subtitle: "Phase I",
    description:
      "A deep dive into your personal style and physical requirements. We discuss leather grains, silhouettes, and take 12 distinct measurements of each foot.",
    image: "/a.jpg",
  },
  {
    title: "Last Carving",
    subtitle: "Phase II",
    description:
      "Using your anatomical data, we carve a custom 'last'—a wooden or high-density mold that serves as the precise physical blueprint for your footwear.",
    image: "/b.jpg",
  },
  {
    title: "Clicking & Closing",
    subtitle: "Phase III",
    description:
      "The selected hides are 'clicked' (hand-cut) and 'closed' (stitched). This is where the 2D leather begins its transformation into a 3D masterpiece.",
    image: "/c.jpg",
  },
  {
    title: "Hand Lasting",
    subtitle: "Phase IV",
    description:
      "The leather is pulled tight over the custom last and secured. It remains in this state for several days to ensure the shape is permanently set.",
    image: "/11.jpg",
  },
  {
    title: "The Final Patina",
    subtitle: "Phase V",
    description:
      "Our artisans apply natural waxes and pigments by hand, creating a depth of color and 'patina' that will only improve with age.",
    image: "/12.jpg",
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <header className="max-w-3xl mb-32">
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 block mb-6">
            The Atelier Journey
          </span>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] text-neutral-900 uppercase">
            From Last <br />
            <span className="font-serif italic lowercase ml-12">to Legend</span>
          </h1>
        </header>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[0.5px] bg-neutral-100 hidden md:block" />

          <div className="space-y-32 md:space-y-64">
            {stages.map((stage, index) => (
              <ProcessStage key={index} stage={stage} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function ProcessStage({ stage, index }: { stage: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2">
        <div className="aspect-[4/5] relative overflow-hidden bg-neutral-50 border border-neutral-100">
          <Image
            src={stage.image}
            alt={stage.title}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-medium tracking-[0.3em] text-neutral-300 uppercase">
            {stage.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900">
            {stage.title}
          </h2>
        </div>
        <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-sm">
          {stage.description}
        </p>
      </div>
    </motion.div>
  );
}
