"use client";
import React, { useRef } from "react";
import { Pagination, A11y, Virtual, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SquareIcon } from "@/components/shared";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import Swiper styles`
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TeamMemberContent } from "@/static/content/team";
import {
  COMING_SOON,
  HighlightsArticleContent,
} from "@/static/content/highlights";
import ComingSoonSliderPanel from "./ComingSoonSliderPanel";
import SliderPanel from "./SliderPanel";
import { ComingSoonCardHeader } from "@/assets";

type Slides = TeamMemberContent | HighlightsArticleContent;

export interface ISliderProps {
  slides: Slides[];
  limit?: number;
  discover?: boolean;
}

const SlideNextButton = ({
  swiperRef,
}: {
  swiperRef: React.MutableRefObject<any>;
}) => {
  return (
    <div className="swiper-icons-wrap block">
      <div
        onClick={() => swiperRef?.current.slidePrev()}
        className="swiper-button-prev !ml-[-50px]"
      ></div>
      <div
        onClick={() => swiperRef?.current.slideNext()}
        className="swiper-button-next !mr-[-50px]"
      ></div>
    </div>
  );
};

const Slider: React.FC<ISliderProps> = ({
  slides,
  discover = false,
  limit = 4,
}) => {
  const swiperRef = useRef<any>(null);

  while (slides.length < 4) {
    slides.push({
      name: "",
      image: ComingSoonCardHeader,
      bg: "",
      link: "",
      desc: COMING_SOON,
    });
  }

  return (
    <div className="relative">
      <Swiper
        grabCursor={true}
        watchSlidesProgress
        loop={true}
        slidesPerGroup={1}
        breakpoints={{
          540: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: discover ? 3 : 3.5,
          },
          1500: {
            slidesPerView: discover ? 3 : 3.7,
          },
          1700: {
            slidesPerView: discover ? 3 : 4.5,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={false}
        spaceBetween={20}
        modules={[Pagination, A11y, Virtual]}
        className="max-w-[2200px]"
      >
        {slides.map(
          (
            { name, bg, image, desc, link, ...optionalProps },
            index,
            slides
          ) => {
            return (
              <SwiperSlide
                key={link ? `featured-${index}` : `team-${index}  rounded-b`}
              >
                <motion.div
                  style={{ backgroundColor: bg }}
                  className={`rounded-lg min-h-[620px] mdn:min-h-[700px] lg:min-h-[645px] xl:min-h-[620px]`}
                >
                  {desc === COMING_SOON ? (
                    <ComingSoonSliderPanel {...{ desc, link, image, index }} />
                  ) : (
                    <SliderPanel
                      {...{
                        name,
                        bg,
                        image,
                        desc,
                        link,
                        optionalProps,
                        discover,
                      }}
                    />
                  )}
                </motion.div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
      <SlideNextButton swiperRef={swiperRef} />
    </div>
  );
};

export default Slider;
