"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBespokeStore } from "@/store/useBespokeStore";
import { useCartStore } from "@/store/useCartStore";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Ruler,
  Footprints,
  Check,
  CreditCard,
  Loader2,
  ArrowLeft,
} from "lucide-react";

export default function BespokeModal() {
  const { isOpen, closeBespoke } = useBespokeStore();
  const { toggleCart, cartItems } = useCartStore();
  const clearCart = useCartStore((state) => state.clearCart);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    footProfile: "Standard",
    fitNotes: "",
    deliveryMethod: "Dispatch",
    leatherPreference: "Classic Calf",
    notes: "",
  });

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\s+/g, "");

    const regex = /^(?:\+234|234|0)(7|8|9)\d{9}$/;

    return regex.test(cleaned);
  };

  const totalSteps = 3;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const isStepOneValid =
    formData.name &&
    validateEmail(formData.email) &&
    validatePhone(formData.phone);

  const handleClose = () => {
    closeBespoke();
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
      setIsProcessing(false);
    }, 500);
  };

  const handleBackToCart = () => {
    handleClose();
    setTimeout(() => {
      toggleCart();
    }, 300);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          amount: totalAmount,
          metadata: {
            ...formData,
            cartItems,
          },
        }),
      });

      const data = await res.json();
      if (data.status && data.data.authorization_url) {
        window.location.href = data.data.authorization_url;
      } else {
        throw new Error("Initialization failed");
      }
    } catch (error) {
      console.error("Payment failed", error);
      alert("Could not initialize payment. Please try again.");
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Lock scroll and prevent layout shift on desktop by accounting for scrollbar width
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Restore scroll
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    // Cleanup function in case component unmounts while open
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
            onClick={!isProcessing ? handleClose : undefined}
            className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-[100]"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 flex justify-between items-center border-b border-neutral-100">
              <div className="flex flex-col items-start gap-1">
                {step === 1 && !isSuccess && (
                  <button
                    onClick={handleBackToCart}
                    className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors mb-2"
                  >
                    <ArrowLeft size={12} /> Back to Selection
                  </button>
                )}

                <h3 className="text-[10px] uppercase tracking-[0.4em] font-medium text-neutral-900">
                  Bespoke Commission
                </h3>
                {!isSuccess && (
                  <p className="text-[9px] text-neutral-400 uppercase tracking-widest mt-1">
                    Step {step} of {totalSteps}
                  </p>
                )}
              </div>
              <button
                onClick={handleClose}
                disabled={isProcessing}
                className="p-2 hover:bg-neutral-50 rounded-full transition-colors disabled:opacity-0"
              >
                <X size={18} className="text-neutral-400" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center text-white mb-4">
                      <Check size={32} />
                    </div>
                    <h4 className="text-2xl font-serif italic text-neutral-900">
                      Commission Confirmed
                    </h4>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xs">
                      Your payment of ₦{totalAmount.toLocaleString()} has been
                      secured. Our master artisan will contact you within 24
                      hours to schedule your virtual fitting.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-8 text-[10px] uppercase tracking-[0.3em] border-b border-black pb-1"
                    >
                      Return to Gallery
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* Step 1: Personal (Unchanged) */}
                    {step === 1 && (
                      <motion.div
                        key="s1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                      >
                        <div className="space-y-2">
                          <h4 className="text-xl text-neutral-500 font-serif italic">
                            The Individual
                          </h4>
                          <p className="text-sm text-neutral-400 font-light italic">
                            Every bespoke journey begins with a conversation.
                          </p>
                        </div>
                        <div className="space-y-6">
                          <InputField
                            label="Full Name"
                            placeholder=""
                            value={formData.name}
                            onChange={(v: string) =>
                              setFormData({ ...formData, name: v })
                            }
                          />
                          <InputField
                            label="Email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            error={emailError}
                            onChange={(v: string) => {
                              setFormData({ ...formData, email: v });

                              if (emailError) {
                                setEmailError("");
                              }
                            }}
                            onBlur={() => {
                              if (
                                formData.email &&
                                !validateEmail(formData.email)
                              ) {
                                setEmailError(
                                  "Please enter a valid email address",
                                );
                              }
                            }}
                          />
                          <InputField
                            label="Phone/Whatsapp Number"
                            type="tel"
                            placeholder="08012345678"
                            value={formData.phone}
                            error={phoneError}
                            onChange={(v: string) => {
                              setFormData({ ...formData, phone: v });

                              if (phoneError) {
                                setPhoneError("");
                              }
                            }}
                            onBlur={() => {
                              if (
                                formData.phone &&
                                !validatePhone(formData.phone)
                              ) {
                                setPhoneError(
                                  "Please enter a valid phone number",
                                );
                              }
                            }}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* UPDATED Step 2: Fit Profile Instead of Dimensions */}
                    {step === 2 && (
                      <motion.div
                        key="s2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                      >
                        <div className="space-y-2">
                          <h4 className="text-xl font-serif italic text-neutral-900">
                            The Fit Profile
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            You've selected your standard EU size. Help us
                            tailor the last to your specific foot shape.
                          </p>
                        </div>

                        {/* Width Profile Selector */}
                        <div className="space-y-4">
                          <label className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
                            Foot Width Profile
                          </label>
                          <div className="grid grid-cols-3 gap-3">
                            {["Narrow", "Standard", "Wide"].map((profile) => (
                              <button
                                key={profile}
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    footProfile: profile,
                                  })
                                }
                                className={`py-3 text-xs tracking-wider transition-all duration-300 border ${
                                  formData.footProfile === profile
                                    ? "bg-black text-white border-black"
                                    : "border-neutral-200 text-neutral-500 hover:border-black hover:text-black"
                                }`}
                              >
                                {profile}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Fit Notes Textarea */}
                        <div className="space-y-3">
                          <label className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
                            Specific Requirements
                          </label>
                          <textarea
                            value={formData.fitNotes}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                fitNotes: e.target.value,
                              })
                            }
                            placeholder="Delivery Address, Material (Leather type), Color, Design Preference..."
                            className="w-full border border-neutral-200 p-4 min-h-[100px]
  text-sm font-light
  text-black
  bg-white
  caret-black
  focus:border-black
  outline-none
  transition-all
  placeholder:text-neutral-400
  resize-none"
                          />
                        </div>
                        {/* NEW: Delivery Method Selector */}
                        <div className="space-y-4 pt-4 border-t border-neutral-100">
                          <label className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
                            Delivery Method
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {["Dispatch", "Pickup"].map((method) => (
                              <button
                                key={method}
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    deliveryMethod: method,
                                  })
                                }
                                className={`py-3 text-xs tracking-wider transition-all duration-300 border ${
                                  formData.deliveryMethod === method
                                    ? "bg-black text-white border-black"
                                    : "border-neutral-200 text-neutral-500 hover:border-black hover:text-black"
                                }`}
                              >
                                {method}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                    {/* Step 3: Payment (UPDATED) */}
                    {step === 3 && (
                      <motion.div
                        key="s3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                      >
                        <div className="space-y-2">
                          <h4 className="text-xl text-neutral-700 font-serif italic">
                            Review & Secure
                          </h4>
                          <p className="text-sm text-neutral-500 font-light">
                            Please review your total bespoke commission below.
                          </p>
                        </div>

                        <div className="bg-neutral-50 p-6 space-y-4">
                          <div className="flex justify-between text-[10px] uppercase tracking-widest text-neutral-400">
                            <span>Service</span>
                            <span>Bespoke Hand-Crafting</span>
                          </div>

                          {/* List items briefly */}
                          <div className="space-y-1">
                            {cartItems.map((item) => (
                              <div
                                key={`${item.id}-${item.size}`}
                                className="flex justify-between text-xs font-light text-neutral-600"
                              >
                                <span>
                                  {item.name} (EU {item.size} x
                                  {item.quantity || 1}){" "}
                                </span>
                                <span>
                                  ₦
                                  {(
                                    item.price * (item.quantity || 1)
                                  ).toLocaleString()}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="h-[0.5px] bg-neutral-200 w-full" />
                          <div className="flex justify-between items-baseline pt-2">
                            <span className="text-[10px] text-neutral-700 uppercase tracking-[0.3em] font-bold">
                              Total Due
                            </span>
                            <span className="text-2xl text-neutral-700 font-serif tracking-tighter">
                              ₦{totalAmount.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-[9px] text-neutral-400 uppercase tracking-widest">
                          <CreditCard size={14} /> Secured by Paystack Encrypted
                          Systems
                        </div>
                      </motion.div>
                    )}
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            {!isSuccess && (
              <div className="p-8 border-t border-neutral-100 flex justify-between items-center bg-white">
                {step > 1 ? (
                  <button
                    onClick={prevStep}
                    disabled={isProcessing}
                    className="text-[10px] uppercase tracking-widest text-neutral-400 hover:text-black flex items-center gap-2 transition-colors disabled:opacity-30"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <button
                    onClick={nextStep}
                    disabled={
                      step === 1 &&
                      (!formData.name ||
                        !formData.email ||
                        !validateEmail(formData.email) ||
                        !formData.phone ||
                        !validatePhone(formData.phone))
                    }
                    className="bg-black text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 hover:bg-neutral-800 transition-colors disabled:bg-neutral-100 disabled:text-neutral-400"
                  >
                    Next Step <ChevronRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={handlePayment}
                    disabled={step === 1 && !isStepOneValid}
                    className="bg-black text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 hover:bg-neutral-800 transition-colors relative disabled:bg-neutral-200"
                  >
                    {isProcessing ? (
                      <Loader2 className="animate-spin" size={16} />
                    ) : (
                      <>
                        Pay ₦{totalAmount.toLocaleString()} <Check size={14} />
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Helper Sub-component (Unchanged)
function InputField({
  label,
  placeholder,
  value,
  onChange,
  icon,
  type = "text",
  error,
  onBlur,
}: any) {
  return (
    <div className="space-y-3">
      <label className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-2 font-medium">
        {icon} {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`w-full border-b py-3 text-sm text-neutral-900 
          placeholder:text-neutral-400 
          focus:border-black 
          outline-none 
          transition-all
          ${error ? "border-red-500" : "border-neutral-300"}
        `}
        placeholder={placeholder}
      />

      {error && <p className="text-[11px] text-red-500 mt-1">{error}</p>}
    </div>
  );
}
