"use client";

import { INavBarLink } from "@/static/content/sections";
import React from "react";
import useHash from "@/hooks/useHash";

interface IProps {
  link: INavBarLink;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavItem: React.FC<IProps> = ({ link, setToggle }) => {
  const hash = useHash();

  return (
    <li
      key={`${link.title}-NavItem`}
      className={`
    mx-3
    2.5xl:text-[18px]
    text-[14px]
    min-w-[70px]
    text-center
    px-2 py-1
    hover:text-gray-400
    transition-all
    ${hash === link.title ? " bg-[#F8EE44] text-black rounded-sm" : ""}
    `}
    >
      <a
        href={link.href}
        onClick={() => {
          if (setToggle) setToggle(false);
        }}
      >
        {link.title}
      </a>
    </li>
  );
};

export default NavItem;
