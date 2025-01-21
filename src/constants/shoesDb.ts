/*

  brand: "Adams",
  title: "V Trainer 2.0",
  img: "/images/shoes/adams-v-trainer-2.0.webp",
  price: 135,
  videoUrl: "",
  buyUrl: "",
  stars: 5,
  globalNote: 96.3,
  stats: { STYL: 95, COMF: 97, DURA: 97, PERF: 97, SOLE: 96, V4M: 96 }
},
{
  brand: "Adidas",
  title: "Speedex Ultra",
  img: "/images/shoes/adidas-speedex-ultra.webp",
  price: 220,
  videoUrl: "",
  buyUrl: "",
  stars: 5,
  globalNote: 96.1,
  stats: { STYL: 97, COMF: 96, DURA: 97, PERF: 96, SOLE: 97, V4M: 94 }
},
{
  brand: "Nike",
  title: "Hyper KO 2.0",
  img: "/images/shoes/nike-hyper-ko-2.0.webp",
  price: 190,
  videoUrl: "",
  buyUrl: "",
  stars: 5,
  globalNote: 96.1,
  stats: { STYL: 98, COMF: 95, DURA: 96, PERF: 97, SOLE: 97, V4M: 94 }
},
{
  brand: "Yammy",
  title: "Flux Mid Boot",
  img: "/images/shoes/yammy-flux-mid-boot.webp",
  price: 150,
  videoUrl: "",
  buyUrl: "",
  stars: 4,
  globalNote: 96.0,
  stats: { STYL: 96, COMF: 97, DURA: 95, PERF: 96, SOLE: 96, V4M: 96 }
}
*/

export interface IShoeStats {
  STYL: number;
  COMF: number;
  DURA: number;
  PERF: number;
  SOLE: number;
  V4M: number;
}


export interface IShoe {
  brand: string;
  title: string;
  img: string;
  stars: number;
  price: number;
  videoUrl: string;
  buyUrl: string;
  globalNote: number;
  stats: IShoeStats;
}



// -- TEMPLATE --
/*
{
  brand: "Fly",
  title: "Storm",
  img: "/images/shoes/fly-storm.webp",
  price: 190,
  videoUrl: "",
  buyUrl: "",
  stars: 5,
  globalNote: 97,
  stats: { STYL: 94, COMF: 97, DURA: 98, PERF: 97, SOLE: 98, V4M: 95 }
},
  */

