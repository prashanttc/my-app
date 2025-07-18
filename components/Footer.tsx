import React from "react";
import { Button } from "./ui/button";
import { BackgroundBeams } from "./ui/background-beams";

const Footer = () => {
  return (
    <div className="h-screen w-full rounded-md bg-black relative flex flex-col  mt-20 pt-32 antialiased">
      <div className="  mx-auto p-4 flex flex-col items-center">
        <p className="tracking-widest uppercase mb-3 text-md font-sora-base font-semibold"> contact us</p>
     <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center  font-bold text-transparent text-3xl md:text-5xl animate-text font-michroma-base ">
              Have Questions <span className="text-gold"> or need assistance </span> <br /> we are here to help.
            </h1>
      <Button className="bg-white/10 border border-white/30 cursor-pointer text-white  font-michroma-base text-2xl p-[30px]  rounded-4xl mt-10">connect with us </Button>
      </div>
      <BackgroundBeams />
      <div className="absolute w-full h-[250px] bg-black  border-t border-white/30 bottom-0 right-0">hi</div>
    </div>
  );
};

export default Footer;
