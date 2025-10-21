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
            className={`${inter.className} text-sm uppercase tracking-[0.3em] text-[#D27DF3] font-light mb-6`}
          >
            Why Choose Us
          </h2>
          <div className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] w-20 h-1 mb-8"></div>
          <h1
            className={`${Brico.className} text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight`}
          >
            What Makes Us <br />
            <span className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-transparent">
              Stand Out
            </span>
          </h1>
        </div>

        <div ref={introRef} className="max-w-2xl">
          <p
            className={`${inter.className} text-lg md:text-xl text-gray-300 font-light leading-relaxed`}
          >
            We combine innovative design thinking with cutting-edge technology
            to deliver exceptional results that exceed expectations and inspire
            lasting impact.
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
                01 — Innovation
              </span>
            </div>
            <h3
              className={`${Brico.className} text-2xl md:text-4xl font-bold text-white leading-tight`}
            >
              Cutting-Edge <br /> Creative Solutions
            </h3>
            <p
              className={`${inter.className} text-base md:text-lg text-gray-400 font-light leading-relaxed`}
            >
              We push the boundaries of design and technology, crafting unique
              experiences that captivate audiences and drive engagement. Our
              innovative approach ensures your brand stands out in a crowded
              digital landscape.
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
                src="/video/v9.jpg"
                alt="Innovation showcase"
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
                src="/video/v8.jpg"
                alt="Quality craftsmanship"
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
                02 — Excellence
              </span>
            </div>
            <h3
              className={`${Brico.className} text-3xl md:text-5xl font-bold text-white leading-tight`}
            >
              Uncompromising <br /> Quality Standards
            </h3>
            <p
              className={`${inter.className} text-base md:text-lg text-gray-400 font-light leading-relaxed`}
            >
              Every project receives meticulous attention to detail and
              refinement. We believe in delivering excellence at every stage,
              from initial concept to final execution, ensuring results that
              truly shine.
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
                03 — Partnership
              </span>
            </div>
            <h3
              className={`${Brico.className} text-3xl md:text-5xl font-bold text-white leading-tight`}
            >
              Collaborative <br /> Approach
            </h3>
            <p
              className={`${inter.className} text-base md:text-lg text-gray-400 font-light leading-relaxed`}
            >
              Your vision is our mission. We work closely with you throughout
              the entire process, ensuring transparent communication and a
              seamless partnership that brings your ideas to life with precision
              and passion.
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
                src="/video/v10.jpg"
                alt="Collaborative workspace"
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