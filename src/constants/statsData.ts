
interface IStats {
  name: string;
  abbreviation: string;
  details: string;
}


export const statsData: IStats[] = [
  {
    name: "Style",
    abbreviation: "STYL",
    details:
      "Style is how cool and attractive the gloves look when you wear them.",
  },
  {
    name: "Comfort",
    abbreviation: "COMF",
    details:
    "Comfort means how nice and cozy the gloves feel on your hands during long training sessions.",
  },
  {
    name: "Durability",
    abbreviation: "DURA",
    details:
    "Durability tells you how strong and long-lasting the gloves are, so you don't have to buy new ones often.",
  },
  {
    name: "Sparring",
    abbreviation: "SPAR",
    details:
    "Sparring is about how well the gloves protect your hands and your partner during practice fights.",
  },
  {
    name: "Bag Work",
    abbreviation: "BAG",
    details:
    "Bag Work shows how good the gloves are for hitting punching bags without hurting your hands.",
  },
  {
    name: "Value for Money",
    abbreviation: "V4M",
    details:
    "Value for Money means getting great gloves at a price that is worth it.",
  },
];