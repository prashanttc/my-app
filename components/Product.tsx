"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { products } from "@/constant";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

