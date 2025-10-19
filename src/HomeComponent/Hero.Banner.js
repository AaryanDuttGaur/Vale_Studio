"use client";
import { Space_Grotesk } from "next/font/google";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Space = Space_Grotesk({ subsets: ["latin"] });

export default function HeroBanner() {
  const track = useRef(null);

  useEffect(() => {
    const trackEl = track.current;
    if (!trackEl) return;

    const items = trackEl.querySelectorAll(".banner-item");
    Array.from(items).forEach((item) => {
      const clone = item.cloneNode(true);
      trackEl.appendChild(clone);
    });

    let position = 0;
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const delta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;

      position -= delta * 0.5;

      const width = trackEl.scrollWidth / 2;
      if (position <= -width) position = 0;
      if (position >= 0) position = -width;

      gsap.set(trackEl, { x: position });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="w-full h-[100vh] p-3">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-white">
        <div
          ref={track}
          className={`${Space.className} flex whitespace-nowrap gap-32 py-8 text-[3rem] font-bold`}
        >
          <div className="banner-item">Motion Design</div>
          <div className="banner-item">Visual Design</div>
          <div className="banner-item">Art Design</div>
        </div>
      </div>
    </div>
  );
}
