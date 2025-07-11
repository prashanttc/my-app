"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DATA } from "../constant/index";
import { useRef } from "react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export default function Home() {
  const triggerRef = useRef(null);
  const dockRef = useRef(null);

  useGSAP(() => {
    // HERO SCALE OUT
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
        scale: 1.6,
        opacity: 0,
        filter: "blur(40px)",
        ease: "power3.inOut",
      });

    ScrollTrigger.create({
      trigger: ".trigger",
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(".fade-up-header", {
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            const header = document.querySelector(".fade-up-header");
            header?.classList.add("bg-black/60", "backdrop-blur");
          },
        });
      },
      onLeaveBack: () => {
        gsap.to(".fade-up-header", {
          y: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            const header = document.querySelector(".fade-up-header");
            header?.classList.remove(
              "bg-black/60",
              "backdrop-blur",
              "border-b",
              "border-gold/20"
            );
          },
        });
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
useGSAP(() => {
  const sections = gsap.utils.toArray<HTMLElement>(".snap-section");
  let isScrolling = false;

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => snapToSection(section),
      onEnterBack: () => snapToSection(section),
    });
  });

  function snapToSection(target: HTMLElement) {
    if (isScrolling) return;
    isScrolling = true;

    gsap.to(window, {
      scrollTo: { y: target, autoKill: false },
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        isScrolling = false;
      },
    });
  }
}, []);
;

  return (
    <div className="min-h-screen w-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* glowing blurs */}
      <div className="absolute top-0 right-[-120px] w-[600px] h-[300px] rounded-full bg-gold opacity-40 blur-[180px] z-10" />
      <div className="absolute top-200 left-[-120px] w-[600px] h-[300px] rounded-full bg-gold opacity-40 blur-[180px] z-10" />
      <Header />
      {/* HERO SECTION */}
      <div className="scroll-trigger-hero w-full h-screen snap-section">
        <Hero />
      </div>
      {/* MAIN SECTION */}
      <div
        ref={triggerRef}
        className="w-full h-[1120px] trigger bg-black relative snap-section"
      >
        <div className="absolute bottom-0 right-1/2 w-[200px] h-[200px] rounded-full bg-gold opacity-40 blur-[180px] z-1" />

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
