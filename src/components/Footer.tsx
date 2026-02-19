"use client";

import Link from "next/link";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-100 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-2xl font-serif italic tracking-tighter">
              Luxzy Bespoke
            </h2>
            <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xs">
              Hand-carving the future of Nigerian luxury footwear. Every pair
              tells a story of precision, heritage, and individual character.
            </p>
            <div className="flex items-center gap-5 text-neutral-400">
              <Link
                href="https://www.instagram.com/luxzyfootwear?igsh=MXdxcjI4cWRoZWczaw=="
                className="hover:text-black transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </Link>
              <Link
                href="tel:+23408029092392"
                className="hover:text-black transition-colors"
              >
                <Phone size={18} strokeWidth={1.5} />
              </Link>
              <Link
                href="mailto:hello@luxzyfootwear.com"
                className="hover:text-black transition-colors"
              >
                <Mail size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            {/* Shop */}
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-neutral-900">
                Collections
              </h4>
              <ul className="space-y-4 text-xs font-light text-neutral-500">
                <li>
                  <Link
                    href="/collections"
                    className="hover:text-black transition-colors"
                  >
                    All Footwear
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/oxfords"
                    className="hover:text-black transition-colors"
                  >
                    Oxfords
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/loafers"
                    className="hover:text-black transition-colors"
                  >
                    Loafers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/slides"
                    className="hover:text-black transition-colors"
                  >
                    Luxury Slides
                  </Link>
                </li>
              </ul>
            </div>

            {/* Client Service */}
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-neutral-900">
                Assistance
              </h4>
              <ul className="space-y-4 text-xs font-light text-neutral-500">
                <li>
                  <Link
                    href="/bespoke-process"
                    className="hover:text-black transition-colors"
                  >
                    Bespoke Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sizing"
                    className="hover:text-black transition-colors"
                  >
                    Sizing Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="hover:text-black transition-colors"
                  >
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-black transition-colors"
                  >
                    Contact Studio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Studio Info */}
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-neutral-900">
                Studio
              </h4>
              <div className="space-y-4 text-xs font-light text-neutral-500">
                <p className="flex items-start gap-2 leading-relaxed">
                  <MapPin
                    size={14}
                    className="mt-0.5 flex-shrink-0 text-black"
                  />
                  Surulere,
                  <br />
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-widest text-neutral-400">
            © {currentYear} Luxzy Bespoke. All rights reserved.
          </p>
          <div className="flex gap-8 text-[9px] uppercase tracking-widest text-neutral-400">
            <Link
              href="/privacy"
              className="hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
