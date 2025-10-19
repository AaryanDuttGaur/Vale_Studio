import Image from "next/image";
import HeroBanner from "@/HomeComponent/Hero.Banner";
import About from "@/HomeComponent/About";
import Portfolio from "@/HomeComponent/Portfolio";
import Services from "@/HomeComponent/Service";
import StandUnique from "@/HomeComponent/StandUnique";
export default function Home() {
  return (
    <div className="relative">
      <HeroBanner/>
      <About/>
      <Portfolio/>
      <Services/>
      <StandUnique/>
    </div>
  );
}