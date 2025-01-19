import EstimateTime from "@/components/estimateTime";
import HeroSection from "@/components/heroSection";
import NavBar from "@/components/navbar";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <HeroSection />
      <EstimateTime />
      <Services />
    </div>
  );
}
