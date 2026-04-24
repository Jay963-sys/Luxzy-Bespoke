"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Ruler,
  PenTool,
  Footprints,
  Info,
  MessageCircle,
  Camera,
} from "lucide-react";

// Client's exact sizing data from the infographic
const SIZING_DATA = [
  { cm: "24.0 - 24.5", uk: "6", eu: "40" },
  { cm: "25.0 - 25.5", uk: "7", eu: "41" },
  { cm: "26.0 - 26.5", uk: "8", eu: "42" },
  { cm: "27.0 - 27.5", uk: "9", eu: "43" },
  { cm: "28.0 - 28.5", uk: "10", eu: "44" },
  { cm: "29.0 - 29.5", uk: "11", eu: "45" },
  { cm: "30.0 - 30.5", uk: "12", eu: "46" },
];

export default function SizingGuidePage() {
  const whatsappLink =
    "https://wa.me/2348029092392?text=Hello%20Luxzy,%20I%20need%20help%20with%20my%20measurements.";

  return (
    <div className="min-h-screen bg-[#faf9f8] pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 xl:px-16 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-amber-700 font-bold mb-6 block">
              Measurement Protocol
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] text-neutral-900 mb-6 uppercase">
              Official{" "}
              <span className="font-serif italic lowercase text-neutral-500">
                Sizing Guide
              </span>
            </h1>
            <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">
              For the perfect bespoke fit, accuracy is everything. Follow our
              official protocol below to determine your exact dimensions before
              commissioning a pair.
            </p>
          </motion.div>
        </div>

        {/* 1. HOW TO MEASURE (3 Steps) */}
        <div className="mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-center text-neutral-900 font-bold mb-12">
            How to Measure Your Foot
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Prepare",
                desc: "Place your foot flat on a blank piece of paper laid on a hard, flat surface.",
                icon: <Footprints size={24} className="text-amber-700" />,
              },
              {
                step: "02",
                title: "Mark",
                desc: "Mark the back of your heel and the tip of your longest toe precisely.",
                icon: <PenTool size={24} className="text-amber-700" />,
              },
              {
                step: "03",
                title: "Measure",
                desc: "Measure the exact distance between the two marks in centimeters (cm).",
                icon: <Ruler size={24} className="text-amber-700" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-neutral-100 flex flex-col items-center text-center space-y-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h3 className="text-[11px] uppercase tracking-widest text-neutral-900 font-bold">
                  Step {item.step}: {item.title}
                </h3>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. CHART & NOTES SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: The Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 border border-neutral-200 shadow-sm"
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-900 font-bold mb-8 text-center">
              Men's Size Chart
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="border-b-2 border-neutral-900 bg-neutral-50">
                    <th className="py-4 text-[9px] uppercase tracking-widest text-amber-700 font-bold">
                      Foot Length (CM)
                    </th>
                    <th className="py-4 text-[9px] uppercase tracking-widest text-neutral-900 font-bold">
                      UK Size
                    </th>
                    <th className="py-4 text-[9px] uppercase tracking-widest text-neutral-900 font-bold">
                      EU Size
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs font-light text-neutral-600">
                  {SIZING_DATA.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                    >
                      <td className="py-5 font-medium text-neutral-900">
                        {row.cm}
                      </td>
                      <td className="py-5">{row.uk}</td>
                      <td className="py-5">{row.eu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Right: Important Notes & Custom Tips */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Important Notes */}
            <div className="bg-[#1a1514] text-white p-8 border-t-2 border-amber-600">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold mb-6 flex items-center gap-2">
                <Info size={14} /> Important Notes
              </h3>
              <ul className="space-y-5 text-xs font-light text-neutral-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-amber-600 font-serif italic text-sm mt-0.5">
                    •
                  </span>
                  If you fall between sizes, we recommend going one size up for
                  comfort.
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-serif italic text-sm mt-0.5">
                    •
                  </span>
                  Measure your feet in the evening, as feet naturally expand
                  slightly throughout the day.
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-serif italic text-sm mt-0.5">
                    •
                  </span>
                  For particularly wide feet, please inform us beforehand so we
                  can adjust the last accordingly.
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-serif italic text-sm mt-0.5">
                    •
                  </span>
                  All Luxzy footwear is entirely handcrafted. We prioritize the
                  perfect fit and exceptional comfort.
                </li>
              </ul>
            </div>

            {/* Custom Order Tip */}
            <div className="bg-white p-8 border border-neutral-200">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-neutral-900 font-bold mb-4 flex items-center gap-2">
                <Camera size={14} className="text-amber-700" /> Custom Order Tip
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed mb-4">
                For the absolute best bespoke fit, kindly send us via WhatsApp:
              </p>
              <ul className="space-y-2 text-xs font-medium text-neutral-800 list-inside list-disc mb-6">
                <li>Your exact foot length (cm)</li>
                <li>Your foot width (Optional but premium)</li>
                <li>A clear picture of your foot on the paper</li>
              </ul>

              <Link
                href={whatsappLink}
                target="_blank"
                className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 text-[9px] uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                <MessageCircle size={14} /> Send Measurements via WhatsApp
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
