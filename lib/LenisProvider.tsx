"use client";

import { useRef, useLayoutEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { usePathname }  from 'next/navigation';

// Register GSAP plugins globally once.
// It's best practice to register plugins outside of React components
// or within a top-level effect that runs only once.
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const smoother = useRef<ScrollSmoother | null>(null);
  const gsapContext = useRef<gsap.Context | null>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Create a GSAP context for better cleanup.
    gsapContext.current = gsap.context(() => {
      // Create ScrollSmoother instance only if it doesn't exist and it's not a touch device
      if (!smoother.current && !ScrollTrigger.isTouch) {
        smoother.current = ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 1.2,
          effects: true,
          normalizeScroll: true,
        });
      } else if (ScrollTrigger.isTouch) {
        // If on a touch device, configure ScrollTrigger for native scroll
        ScrollTrigger.config({
          ignoreMobileResize: true,
        });
      }

      // --- CRITICAL FIX: Set up ScrollTrigger.scrollerProxy() ---
      // This tells ScrollTrigger to use ScrollSmoother as its scroll source.
      // It ensures ScrollTrigger reads the scroll position from ScrollSmoother
      // instead of the native window scroll.
      if (smoother.current) { // Only set proxy if smoother is active
        const smoothContentElement = document.querySelector("#smooth-content") as HTMLElement | null;

        ScrollTrigger.scrollerProxy("#smooth-wrapper", { // Use the wrapper as the scroller proxy
          scrollTop(value) {
            // Getter: Return the current scroll position from ScrollSmoother
            // Setter: Set the scroll position using ScrollSmoother's scrollTo method
            return arguments.length ? smoother.current!.scrollTo(value as number, false) : smoother.current!.scrollTrigger.scroll();
          },
          // getBoundingClientRect() is necessary for fixed elements or complex layouts
          // when ScrollSmoother is transforming the entire content.
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
          // pinType: "transform" is often recommended when ScrollSmoother is active
          // because it moves elements using transforms, which is more performant.
          // FIX: Safely access 'style' property after checking for null
          pinType: smoothContentElement && smoothContentElement.style.transform ? "transform" : "fixed"
        });
      } else {
        // If ScrollSmoother is not active (e.g., on touch devices),
        // ensure ScrollTrigger reverts to native scroll.
        // Changed 'null' to 'undefined' to resolve TypeScript error
        ScrollTrigger.scrollerProxy("#smooth-wrapper", undefined);
      }

      // --- Handling ScrollTrigger Refresh on Route Change ---
      const handleRefresh = () => {
        setTimeout(() => {
          if (smoother.current) {
            smoother.current.scrollTo(0, false); // Scroll to top on route change (optional)
          }
          ScrollTrigger.refresh(); // Recalculate all ScrollTrigger positions
        }, 100);
      };

      // Trigger refresh whenever the pathname changes (new route)
      if (pathname) {
        handleRefresh();
      }

    }); // End of gsap.context

    // Cleanup function: This runs when the component unmounts.
    return () => {
      if (gsapContext.current) {
        gsapContext.current.revert(); // Reverts all animations and ScrollTriggers
      }
      if (smoother.current) {
        smoother.current.kill(); // Destroys the ScrollSmoother instance
        smoother.current = null;
      }
      // Revert the scrollerProxy when the component unmounts to prevent conflicts
      // Changed 'null' to 'undefined' to resolve TypeScript error
      ScrollTrigger.scrollerProxy("#smooth-wrapper", undefined);
    };
  }, [pathname]); // Dependency array: re-run effect when pathname changes

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}
