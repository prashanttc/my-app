"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hyperspeed from "./Hyperspeed/Hyperspeed";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".fade-slide-right", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      tl.from(".hyperspeed-wrapper", {
        y: 300,
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
      });
      tl.from(".fade-slide-left", {
        y: 300,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center px-4"
      >
        {" "}
        <div className="absolute  z-[1] overflow-hidden hyperspeed-wrapper h-[70%] w-full bottom-0">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () =>
                gsap.to(".hero-text", {
                  scale: 1.05,
                  x: 10,
                  ease: "power1.inOut",
                  duration: 0.5,
                }),
              onSlowDown: () =>
                gsap.to(".hero-text", {
                  scale: 1,
                  x: 0,
                  ease: "power1.inOut",
                  duration: 0.5,
                }),
              length: 700,
              roadWidth: 40,
              islandWidth: 10,
              lanesPerRoad: 1,
              fov: 90,
              fovSpeedUp: 4,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
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
            }}
          />
        </div>
        {/* HERO CONTENT */}
        <div className="flex flex-col h-screen w-full items-center  justify-center p-10">
          <div className="flex flex-col   gap-10 items-center justify-center z-10 ">
            <p className="font-sora-base text-gold text-sm sm:text-md z-10  fade-slide-left">
              Design • Prototype • Manufacture
            </p>
            <h1
              className="font-semibold text-4xl sm:text-5xl md:text-7xl z-10 text-center font-michroma-base  fade-slide-left
             bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
            >
              Enclosure Solutions from <br /> Concept to Completion
            </h1>
            <p className="text-sm sm:text-base font-sora-base z-10 text-white/70  fade-slide-left">
              Explore a wide range of plastic & metal enclosures!
            </p>
          </div>
          <div className=" absolute bottom-5 right-5  fade-slide-right z-10  ">
            <div className="w-fit text-right z-10">
              <h1 className="font-michroma-base text-md text-gold">
                3D Printing
              </h1>
              <p className="font-light font-sora-base text-sm">
                High-quality prototypes and production parts
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-exit-trigger h-[100vh] w-full bg-black" />
    </>
  );
}
