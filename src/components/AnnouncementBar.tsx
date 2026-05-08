"use client";

export default function AnnouncementBar() {
  return (
    // Added w-full here to ensure edge-to-edge coverage
    <div className="bg-[#1a1514] text-center py-2.5 px-4 relative z-[100] flex items-center justify-center w-full">
      <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-amber-500 font-medium">
        The Luxzy Launch:{" "}
        <span className="font-light text-white ml-2">
          Enjoy exclusive early-buyer Discount across all collections for the
          next 24 hours.
        </span>
      </p>
    </div>
  );
}
