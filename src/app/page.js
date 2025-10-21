import Image from "next/image";
import HeroBanner from "@/HomeComponent/Hero.Banner";
import About from "@/HomeComponent/About";
import Portfolio from "@/HomeComponent/Portfolio";
import Services from "@/HomeComponent/Service";
import StandUnique from "@/HomeComponent/StandUnique";
import Testimonial from "@/HomeComponent/Testimonial";
import Cta from "@/HomeComponent/Cta";
export default function Home() {
  return (
    <div className="relative">
      <HeroBanner/>
      <About/>
      <Portfolio/>
      <Services/>
      <StandUnique/>
      <Testimonial/>
      <Cta/>
    </div>
  );
}