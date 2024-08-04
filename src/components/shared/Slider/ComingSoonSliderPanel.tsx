import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from 'next/image';

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
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`${isHovered ? `opacity-60` : `opacity-40`}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SwiperSlide key={link ? `featured-${index}` : `team-${index}`}>
        <motion.div className={`h-[700px] rounded relative bg-[#252730]`}>
          {/* <Image
            src={ComingSoonCardBody as StaticImageData}
            className='absolute top-0 h-full w-full'
            alt={`Black Square`}
          /> */}
          <Image
            src={image}
            style={{
              objectPosition: 'top',
              height: '270px',
              width: '100%',
              aspectRatio: '286/267',
              zIndex: 10,
            }}
            alt={`Coming Soon`}
          />

          <div className='relative px-4  h-full w-full flex justify-center '>
            <h2
              className={`text-primary leading-[40px] text-[50px] absolute top-[-170px]`}
            >
              COMING SOON
            </h2>
          </div>
        </motion.div>
      </SwiperSlide>
    </div>
  );
};

export default ComingSoonSliderPanel;
