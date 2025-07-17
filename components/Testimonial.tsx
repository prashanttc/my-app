/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/magicui/marquee";
import { reviews } from "@/constant";
import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return <div className="w-[300px] h-[200px] rounded-2xl  bg-white/10">
    <div className="w-full h-full bg-gradient-to-br from-white/10 via-black/30  to-white/20 rounded-2xl p-5 flex flex-col justify-evenly">
    <h1 className="text-white/60 font-inter-light">{body}</h1>
  <div className="flex gap-3 items-center">
       <Image src={img} height={40} width={40} alt="image" className="rounded-full"/>
       <h1 className="text-white font-michroma-base">{name}</h1></div>
       </div>
  </div>;
};

export function Testimonials() {
  useGSAP(()=>{
    gsap.from(".animate-text", {
      y: +160,
      opacity: 0,
      duration: 1.5 ,
      ease: "power3.out",
      stagger: 0.2, 
      scrollTrigger:{
        trigger: ".hii",
        start: "top top",
        end: "bottom top",
        toggleActions: "play none none none",
      }
    });
  })
  return (
    <div className="relative flex h-screen w-full flex-col md:flex-row  items-center justify-center overflow-hidden md:mt-20">
            <div className="absolute top-50 right-[-100px] w-[300px] h-[300px] rounded-full bg-gold opacity-70 blur-[140px] " />

      <div className="md:w-1/2 h-full flex items-center justify-center font-michroma-base relative hii">
        <div className="relative flex md:h-[40rem] w-full overflow-hidden rounded-md md:bg-black/[0.96] antialiased md:items-center md:justify-center">
          <Spotlight
            className=" -left-50 -top-100 animate-spotlight"
            fill="gold"
          />
          <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
            <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center  font-bold text-transparent text-3xl md:text-5xl animate-text">
              Crafting <span className="text-gold"> Tomorrow </span>: <br /> Our Client Narratives.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-center text-base font-sora-base text-neutral-300  animate-text">
              Delve into the experiences of those who've partnered with go3d lab
              to revolutionize their designs through advanced 3D printing
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex relative overflow-hidden hidden w-1/2  h-screen items-center justify-center">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="flex relative flex-col overflow-hidden md:hidden h-screen ">
        <Marquee   className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse   className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black"></div>
    </div>
  );
}
