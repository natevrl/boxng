import { getCountryCode } from "./countries";

interface GloveStats {
  STYLE: number;
  COMFORT: number;
  DURABILITY: number;
  SPARRING: number;
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
    global_note: 97,
    stats: { STYLE: 94, COMFORT: 97, DURABILITY: 98, SPARRING: 97, BAG: 98, V4M: 98 },
  },
  {
    brand: "ADIDAS",
    title: "ADISPEED TILT 350",
    img: "img.jpg",
    country: { designed: "United Kingdom", madeIn: "United States" },
    countryCode: {
      designed: getCountryCode("United Kingdom")!,
      madeIn: getCountryCode("United States")!,
    },
    stars: 5,
    global_note: 98,
    stats: { STYLE: 96, COMFORT: 97, DURABILITY: 98, SPARRING: 97, BAG: 98, V4M: 98 },
  },
];
