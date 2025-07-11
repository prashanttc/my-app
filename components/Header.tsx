"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { nav } from "../constant/index";
import Services from "./nav-items/Services";
import { useGSAP } from "@gsap/react";

const drawerLabels = ["Services", "Products"];
const Header = () => {
  const drawerRef = useRef(null);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  let timeoutId: ReturnType<typeof setTimeout>;
  const openDrawer = (label: string) =>
     {
    clearTimeout(timeoutId);
    setActiveLabel(label);

    gsap.to(drawerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.35,
      ease: "back.out(1.7)",
      pointerEvents: "auto",
    });
  };

  const closeDrawer = () => {
    timeoutId = setTimeout(() => {
      gsap.to(drawerRef.current, {
        y: -200,
        opacity: 0,
        duration: 0.25,
        ease: "power2.inOut",
        pointerEvents: "none",
      });
    }, 100);
  };

  useGSAP(()=>{
    gsap.fromTo(".fade-up-header",{
      opacity:0,
      y:-200
    },{
      opacity:1,
      y:0,
      duration:0.8,

      ease:'power3.inOut'
    })
  })
  return (
    <div className="fade-up-header opacity-0 h-[60px] fixed w-full hidden sm:flex justify-between  items-center z-[99] text-white px-5 transition-all duration-500">
      <h1 className="text-white font-michroma-base text-2xl">go3d lab</h1>

      <div className="hover:cursor-pointer h-[50px] rounded-3xl flex header items-center justify-evenly gap-10 px-10 text-white font-michroma-base">
        {nav.map((item) => {
          const shouldShowDrawer = drawerLabels.includes(item.label);

          return (
            <div
              className="z-10"
              key={item.id}
              onMouseEnter={() => shouldShowDrawer && openDrawer(item.label)}
              onMouseLeave={() => shouldShowDrawer && closeDrawer()}
            >
              <Link href={item.src}>
                <p className="text-sm uppercase font-inter-base">
                  {item.label}
                </p>
              </Link>
            </div>
          );
        })}

        {activeLabel && drawerLabels.includes(activeLabel) && (
          <div
            ref={drawerRef}
            onMouseEnter={() => openDrawer(activeLabel)}
            className="absolute -top-5 left-0 w-screen  backdrop-blur-xl mask-gradient  text-gold h-screen opacity-0 pointer-events-none"
          >
            <div
              className="w-full h-[500px] bg-black/90 rounded-b-4xl px-6 py-8"
              onMouseLeave={closeDrawer}
            >
              {activeLabel === "Services" ? (
                <Services />
              ) : activeLabel === "Products" ? (
                <p className="text-white">Product drawer coming soon...</p>
              ) : null}
            </div>
          </div>
        )}
      </div>

      <h1 className="text-white font-bold font-michroma-base text-sm">Login</h1>
    </div>
  );
};

export default Header;
