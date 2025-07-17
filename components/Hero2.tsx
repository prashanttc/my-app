"use client";
import React, { useRef } from "react";
import RotatingText from "./RotatingText/RotatingText";
import { ArrowUpRight } from "lucide-react";
import { boxes } from "@/constant/index";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Orb from "./Orb/Orb";
import { ShootingStars } from "./ui/shooting-stars";
gsap.registerPlugin(ScrollTrigger);
const Hero2 = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 70%", 
      toggleActions: "play none none none", 
    },
  });

  tl.from(".text", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2, 
  });

  tl.from(".box-card", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15, 
    clearProps: "all", 
  },"-=1");
}, []);

  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "bottom 80%",
        toggleActions: "play reverse play reverse",
      },
    });
      tl.fromTo(
        ".text-stagger",
        { opacity: 0, y: +100 },
        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)", stagger: 0.1 }
      );
     tl.fromTo(".seprator",{opacity:0,x:-100},{opacity:1,x:0,duration:0.6,ease:"power3.out"},);

    tl.fromTo(
      ".orb",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" },
      "-=0.9"
    );
    tl.fromTo(
      ".cta-button",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "+=0.2"
    );
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-20 relative ">
      <div className="hidden md:flex absolute bottom-0 left-[-120px] w-[600px] h-[300px] rounded-full bg-gold opacity-40 blur-[180px] z-1 " />
      <div className="flex md:hidden absolute top-350 left-[-320px] w-[600px] h-[300px] rounded-full bg-gold opacity-40 blur-[180px] z-1" />

      <div className="flex flex-col h-screen pt-32 gap-20 w-full overflow-hidden relative">
        <div className="z-10">
          <div className="flex w-full flex-wrap justify-center gap-3 sm:gap-5 h-16 items-center text-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-michroma-base">
              WE DO
            </h1>
            <RotatingText
              texts={["3D PRINTING", "ENCLOSURE", "RESIN PRINTING"]}
              mainClassName="px-2 sm:px-3 md:px-4 text-gold overflow-hidden py-0.5 sm:py-1 md:py-2 text-xl sm:text-3xl md:text-4xl font-michroma-base justify-center rounded-lg"
              staggerFrom={"center"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.0}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "tween", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
        <div className="space-y-2 z-10 ">
          <h1 className="font-inter-base text-white/80 text-md text-center md:text-3xl -mt-10 text ">
            Turn ideas into physical products with unmatched accuracy.
          </h1>
          <div className=" h-[2px] text w-[800px] hidden md:flex bg-gradient-to-r from-yellow-400 to-transparent animate-pulse mx-auto mt-2" />
        </div>
        <div
          ref={containerRef}
          className="w-full flex flex-wrap justify-center gap-8"
        >
          {boxes?.map((box) => (
            <div
              className="box-card z-10 cursor-pointer hover:scale-110 duration-300 ease-in-out bg-white/10 backdrop-blur-3xl border-[2px] border-white/10 w-full max-w-[320px] rounded-2xl p-10 pt-5 flex flex-col space-y-5 shadow-md"
              key={box.id}
            >
              
              <div className="h-[60px] w-[60px] rounded-lg flex items-center justify-center">
                {box.icon}
              </div>
              <div className="flex flex-col space-y-5">
                <h1 className="text-xl sm:text-2xl font-michroma-base font-semibold text-gold">
                  {box.heading}
                </h1>
                <h3 className="font-sora-base text-xs text-white/80">
                  {box.description}
                </h3>
              </div>
              <Link
                href={box.link}
                className="flex items-center justify-between text-sm sm:text-base font-medium text-white hover:underline"
              >
                Explore now
                <ArrowUpRight size={18} className="text-gold" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={textRef}
        className="w-full  flex flex-col lg:flex-row md:h-screen mb-10 md:mb-0 mt-20 gap-10 lg:gap-0 px-4 lg:px-0 "
      >
        {/* Left Side */}
        <div className="flex flex-col gap-6 p-5 lg:p-10 w-full lg:w-[65%]  justify-center items-center md:items-start">
          <p className="text-xs  text-stagger tracking-widest uppercase text-white font-sora-base">
            Affordable • Quality • Trusted
          </p>
          <h1 className="text-2xl  text-stagger  sm:text-3xl font-michroma-base leading-tight">
            Why Choose{" "}
            <span className="text-gold font-michroma-base ">go3dlab</span>
          </h1>
          <Separator className="w-1/2 bg-gold seprator" />
          <p className="text-base text-white/80 font-inter-base md:text-start text-center  text-stagger ">
            We deliver high-quality 3D printing at the most competitive prices
            in the market — no compromises, no shortcuts. Don’t have a ready
            model? Our expert designers will craft one for you from scratch,
            tailored to your needs. From concept to creation, we offer a
            seamless, end-to-end experience built for precision, speed, and
            reliability.
          </p>
          <Button
            className="w-fit p-4 cta-button bg-white mt-10 text-black font-michroma-base"
            variant="outline"
          >
            Contact Us
          </Button>
        </div>

        {/* Right Side */}
        <div className="w-[40%] hidden orb lg:flex h-full  rounded-2xl relative overflow-hidden">
          <Orb
            hoverIntensity={1}
            rotateOnHover={true}
            hue={5}
            forceHoverState={false}
          />
        </div>
      </div>
      <ShootingStars className="z-20"/>
    </div>
  );
};

export default Hero2;
