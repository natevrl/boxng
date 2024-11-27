
interface IStatsDetails {
  name: string;
  details: string;
}

type IStats = Record<string, IStatsDetails>;

export const statsDetails: IStats = {
  STYL: {
    name: "Style",
    details:
      "The style of the gloves is the first thing you see. It is the first impression you have of the gloves.",
  },
  COMF: {
    name: "Comfort",
    details:
      "The comfort of the gloves is very important. You will wear them for a long time.",
  },
  DURA: {
    name: "Durability",
    details:
      "The durability of the gloves is very important. You don't want to buy new gloves every month.",
  },
  SPAR: {
    name: "Sparring",
    details:
      "The sparring is the most important part of boxing. You need good gloves to protect your hands and your sparring partner.",
  },
  BAG: {
    name: "Bag Work",
    details:
      "The bag work is the most important part of boxing. You need good gloves to protect your hands and your sparring partner.",
  },
  V4M: {
    name: "Value for Money",
    details:
      "The value for money is very important. You want to buy good gloves for a good price.",
  },
};

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
  superheavy: IGlove[];
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
      img: "/images/gloves/middle/hitnmove-suvari.webp",
      country: { designed: "US", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 97.1,
      stats: { STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 98, V4M: 98 },
    },
    {
      brand: "HIT N MOVE",
      title: "All Day Balance",
      img: "/images/gloves/middle/hitnmove-alldaybalance.png",
      country: { designed: "US", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 97,
      stats: { STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 98, V4M: 98 },
    },
    {
      brand: "adidas",
      title: "Adispeed",
      img: "/images/gloves/middle/adidas-adispeed.jpg",
      country: { designed: "DE", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.3,
      stats: { STYL: 96, COMF: 97, DURA: 95, SPAR: 97, BAG: 95, V4M: 98 },
    },
    {
      brand: "ADIDAS",
      title: "Speed Tilt 350",
      img: "/images/gloves/middle/adidas-speedtilt350.jpg",
      country: { designed: "DE", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.5,
      stats: { STYL: 96, COMF: 97, DURA: 95, SPAR: 97, BAG: 96, V4M: 98 },
    },
    {
      brand: "PHENOM",
      title: "SG-210",
      img: "/images/gloves/middle/phenom-SG-210.jpg",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.1,
      stats: { STYL: 95, COMF: 96, DURA: 95, SPAR: 97, BAG: 95, V4M: 98 },
    },
    {
      brand: "MESSENGER",
      title: "Pro 3.0 XMT",
      img: "/images/gloves/middle/messenger-pro3xt.png",
      country: { designed: "PK", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.3,
      stats: { STYL: 95, COMF: 96, DURA: 97, SPAR: 96, BAG: 95, V4M: 99 },
    },
  ],
  heavy: [],
  superheavy: [],
  luxury: [
    {
      brand: "DI NARDO",
      title: "The Eminence Range ",
      img: "/images/",
      country: { designed: "IT", madeIn: "IT" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.1,
      stats: { STYL: 97, COMF: 97, DURA: 97, SPAR: 96, BAG: 98, V4M: 92 },
    },
  ],
};
