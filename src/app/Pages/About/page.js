"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const parallaxBg1 = useRef(null);
  const parallaxBg2 = useRef(null);
  const parallaxBg3 = useRef(null);
  const storyRef = useRef(null);
  const storyImageRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef([]);
  const servicesRef = useRef([]);
  const ctaSectionRef = useRef(null);

  useEffect(() => {
    // Hero animation with stagger
    const heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo(
        heroRef.current.querySelector('.hero-badge'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        heroRef.current.querySelector('h1'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        heroRef.current.querySelector('.hero-divider'),
        { width: 0 },
        { width: "6rem", duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        heroRef.current.querySelector('p'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

    // Parallax effect for background blobs
    gsap.to(parallaxBg1.current, {
      y: 200,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    gsap.to(parallaxBg2.current, {
      y: -150,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    // Story section with parallax
    gsap.fromTo(
      storyRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Story image parallax
    gsap.to(storyImageRef.current, {
      y: -80,
      scrollTrigger: {
        trigger: storyImageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Vision & Mission with scale effect
    gsap.fromTo(
      visionRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      missionRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax for vision/mission section background
    gsap.to(parallaxBg3.current, {
      y: 150,
      scrollTrigger: {
        trigger: parallaxBg3.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Values animation with rotation
    valuesRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Services animation with stagger and parallax
    servicesRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 70, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Individual parallax for service cards
        gsap.to(el, {
          y: -30,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    // CTA section animation
    gsap.fromTo(
      ctaSectionRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const values = [
    {
      title: "Originality",
      description: "Every project is approached with fresh eyes and unique creative solutions that stand out.",
      icon: "✨",
    },
    {
      title: "Quality",
      description: "Meticulous attention to detail ensures every pixel, frame, and element serves a purpose.",
      icon: "🎯",
    },
    {
      title: "Storytelling",
      description: "Visual narratives that connect emotionally and communicate meaningfully with audiences.",
      icon: "📖",
    },
    {
      title: "Innovation",
      description: "Embracing new techniques and technologies to push creative boundaries forward.",
      icon: "🚀",
    },
  ];

  const services = [
    {
      title: "Motion Graphics",
      description: "Dynamic animations and visual effects that bring stories to life with energy and purpose.",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&h=600&fit=crop",
    },
    {
      title: "Brand Visuals",
      description: "Cohesive visual identities that capture brand essence and resonate with target audiences.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    },
    {
      title: "Art Direction",
      description: "Strategic creative direction that ensures visual consistency and impactful communication.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="w-full bg-[#0F0F0F] overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-8 md:px-20 py-24 relative overflow-hidden">
        <div ref={parallaxBg1} className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-[#D27DF3]/10 to-[#7952ED]/10 rounded-full blur-3xl"></div>
        <div ref={parallaxBg2} className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#7952ED]/10 to-[#D27DF3]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="hero-badge inline-block mb-6">
            <span className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light`}>
              About
            </span>
          </div>
          
          <h1 className={`${Brico.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight`}>
            Crafting Visual{" "}
            <span className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          
          <div className="hero-divider w-24 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mx-auto mb-8"></div>
          
          <p className={`${inter.className} text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto`}>
            A freelance visual designer and art director specializing in motion graphics, 
            photography, and brand visuals. Creating impactful work that connects and inspires.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-[#0F0F0F] to-[#181717] relative">
        <div className="max-w-5xl mx-auto">
          <div ref={storyRef} className="space-y-8">
            <h2 className={`${Brico.className} text-3xl md:text-4xl font-bold text-white mb-4`}>
              About Adrian
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mb-6"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <p className={`${inter.className} text-sm md:text-base text-gray-300 font-light leading-relaxed`}>
                  Adrian Vale is a visual designer and art director based in London, UK, 
                  specializing in motion graphics, photography, and brand visuals. With a 
                  passion for storytelling through design, Adrian creates work that captures 
                  attention and leaves a lasting impression.
                </p>
                
                <p className={`${inter.className} text-sm text-gray-400 font-light leading-relaxed`}>
                  Working with creative agencies, production studios, and brands across Europe, 
                  Adrian brings a unique blend of artistic vision and technical expertise to every 
                  project. Each piece of work is crafted with intention, quality, and a commitment 
                  to originality.
                </p>
              </div>
              
              <div ref={storyImageRef} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D27DF3]/20 to-[#7952ED]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                    alt="Adrian Vale at work"
                    className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-[#181717] to-[#0F0F0F] relative overflow-hidden">
        <div ref={parallaxBg3} className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-[#D27DF3]/5 to-[#7952ED]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div ref={visionRef} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D27DF3]/20 to-[#7952ED]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-[#1E1C1C] rounded-2xl p-8 border border-gray-800/50 hover:border-[#D27DF3]/30 transition-all duration-500">
                <div className="w-14 h-14 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] rounded-lg flex items-center justify-center mb-6">
                  <span className="text-3xl">💡</span>
                </div>
                
                <h3 className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-4`}>
                  Creative Vision
                </h3>
                
                <div className="w-12 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mb-5"></div>
                
                <p className={`${inter.className} text-sm md:text-base text-gray-300 font-light leading-relaxed`}>
                  To create visual work that doesn't just look good, but tells meaningful 
                  stories and creates emotional connections. Every project is an opportunity 
                  to push creative boundaries and deliver something truly unique.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div ref={missionRef} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#7952ED]/20 to-[#D27DF3]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-[#1E1C1C] rounded-2xl p-8 border border-gray-800/50 hover:border-[#7952ED]/30 transition-all duration-500">
                <div className="w-14 h-14 bg-gradient-to-r from-[#7952ED] to-[#D27DF3] rounded-lg flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                
                <h3 className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-4`}>
                  The Approach
                </h3>
                
                <div className="w-12 h-1 bg-gradient-to-r from-[#7952ED] to-[#D27DF3] mb-5"></div>
                
                <p className={`${inter.className} text-sm md:text-base text-gray-300 font-light leading-relaxed`}>
                  Combining artistic quality with strategic thinking. Each project starts with 
                  understanding the story that needs to be told, then crafting visuals that 
                  communicate it powerfully and authentically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-[#0F0F0F] to-[#181717] relative">
        <div className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-br from-[#D27DF3]/5 to-[#7952ED]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light`}>
              Core Principles
            </span>
            
            <h2 className={`${Brico.className} text-3xl md:text-4xl font-bold text-white mt-4 mb-6`}>
              What Drives The Work
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                ref={(el) => (valuesRef.current[index] = el)}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D27DF3]/20 to-[#7952ED]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-[#1E1C1C] rounded-xl p-7 border border-gray-800/50 hover:border-[#D27DF3]/30 transition-all duration-500 h-full">
                  <div className="text-4xl mb-5">{value.icon}</div>
                  
                  <h4 className={`${Brico.className} text-xl md:text-2xl font-bold text-white mb-3`}>
                    {value.title}
                  </h4>
                  
                  <p className={`${inter.className} text-xs md:text-sm text-gray-400 font-light leading-relaxed`}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-[#181717] to-[#0F0F0F]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light`}>
              What I Do
            </span>
            
            <h2 className={`${Brico.className} text-3xl md:text-4xl font-bold text-white mt-4 mb-6`}>
              Creative Services
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mx-auto mb-6"></div>
            
            <p className={`${inter.className} text-sm md:text-base text-gray-300 font-light max-w-2xl mx-auto`}>
              Specialized expertise in motion design, brand visuals, and art direction for 
              agencies, studios, and forward-thinking brands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (servicesRef.current[index] = el)}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-5">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#D27DF3]/30 to-[#7952ED]/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                </div>
                
                <h4 className={`${Brico.className} text-lg md:text-xl font-bold text-white mb-2`}>
                  {service.title}
                </h4>
                
                <p className={`${inter.className} text-xs md:text-sm text-gray-400 font-light leading-relaxed`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSectionRef} className="px-8 md:px-20 py-20 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className={`${Brico.className} text-3xl md:text-4xl font-bold text-white mb-6 leading-tight`}>
            Let's Create{" "}
            <span className="text-black">Together</span>
          </h2>
          
          <p className={`${inter.className} text-sm md:text-base text-white/90 font-light mb-8 max-w-xl mx-auto`}>
            Ready to bring your visual story to life? Get in touch to discuss your 
            next project and explore creative possibilities.
          </p>
          
          <button className={`${Space.className} px-8 py-4 bg-white text-[#7952ED] font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-105 text-sm`}>
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}