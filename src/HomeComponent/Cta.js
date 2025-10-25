"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Cta() {
  const boxref1 = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxref1.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(headingRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    })
      .from(
        textRef.current,
        {
          opacity: 0,
          y: -30,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        buttonRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
    gsap.to(boxref1.current.parentElement, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: boxref1.current.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#181717] to-[#0F0F0F] relative z-60 -mt-20">
      <div className="mainbox h-[60vh] p-10 m-10 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] flex justify-center items-center rounded-2xl overflow-hidden">
        <div ref={boxref1} className="innerbox flex flex-col justify-stretch gap-5 ">
          <div className="Headings" ref={headingRef}>
            <h1
              className={`${Space.className} text-white text-2xl md:text-4xl font-bold leading-tight drop-shadow-lg`}
            >
              Let's bring your vision to{" "}
              <span className="text-black text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                Life
              </span>
            </h1>
            <div className="w-20 h-1 bg-white mt-4"></div>
          </div>
          <div
            ref={textRef}
            className={`${inter.className} text-white text-sm md:text-base font-light leading-relaxed drop-shadow-lg max-w-3xl`}
          >
            Whether it's motion graphics that captivate, brand visuals that resonate, or art direction 
            that tells your story—let's create something extraordinary together.
            <br />
            <br />
            <span className="text-black font-normal">
              Based in London and working with clients across the UK and Europe. Get in touch to discuss your next project.
            </span>
          </div>
          <div ref={buttonRef} className="flex justify-end">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`${Space.className} px-8 py-4 bg-white text-[#7952ED] font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-105 text-sm`}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}