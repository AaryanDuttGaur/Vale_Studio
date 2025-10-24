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
  const teamRef = useRef([]);
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

    // Team animation with stagger and parallax
    teamRef.current.forEach((el, index) => {
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

        // Individual parallax for team images
        const img = el.querySelector('img');
        if (img) {
          gsap.to(img, {
            y: -30,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
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
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions that stand out.",
      icon: "✨",
    },
    {
      title: "Excellence",
      description: "Quality is at the heart of everything we do, from concept to execution.",
      icon: "🎯",
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical practices.",
      icon: "🤝",
    },
    {
      title: "Creativity",
      description: "Bold ideas and artistic vision drive our unique approach to design.",
      icon: "🎨",
    },
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "Creative Director",
      image: "/video/v8.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      image: "/video/v9.jpg",
    },
    {
      name: "Marcus Johnson",
      role: "Art Director",
      image: "/video/v10.jpg",
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
              Our Story
            </span>
          </div>
          
          <h1 className={`${Brico.className} text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight`}>
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          
          <div className="hero-divider w-24 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mx-auto mb-8"></div>
          
          <p className={`${inter.className} text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto`}>
            We are a passionate team of designers, developers, and storytellers 
            dedicated to transforming ideas into extraordinary digital experiences.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-[#0F0F0F] to-[#181717] relative">
        <div className="max-w-5xl mx-auto">
          <div ref={storyRef} className="space-y-8">
            <h2 className={`${Brico.className} text-4xl md:text-5xl font-bold text-white mb-4`}>
              Who We Are
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mb-6"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <p className={`${inter.className} text-base md:text-lg text-gray-300 font-light leading-relaxed`}>
                  Founded with a vision to bridge creativity and technology, Vale Studio 
                  has grown into a creative powerhouse that delivers impactful solutions 
                  for brands worldwide.
                </p>
                
                <p className={`${inter.className} text-base text-gray-400 font-light leading-relaxed`}>
                  Our journey began with a simple belief: great design has the power to 
                  inspire, engage, and transform. Today, we continue to push the boundaries 
                  of what's possible in the digital realm.
                </p>
              </div>
              
              <div ref={storyImageRef} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D27DF3]/20 to-[#7952ED]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/video/v8.jpg"
                    alt="Vale Studio workspace"
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
                  <span className="text-3xl">👁️</span>
                </div>
                
                <h3 className={`${Brico.className} text-3xl font-bold text-white mb-4`}>
                  Our Vision
                </h3>
                
                <div className="w-12 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mb-5"></div>
                
                <p className={`${inter.className} text-base text-gray-300 font-light leading-relaxed`}>
                  To be the global leader in creative innovation, setting new standards 
                  for digital excellence and inspiring the next generation of designers 
                  and creators.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div ref={missionRef} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#7952ED]/20 to-[#D27DF3]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-[#1E1C1C] rounded-2xl p-8 border border-gray-800/50 hover:border-[#7952ED]/30 transition-all duration-500">
                <div className="w-14 h-14 bg-gradient-to-r from-[#7952ED] to-[#D27DF3] rounded-lg flex items-center justify-center mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                
                <h3 className={`${Brico.className} text-3xl font-bold text-white mb-4`}>
                  Our Mission
                </h3>
                
                <div className="w-12 h-1 bg-gradient-to-r from-[#7952ED] to-[#D27DF3] mb-5"></div>
                
                <p className={`${inter.className} text-base text-gray-300 font-light leading-relaxed`}>
                  To empower brands through exceptional design and strategic creativity, 
                  delivering solutions that not only meet expectations but exceed them 
                  in every possible way.
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
              What Drives Us
            </span>
            
            <h2 className={`${Brico.className} text-4xl md:text-5xl font-bold text-white mt-4 mb-6`}>
              Our Core Values
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
                  
                  <h4 className={`${Brico.className} text-2xl font-bold text-white mb-3`}>
                    {value.title}
                  </h4>
                  
                  <p className={`${inter.className} text-sm text-gray-400 font-light leading-relaxed`}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-[#181717] to-[#0F0F0F]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light`}>
              Meet The Team
            </span>
            
            <h2 className={`${Brico.className} text-4xl md:text-5xl font-bold text-white mt-4 mb-6`}>
              The Creative Minds
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mx-auto mb-6"></div>
            
            <p className={`${inter.className} text-lg text-gray-300 font-light max-w-2xl mx-auto`}>
              Talented individuals united by a passion for exceptional design and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                ref={(el) => (teamRef.current[index] = el)}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-5">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#D27DF3]/30 to-[#7952ED]/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                </div>
                
                <h4 className={`${Brico.className} text-xl font-bold text-white mb-1`}>
                  {member.name}
                </h4>
                
                <p className={`${inter.className} text-sm text-[#D27DF3] font-light`}>
                  {member.role}
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
          <h2 className={`${Brico.className} text-3xl md:text-5xl font-bold text-white mb-6 leading-tight`}>
            Ready to Start Your{" "}
            <span className="text-black">Journey?</span>
          </h2>
          
          <p className={`${inter.className} text-base md:text-lg text-white/90 font-light mb-8 max-w-xl mx-auto`}>
            Let's collaborate and bring your vision to life with creativity, 
            passion, and expertise.
          </p>
          
          <button className={`${Space.className} px-8 py-4 bg-white text-[#7952ED] font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-105 text-base`}>
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}