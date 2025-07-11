"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { DATA } from "../constant/index";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // HERO section blur + fade
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
        duration:1,
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
          header.classList.remove("bg-black/60", "backdrop-blur");
        }
      },
    });

    // DOCK reveal animation
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
      {/* HERO Section */}
      <div className="scroll-trigger-hero w-full h-screen ">
        <Hero />
      </div>

      {/* Main Section */}
      <div
        ref={triggerRef}
        className="w-full h-[1120px] trigger bg-black relative "
      >
        <div
          id="dock-wrapper"
          ref={dockRef}
          className="fixed bottom-5 left-0 right-0 z-50 opacity-0 pointer-events-none translate-y-[100px]"
        >
          <TooltipProvider>
            <Dock
              direction="middle"
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg border-none"
            >
              {DATA.navbar.map((item) => (
                <DockIcon key={item.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={item.href} aria-label={item.label}>
                        <item.icon className="size-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              <Separator orientation="vertical" className="h-full" />
              {Object.entries(DATA.contact.social).map(([name, social]) => (
                <DockIcon key={name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={social.url} aria-label={social.name}>
                        <social.icon className="size-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
            </Dock>
          </TooltipProvider>
        </div>

        <div className="text-center pt-40 text-xl">
          Welcome to the next section 🚀
        </div>
      </div>
    </div>
  );
}
