import EstimateTime from "@/components/estimateTime";
import HeroSection from "@/components/heroSection";
import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar/>
      <HeroSection/>
      <EstimateTime/>
     
    </div>
  );
}
