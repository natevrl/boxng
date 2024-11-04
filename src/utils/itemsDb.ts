interface GloveStats {
  STYLE: number;
  COMFORT: number;
  DURABILITY: number;
  SPARRING: number;
  BAG: number;
  V4M: number;
}

interface Glove {
  brand: string;
  glove_title: string;
  glove_img: string;
  made_in: string[];
  Star: number;
  global_note: number;
  stats: GloveStats;
}

export const glovesData: Glove[] = [
  {
    brand: "HIT N MOVE",
    glove_title: "All Day Balance",
    glove_img: "img.jpg",
    made_in: ["paskistan.png", "usa.png"],
    Star: 4,
    global_note: 97,
    stats: { STYLE: 94, COMFORT: 97, DURABILITY: 98, SPARRING: 97, BAG: 98, V4M: 98 },
  },
  {
    brand: "ADIDAS",
    glove_title: "ADISPEED TILT 350",
    glove_img: "img.jpg",
    made_in: ["Uk.png", "usa.png"],
    Star: 5,
    global_note: 98,
    stats: { STYLE: 9, COMFORT: 97, DURABILITY: 98, SPARRING: 97, BAG: 98, V4M: 98 },
  },
];
