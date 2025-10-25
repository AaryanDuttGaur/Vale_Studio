"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function PortfolioPage() {
  const heroRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef([]);
  const featuredRef = useRef(null);
  const statsRef = useRef([]);
  const ctaRef = useRef(null);
  const parallaxBg1 = useRef(null);
  const parallaxBg2 = useRef(null);
  const parallaxBg3 = useRef(null);
  const parallaxBg4 = useRef(null);
  const floatingElementsRef = useRef([]);

  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Hero entrance animation
    const heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo(
        heroRef.current.querySelector('.hero-badge'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        heroRef.current.querySelector('h1'),
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        heroRef.current.querySelector('.hero-divider'),
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        heroRef.current.querySelector('p'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

    // Multi-directional parallax for hero backgrounds
    gsap.to(parallaxBg1.current, {
      y: 250,
      x: -120,
      rotation: 60,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    gsap.to(parallaxBg2.current, {
      y: -180,
      x: 140,
      rotation: -45,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.3,
      },
    });

    // Floating elements parallax
    floatingElementsRef.current.forEach((el, index) => {
      if (el) {
        const direction = index % 2 === 0 ? 1 : -1;
        const distance = 40 + (index * 10);
        gsap.to(el, {
          y: direction * distance,
          x: -direction * (distance * 0.6),
          rotation: direction * 15,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 2 + index * 0.2,
          },
        });
      }
    });

    // Filter section animation
    gsap.fromTo(
      filterRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: filterRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Projects grid animations with multi-directional parallax
    projectsRef.current.forEach((el, index) => {
      if (el) {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const xOffset = col === 0 ? -40 : col === 2 ? 40 : 0;
        const yOffset = 60;

        gsap.fromTo(
          el,
          { opacity: 0, y: yOffset, x: xOffset, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: (index % 3) * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Individual parallax on scroll
        const yMove = col === 1 ? -60 : -40;
        const xMove = col === 0 ? 25 : col === 2 ? -25 : 0;
        
        gsap.to(el, {
          y: yMove,
          x: xMove,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });

        // Image parallax with scale
        const img = el.querySelector('img');
        if (img) {
          gsap.to(img, {
            y: -50,
            scale: 1.15,
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

    // Featured project parallax
    if (featuredRef.current) {
      gsap.fromTo(
        featuredRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Featured image parallax
      const featuredImg = featuredRef.current.querySelector('.featured-image');
      if (featuredImg) {
        gsap.to(featuredImg, {
          y: -60,
          x: 30,
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      const featuredContent = featuredRef.current.querySelector('.featured-content');
      if (featuredContent) {
        gsap.to(featuredContent, {
          y: -40,
          x: -20,
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }

    // Background blobs parallax
    gsap.to(parallaxBg3.current, {
      y: 180,
      x: -100,
      rotation: 35,
      scrollTrigger: {
        trigger: parallaxBg3.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.6,
      },
    });

    gsap.to(parallaxBg4.current, {
      y: -150,
      x: 120,
      rotation: -40,
      scrollTrigger: {
        trigger: parallaxBg4.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.7,
      },
    });

    // Stats animation
    statsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Stats parallax
        const direction = index % 2 === 0 ? 1 : -1;
        gsap.to(el, {
          y: direction * -30,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    });

    // CTA animation
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const ctaBlob = ctaRef.current?.querySelector('.cta-blob');
    if (ctaBlob) {
      gsap.to(ctaBlob, {
        x: 120,
        y: -60,
        rotation: 40,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }
  }, []);

  const filters = ["all", "motion", "branding", "photography"];

  const projects = [
    {
      id: 1,
      title: "Brand Motion Reel",
      category: "motion",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&h=800&fit=crop",
      tags: ["Motion Design", "Animation"],
      year: "2024",
    },
    {
      id: 2,
      title: "Tech Startup Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=800&fit=crop",
      tags: ["Branding", "Visual Identity"],
      year: "2024",
    },
    {
      id: 3,
      title: "Fashion Editorial",
      category: "photography",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=800&fit=crop",
      tags: ["Photography", "Art Direction"],
      year: "2024",
    },
    {
      id: 4,
      title: "Product Launch Video",
      category: "motion",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=800&fit=crop",
      tags: ["Motion Graphics", "Video"],
      year: "2023",
    },
    {
      id: 5,
      title: "Coffee Brand Rebrand",
      category: "branding",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=800&fit=crop",
      tags: ["Branding", "Packaging"],
      year: "2023",
    },
    {
      id: 6,
      title: "Architecture Series",
      category: "photography",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=800&fit=crop",
      tags: ["Photography", "Visual Art"],
      year: "2024",
    },
  ];

  const stats = [
    { number: "80+", label: "Projects Delivered" },
    { number: "35+", label: "Happy Clients" },
    { number: "6+", label: "Years Experience" },
    { number: "4", label: "Countries Served" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="w-full bg-[#0F0F0F] overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-8 md:px-20 py-24 relative overflow-hidden">
        <div ref={parallaxBg1} className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#D27DF3]/10 to-[#7952ED]/10 rounded-full blur-3xl"></div>
        <div ref={parallaxBg2} className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#7952ED]/10 to-[#D27DF3]/10 rounded-full blur-3xl"></div>
        
        {/* Floating decorative elements */}
        <div ref={(el) => (floatingElementsRef.current[0] = el)} className="absolute top-1/4 left-20 w-4 h-4 bg-[#D27DF3] rounded-full opacity-40"></div>
        <div ref={(el) => (floatingElementsRef.current[1] = el)} className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#7952ED] rounded-full opacity-30"></div>
        <div ref={(el) => (floatingElementsRef.current[2] = el)} className="absolute bottom-1/3 left-1/3 w-20 h-20 border-2 border-[#D27DF3]/20 rounded-lg rotate-12"></div>
        <div ref={(el) => (floatingElementsRef.current[3] = el)} className="absolute bottom-1/4 right-20 w-16 h-16 border-2 border-[#7952ED]/20 rounded-full"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="hero-badge inline-block mb-6">
            <span className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light`}>
              Selected Work
            </span>
          </div>
          
          <h1 className={`${Brico.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight`}>
            Creative{" "}
            <span className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          
          <div className="hero-divider w-24 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mx-auto mb-8 origin-center"></div>
          
          <p className={`${inter.className} text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto`}>
            A curated collection of motion design, brand visuals, and photography work 
            that tells stories and creates meaningful connections.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section ref={filterRef} className="px-8 md:px-20 py-12 bg-gradient-to-b from-[#0F0F0F] to-[#181717] sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`${Space.className} px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-white shadow-lg shadow-[#D27DF3]/30"
                    : "bg-[#1E1C1C] text-gray-400 hover:text-white hover:bg-[#252323]"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-[#181717] to-[#0F0F0F] relative overflow-hidden">
        {/* Floating geometric shapes */}
        <div ref={(el) => (floatingElementsRef.current[4] = el)} className="absolute top-40 right-1/4 w-24 h-24 border-2 border-[#D27DF3]/10 rounded-lg rotate-45"></div>
        <div ref={(el) => (floatingElementsRef.current[5] = el)} className="absolute bottom-60 left-20 w-32 h-32 border-2 border-[#7952ED]/10 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectsRef.current[index] = el)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-5">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#D27DF3]/30 to-[#7952ED]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[380px] object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                    
                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex gap-2 mb-3">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`${inter.className} text-xs px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className={`${Brico.className} text-xl md:text-2xl font-bold text-white mb-2`}>
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <span className={`${inter.className} text-sm text-gray-400`}>
                          {project.year}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D27DF3] to-[#7952ED] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                          <span className="text-white text-lg">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-[#0F0F0F] to-[#181717] relative overflow-hidden">
        <div ref={parallaxBg3} className="absolute top-40 left-10 w-96 h-96 bg-gradient-to-br from-[#D27DF3]/5 to-[#7952ED]/5 rounded-full blur-3xl"></div>
        <div ref={parallaxBg4} className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#7952ED]/5 to-[#D27DF3]/5 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <div ref={(el) => (floatingElementsRef.current[6] = el)} className="absolute top-1/3 left-1/4 w-28 h-28 border-2 border-[#D27DF3]/10 rounded-lg rotate-12"></div>
        <div ref={(el) => (floatingElementsRef.current[7] = el)} className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-[#7952ED]/30 rounded-full"></div>
        
        <div ref={featuredRef} className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light`}>
              Featured Project
            </span>
            <h2 className={`${Brico.className} text-3xl md:text-4xl font-bold text-white mt-4`}>
              Spotlight Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="featured-image relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D27DF3]/20 to-[#7952ED]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=1000&fit=crop"
                  alt="Featured Project"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="featured-content space-y-6">
              <div className="flex gap-3">
                <span className={`${inter.className} text-xs px-4 py-2 bg-[#D27DF3]/20 rounded-full text-[#D27DF3] font-medium`}>
                  Motion Design
                </span>
                <span className={`${inter.className} text-xs px-4 py-2 bg-[#7952ED]/20 rounded-full text-[#7952ED] font-medium`}>
                  Branding
                </span>
              </div>

              <h3 className={`${Brico.className} text-2xl md:text-3xl font-bold text-white`}>
                Creative Agency Showreel
              </h3>

              <div className="w-16 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED]"></div>

              <p className={`${inter.className} text-sm md:text-base text-gray-300 font-light leading-relaxed`}>
                A dynamic motion graphics showreel created for a London-based creative agency. 
                The project involved conceptualizing and executing a visually striking narrative 
                that showcases the agency's diverse capabilities while maintaining a cohesive 
                visual language throughout.
              </p>

              <div className="flex gap-6 pt-4">
                <div>
                  <div className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-1`}>
                    2:30
                  </div>
                  <div className={`${inter.className} text-xs md:text-sm text-gray-400`}>
                    Duration
                  </div>
                </div>
                <div>
                  <div className={`${Brico.className} text-2xl md:text-3xl font-bold text-white mb-1`}>
                    4 weeks
                  </div>
                  <div className={`${inter.className} text-xs md:text-sm text-gray-400`}>
                    Timeline
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-[#181717] to-[#0F0F0F] relative overflow-hidden">
        {/* Floating elements */}
        <div ref={(el) => (floatingElementsRef.current[8] = el)} className="absolute top-20 right-1/4 w-20 h-20 border-2 border-[#D27DF3]/10 rounded-full"></div>
        <div ref={(el) => (floatingElementsRef.current[9] = el)} className="absolute bottom-40 left-1/3 w-24 h-24 border-2 border-[#7952ED]/10 rounded-lg rotate-45"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="text-center group"
              >
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D27DF3]/20 to-[#7952ED]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className={`${Brico.className} relative text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                </div>
                <div className={`${inter.className} text-xs md:text-sm text-gray-400 font-light`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="px-8 md:px-20 py-20 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] relative overflow-hidden">
        <div className="cta-blob absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div ref={(el) => (floatingElementsRef.current[10] = el)} className="absolute bottom-20 left-20 w-40 h-40 border-2 border-white/20 rounded-lg rotate-12"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className={`${Brico.className} text-3xl md:text-4xl font-bold text-white mb-6 leading-tight`}>
            Like What You See?{" "}
            <span className="text-black">Let's Collaborate</span>
          </h2>
          
          <p className={`${inter.className} text-sm md:text-base text-white/90 font-light mb-8 max-w-2xl mx-auto`}>
            I'm always excited to work on new creative projects. Whether it's motion design, 
            brand visuals, or art direction, let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`${Space.className} px-8 py-4 bg-white text-[#7952ED] font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-105 text-sm`}>
              Get In Touch
            </button>
            <button className={`${Space.className} px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#7952ED] transition-all duration-300 hover:scale-105 text-sm`}>
              Download Showreel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}