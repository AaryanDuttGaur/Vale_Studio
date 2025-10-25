"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Portfolio() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);

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

    // Animate Projects with stagger
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
    ];
    
    gsap.fromTo(
      projects,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
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
      className="portfolio text-white min-h-screen px-8 md:px-20 py-28 relative z-30 bg-gradient-to-r from-[#D27DF3] to-[#7952ED]"
    >
      {/* Subtle decorative element */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="mb-20">
          <div className="inline-block mb-6">
            <span className={`${inter.className} text-sm uppercase tracking-[0.3em] text-white/90 font-light`}>
              Selected Work
            </span>
          </div>

          <h1 className={`${Brico.className} text-5xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg`}>
            Featured Projects
          </h1>

          <div className="w-20 h-1 bg-white mb-8"></div>

          <p className={`${inter.className} text-base md:text-lg font-light text-white/90 leading-relaxed max-w-2xl mb-8`}>
            A showcase of motion design, brand visuals, and art direction work 
            created for agencies, studios, and brands across Europe.
          </p>

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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Project 1 */}
          <div ref={project1Ref} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&h=800&fit=crop"
                alt="Motion Graphics Reel"
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 group-hover:opacity-70"></div>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-0">
                <h3 className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-2`}>
                  Motion Graphics Reel
                </h3>
                <p className={`${inter.className} text-sm font-light text-gray-200 tracking-wide`}>
                  Motion Design • 2024
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div ref={project2Ref} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=800&fit=crop"
                alt="Brand Identity Design"
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 group-hover:opacity-70"></div>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-0">
                <h3 className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-2`}>
                  Brand Identity Design
                </h3>
                <p className={`${inter.className} text-sm font-light text-gray-200 tracking-wide`}>
                  Branding • 2024
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div ref={project3Ref} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=800&fit=crop"
                alt="Fashion Photography"
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 group-hover:opacity-70"></div>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-0">
                <h3 className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-2`}>
                  Fashion Editorial
                </h3>
                <p className={`${inter.className} text-sm font-light text-gray-200 tracking-wide`}>
                  Photography • 2024
                </p>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div ref={project4Ref} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=800&fit=crop"
                alt="Product Launch Campaign"
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 group-hover:opacity-70"></div>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-0">
                <h3 className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-2`}>
                  Product Launch Campaign
                </h3>
                <p className={`${inter.className} text-sm font-light text-gray-200 tracking-wide`}>
                  Art Direction • 2023
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}