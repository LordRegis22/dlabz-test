import { ReactNode } from "react";

export interface ISectionProps {
  children?: ReactNode;
  gradient?: string;
  heading: string;
  subHeading?: string;
  isFadeIn?: boolean;
  isSlider?: boolean;
  id?: string;
}

export interface INavBarLink {
  title: string;
  href: string;
}

export type SectionContentType = ISectionProps & INavBarLink;

export const sections: Record<string, SectionContentType | INavBarLink> = {
  home: { title: "Home", href: "#" },
  aboutUs: {
    heading: "About Us",
    isFadeIn: true,
    title: "About Us",
    href: "#about-us",
  },
  team: {
    heading: "Our Team",
    gradient: "bg-orange-gradient",
    subHeading: `Our passionate and collaborative team brings together a diverse range of skills and experience from industry leaders like Epic Games, Gameloft, Riot Games, Survios, and Microsoft. Programmers, artists, designers, and storytellers work seamlessly to bring innovative gaming experiences to life.`,
    isSlider: true,
    id: "team",
    title: "Our Team",
    href: "#team",
  },
  highlights: {
    heading: "Highlights",
    gradient: "bg-pink-gradient",
    isSlider: true,
    id: "highlights",
    title: "Highlights",
    href: "#highlights",
  },
  contact: {
    heading: "Keep In Touch",
    subHeading: "Subscribe to our mailing list",
    gradient: "bg-blue-gradient",
    title: "Contact Us",
    href: "#contact",
  },
  // footer: { title: , href: ,},
  // hero: {  title: , href: ,},
};
