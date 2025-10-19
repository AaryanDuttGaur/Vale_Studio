"use client";
import { Space_Grotesk, Bricolage_Grotesque } from "next/font/google";

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });

export default function HeroBanner() {
  return (
    <section className="herobanner sticky top-0 z-5">
      <div className="w-full h-[100vh] p-3 relative">
        {/* Video Background */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/v3.mp4" type="video/mp4" />
        </video>

        {/* Heading Over Video */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className={`${Brico.className} text-black font-bold text-5xl md:text-7xl lg:text-8xl mb-4 drop-shadow-2xl`}>
            Design in motion. Stories that move.
          </h1>
          <p className={`${Space.className} text-white text-lg md:text-xl lg:text-2xl font-light max-w-2xl drop-shadow-lg`}>
            Crafting timeless experiences through motion, visual, and art design
          </p>
        </div>
      </div>
    </section>
  );
}