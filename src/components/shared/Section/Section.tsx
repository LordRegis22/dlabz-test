"use client";
import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { isAboveSection, isMobile } from "@/helpers";
import {
  bgVariants,
  fadeInVariants,
  slideUpVaraints,
} from "@/static/animations";
import { MotionGlobalConfig } from "framer-motion";
import { ISectionProps } from "@/static/content/sections";

const Section = ({
  children,
  gradient = "bg-purple-gradient",
  heading,
  subHeading,
  //TODO: This prop is not used for now due to experimental reasons once finalized it will either be removed or used
  isFadeIn = false,
  isSlider = false,
  id = "",
}: ISectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: isSlider ? false : true,
    threshold: 0.15,
  });

  const control = useAnimation();
  const controlBg = useAnimation();

  useEffect(() => {
    if (isMobile()) MotionGlobalConfig.skipAnimations = true;
    else MotionGlobalConfig.skipAnimations = false;
    if (inView) {
      control.start("visible");
      controlBg.start("visible");
    } else if (isSlider && isAboveSection(id, isSlider)) {
      control.start("hidden");
      controlBg.start("hidden");
    }
  }, [control, inView, isSlider, controlBg, id]);

  return (
    <div className={`min-h-[800px] ${gradient} relative`}>
      <div className="flex flex-col overflow-hidden relative items-center justify-center max-w-full w-full pt-[200px] md:pt-[220px] mx-auto">
        <div
          ref={ref}
          className="flex flex-col relative items-start justify-start max-w-full w-[76%]"
        >
          <motion.div
            initial={{ opacity: 0, transform: "translateY(100px) scale(0.9)" }}
            animate={{
              opacity: inView ? 1 : 0,
              transform: inView
                ? "translateY(0) scale(1)"
                : "translateY(100px) scale(0.9)",
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <h1 className="text-primary text-3xl mb-2 md:text-[70px] font-bold leading-[0.8] tracking-normal">
              {heading}
            </h1>
            {subHeading && <p className="text-white mt-4">{subHeading}</p>}
          </motion.div>

          <motion.section
            variants={fadeInVariants}
            initial={"hidden"}
            animate={control}
            className="w-full z-10"
          >
            {children}
          </motion.section>
        </div>
        <motion.div
          variants={bgVariants(inView)}
          initial="hidden"
          animate={controlBg}
          className="absolute bottom-0 left-0
        bg-about-pattern opacity-45 min-h-[800px] w-full bg-no-repeat bg-bottom
        "
        ></motion.div>
      </div>
    </div>
  );
};

export default Section;
