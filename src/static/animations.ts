import { isFirefox } from "@/helpers";
import { spring, Variants } from "framer-motion";

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9) translateY(100px)",
  },

  visible: {
    opacity: 1,
    transform: "scale(1) translateY(0)",
    transformOrigin: "center center",
    transition: {
      duration: 0.5,
      delay: 0.35,
      ease: "easeInOut",
    },
  },
};

export const slideUpVaraints: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.65,
      ease: "easeOut",
      type: spring,
    },
  },
  hidden: { opacity: 0, y: 300 },
};

export const bgVariants = (inView: boolean) => {
  return {
    hidden: { ...(isFirefox ? { scale: 1.4 } : { zoom: 1.4 }) },
    visible: {
      ...(isFirefox ? { scale: inView ? 1 : 1.4 } : { zoom: inView ? 1 : 1.4 }),
      transition: { duration: 0.8, delay: 0.6, ease: "easeInOut" },
    },
  };
};