export const shoesData: IShoe[] = [
  {
    brand: "Fly",
    title: "Storm",
    img: "/images/shoes/fly-storm.webp",
    price: 190,
    videoUrl: "",
    buyUrl: "",
    stars: 5,
    globalNote: 97,
    stats: { STYL: 94, COMF: 97, DURA: 98, PERF: 97, SOLE: 98, V4M: 95 }
  },
  {
    brand: "Adams",
    title: "V Trainer 2.0",
    img: "/images/shoes/adamsboxing-vtrainer2.webp",
    price: 135,
    videoUrl: "",
    buyUrl: "",
    stars: 5,
    globalNote: 96.3,
    stats: { STYL: 95, COMF: 97, DURA: 97, PERF: 97, SOLE: 96, V4M: 96 }
  },
  {
    brand: "Adidas",
    title: "Speedex Ultra",
    img: "/images/shoes/adidas-speedexultra.webp",
    price: 220,
    videoUrl: "",
    buyUrl: "",
    stars: 5,
    globalNote: 96.1,
    stats: { STYL: 97, COMF: 96, DURA: 97, PERF: 96, SOLE: 97, V4M: 94 }
  },
  {
    brand: "Nike",
    title: "Hyper KO 2.0",
    img: "/images/shoes/nike-hyperko2.webp",
    price: 190,
    videoUrl: "",
    buyUrl: "",
    stars: 5,
    globalNote: 96.1,
    stats: { STYL: 98, COMF: 95, DURA: 96, PERF: 97, SOLE: 97, V4M: 94 }
  },
  {
    brand: "Yammy",
    title: "Flux Mid Boot",
    img: "/images/shoes/yammi-fluxmidboot.webp",
    price: 150,
    videoUrl: "",
    buyUrl: "awdwad",
    stars: 4,
    globalNote: 96.0,
    stats: { STYL: 96, COMF: 97, DURA: 95, PERF: 96, SOLE: 96, V4M: 96 }
  },
  {
    brand: "Minotaur",
    title: "",
    img: "/images/shoes/minotaur.webp",
    price: 120,
    videoUrl: "",
    buyUrl: "",
    stars: 4,
    globalNote: 96.0,
    stats: { STYL: 95, COMF: 97, DURA: 95, PERF: 97, SOLE: 95, V4M: 97 }
  },
  {
    brand: "Adams Boxing",
    title: "O Boots",
    img: "/images/shoes/adamsboxing-oboots.webp",
    price: 140,
    videoUrl: "",
    buyUrl: "",
    stars: 4,
    globalNote: 96.0,
    stats: { STYL: 97, COMF: 97, DURA: 94, PERF: 97, SOLE: 95, V4M: 96 }
  },
  {
    brand: "Everlast",
    title: "Elite",
    img: "/images/shoes/everlast-elite.webp",
    price: 100,
    videoUrl: "",
    buyUrl: "",
    stars: 4,
    globalNote: 95.8,
    stats: { STYL: 94, COMF: 96, DURA: 96, PERF: 95, SOLE: 97, V4M: 97 }
  },
  {
    brand: "Nike",
    title: "Tawa",
    img: "/images/shoes/nike-tawa.webp",
    price: 175,
    videoUrl: "",
    buyUrl: "",
    stars: 4,
    globalNote: 95.8,
    stats: { STYL: 96, COMF: 96, DURA: 96, PERF: 95, SOLE: 97, V4M: 95 }
  },
  {
    brand: "Adams Boxing",
    title: "V Pro",
    img: "/images/shoes/adamsboxing-vpro.webp",
    price: 120,
    videoUrl: "",
    buyUrl: "",
    stars: 4,
    globalNote: 95.6,
    stats: { STYL: 94, COMF: 97, DURA: 95, PERF: 97, SOLE: 95, V4M: 96 }
  },
  {
    brand: "Adams Boxing",
    title: "v Trainer",
    img: "/images/shoes/adamsboxing-vtrainer.webp",
    price: 120,
    videoUrl: "",
    buyUrl: "",
    stars: 4,
    globalNote: 95.6,
    stats: { STYL: 94, COMF: 97, DURA: 96, PERF: 96, SOLE: 95, V4M: 96 }
  },
  {
    brand: "Venum",
    title: "Elite (new version)",
    img: "/images/shoes/venum-elite.webp",
    price: 190,
    videoUrl: "",
    buyUrl: "",
    stars: 4,
    globalNote: 95.6,
    stats: { STYL: 98, COMF: 94, DURA: 95, PERF: 96, SOLE: 96, V4M: 95 }
  },
  {
    brand: "Adidas",
    title: "Box Hog4",
    img: "/images/shoes/adidas-boxhog4.webp",
    price: 100,
    videoUrl: "",
    buyUrl: "",
    stars: 3,
    globalNote: 95.5,
    stats: { STYL: 96, COMF: 95, DURA: 96, PERF: 97, SOLE: 93, V4M: 96 }
  },
  {
    brand: "Adidas",
    title: "Box Hog3",
    img: "/images/shoes/adidas-boxhog3.webp",
    price: 100,
    videoUrl: "",
    buyUrl: "",
    stars: 3,
    globalNote: 95.5,
    stats: { STYL: 96, COMF: 95, DURA: 96, PERF: 96, SOLE: 93, V4M: 97 }
  },
  {
    brand: "Nike",
    title: "Machomai 2",
    img: "/images/shoes/nike-machomai2.webp",
    price: 160,
    videoUrl: "",
    buyUrl: "",
    stars: 3,
    globalNote: 95.3,
    stats: { STYL: 96, COMF: 96, DURA: 94, PERF: 96, SOLE: 94, V4M: 96 }
  }
]