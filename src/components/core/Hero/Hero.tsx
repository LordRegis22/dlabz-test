import { Video } from "@/components/shared";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-hidden mt-[30px] sm:mt-18 lg:mt-0">
      <div className="hidden md:block">
        <Video src="/glitchbg.mp4" thumbnail="/glitchbgimg.png" />
      </div>
      <div className="block md:hidden mt-4">
        <Image
          src={"/glitchbgimg.png"}
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
