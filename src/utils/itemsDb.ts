import {V4MAPPED} from "dns";
import {getCountryCode} from "./countries";

export interface IGloveStats {
  STYL: number;
  COMF: number;
  DURA: number;
  SPAR: number;
  BAG: number;
  V4M: number;
}

export interface ICountry {
  designed: string;
  madeIn: string;
}

export interface IGlove {
  brand: string;
  title: string;
  img: string;
  country: ICountry;
  stars: number;
  videoUrl: string;
  buyUrl: string;
  globalNote: number;
  stats: IGloveStats;
}

interface Gloves {
  feather: IGlove[];
  welter: IGlove[];
  middle: IGlove[];
  heavy: IGlove[];
  super_heavy: IGlove[];
  luxury: IGlove[];
  [key: string]: any;
}

// -- TEMPLATE --
/*
{
  brand: "hit",
  title: "Suvari",
  img: "/images/",
  country: { designed: "US", madeIn: "PK" },
  videoUrl: "",
  buyUrl: "",
  stars: 4,
  globalNote: 97,
  stats: { STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 98, V4M: 98 },
}, 
*/

export const glovesData: Gloves = {
  feather: [],
  welter: [],
  middle: [
    {
      brand: "HIT N MOVE",
      title: "Suvari",
      img: "/images/hitnmove-suvari.webp",
      country: {designed: "US", madeIn: "PK"},
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 97.1,
      stats: {STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 98, V4M: 98},
    },
    {
      brand: "HIT N MOVE",
      title: "All Day Balance",
      img: "/images/gloves/middle/hitnmove-alldaybalance.png",
      country: {designed: "US", madeIn: "PK"},
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 97,
      stats: {STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 98, V4M: 98},
    },
    {
      brand: "adidas",
      title: "Adispeed",
      img: "/images/gloves/adidas-adispeed.jpg",
      country: {designed: "DE", madeIn: "PK"},
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.3,
      stats: {STYL: 96, COMF: 97, DURA: 95, SPAR: 97, BAG: 95, V4M: 98},
    },
    {
      brand: "ADIDAS",
      title: "Speed Tilt 350",
      img: "/images/gloves/adidas-speedtilt350.jpg",
      country: {designed: "DE", madeIn: "PK"},
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.5,
      stats: {STYL: 96, COMF: 97, DURA: 95, SPAR: 97, BAG: 96, V4M: 98},
    },
    {
      brand: "PHENOM",
      title: "SG-210",
      img: "/images/gloves/phenom-SG-210.jpg",
      country: {designed: "UK", madeIn: "PK"},
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.1,
      stats: {STYL: 95, COMF: 96, DURA: 95, SPAR: 97, BAG: 95, V4M: 98},
    },
    {
      brand: "MESSENGER",
      title: "Pro 3.0 XMT",
      img: "/images/gloves/messenger-pro3xt.png",
      country: {designed: "PK", madeIn: "PK"},
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.3,
      stats: {STYL: 95, COMF: 96, DURA: 97, SPAR: 96, BAG: 95, V4M: 99},
    },
  ],
  heavy: [],
  super_heavy: [],
  luxury: [
    {
      brand: "DI NARDO",
      title: "The Eminence Range ",
      img: "/images/",
      country: {designed: "IT", madeIn: "IT"},
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.1,
      stats: {STYL: 97, COMF: 97, DURA: 97, SPAR: 96, BAG: 98, V4M: 92},
    },
  ],
};
