"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaInstagram, FaVimeo, FaLinkedin, FaBehance } from "react-icons/fa";

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const Box1 = useRef(null);
  const Box2 = useRef(null);
  const Box3 = useRef(null);

  useEffect(() => {
    [Box1, Box2, Box3].forEach((box) => {
      if (!box.current) return;
      gsap.fromTo(
        box.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="Outerdiv bg-gradient-to-b from-[#181717] to-[#0F0F0F] relative z-60">
        <div
          ref={Box1}
          className="Maindiv flex flex-col justify-center items-center text-white w-full p-8 gap-10"
        >
          <div
            ref={Box2}
            className="InnerTopDiv flex flex-col md:flex-row justify-between w-full text-center md:text-left items-center gap-4"
          >
            <h1 className={`${Brico.className} text-2xl md:text-3xl`}>
              Vale Studio
            </h1>
            <h5
              className={`${inter.className} text-transparent bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-xs md:text-sm font-light`}
            >
              Motion graphics, brand visuals & art direction by Adrian Vale
            </h5>
          </div>

          {/* Bottom Section */}
          <div
            ref={Box3}
            className="Innerbottomdiv flex flex-col md:flex-row justify-between w-full gap-10 "
          >
            {/* Quick Links */}
            <div className="flex flex-col gap-6">
              <h1
                className={`${inter.className} text-transparent bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-base`}
              >
                Quick Links
              </h1>
              <ul className="flex flex-col gap-2 text-xs">
                <li>
                  <Link href="/" className="hover:text-[#D27DF3] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#D27DF3] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[#D27DF3] transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#D27DF3] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#D27DF3] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 justify-evenly">
              <h1
                className={`${inter.className} text-transparent bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-base`}
              >
                Contact Info
              </h1>
              <div className="flex flex-col gap-3 text-xs">
                <div>
                  <h5
                    className={`${Space.className} text-transparent bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text font-medium text-xs`}
                  >
                    Email:
                  </h5>
                  <p className="text-gray-400">contact@valestudio.co</p>
                </div>
                <div>
                  <h5
                    className={`${Space.className} text-transparent bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text font-medium text-xs`}
                  >
                    Phone:
                  </h5>
                  <p className="text-gray-400">+44 7312 659 204</p>
                </div>
                <div>
                  <h5
                    className={`${Space.className} text-transparent bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text font-medium text-xs`}
                  >
                    Location:
                  </h5>
                  <p className="text-gray-400">London, United Kingdom</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-6">
              <h1
                className={`${inter.className} text-transparent bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-base`}
              >
                Services
              </h1>
              <ul className="flex flex-col gap-2 text-xs text-gray-400">
                <li>Motion Graphics</li>
                <li>Brand Visuals</li>
                <li>Art Direction</li>
                <li>Photography</li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-6">
              <h1
                className={`${inter.className} text-transparent bg-gradient-to-r from-[#D27DF3] to-[#7952ED] bg-clip-text text-base`}
              >
                Follow
              </h1>
              <div className="flex gap-4 justify-evenly items-center text-xl">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:text-[#D27DF3] hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://vimeo.com"
                  target="_blank"
                  className="hover:text-[#D27DF3] hover:scale-110 transition-transform"
                  aria-label="Vimeo"
                >
                  <FaVimeo />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:text-[#D27DF3] hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://behance.net"
                  target="_blank"
                  className="hover:text-[#D27DF3] hover:scale-110 transition-transform"
                  aria-label="Behance"
                >
                  <FaBehance />
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="w-full border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Vale Studio. All rights reserved. | Designed & Developed with passion in London
          </div>
        </div>
      </div>
    </>
  );
}