"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { toggleCart, cartItems } = useCartStore();
  const pathname = usePathname();

  const navbarOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);

  // Handle Scroll Transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NEW: Handle Background Scroll Lock for Mobile Menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Small delay prevents immediate harsh jump on mobile
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Collection", href: "/collections" },
    { name: "Bespoke", href: "/bespoke" },
    { name: "Contact", href: "/contact" },
  ];

  // Animation variants for staggered mobile links
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2, // Wait for background to slide in
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        // cast easing array to any to satisfy Framer Motion's TypeScript types
        ease: [0.22, 1, 0.36, 1] as unknown as any,
      },
    },
  };

  return (
    <>
      <motion.nav
        style={{ opacity: navbarOpacity }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled || isMobileMenuOpen // Force white background if menu is open
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 xl:px-16">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo + Name Combo */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu if logo clicked
              className="relative z-[70] flex items-center gap-4 group"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-sm transition-transform duration-500 group-hover:scale-105"
              >
                <Image
                  src="/x24.jpg"
                  alt="Luxzy Bespoke Logo"
                  width={52}
                  height={52}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col border-l border-neutral-200 pl-4"
              >
                <span className="text-xl md:text-2xl font-light tracking-tight text-neutral-900 leading-none uppercase">
                  Luxzy
                </span>
                <span className="text-[7px] uppercase tracking-[0.5em] text-neutral-400 mt-1.5 font-medium">
                  Bespoke Lagos
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12 lg:gap-16">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-[10px] uppercase tracking-[0.3em] font-light transition-colors duration-300 ${
                      isActive
                        ? "text-neutral-900"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {link.name}
                    {/* Active Underline */}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute -bottom-2 left-0 w-full h-[1px] bg-neutral-900"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side: Cart & Mobile Toggle */}
            <div className="flex items-center gap-6 relative z-[70]">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false); // Ensure menu closes if cart opened
                  toggleCart();
                }}
                className="relative group p-2"
              >
                <ShoppingBag
                  size={20}
                  strokeWidth={1}
                  className="text-neutral-900"
                />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartItems.length}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2"
              >
                <span
                  className={`w-6 h-[1px] bg-neutral-900 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`w-6 h-[1px] bg-neutral-900 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-[1px] bg-neutral-900 transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Improved Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[55] md:hidden pt-32 px-12 pb-12 flex flex-col justify-between"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-10 mt-12"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-5xl text-neutral-500 font-light tracking-tighter flex items-center transition-colors ${
                      pathname === link.href
                        ? "text-neutral-900"
                        : "text-neutral-300 hover:text-neutral-500"
                    }`}
                  >
                    {pathname === link.href && (
                      <span className="font-serif italic mr-6 text-neutral-900">
                        /
                      </span>
                    )}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="border-t border-neutral-100 pt-8"
            >
              <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 font-medium">
                Handcrafted in Lagos
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
