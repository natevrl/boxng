import { PiKanban } from "react-icons/pi";

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
  feather: [
    {
      brand: "PLAYERZ",
      title: "Spartech",
      img: "/images/gloves/feather/playerz-spartech.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 2,
      globalNote: 94.6,
      stats: { STYL: 94, COMF: 94, DURA: 94, SPAR: 94, BAG: 93, V4M: 99 },
    },
    {
      brand: "UNIFIED BOXING",
      title: "NXT LVL",
      img: "/images/gloves/feather/unifiedboxing-nxtlvl.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 0,
      globalNote: 93.6,
      stats: { STYL: 93, COMF: 93, DURA: 93, SPAR: 93, BAG: 93, V4M: 97 },
    },
    {
      brand: "DECHA",
      title: "DECHA",
      img: "/images/gloves/feather/decha.webp",
      country: { designed: "TH", madeIn: "TH" },
      videoUrl: "",
      buyUrl: "",
      stars: 0,
      globalNote: 92.8,
      stats: { STYL: 92, COMF: 92, DURA: 93, SPAR: 92, BAG: 92, V4M: 96 },
    },
    {
      brand: "PLAYERZ",
      title: "Crown",
      img: "/images/gloves/feather/playerz-crown.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 0,
      globalNote: 92.8,
      stats: { STYL: 92, COMF: 92, DURA: 92, SPAR: 92, BAG: 93, V4M: 96 },
    },
    {
      brand: "UNIFIED BOXING",
      title: "PRO STANDARD ELITE",
      img: "/images/gloves/feather/unifiedboxing-prostandardelite.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 0,
      globalNote: 92.6,
      stats: { STYL: 92, COMF: 92, DURA: 92, SPAR: 92, BAG: 92, V4M: 96 },
    },
  ],
  welter: [
    {
      brand: "DEUS",
      title: "Sparta",
      img: "/images/gloves/welter/deus-sparta.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 96.0,
      stats: { STYL: 94, COMF: 96, DURA: 96, SPAR: 96, BAG: 95, V4M: 99 },
    },
    {
      brand: "MESSENGER",
      title: "Elite Edition XXQ",
      img: "/images/gloves/welter/messenger-eliteeditionxxq.webp",
      country: { designed: "PK", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 3,
      globalNote: 95.5,
      stats: { STYL: 93, COMF: 95, DURA: 96, SPAR: 95, BAG: 95, V4M: 99 },
    },
    {
      brand: "HOTLINE",
      title: "HOTLINE",
      img: "/images/gloves/welter/hotline.webp",
      country: { designed: "JP", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 3,
      globalNote: 95.5,
      stats: { STYL: 94, COMF: 95, DURA: 96, SPAR: 95, BAG: 95, V4M: 98 },
    },
    {
      brand: "BRAVOSE",
      title: "Titan Grip",
      img: "/images/gloves/welter/bravose-titangrip.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 3,
      globalNote: 95.3,
      stats: { STYL: 95, COMF: 95, DURA: 95, SPAR: 94, BAG: 94, V4M: 99 },
    },
    {
      brand: "PLAYERZ",
      title: "Raider",
      img: "/images/gloves/welter/playerz-raider.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 3,
      globalNote: 95.1,
      stats: { STYL: 96, COMF: 95, DURA: 95, SPAR: 94, BAG: 95, V4M: 96 },
    },
    {
      brand: "GEEZERS",
      title: "Halo",
      img: "/images/gloves/welter/geezers-halo.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 2,
      globalNote: 94.6,
      stats: { STYL: 94, COMF: 95, DURA: 95, SPAR: 94, BAG: 95, V4M: 95 },
    },
    {
      brand: "PRO-AM",
      title: "Retro",
      img: "/images/gloves/welter/proam-retro.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 1,
      globalNote: 94.1,
      stats: { STYL: 93, COMF: 94, DURA: 94, SPAR: 94, BAG: 94, V4M: 96 },
    },
    {
      brand: "EVERLAST",
      title: "Powerlock 2 Leather",
      img: "/images/gloves/welter/everlast-powerlock2leather.webp",
      country: { designed: "US", madeIn: "IN" },
      videoUrl: "",
      buyUrl: "",
      stars: 0,
      globalNote: 94.0,
      stats: { STYL: 94, COMF: 94, DURA: 94, SPAR: 93, BAG: 94, V4M: 95 },
    },
    {
      brand: "INFINITUDE",
      title: "INFINITUDE",
      img: "/images/gloves/welter/infinitude.webp",
      country: { designed: "CA", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 0,
      globalNote: 93.8,
      stats: { STYL: 94, COMF: 93, DURA: 92, SPAR: 94, BAG: 93, V4M: 97 },
    },
    {
      brand: "TITAN",
      title: "Velocity",
      img: "/images/gloves/welter/titan-velocity.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 0,
      globalNote: 93.8,
      stats: { STYL: 93, COMF: 93, DURA: 95, SPAR: 94, BAG: 93, V4M: 95 },
    },
  ],
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
      img: "/images/gloves/middle/hitnmove-alldaybalance.webp",
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
      img: "/images/gloves/middle/adidas-adispeed.webp",
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
      img: "/images/gloves/middle/adidas-speedtilt350.webp",
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
      img: "/images/gloves/middle/phenom-SG-210.webp",
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
      img: "/images/gloves/middle/messenger-pro3xt.webp",
      country: { designed: "PK", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.3,
      stats: { STYL: 95, COMF: 96, DURA: 97, SPAR: 96, BAG: 95, V4M: 99 },
    },
  ],
  heavy: [
    {
      brand: "ROCKKICK",
      title: "rockkick", // Modèle et marque identiques ici
      img: "/images/gloves/heavy/rockkick.webp",
      country: { designed: "FR", madeIn: "FR" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 96.0,
      stats: { STYL: 97, COMF: 96, DURA: 96, SPAR: 96, BAG: 96, V4M: 95 },
    },
    {
      brand: "FLY",
      title: "Superlace",
      img: "/images/gloves/heavy/fly-superlace.webp",
      country: { designed: "GB", madeIn: "GB" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.6,
      stats: { STYL: 96, COMF: 98, DURA: 97, SPAR: 98, BAG: 96, V4M: 95 },
    },
    {
      brand: "FLY",
      title: "Superlace Lightning",
      img: "/images/gloves/heavy/fly-superlacelightning.webp", // Assure-toi que la catégorie est bien "HEAVY"
      country: { designed: "GB", madeIn: "GB" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.8,
      stats: { STYL: 98, COMF: 98, DURA: 96, SPAR: 98, BAG: 96, V4M: 95 },
    },
    {
      brand: "HIT N MOVE",
      title: "Balance",
      img: "/images/gloves/heavy/hitnmove-balance.webp",
      country: { designed: "US", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.6,
      stats: { STYL: 95, COMF: 97, DURA: 96, SPAR: 97, BAG: 97, V4M: 98 },
    },
    {
      brand: "WINNING",
      title: "MS",
      img: "/images/gloves/heavy/winning-ms.webp",
      country: { designed: "JP", madeIn: "JP" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.5,
      stats: { STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 97, V4M: 96 },
    },
    {
      brand: "FLY",
      title: "Superlace 2",
      img: "/images/gloves/heavy/fly-superlace2.webp",
      country: { designed: "GB", madeIn: "GB" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 97.3,
      stats: { STYL: 96, COMF: 99, DURA: 97, SPAR: 99, BAG: 97, V4M: 96 },
    },
    {
      brand: "RIVAL",
      title: "RFX P4P",
      img: "/images/gloves/heavy/rival-rfxp4p.webp",
      country: { designed: "CA", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 95.8,
      stats: { STYL: 98, COMF: 96, DURA: 96, SPAR: 97, BAG: 94, V4M: 94 },
    },
    {
      brand: "BAYONETA",
      title: "Premium HH",
      img: "/images/gloves/heavy/bayoneta-premiumhh.webp",
      country: { designed: "MX", madeIn: "MX" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 95.8,
      stats: { STYL: 95, COMF: 96, DURA: 96, SPAR: 96, BAG: 97, V4M: 95 },
    },
    {
      brand: "BRYANT BOXING",
      title: "Electric Shock 2.0",
      img: "/images/gloves/heavy/bryantboxing-electricshock2.webp",
      country: { designed: "US", madeIn: "MX" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 95.6,
      stats: { STYL: 97, COMF: 95, DURA: 97, SPAR: 94, BAG: 95, V4M: 96 },
    },
    {
      brand: "CLETO REYES",
      title: "Custom",
      img: "/images/gloves/heavy/cletoreyes-custom.webp",
      country: { designed: "MX", madeIn: "MX" },
      videoUrl: "",
      buyUrl: "",
      stars: 3,
      globalNote: 95.5,
      stats: { STYL: 97, COMF: 94, DURA: 96, SPAR: 93, BAG: 96, V4M: 97 },
    },
  ],
  superheavy: [
    {
      brand: "WINNING",
      title: "Custom",
      img: "/images/gloves/superheavy/winning-custom.webp",
      country: { designed: "JP", madeIn: "JP" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.3,
      stats: { STYL: 95, COMF: 97, DURA: 98, SPAR: 97, BAG: 97, V4M: 94 },
    },
    {
      brand: "WINNING",
      title: "SPECIAL LOGO",
      img: "/images/gloves/superheavy/winning-speciallogo.webp",
      country: { designed: "JP", madeIn: "JP" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.1,
      stats: { STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 97, V4M: 94 },
    },
    {
      brand: "TFM",
      title: "RL5",
      img: "/images/gloves/superheavy/tfm-rl5.webp",
      country: { designed: "CN", madeIn: "CN" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.1,
      stats: { STYL: 97, COMF: 97, DURA: 97, SPAR: 96, BAG: 96, V4M: 94 },
    },
    {
      brand: "BARRIC",
      title: "BOXING",
      img: "/images/gloves/superheavy/barric-boxing.webp",
      country: { designed: "US", madeIn: "MX" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 95.6,
      stats: { STYL: 95, COMF: 96, DURA: 97, SPAR: 95, BAG: 96, V4M: 95 },
    },
  ],
  luxury: [
    {
      brand: "DI NARDO",
      title: "The Eminence Range ",
      img: "/images/gloves/luxury/dinardo-theeminencerange.webp",
      country: { designed: "IT", madeIn: "IT" },
      videoUrl: "",
      buyUrl: "",
      stars: 5,
      globalNote: 96.1,
      stats: { STYL: 97, COMF: 97, DURA: 97, SPAR: 96, BAG: 98, V4M: 92 },
    },
    {
      brand: "GRANT",
      title: "Custom",
      img: "/images/gloves/luxury/grant-custom.webp",
      country: { designed: "US", madeIn: "MX" },
      videoUrl: "",
      buyUrl: "",
      stars: 2,
      globalNote: 94.8,
      stats: { STYL: 98, COMF: 94, DURA: 95, SPAR: 95, BAG: 95, V4M: 92 },
    },
  ],
};
