"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function StandUnique() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  useEffect(() => {
    // Animate header section
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate intro text
    gsap.fromTo(
      introRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
        },
      }
    );

    // Feature 1 - Text from left, Image from right
    gsap.fromTo(
      feature1Ref.current,
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: feature1Ref.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      img1Ref.current,
      { opacity: 0, x: 80, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img1Ref.current,
          start: "top 75%",
        },
      }
    );

    // Parallax effect for image 1
    gsap.to(img1Ref.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: img1Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Feature 2 - Text from right, Image from left
    gsap.fromTo(
      feature2Ref.current,
      { opacity: 0, x: 80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: feature2Ref.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      img2Ref.current,
      { opacity: 0, x: -80, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img2Ref.current,
          start: "top 75%",
        },
      }
    );

    // Parallax effect for image 2
    gsap.to(img2Ref.current, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: img2Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Feature 3 - Text from left, Image from right
    gsap.fromTo(
      feature3Ref.current,
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: feature3Ref.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      img3Ref.current,
      { opacity: 0, x: 80, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img3Ref.current,
          start: "top 75%",
        },
      }
    );

    // Parallax effect for image 3
    gsap.to(img3Ref.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: img3Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-[#181717] via-[#0F0F0F] to-[#181717] relative overflow-hidden relative z-60 -mt-40"
    >
      {/* Decorative background elements */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-gradient-to-br from-[#D27DF3]/5 to-[#7952ED]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-[#7952ED]/5 to-[#D27DF3]/5 rounded-full blur-3xl"></div>

      {/* Header Section */}
      <div className="px-8 md:px-20 lg:px-20 pt-32 pb-16">
        <div ref={headerRef}>
          <h2
            className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light mb-6`}
          >
            Creative Approach
          </h2>
          <div className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] w-20 h-1 mb-8"></div>
          <h1
            className={`${Brico.className} text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight`}
          >
            Design Philosophy <br />
            <span className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-transparent">
              & Process
            </span>
          </h1>
        </div>

        <div ref={introRef} className="max-w-2xl">
          <p
            className={`${inter.className} text-base md:text-lg text-gray-300 font-light leading-relaxed`}
          >
            A unique blend of artistic vision and strategic thinking that transforms ideas 
            into compelling visual narratives. Every project tells a story.
          </p>
        </div>
      </div>

      {/* Feature 1 - Innovation & Creativity */}
      <div className="px-8 md:px-20 lg:px-20 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div ref={feature1Ref} className="space-y-6">
            <div className="inline-block">
              <span
                className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light`}
              >
                01 — Cinematic Vision
              </span>
            </div>
            <h3
              className={`${Brico.className} text-2xl md:text-3xl font-bold text-white leading-tight`}
            >
              Motion That <br /> Moves People
            </h3>
            <p
              className={`${inter.className} text-sm md:text-base text-gray-400 font-light leading-relaxed`}
            >
              Every frame is crafted with intention. From smooth transitions to dynamic 
              animations, creating motion graphics that don't just look good—they feel right. 
              Visual storytelling that captures attention and holds it.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="w-2 h-2 rounded-full bg-[#D27DF3] animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-[#7952ED] animate-pulse delay-75"></div>
              <div className="w-2 h-2 rounded-full bg-[#D27DF3] animate-pulse delay-150"></div>
            </div>
          </div>

          <div ref={img1Ref} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D27DF3]/20 to-[#7952ED]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop"
                alt="Motion design workspace"
                className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2 - Quality & Excellence */}
      <div className="px-8 md:px-20 lg:px-20 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div ref={img2Ref} className="relative group md:order-1 order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#7952ED]/20 to-[#D27DF3]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop"
                alt="Brand design process"
                className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          <div ref={feature2Ref} className="space-y-6 md:order-2 order-1">
            <div className="inline-block">
              <span
                className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light`}
              >
                02 — Brand Identity
              </span>
            </div>
            <h3
              className={`${Brico.className} text-2xl md:text-3xl font-bold text-white leading-tight`}
            >
              Visuals That <br /> Define Brands
            </h3>
            <p
              className={`${inter.className} text-sm md:text-base text-gray-400 font-light leading-relaxed`}
            >
              Building cohesive visual systems that authentically represent brand essence. 
              From typography to color theory, every element works together to create memorable 
              identities that resonate with target audiences and stand the test of time.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="w-2 h-2 rounded-full bg-[#7952ED] animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-[#D27DF3] animate-pulse delay-75"></div>
              <div className="w-2 h-2 rounded-full bg-[#7952ED] animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 3 - Collaboration & Partnership */}
      <div className="px-8 md:px-20 lg:px-20 py-20 md:py-32 pb-40">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div ref={feature3Ref} className="space-y-6">
            <div className="inline-block">
              <span
                className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light`}
              >
                03 — Art Direction
              </span>
            </div>
            <h3
              className={`${Brico.className} text-2xl md:text-3xl font-bold text-white leading-tight`}
            >
              Strategic Creative <br /> Leadership
            </h3>
            <p
              className={`${inter.className} text-sm md:text-base text-gray-400 font-light leading-relaxed`}
            >
              Guiding projects from initial concept through to final execution with a clear 
              artistic vision. Combining strategic thinking with creative intuition to ensure 
              every element serves the story and resonates with audiences on an emotional level.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="w-2 h-2 rounded-full bg-[#D27DF3] animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-[#7952ED] animate-pulse delay-75"></div>
              <div className="w-2 h-2 rounded-full bg-[#D27DF3] animate-pulse delay-150"></div>
            </div>
          </div>

          <div ref={img3Ref} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D27DF3]/20 to-[#7952ED]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop"
                alt="Creative art direction"
                className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}