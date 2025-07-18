"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import DockBox from "@/components/DockBox";
import { HeroParallaxDemo } from "@/components/Product";
import { Testimonials } from "@/components/Testimonial";
import Footer from "@/components/Footer";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(".scroll-trigger-hero", {
      willChange: "transform, opacity, filter",
      transformOrigin: "center center",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top bottom",
          end: "top top",
          scrub: 0.8,
        },
      })
      .to(".scroll-trigger-hero", {
        opacity: 0,
        duration: 0.3,
        ease: "power3.inOut",
      });

    ScrollTrigger.create({
      trigger: ".trigger",
      start: "top center",
      end: "top top",
      onEnter: () => {
        const header = document.querySelector(".fade-up-header");
        if (header) {
          header.classList.add("bg-white/10", "backdrop-blur-md");
        }
      },
      onLeaveBack: () => {
        const header = document.querySelector(".fade-up-header");
        if (header) {
          header.classList.remove("bg-white/10", "backdrop-blur-md");
        }
      },
    });
    ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 30%",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(dockRef.current, {
          y: 0,
          opacity: 1,
          pointerEvents: "auto",
          ease: "power3.out",
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to(dockRef.current, {
          y: 100,
          opacity: 0,
          pointerEvents: "none",
          ease: "power3.in",
          duration: 0.5,
        });
      },
    });
  }, []);

  return (
    <div className="min-h-screen w-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 right-[-120px] w-[600px] h-[300px] rounded-full bg-gold opacity-40 blur-[180px] z-10" />
      <div className="absolute top-200 left-[-120px] w-[600px] h-[300px] rounded-full bg-gold opacity-40 blur-[180px] z-10" />
      <Header />
      <div className="scroll-trigger-hero w-full h-screen ">
        <Hero />
      </div>
      <div ref={triggerRef} className="w-full h-full trigger relative ">
        <Hero2 />
      </div>
      <HeroParallaxDemo />
      <Testimonials/>
      <Footer/>
      <div
        id="dock-wrapper"
        ref={dockRef}
        className="fixed bottom-5 left-0 right-0 z-50 opacity-0 pointer-events-none translate-y-[100px]"
      >
        <DockBox />
      </div>
    </div>
  );
}
