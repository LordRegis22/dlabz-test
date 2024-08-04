export const isAboveSection = (id: string, isSlider: boolean) => {
  if (typeof window !== "undefined" && isSlider) {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      return sectionTop > 0;
    }
  }
  return false;
};

export const isFirefox =
  typeof window !== "undefined" &&
  window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

export const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;
