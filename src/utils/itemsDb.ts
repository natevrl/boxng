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
  countryCode: CountryCode;
  stars: number;
  global_note: number;
  stats: GloveStats;
}

export const glovesData: Glove[] = [
  {
    brand: "HIT N MOVE",
    title: "All Day Balance",
    img: "/images/hitnmove-suvari.webp",
    country: { designed: "United States", madeIn: "Pakistan" },
    countryCode: {
      designed: getCountryCode("United States")!,
      madeIn: getCountryCode("Pakistan")!,
    },
    stars: 4,
    global_note: 97.1,
    stats: { STYL: 94, COMF: 97, DURA: 98, SPAR: 97, BAG: 98, V4M: 98 },
  },
];
