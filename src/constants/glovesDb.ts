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




95.8
ARES 
Speciale
96 STYL
96 SPAR
96 COMF 95 BAG
95 DURA
97 V4M
GB PK
4



95.8
NEW SPORTING
96 STYL 95 SPAR
95 COMF 96 BAG
96 DURA
97 V4M
MX MX
4



95.6
BOXEO TM 
Custom
95 STYL
95 SPAR
95 COMF
96 BAG
96 DURA
97 V4M
MX MX
4



95.8
FLY 
Superlace X
95 STYL
96 SPAR
96 COMF
95 BAG
96 DURA
97 V4M
GB CH
4



95.8
HIT N MOVE 
Agility
94 STYL
96 SPAR
96 COMF
95 BAG
96 DURA
98 V4M
US PK
4


95.8
PHENOM 
SG-202
95 STYL 96 SPAR
95 COMF
95 BAG
96 DURA
98 V4M
GB PK
4


96.0
ADIDAS 
Adispeed Metallic
97 STYL
97 SPAR
97 COMF
94 BAG
94 DURA
97 V4M
GM PK
4


96.0
NEW SPORTING 
HH
96 STYL 96 SPAR
96 COMF 96 BAG
96 DURA
96 V4M
MX MX
4


96.0
WALLS FIGHT GEAR
97 STYL 94 SPAR
94 COMF 96 BAG
97 DURA
98 V4M
PR IT
4




