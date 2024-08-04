'use client';
import { useEffect, useState, useMemo } from 'react';
import throttle from 'lodash.throttle';
const activeMap = {
  '#': 'Home',
  '#about-us': 'About Us',
  '#team': 'Our Team',
  '#highlights': 'Highlights',
  '#contact': 'Contact Us',
};

const getHash = () =>
  typeof window !== 'undefined'
    ? decodeURIComponent(window.location.hash)
    : undefined;

const useHash = () => {
  const [hash, setHash] = useState(getHash());

  const memoizedGetHash = useMemo(() => getHash(), []);

  useEffect(() => {
    setHash(memoizedGetHash === '' ? '#' : memoizedGetHash);

    const sections = document.querySelectorAll('.section');

    const handleScrollChange = () => {
      let scrollPosition = window.scrollY + 200;
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          setHash(section.id === '#' ? '#' : `#${section.id}`);
        }
      });
    };

    const throttledScrollChange = throttle(handleScrollChange, 600);

    window.addEventListener('scroll', throttledScrollChange);
    return () => {
      window.removeEventListener('scroll', throttledScrollChange);
    };
  }, [memoizedGetHash]);
  return activeMap[hash as keyof typeof activeMap];
};

export default useHash;
