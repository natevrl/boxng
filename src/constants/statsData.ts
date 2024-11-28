
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
      "It is the first impression you have of the gloves.",
  },
  {
    name: "Comfort",
    abbreviation: "COMF",
    details:
      "You will wear them for a long time.",
  },
  {
    name: "Durability",
    abbreviation: "DURA",
    details:
      "You don't want to buy new gloves every month.",
  },
  {
    name: "Sparring",
    abbreviation: "SPAR",
    details:
      "You need good gloves to protect your hands and your sparring partner.",
  },
  {
    name: "Bag Work",
    abbreviation: "BAG",
    details:
      "?",
  },
  {
    name: "Value for Money",
    abbreviation: "V4M",
    details:
      "You want to buy good gloves for a good price.",
  },
];