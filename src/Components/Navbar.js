'use client';
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Space_Grotesk, Bricolage_Grotesque } from "next/font/google";

const Space = Space_Grotesk({ subsets: ['latin'] });
const Brico = Bricolage_Grotesque({ subsets: ['latin'] });

export default function Navbar() {
  const [status, setStatus] = useState(false);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const navtoggle = useRef(null);

  // Toggle open/close
  const toggle = () => setStatus((prev) => !prev);

  // Make sure menu starts hidden
  useEffect(() => {
    if (navtoggle.current) gsap.set(navtoggle.current, { height: 0 });
  }, []);

  useEffect(() => {
    if (!navtoggle.current) return;

    const fullHeight = navtoggle.current.scrollHeight;
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    if (status) {
      // OPEN MENU
      tl.to(boxRef2.current, { opacity: 0, duration: 0.2 }, 0)
        .to(boxRef1.current, { rotate: 45, y: 5, duration: 0.3 }, 0)
        .to(boxRef3.current, { rotate: -45, y: -5, duration: 0.3 }, 0)
        .to(
          navtoggle.current,
          { height: fullHeight, duration: 0.6 },
          0.1 // small delay so bars move first
        );
    } else {
      // CLOSE MENU
      tl.to(boxRef2.current, { opacity: 1, duration: 0.2 }, 0)
        .to(boxRef1.current, { rotate: 0, y: 0, duration: 0.3 }, 0)
        .to(boxRef3.current, { rotate: 0, y: 0, duration: 0.3 }, 0)
        .to(
          navtoggle.current,
          { height: 0, duration: 0.6 },
          0
        );
    }
  }, [status]);

  return (
    <>
      {/* HEADER */}
      <header className="flex w-full justify-between h-20 items-center p-3 relative ">
        <div
          className={`${Brico.className} font-semibold text-[1.8rem] text-white`}
        >
          Vale Studio
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex bg-[#1E1C1C] p-2">
          <ul className="flex gap-10">
            <li className={`${Space.className} p-2  cursor-pointer text-white hover:bg-gradient-to-r from-[#D27DF3] to-[#7952ED] hover:text-black transition-all`}>
              Home
            </li>
            <li className={`${Space.className} p-2 hover:bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-white hover:text-black transition-all cursor-pointer`}>
              About
            </li>
            <li className={`${Space.className} p-2 hover:bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-white hover:text-black transition-all cursor-pointer`}>
              Portfolio
            </li>
            <li
              className={`${Space.className} p-2 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-[#39322D]  hover:bg-[#7952ED] hover:text-white cursor-pointer`}
            >
              Contact
            </li>
          </ul>
        </nav>

        {/* HAMBURGER MENU (MOBILE) */}
        <div
          className="md:hidden flex flex-col justify-between w-10 h-7  bg-[#1E1C1C] p-2 rounded-[3px] cursor-pointer shadow-sm"
          onClick={toggle}
        >
          <span ref={boxRef1} className="block h-0.5 bg-white rounded"></span>
          <span ref={boxRef2} className="block h-0.5 bg-white rounded"></span>
          <span ref={boxRef3} className="block h-0.5 bg-white rounded"></span>
        </div>
      </header>

      {/* MOBILE DROPDOWN MENU */}
      <nav
        ref={navtoggle}
        className="absolute top-20 w-full bg-[#1E1C1C] overflow-hidden md:hidden z-40 shadow-md"
        style={{ height: 0 }}
      >
        <ul className="flex flex-col items-center gap-10 py-6">
          <li
            className={`${Space.className} font-medium p-2 w-full text-white text-center hover:bg-gradient-to-r from-[#D27DF3] to-[#7952ED] hover:text-black transition-all cursor-pointer`}
          >
            Home
          </li>
          <li
            className={`${Space.className} font-medium p-2 w-full text-white text-center hover:bg-gradient-to-r from-[#D27DF3] to-[#7952ED] hover:text-black transition-all cursor-pointer`}
          >
            About
          </li>
          <li
            className={`${Space.className} font-medium p-2 w-full text-white text-center hover:bg-gradient-to-r from-[#D27DF3] to-[#7952ED] hover:text-black transition-all cursor-pointer`}
          >
            Portfolio
          </li>
          <li
            className={`${Space.className} p-2 bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-white w-full text-center  hover:text-black font-medium transition-all cursor-pointer`}
          >
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
}
