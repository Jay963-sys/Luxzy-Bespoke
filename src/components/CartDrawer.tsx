"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
import { X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useBespokeStore } from "@/store/useBespokeStore";

export default function CartDrawer() {
  const { isOpen, toggleCart, cartItems, removeItem } = useCartStore();
  const openBespoke = useBespokeStore((state) => state.openBespoke);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0,
  );

  const handleProceedToCheckout = () => {
    toggleCart();
    const checkoutId = cartItems.length === 1 ? cartItems[0].id : undefined;
    openBespoke(checkoutId);
  };

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 flex items-center justify-between border-b border-neutral-100">
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400">
                  Your Selection
                </span>
                <span className="text-xs font-light text-neutral-900">
                  ({totalItems})
                </span>
              </div>
              <button
                onClick={toggleCart}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X size={20} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag
                    size={40}
                    strokeWidth={0.5}
                    className="text-neutral-200 mb-4"
                  />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    The collection is empty
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-6 group"
                  >
                    <Link
                      href={`/product/${item.id}`}
                      onClick={toggleCart}
                      className="relative w-24 h-32 bg-neutral-50 overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </Link>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <Link href={`/product/${item.id}`} onClick={toggleCart}>
                        <h4 className="text-sm font-light text-neutral-900 mb-1 hover:text-neutral-500 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
                          Size: EU {item.size}
                        </p>
                      </Link>

                      <div className="flex items-center justify-between mt-2 border-t border-neutral-50 pt-2">
                        <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-neutral-600 font-medium">
                          ₦
                          {(item.price * (item.quantity || 1)).toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-end justify-between mt-1">
                        <span className="text-xs text-neutral-500 font-serif italic">
                          (₦{item.price.toLocaleString()} each)
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-[9px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout Button */}
            {cartItems.length > 0 && (
              <div className="p-8 border-t border-neutral-100 bg-neutral-50">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400">
                    Subtotal
                  </span>
                  <span className="text-neutral-700 font-serif">
                    ₦{subtotal.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-neutral-900 text-white py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-black transition-colors"
                >
                  Proceed to Checkout
                </button>
                <p className="text-[9px] text-center text-neutral-400 mt-4 italic">
                  *Bespoke items require 2-4 weeks production lead time.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
