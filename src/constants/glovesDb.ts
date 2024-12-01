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

/*
FEATHER :
94.6
PLAYERZ 
Spartech
UK PK
94 STYL 94 SPAR
94 COMF 93 BAG
94 DURA
99 V4M
2


93.6
UNIFIED BOXING 
NXT LVL
UK PK
93 STYL
93 SPAR
93 COMF
93 BAG
93 DURA
97 V4M
0


92.8
DECHA
TH TH
92 STYL
92 SPAR
92 COMF
92 BAG
93 DURA
96 V4M
0


92.8
PLAYERZ 
Crown
UK PK
92 STYL 92 SPAR
92 COMF
93 BAG
92 DURA
96 V4M
0


92.6
UNIFIED BOXING
PRO STANDARD ELITE
UK PK
92 STYL
92 SPAR
92 COMF
92 BAG
92 DURA
96 V4M
0

 */

/*
WELTER

96.0
DEUS Sparta
UK PK
94 STYL 96 SPAR
96 COMF 95 BAG
96 DURA
99 V4M
4


95.5
MESSENGER
Elite Edition XXQ 
PK PK
93 STYL 95 SPAR
95 COMF 95 BAG
96 DURA
99 V4M
3


95.5
HOTLINE
JP PK
94 STYL 95 SPAR
95 COMF 95 BAG
96 DURA 98 V4M
3


95.3
BRAVOSE 
Titan Grip
UK PK
95 STYL
94 SPAR
95 COMF
94 BAG
95 DURA
99 V4M
3



95.1
PLAYERZ 
Raider
UK PK
96 STYL 94 SPAR
95 COMF 95 BAG
95 DURA 96 V4M TOTAL 571
3






94.6
GEEZERS 
Halo
UK PK
94 STYL
94 SPAR
95 COMF
95 BAG
95 DURA
95 V4M
2



94.1
PRO-AM
Retro
UK PK
93 STYL 94 SPAR
94 COMF
94 BAG
94 DURA
96 V4M
1


94.0
EVERLAST
Powerlock 2 Leather
US IN
94 STYL
93 SPAR
94 COMF 94 BAG
94 DURA
95 V4M
0




93.8
INFINITUDE
-
CA PK
94 STYL
94 SPAR
93 COMF
93 BAG
92 DURA
97 V4M
0



93.8
TITAN 
Velocity
UK PK
93 STYL
94 SPAR
93 COMF
93 BAG
95 DURA
95 V4M
0

heavy:


96.8
FLY Superlace Lightning
UK UK
98 STYL 98 SPAR
98 COMF
96 BAG
96 DURA
95 V4M
5



96.6
FLY
Superlace
UK UK
96 STYL
98 SPAR
98 COMF
96 BAG
97 DURA
95 V4M
5



96.6
HIT N MOVE
Balance
USA PK
95 STYL
97 SPAR
97 COMF
97 BAG
96 DURA
98 V4M
5



96.5
WINNING MS
JP JP
94 STYL 97 SPAR
97 COMF
97 BAG
98 DURA
96 V4M
5



96.0
ROCKKICK
FR FR
97 STYL
96 SPAR
96 COMF 96 BAG
96 DURA
95 V4M
4

*/



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
