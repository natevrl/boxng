import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const navData = ["gloves", "shoes", "about"];

export const socials = {
  yt: "https://www.youtube.com/@Fit2Box",
  insta: "https://www.instagram.com/fit2boxchannel/",
  github: "https://github.com/natevrl"
};
