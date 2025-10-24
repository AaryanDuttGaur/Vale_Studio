"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  const heroRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroDividerRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const parallaxBg1 = useRef(null);
  const parallaxBg2 = useRef(null);
  const parallaxBg3 = useRef(null);
  
  const infoCardsRef = useRef([]);
  const formSectionRef = useRef(null);
  const formContainerRef = useRef(null);
  const ctaRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Hero entrance animation
    const heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo(
        heroBadgeRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        heroDividerRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        heroSubtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

    // Parallax backgrounds
    gsap.to(parallaxBg1.current, {
      y: 200,
      x: -100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    gsap.to(parallaxBg2.current, {
      y: -150,
      x: 120,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.3,
      },
    });

    gsap.to(parallaxBg3.current, {
      y: 180,
      scrollTrigger: {
        trigger: formSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.6,
      },
    });

    // Info cards stagger animation
    infoCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Individual parallax
        gsap.to(card, {
          y: -30,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    });

    // Form section animation
    gsap.fromTo(
      formSectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Form container parallax
    gsap.to(formContainerRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: formContainerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
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
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      detail: 'hello@valestudio.com',
      description: 'Drop us a line anytime'
    },
    {
      icon: '📞',
      title: 'Phone',
      detail: '+91 99999 99999',
      description: 'Mon-Fri, 9am-6pm IST'
    },
    {
      icon: '📍',
      title: 'Location',
      detail: 'Delhi, India',
      description: 'Visit our studio'
    }
  ];

  const services = [
    'Motion Design',
    'Visual Design',
    'Art Design',
    'Brand Identity',
    'Interior Design',
    'Other'
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#181717] to-[#0F0F0F] overflow-x-hidden">
      {/* Success Notification */}
      {submitSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-in">
          <div className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-white px-8 py-4 rounded-lg shadow-2xl flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <span className={`${inter.className} font-medium`}>Message sent successfully! We'll be in touch soon.</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-8 md:px-20 py-32 relative overflow-hidden">
        {/* Parallax Backgrounds */}
        <div ref={parallaxBg1} className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-[#D27DF3]/10 to-[#7952ED]/10 rounded-full blur-3xl"></div>
        <div ref={parallaxBg2} className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#7952ED]/10 to-[#D27DF3]/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div ref={heroBadgeRef} className="inline-block mb-6">
            <span className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light`}>
              Get In Touch
            </span>
          </div>

          <h1 ref={heroTitleRef} className={`${Brico.className} text-5xl md:text-7xl font-bold text-white mb-6 leading-tight`}>
            Let's Create Something{' '}
            <span className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>

          <div ref={heroDividerRef} className="w-24 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mx-auto mb-8"></div>

          <p ref={heroSubtitleRef} className={`${inter.className} text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto`}>
            Ready to bring your vision to life? We're here to help you craft 
            amazing digital experiences that resonate with your audience.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-b from-[#0F0F0F] to-[#181717] relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                ref={(el) => (infoCardsRef.current[index] = el)}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D27DF3]/20 to-[#7952ED]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-[#1E1C1C] rounded-2xl p-8 border border-gray-800/50 hover:border-[#D27DF3]/30 transition-all duration-500 h-full">
                  <div className="text-5xl mb-5">{info.icon}</div>
                  <h3 className={`${Brico.className} text-2xl font-bold text-white mb-2`}>
                    {info.title}
                  </h3>
                  <p className={`${inter.className} text-lg text-[#D27DF3] mb-2 font-medium`}>
                    {info.detail}
                  </p>
                  <p className={`${inter.className} text-sm text-gray-400 font-light`}>
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formSectionRef} className="px-8 md:px-20 py-20 bg-gradient-to-b from-[#181717] to-[#0F0F0F] relative overflow-hidden">
        <div ref={parallaxBg3} className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-[#D27DF3]/5 to-[#7952ED]/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className={`${inter.className} text-xs uppercase tracking-[0.3em] text-[#D27DF3] font-light`}>
              Send Us A Message
            </span>
            <h2 className={`${Brico.className} text-4xl md:text-6xl font-bold text-white mt-4 mb-6`}>
              Start Your Project
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] mx-auto"></div>
          </div>

          <div ref={formContainerRef} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D27DF3]/10 to-[#7952ED]/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-[#1E1C1C] rounded-3xl p-8 md:p-12 border border-gray-800/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`${inter.className} text-sm text-gray-300 font-light mb-2 block`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`${inter.className} w-full px-4 py-3 rounded-lg bg-[#1E1C1C] border border-gray-700 text-white text-sm focus:border-[#D27DF3] focus:outline-none transition-all duration-300`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className={`${inter.className} text-sm text-gray-300 font-light mb-2 block`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`${inter.className} w-full px-4 py-3 rounded-lg bg-[#1E1C1C] border border-gray-700 text-white text-sm focus:border-[#D27DF3] focus:outline-none transition-all duration-300`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`${inter.className} text-sm text-gray-300 font-light mb-2 block`}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${inter.className} w-full px-4 py-3 rounded-lg bg-[#1E1C1C] border border-gray-700 text-white text-sm focus:border-[#D27DF3] focus:outline-none transition-all duration-300`}
                      placeholder="+91 99999 99999"
                    />
                  </div>

                  <div>
                    <label className={`${inter.className} text-sm text-gray-300 font-light mb-2 block`}>
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inter.className} w-full px-4 py-3 rounded-lg bg-[#1E1C1C] border border-gray-700 text-white text-sm focus:border-[#D27DF3] focus:outline-none transition-all duration-300`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`${inter.className} text-sm text-gray-300 font-light mb-2 block`}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`${inter.className} w-full px-4 py-3 rounded-lg bg-[#1E1C1C] border border-gray-700 text-white text-sm focus:border-[#D27DF3] focus:outline-none transition-all duration-300 resize-none`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${Space.className} w-full px-8 py-4 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D27DF3]/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group`}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="px-8 md:px-20 py-20 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className={`${Brico.className} text-3xl md:text-5xl font-bold text-white mb-6 leading-tight`}>
            Ready to Transform{' '}
            <span className="text-black">Your Vision?</span>
          </h2>

          <p className={`${inter.className} text-base md:text-lg text-white/90 font-light mb-8 max-w-2xl mx-auto`}>
            Let's collaborate and create something remarkable together. 
            Our team is ready to bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`${Space.className} px-8 py-4 bg-white text-[#7952ED] font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-105`}>
              Schedule a Call
            </button>
            <button className={`${Space.className} px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#7952ED] transition-all duration-300 hover:scale-105`}>
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}