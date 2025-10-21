"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Testimonial() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechVision Inc.",
      image: "/video/v8.jpg",
      quote:
        "Working with Vale Studio transformed our brand identity completely. Their attention to detail and creative vision exceeded all our expectations. The team's professionalism and dedication made the entire process seamless.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director, DesignHub",
      image: "/video/v9.jpg",
      quote:
        "The level of creativity and innovation they bring to every project is unmatched. Vale Studio doesn't just deliver designs, they deliver experiences that resonate with audiences and drive real results.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Founder, Bloom Interiors",
      image: "/video/v10.jpg",
      quote:
        "From concept to execution, Vale Studio demonstrated exceptional skill and artistry. They truly understood our vision and brought it to life in ways we couldn't have imagined. Highly recommend their services!",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Marketing Head, StartupX",
      image: "/video/v8.jpg",
      quote:
        "Their collaborative approach and ability to translate ideas into stunning visuals is remarkable. Vale Studio has become an invaluable partner in our brand journey. Absolutely fantastic work!",
      rating: 5,
    },
  ];

  useEffect(() => {
    // Animate header
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -40 },
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

    // Animate testimonial cards
    cardsRef.current.forEach((card, index) => {
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
            },
          }
        );

        // Parallax effect
        gsap.to(card, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-b from-[#181717] via-[#0F0F0F] to-[#181717] relative overflow-hidden py-20 md:py-32 z-60 -mt-40"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#D27DF3]/5 to-[#7952ED]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#7952ED]/5 to-[#D27DF3]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-20">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20">
          <h2
            className={`${inter.className} text-sm uppercase tracking-[0.3em] text-[#D27DF3] font-light mb-6`}
          >
            Client Stories
          </h2>
          <div className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] w-20 h-1 mx-auto mb-8"></div>
          <h1
            className={`${Brico.className} text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight`}
          >
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-transparent">
              Say
            </span>
          </h1>
          <p
            className={`${inter.className} text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto`}
          >
            Don't just take our word for it. Here's what our valued clients have
            to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D27DF3]/20 to-[#7952ED]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Card */}
              <div className="relative bg-[#1E1C1C] rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-800/50 hover:border-[#D27DF3]/30 transition-all duration-500 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-[#D27DF3]/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03s-.279.142-.692.326c-.296.103-.64.25-1.046.413-.406.178-.821.404-1.238.64-.51.285-1.011.608-1.502.962-.477.366-.949.753-1.382 1.19-.439.428-.858.895-1.217 1.415-.344.524-.626 1.084-.834 1.665-.208.589-.34 1.197-.408 1.812-.071.635-.107 1.278-.107 1.928v4.717H6.5v-7.34c0-.223.034-.437.065-.65zM17 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197l-.485-2.005s-.279.142-.692.326c-.296.103-.64.25-1.046.413-.406.178-.821.404-1.238.64-.51.285-1.011.608-1.502.962-.477.366-.949.753-1.382 1.19-.439.428-.858.895-1.217 1.415-.344.524-.626 1.084-.834 1.665-.208.589-.34 1.197-.408 1.812-.071.635-.107 1.278-.107 1.928v4.717H17v-7.34c0-.223.034-.437.065-.65z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p
                  className={`${inter.className} text-gray-300 text-base md:text-lg leading-relaxed mb-8 flex-grow`}
                >
                  {testimonial.quote}
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#D27DF3]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-800/50">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#D27DF3]/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4
                      className={`${Space.className} text-white font-medium text-lg`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className={`${inter.className} text-gray-400 text-sm font-light`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D27DF3]/10 to-transparent rounded-bl-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p
            className={`${inter.className} text-gray-400 text-lg mb-8 font-light`}
          >
            Ready to create your success story?
          </p>
          <button
            className={`${Space.className} px-8 py-4 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-white font-medium rounded-lg hover:shadow-xl hover:shadow-[#D27DF3]/20 transition-all duration-300 hover:scale-105`}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}