"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger)

export default function Cta() {
    const boxref1 = useRef(null)

    useEffect(() => {
        gsap.fromTo(boxref1.current, {
            opacity: 0,
            y: -10,
        }, {
            opacity: 1,
            y: 0,
            duration:2,
            ease:"power2.out",
            scrollTrigger:{
                trigger:boxref1.current,
                start:'top 80%',
                toggleActions:"play none none none "
            }
        });
    }, [])



    return (
        <>
        <div className="bg-gradient-to-b from-[#181717] to-[#0F0F0F] relative z-60 -mt-20">
            <div className="mainbox h-[50vh] p-10 m-10  bg-gradient-to-r from-[#D27DF3] to-[#7952ED] flex justify-center items-center rounded-2xl ">
                <div ref={boxref1} className="innerbox flex flex-col justify-stretch gap-5">
                    <div className="Headings">
                        <h1 className={`${Space.className} text-white text-2xl md:text-4xl font-bold leading-tight drop-shadow-lg mt-2`}>Lets bring Your ideas to <span className="text-black text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg"> Life </span></h1>
                        <div className="w-20 h-1 bg-white mb-8"></div>
                    </div>
                    <div className={`${inter.className} text-white  text-[10px] md:text-[20px] font-extralight leading-tight drop-shadow-lg`}>Ready to turn your vision into reality? Whether it’s a website, app, or a full digital experience, I’m here to help you craft something amazing.
                        <br />
                        <br />
                        <span className="text-black">
                            Get in touch today and let’s start building your project together.
                        </span>
                    </div>
                    <div>
                        <button className={`${Space.className} px-8 py-4 bg-white text-[#7952ED] font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-10 mb-5`}>
                            know more
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}