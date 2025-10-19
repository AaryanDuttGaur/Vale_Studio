"use client";
import { Space_Grotesk, Bricolage_Grotesque, Inter } from "next/font/google";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Space = Space_Grotesk({ subsets: ["latin"] });
const Brico = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function(){
    return(
        <>
        <div className="w-full h-[100vh] bg-gradient-to-b from-[#181717] to-[#0F0F0F] z-60 relative -mt-40 ">
                <div className="px-8 md:px-40 py-20 ">
                    <h1 className={`${inter.className} text-sm uppercase tracking-[0.3em] text-[#D27DF3] font-light`}>Why are we unique</h1>
                    <div className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] w-10 h-1 mt-5"></div>
                </div>
                <div className="w-[50%]  px-8 md:px-40  ">
                    <p className={`${inter.className} text-sm uppercase tracking-[0.3em] text-white font-light`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                         Quis eligendi aspernatur quae. Possimus ipsa maiores ducimus earum natus. Iusto ipsa possimus corrupti?</p>
                </div>
        </div>

        <div>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aperiam architecto similique repellat vitae deserunt veritatis impedit officiis eveniet ipsum, incidunt quisquam?
            </h3>
            <img src="/video/v9.jpg" alt="" />
        </div>
        </>
    )
}