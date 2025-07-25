"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hyperspeed from "./Hyperspeed/Hyperspeed";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const [showHyperspeed, setShowHyperspeed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
useGSAP(() => {
  const tl = gsap.timeline();

  tl.from(".fade-slide-right", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  tl.from(".fade-slide-left", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15,
  });

  tl.from(".hyperspeed-wrapper", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  },"-=0.9");
tl.from(".hero-cta", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 0.3,
  ease: "power3.out",
    clearProps: "all",
});

  ScrollTrigger.create({
    trigger: containerRef.current,
    start: "top bottom",
    end: "bottom top",
    onEnter: () => setShowHyperspeed(true),
    onEnterBack: () => setShowHyperspeed(true),
    onLeave: () => setShowHyperspeed(false),
    onLeaveBack: () => setShowHyperspeed(false),
  });
}, []);

  const effectOptions = {
    length: isMobile ? 500 : 700,
    roadWidth: isMobile ? 30 : 40,
    islandWidth: 10,
    lanesPerRoad: 1,
    fov: isMobile ? 70 : 90,
    fovSpeedUp: 4,
    speedUp: isMobile ? 1.2 : 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5] as [number, number],
    lightStickHeight: isMobile
      ? ([1.0, 1.4] as [number, number])
      : ([1.3, 1.7] as [number, number]),
    carLightsLength: isMobile
      ? ([400 * 0.02, 400 * 0.15] as [number, number])
      : ([400 * 0.03, 400 * 0.2] as [number, number]),
    carLightsRadius: [0.05, 0.14] as [number, number],
    carWidthPercentage: [0.3, 0.5] as [number, number],
    carShiftX: [-0.8, 0.8] as [number, number],
    carFloorSeparation: [0, 5] as [number, number],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      leftCars: [0xfacc15, 0xfde68a, 0xfef3c7],
      rightCars: [0xfacc15, 0xd4af37, 0xb8860b],
      sticks: 0xfacc15,
    },
  };
  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4"
      >
        {/* Hyperspeed Layer */}
        {showHyperspeed && (
          <div className="absolute z-[1] overflow-hidden hyperspeed-wrapper w-full bottom-0 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70%]">
            <Hyperspeed effectOptions={effectOptions} />
          </div>
        )}

        {/* HERO CONTENT */}
        <div className="relative z-10 w-full mb-20 max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-6 px-4 sm:px-8">
          <div className="w-fit p-2 px-3 bg-white/10 border border-white/20 rounded-3xl fade-slide-left">
            <p className="font-sora-base text-gold text-xs sm:text-sm">
              Design • Prototype • Manufacture
            </p>
          </div>

          <h1 className="font-semibold text-2xl sm:text-4xl md:text-6xl leading-snug sm:leading-tight font-michroma-base fade-slide-left bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Bring Your Product to Life — From Sketch to Shelf{" "}
          </h1>

          <p className="text-xs sm:text-sm md:text-base font-sora-base text-white/70 fade-slide-left">
            We design, prototype, and manufacture enclosures that look sharp,
            <br />
            work flawlessly, and ship fast.
          </p>
          <button
            className="cursor-pointer group overflow-hidden rounded-4xl flex items-center justify-center hero-cta z-20 px-6 py-3 w-[180px] text-white font-sora-base text-sm font-semibold bg-gradient-to-r from-[#6a4e00] to-[#facc15] hpver"
          >
            <span className=" z-10 flex items-center justify-center gap-2">
              Explore Work{" "}
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1 " />
            </span>
          </button>
        </div>

        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 fade-slide-right z-10 text-right text-[10px] sm:text-sm max-w-[150px] sm:max-w-sm">
          <h1 className="font-michroma-base text-gold">3D Printing</h1>
          <p className="font-light font-sora-base">
            High-quality prototypes and production parts
          </p>
        </div>
      </section>
    </>
  );
}
