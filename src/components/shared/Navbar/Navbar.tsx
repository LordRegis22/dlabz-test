"use client";
import React, { useEffect, useState } from "react";
import { ColorLogo } from "@/assets";
import Image from "next/image";

import {
  sections,
  SectionContentType,
  INavBarLink,
} from "@/static/content/sections";

import { IoMenu, IoClose } from "react-icons/io5";

import NavItem from "./NavItem";
import throttle from "lodash.throttle";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const throttledScrollChange = throttle(handleScroll, 600);

    window.addEventListener("scroll", throttledScrollChange);

    return () => {
      window.removeEventListener("scroll", throttledScrollChange);
    };
  }, []);

  return (
    <div
      className={`${
        scrolling
          ? "h-[80px] sm:h-[100px] lg:h-[140px] 2.5xl:h-[170px] 3xl:bg-black !fixed 3xl:flex 3xl:justify-center 3xl:items-center"
          : "bg-nav-pattern 3xl:bg-black 3xl:flex 3xl:justify-center 3xl:items-center absolute block h-[80px] sm:h-[100px] md:min-h-[135px]"
      } bg-nav-pattern flex py-2 items-start top-0 z-[1999] justify-center w-full bg-repeat bg-cover bg-bottom min-h-[50px]`}
    >
      <nav
        className={`w-full mx-4 md:mx-0 flex
    md:justify-evenly justify-between items-center text-white text-[14px] z-[9999]`}
      >
        <div className="flex items-center justify-start">
          <a href="#">
            <Image
              src={ColorLogo}
              alt="destruction-labs-logo"
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
            />
          </a>
        </div>

        <div className="block md:hidden text-white">
          {!toggle && (
            <IoMenu
              size={24}
              onClick={() => setToggle(!toggle)}
              className="relative"
            />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-black flex-col h-[100vh] mx-0 right-0 my-0 z-[100] rounded-xl`}
          >
            <div className="pt-4 px-4">
              <IoClose size={24} onClick={() => setToggle(!toggle)} />
            </div>
            <ul className="py-6 list-none flex items-end flex-1 w-full flex-col gap-4 bg-black">
              <div className="flex h-full w-screen flex-col items-end p-4 gap-4">
                {Object.values(sections).map(
                  (nav: SectionContentType | INavBarLink) => (
                    <NavItem
                      setToggle={setToggle}
                      link={nav}
                      key={`${nav.title}-NavItem`}
                    />
                  )
                )}
              </div>
            </ul>
          </div>
        </div>

        <ul className="flex-col hidden md:flex md:flex-row items-center md:gap-2 gap-1 justify-center">
          {Object.values(sections).map((link, index) => (
            <NavItem link={link} key={index} />
          ))}
        </ul>
        <div className="hidden md:block"></div>
      </nav>
    </div>
  );
};

export default Navbar;
