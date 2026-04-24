"use client";

import Link from "next/link";
import { Instagram, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Client's requested WhatsApp number
  const whatsappLink = "https://wa.me/2348029092392";

  return (
    <footer className="bg-[#1a1514] text-white pt-24 pb-12 border-t border-neutral-800">
      <div className="container mx-auto px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-6">
            <h3 className="text-2xl font-light tracking-widest uppercase mb-6 text-white">
              Luxzy{" "}
              <span className="font-serif italic text-amber-600">Bespoke</span>
            </h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-sm mb-8">
              Luxzy Bespoke Footwear & Leather Works. <br />
              Crafted for Men of Presence.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="https://instagram.com/luxzybespoke"
                target="_blank"
                className="text-neutral-400 hover:text-amber-500 transition-colors"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="text-neutral-400 hover:text-amber-500 transition-colors"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Menu Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-700 mb-6 font-bold">
              Menu
            </h4>
            <ul className="space-y-4 text-sm font-light text-neutral-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="hover:text-amber-500 transition-colors"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/bespoke"
                  className="hover:text-amber-500 transition-colors"
                >
                  Custom Order
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-700 mb-6 font-bold">
              Studio
            </h4>
            <ul className="space-y-4 text-sm font-light text-neutral-300">
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-amber-600"
                />
                <span>
                  Surulere <br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="pt-4">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="text-amber-600 hover:text-amber-400 transition-colors border-b border-amber-600/30 pb-1"
                >
                  +234 802 909 2392
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-neutral-500">
          <p>&copy; {currentYear} Luxzy Bespoke Footwear & Leather Works.</p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
