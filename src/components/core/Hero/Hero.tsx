import { GlitchBg } from "@/assets";
import { Video } from "@/components/shared";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-hidden mt-[30px] sm:mt-18 lg:mt-0">
      <div className="hidden md:block">
        <Video src="/glitchbg.mp4" thumbnail="/glitchbgimg.png" />
      </div>
      <div className="block md:hidden">
        <Image
          src={GlitchBg}
          alt="hero"
          width={1920}
          height={1080}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
