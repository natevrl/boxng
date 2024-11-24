interface Category {
  name: string;
  depiction: string;
  img: string;
}

export const categoryData: Category[] = [
  {
    name: "feather",
    depiction: "€30 to €60",
    img: "/images/belts/feather.webp",
  },
  {
    name: "welter",
    depiction: "€60 to €120",
    img: "/images/belts/welter.webp",
  },
  {
    name: "middle",
    depiction: "€120 to €250",
    img: "/images/belts/middle.webp",
  },
  {
    name: "heavy",
    depiction: "€250 to €500",
    img: "/images/belts/heavy.webp",
  },
  {
    name: "superheavy",
    depiction: "€500 to €950",
    img: "/images/belts/superheavy.webp",
  },
  {
    name: "luxury",
    depiction: "€950 and more",
    img: "/images/belts/luxury.webp",
  },
];