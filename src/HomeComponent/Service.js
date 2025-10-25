"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const service1Ref = useRef(null);
  const service2Ref = useRef(null);
  const service3Ref = useRef(null);
  const service4Ref = useRef(null);

  useEffect(() => {
    // Parallax effect - move section up when scrolling
    gsap.to(sectionRef.current, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Animate Title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate Services with stagger
    const services = [
      service1Ref.current,
      service2Ref.current,
      service3Ref.current,
      service4Ref.current,
    ];
    
    gsap.fromTo(
      services,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services text-white min-h-screen px-8 md:px-20 py-28 relative z-40 bg-gradient-to-b from-[#181717] to-[#0F0F0F] -mt-20"
    >
      {/* Subtle decorative element */}
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-br from-[#D27DF3]/10 to-[#7952ED]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="mb-20">
          <div className="inline-block mb-6">
            <span className={`${inter.className} text-sm uppercase tracking-[0.3em] text-[#D27DF3] font-light`}>
              What I Offer
            </span>
          </div>

          <h1 className={`${Brico.className} text-5xl md:text-6xl font-bold leading-tight mb-6`}>
            Creative Services
          </h1>

          <div className="w-20 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mb-8"></div>

          <p className={`${inter.className} text-base md:text-lg font-light text-gray-300 leading-relaxed max-w-2xl mb-8`}>
            Specialized expertise in motion graphics, brand visuals, and art direction 
            for agencies, studios, and forward-thinking brands.
          </p>

          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`${Space.className} px-8 py-4 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-white font-medium rounded-lg hover:shadow-2xl hover:shadow-[#D27DF3]/50 transition-all duration-300 hover:scale-105 text-sm`}
          >
            Start a Project
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Service 1 */}
          <div ref={service1Ref} className="group">
            <div className="relative overflow-hidden rounded-lg bg-[#1E1C1C] p-10 shadow-2xl border border-transparent hover:border-[#D27DF3]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D27DF3]/20 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-r from-[#D27DF3] to-[#7952ED] rounded-lg">
                  <span className="text-3xl">🎬</span>
                </div>
                
                <h3 className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-4`}>
                  Motion Graphics
                </h3>
                
                <p className={`${inter.className} text-sm md:text-base font-light text-gray-400 leading-relaxed mb-6`}>
                  Dynamic animations and visual effects that bring stories to life. From brand 
                  showreels to product videos, creating motion work that captures attention and 
                  communicates powerfully.
                </p>

                <ul className={`${Space.className} space-y-2 text-xs md:text-sm text-gray-300`}>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> 2D/3D Animation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> Visual Effects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> Explainer Videos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div ref={service2Ref} className="group">
            <div className="relative overflow-hidden rounded-lg bg-[#1E1C1C] p-10 shadow-2xl border border-transparent hover:border-[#D27DF3]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D27DF3]/20 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-r from-[#D27DF3] to-[#7952ED] rounded-lg">
                  <span className="text-3xl">🎨</span>
                </div>
                
                <h3 className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-4`}>
                  Brand Visuals
                </h3>
                
                <p className={`${inter.className} text-sm md:text-base font-light text-gray-400 leading-relaxed mb-6`}>
                  Cohesive visual identities that capture brand essence and resonate with target 
                  audiences. From logo design to complete brand systems that make lasting impressions.
                </p>

                <ul className={`${Space.className} space-y-2 text-xs md:text-sm text-gray-300`}>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> Visual Identity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> Brand Guidelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> Marketing Materials
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div ref={service3Ref} className="group">
            <div className="relative overflow-hidden rounded-lg bg-[#1E1C1C] p-10 shadow-2xl border border-transparent hover:border-[#D27DF3]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D27DF3]/20 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-r from-[#D27DF3] to-[#7952ED] rounded-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                
                <h3 className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-4`}>
                  Art Direction
                </h3>
                
                <p className={`${inter.className} text-sm md:text-base font-light text-gray-400 leading-relaxed mb-6`}>
                  Strategic creative direction that ensures visual consistency and impactful 
                  communication. Guiding projects from concept to execution with artistic vision.
                </p>

                <ul className={`${Space.className} space-y-2 text-xs md:text-sm text-gray-300`}>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> Creative Concept
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> Visual Strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> Campaign Design
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div ref={service4Ref} className="group">
            <div className="relative overflow-hidden rounded-lg bg-[#1E1C1C] p-10 shadow-2xl border border-transparent hover:border-[#D27DF3]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D27DF3]/20 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-r from-[#D27DF3] to-[#7952ED] rounded-lg">
                  <span className="text-3xl">📸</span>
                </div>
                
                <h3 className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-4`}>
                  Photography
                </h3>
                
                <p className={`${inter.className} text-sm md:text-base font-light text-gray-400 leading-relaxed mb-6`}>
                  Professional photography that tells visual stories. From editorial shoots to brand 
                  campaigns, creating imagery that captures moments and conveys messages effectively.
                </p>

                <ul className={`${Space.className} space-y-2 text-xs md:text-sm text-gray-300`}>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> Editorial Photography
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> Brand Campaigns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D27DF3]">•</span> Creative Portraits
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}