import { V4MAPPED } from "dns";
import { getCountryCode } from "./countries";

interface GloveStats {
  STYL: number;
  COMF: number;
  DURA: number;
  SPAR: number;
  BAG: number;
  V4M: number;
}

interface Country {
  designed: string;
  madeIn: string;
}

interface CountryCode {
  designed: string;
  madeIn: string;
}

interface Glove {
  brand: string;
  title: string;
  img: string;
  country: Country;
  stars: number;
  videoUrl: string;
  buyUrl: string;
  global_note: number;
  stats: GloveStats;
  category: string;
}


interface Gloves {
  feather: Glove[];
  welter: Glove[];
  middle: Glove[];
  heavy: Glove[];
  super_heavy: Glove[];
  luxury: Glove[];
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
  global_note: 97,
  stats: { STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 98, V4M: 98 },
  category: "middle",
}, 
*/






export const gloves : Gloves = {
  feather: [],
  welter: [

  ],
  middle: [
    {
      brand: "HIT N MOVE",
      title: "Suvari",
      img: "/images/hitnmove-suvari.webp",
      country: { designed: "US", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      global_note: 97.1,
      stats: { STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 98, V4M: 98 },
      category: "middle",
    },
    {
      brand: "HIT N MOVE",
      title: "All Day Balance",
      img: "/images/gloves/hitnmove-alldaybalance.png",
      country: { designed: "US", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      global_note: 97,
      stats: { STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 98, V4M: 98 },
      category: "middle",
    },
    {
      brand: "adidas",
      title: "Adispeed",
      img: "/images/gloves/adidas-adispeed.jpg",
      country: { designed: "DE", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      global_note: 96.3,
      stats: { STYL: 96, COMF: 97, DURA: 95, SPAR: 97, BAG: 95, V4M: 98 },
      category: "middle",
    },
    {
      brand: "ADIDAS",
      title: "Speed Tilt 350",
      img: "/images/gloves/adidas-speedtilt350.jpg",
      country: { designed: "DE", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      global_note: 96.5,
      stats: { STYL: 96, COMF: 97, DURA: 95, SPAR: 97, BAG: 96, V4M: 98 },
      category: "middle",
    },
    {
      brand: "PHENOM",
      title: "SG-210",
      img: "/images/gloves/phenom-SG-210.jpg",
      country: { designed: "UK", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      global_note: 96.1,
      stats: { STYL: 95, COMF: 96, DURA: 95, SPAR: 97, BAG: 95, V4M: 98 },
      category: "middle",
    },
    {
      brand: "MESSENGER",
      title: "Pro 3.0 XMT",
      img: "/images/gloves/messenger-pro3xt.png",
      country: { designed: "PK", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      global_note: 96.3,
      stats: { STYL: 95, COMF: 96, DURA: 97, SPAR: 96, BAG: 95, V4M: 99 },
      category: "middle",
    } 
  ],
  heavy: [],
  super_heavy: [],
  luxury: [
    {
      brand: "DI NARDO",
      title: "The Eminence Range ",
      img: "/images/",
      country: { designed: "IT", madeIn: "IT" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      global_note: 96.1,
      stats: { STYL: 97, COMF: 97, DURA: 97, SPAR: 96, BAG: 98, V4M: 92 },
      category: "luxury",
    },
  ],

}