95.8
GUARDED COMBAT
Calibre Pro 2.0
97 STYL
95 SPAR
95 COMF
95 BAG
95 DURA
98 V4M
NZ PK
4

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
      videoUrl: "https://www.youtube.com/watch?v=GxRDQ_qTSqs",
      buyUrl: "https://unifiedboxing.com/products/unified-pro-standard-nxt-lvl-sparring-and-heavy-bag-boxing-gloves",
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
      buyUrl: "https://dechafightgear.com/product/dbgvl1-boxing-gloves-pro-performance-3-0-w-burgundy-black/",
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
      videoUrl: "https://www.youtube.com/watch?v=GxRDQ_qTSqs",
      buyUrl: "https://unifiedboxing.com/products/pro-sparring-and-heavy-bag-boxing-glove",
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
      videoUrl: "https://youtu.be/N-Iwg1zKXl8",
      buyUrl: "https://deusboxing.com/product/sparta-lace-glove/",
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
      buyUrl: "https://messengerfightgear.com/store/product/elite-xxq-black-lace-mf-xxq-102/",
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
      buyUrl: "https://hotlinegear.com/product/lace-boxing-gloves/",
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
      buyUrl: "https://bravose.com/collections/titan-grip%E2%84%A2-range/products/titan-grip-splatter-lace",
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
      buyUrl: "https://playerzboxing.com/products/playerz-raider-boxing-gloves",
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
      buyUrl: "https://www.geezersboxing.co.uk/geezers-halo-training-sparring-boxing-gloves-lace",
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
      buyUrl: "https://proamboxing.co.uk/retro-gloves/",
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
      buyUrl: "https://www.everlast.com/products/powerlock2-pro-hook-loop-training-gloves",
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
      buyUrl: "https://www.infinitudefight.com/custom-boxing-gear/",
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
      buyUrl: "https://flowboxing.co.uk/products/titan-velocity-pro-fight",
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
      buyUrl: "https://hitnmove.com/product/horse-hair-gloves-lace-up/",
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
      buyUrl: "https://hitnmove.com/product/all-day-pro-balance-boxing-bag-gloves-lace-up/",
      stars: 5,
      globalNote: 97,
      stats: { STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 98, V4M: 98 },
    },
    {
      brand: "adidas",
      title: "Adispeed",
      img: "/images/gloves/middle/adidas-adispeed.webp",
      country: { designed: "DE", madeIn: "PK" },
      videoUrl: "https://www.youtube.com/watch?v=oMw7IiOTsNo",
      buyUrl: "https://www.fightequipment.fr/products/adidas-adispeed-lace-boxing-gloves?shpxid=cb910f71-6b21-42ed-96e4-4e55ab3e1ee5",
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
      buyUrl: "https://www.boxing-shop.com/gants-dentrainement/gants-de-boxe-dentrainement-adidas-speed-tilt-350-1-cactus-1-1",
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
      buyUrl: "https://phenomboxing.com/collections/sg-210/products/sg-210-pro-sparring-gloves",
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
      buyUrl: "https://messengerfightgear.com/store/product/pro-3-0-edition-xmt-blacl-vel-mf-xmt-300/",
      stars: 5,
      globalNote: 96.3,
      stats: { STYL: 95, COMF: 96, DURA: 97, SPAR: 96, BAG: 95, V4M: 99 },
    },
    {
      brand: "ARES",
      title: "Speciale",
      img: "/images/gloves/middle/ares-speciale.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 95.8,
      stats: { STYL: 96, COMF: 95, DURA: 95, SPAR: 96, BAG: 95, V4M: 97 },
    },
    {
      brand: "NEW SPORTING",
      title: "NEW SPORTING",
      img: "/images/gloves/middle/newsporting.webp",
      country: { designed: "MX", madeIn: "MX" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 95.8,
      stats: { STYL: 96, COMF: 95, DURA: 96, SPAR: 95, BAG: 96, V4M: 97 },
    },
    {
      brand: "BOXEO TM",
      title: "Custom",
      img: "/images/gloves/middle/boxeotm-custom.webp",
      country: { designed: "MX", madeIn: "MX" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 95.6,
      stats: { STYL: 95, COMF: 95, DURA: 96, SPAR: 95, BAG: 96, V4M: 97 },
    },
    {
      brand: "FLY",
      title: "Superlace X",
      img: "/images/gloves/middle/fly-superlace-x.webp",
      country: { designed: "GB", madeIn: "CH" },
      videoUrl: "https://www.youtube.com/watch?v=jRYxdqFXWgU",
      buyUrl: "https://www.fightequipment.fr/collections/fly-boxing-gloves/products/fly-superlace-x-boxing-gloves-black",
      stars: 4,
      globalNote: 95.8,
      stats: { STYL: 95, COMF: 96, DURA: 96, SPAR: 96, BAG: 95, V4M: 97 },
    },
    {
      brand: "HIT N MOVE",
      title: "Agility",
      img: "/images/gloves/middle/hitnmove-agility.webp",
      country: { designed: "US", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 95.8,
      stats: { STYL: 94, COMF: 96, DURA: 96, SPAR: 96, BAG: 95, V4M: 98 },
    },
    {
      brand: "PHENOM",
      title: "SG-202",
      img: "/images/gloves/middle/phenom-sg-202.webp",
      country: { designed: "GB", madeIn: "PK" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 95.8,
      stats: { STYL: 95, COMF: 95, DURA: 96, SPAR: 96, BAG: 95, V4M: 98 },
    },
    {
      brand: "ADIDAS",
      title: "Adispeed Metallic",
      img: "/images/gloves/middle/adidas-adispeed-metallic.webp",
      country: { designed: "GM", madeIn: "PK" },
      videoUrl: "https://www.youtube.com/watch?v=A7rKsYukPRM",
      buyUrl: "https://www.boutique-du-combat.com/gants-de-boxe-speed/1547-450753-gants-de-boxe-adispeed-500.html#/44-taille-12oz/11143-couleur-vert_or",
      stars: 4,
      globalNote: 96.0,
      stats: { STYL: 97, COMF: 97, DURA: 94, SPAR: 97, BAG: 94, V4M: 97 },
    },
    {
      brand: "NEW SPORTING",
      title: "HH",
      img: "/images/gloves/middle/newsporting-hh.webp",
      country: { designed: "MX", madeIn: "MX" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 96.0,
      stats: { STYL: 96, COMF: 96, DURA: 96, SPAR: 96, BAG: 96, V4M: 96 },
    },
    {
      brand: "WALLS FIGHT GEAR",
      title: "WALLS FIGHT GEAR",
      img: "/images/gloves/middle/wallsfightgear.webp",
      country: { designed: "PR", madeIn: "IT" },
      videoUrl: "",
      buyUrl: "",
      stars: 4,
      globalNote: 96.0,
      stats: { STYL: 97, COMF: 94, DURA: 97, SPAR: 94, BAG: 96, V4M: 98 },
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
      buyUrl: "https://www.fightequipment.fr/collections/fly-boxing-gloves/products/fly-superlace-boxing-gloves-white-gold",
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
      buyUrl: "https://www.fightequipment.fr/collections/fly-boxing-gloves/products/fly-superlace-lightning-boxing-gloves-aqua-white",
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
      buyUrl: "https://hitnmove.com/product/all-day-balance-boxing-gloves/",
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
      videoUrl: "https://www.youtube.com/watch?v=L5QNaWB3FaE",
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
      videoUrl: "https://youtu.be/J02CLnEvpKI",
      buyUrl: "https://www.wjapanboxing.com/products/winning-lace-up-boxing-gloves-custom-colors",
      stars: 5,
      globalNote: 96.3,
      stats: { STYL: 95, COMF: 97, DURA: 98, SPAR: 97, BAG: 97, V4M: 94 },
    },
    {
      brand: "WINNING",
      title: "SPECIAL LOGO",
      img: "/images/gloves/superheavy/winning-speciallogo.webp",
      country: { designed: "JP", madeIn: "JP" },
      videoUrl: "https://www.youtube.com/results?search_query=winning%20special%20logo%20boxing%20gloves",
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
      videoUrl: "https://www.youtube.com/watch?v=MzBpu86wQoQ",
      buyUrl: "https://aagsport.com/collections/tfm-8-16-oz-boxing-gloves",
      stars: 5,
      globalNote: 96.1,
      stats: { STYL: 97, COMF: 97, DURA: 97, SPAR: 96, BAG: 96, V4M: 94 },
    },
    {
      brand: "BARRIC",
      title: "BOXING",
      img: "/images/gloves/superheavy/barric-boxing.webp",
      country: { designed: "US", madeIn: "MX" },
      videoUrl: "https://youtu.be/716VHrZao-M",
      buyUrl: "https://barricboxing.com/",
      stars: 4,
      globalNote: 95.6,
      stats: { STYL: 95, COMF: 96, DURA: 97, SPAR: 95, BAG: 96, V4M: 95 },
    },
  ],
  luxury: [
    {
      brand: "DI NARDO",
      title: "The Eminence Range",
      img: "/images/gloves/luxury/dinardo-theeminencerange.webp",
      country: { designed: "IT", madeIn: "IT" },
      videoUrl: "https://www.youtube.com/watch?v=DpdPBPl37XI",
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
      videoUrl: "https://www.youtube.com/results?search_query=custom%20grant%20boxing%20gloves",
      buyUrl: "",
      stars: 2,
      globalNote: 94.8,
      stats: { STYL: 98, COMF: 94, DURA: 95, SPAR: 95, BAG: 95, V4M: 92 },
    },
  ],
};
