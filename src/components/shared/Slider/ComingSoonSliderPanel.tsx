import React, { useState } from "react";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";

type ComingSoonSliderPanelProps = {
  index: number;
  link: string | undefined;
  image: StaticImageData;
};
const ComingSoonSliderPanel = ({
  index,
  link,
  image,
}: ComingSoonSliderPanelProps) => {
  return (
    <div className={`hover:opacity-60 opacity-40 transition-all duration-200`}>
      <SwiperSlide key={link ? `featured-${index}` : `team-${index}`}>
        <motion.div
          className={`min-h-[620px] mdn:min-h-[700px] lg:min-h-[645px] xl:min-h-[620px] rounded-lg relative bg-[#252730]`}
        >
          {/* <Image
            src={ComingSoonCardBody as StaticImageData}
            className='absolute top-0 h-full w-full'
            alt={`Black Square`}
          /> */}
          <Image
            src={image}
            className="rounded-t-lg"
            style={{
              objectPosition: "top",
              height: "270px",
              width: "100%",
              aspectRatio: "286/267",
              zIndex: 10,
            }}
            alt={`Coming Soon`}
          />

          <div className="relative px-4  h-full w-full flex justify-center ">
            <h2
              className={`text-primary leading-[40px] text-[50px] absolute top-[-170px]`}
            >
              COMING SOON
            </h2>
          </div>
          {/* placeholder text to maintain height, its a hack but it works */}
          <div className="mt-[13px] opacity-0">
            <div className="px-4">
              <h2
                className={`pr-2 
           text-start pt-10
          font-bold text-2xl my-2`}
              >
                HELLO
              </h2>
            </div>
            <div
              className={`mt-1 text-[16px] tracking-wide px-3 py-2 "text-left"`}
            >
              The gaming landscape is on the cusp of a revolution. As blockchain
              technology disrupts traditional models, we’re witnessing a shift
              from a “crawling phase” to a “walking phase” for web3 gaming. One
              transformative aspect — asset ownership — is poised to
              fundamentally change the way players interact with the games and
              the ecosystems they love. Lorem ipsum dolor sit amet.
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
    </div>
  );
};

export default ComingSoonSliderPanel;
