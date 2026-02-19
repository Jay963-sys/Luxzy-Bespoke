import Hero from "@/components/Hero";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import FeaturedCollection from "@/components/FeaturedCollection";

export default function Home() {
  return (
    <div className="relative">
      <main>
        <Hero />
        <CraftsmanshipSection />
        <FeaturedCollection />
      </main>
    </div>
  );
}
