"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const sectionRef = useRef(null);
  const aboutTextRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const track = useRef(null);

  useEffect(() => {
    // Parallax Banner Effect with cloning
    const trackEl = track.current;
    if (trackEl) {
      // Clone items for infinite scroll
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
    }
  }, []);

  useEffect(() => {
    // Animate About Text
    gsap.fromTo(
      aboutTextRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutTextRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate Images with stagger
    const images = [image1Ref.current, image2Ref.current, image3Ref.current];
    gsap.fromTo(
      images,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutTextRef.current,
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      {/* Sliding Banner */}
      <div className="relative z-30 overflow-hidden bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-white">
        <div
          ref={track}
          suppressHydrationWarning
          className={`${Space.className} flex whitespace-nowrap gap-40 py-8 text-[1.2rem] md:text-[2.6rem] font-medium`}
        >
          <div className="banner-item">Motion Design</div>
          <div className="banner-item">Visual Design</div>
          <div className="banner-item">Art Design</div>
        </div>
      </div>

      {/* About Section */}
      <section 
        ref={sectionRef}
        className="about_us text-white min-h-screen px-8 md:px-20 py-28 relative z-20 bg-gradient-to-b from-[#181717] to-[#0F0F0F]"
      >
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#D27DF3]/10 to-[#7952ED]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            <div ref={aboutTextRef} className="space-y-8 md:sticky md:top-32">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className={`${inter.className} text-sm uppercase tracking-[0.3em] text-[#D27DF3] font-light`}>
                    Who We Are
                  </span>
                </div>
                
                <h1 className={`${Brico.className} text-6xl md:text-7xl font-bold leading-tight`}>
                  About Us
                </h1>
                
                <div className="w-20 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED]"></div>
                
                <p className={`${inter.className} text-lg md:text-xl font-light text-gray-300 leading-relaxed max-w-lg`}>
                  At Estancia, we shape timeless spaces where furniture, form, and
                  interiors flow together in perfect harmony.
                </p>
                
                <p className={`${inter.className} text-base font-light text-gray-400 leading-relaxed max-w-lg`}>
                  Our design philosophy blends contemporary aesthetics with functional elegance, 
                  creating environments that inspire and endure.
                </p>
              </div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="grid grid-cols-1 gap-12">
              
              {/* Image 1 */}
              <div ref={image1Ref} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/video/v8.jpg"
                    alt="Designer at work"
                    className="object-cover w-full h-[320px] transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-30"></div>
                  
                  {/* Stat Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-2">
                    <h3 className={`${Brico.className} text-5xl font-bold text-white mb-1`}>
                      20<span className="text-[#D27DF3]">+</span>
                    </h3>
                    <p className={`${inter.className} text-sm font-light text-gray-200 tracking-wide uppercase`}>
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div ref={image2Ref} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/video/v9.jpg"
                    alt="Design workspace"
                    className="object-cover w-full h-[320px] transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-30"></div>
                  
                  {/* Stat Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-2">
                    <h3 className={`${Brico.className} text-5xl font-bold text-white mb-1`}>
                      50<span className="text-[#D27DF3]">+</span>
                    </h3>
                    <p className={`${inter.className} text-sm font-light text-gray-200 tracking-wide uppercase`}>
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 3 */}
              <div ref={image3Ref} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/video/v10.jpg"
                    alt="Creative process"
                    className="object-cover w-full h-[320px] transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-30"></div>
                  
                  {/* Stat Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-2">
                    <h3 className={`${Brico.className} text-5xl font-bold text-white mb-1`}>
                      5<span className="text-[#D27DF3]">+</span>
                    </h3>
                    <p className={`${inter.className} text-sm font-light text-gray-200 tracking-wide uppercase`}>
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}