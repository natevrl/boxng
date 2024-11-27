interface Category {
  name: string;
  depiction: string;
  details: string;
  img: string;
}

export const categoryData: Category[] = [
  {
    name: "feather",
    depiction: "€30 to €60",
    details:
      "The feather category is the cheapest category. It is perfect for beginners or people who want to train without spending too much money.",
    img: "/images/belts/feather.webp",
  },
  {
    name: "welter",
    depiction: "€60 to €120",
    details:
      "The welter category is the intermediate category. It is perfect for people who want to train with good quality gloves without spending too much money.",
    img: "/images/belts/welter.webp",
  },
  {
    name: "middle",
    depiction: "€120 to €250",
    details:
      "The middle category is the intermediate category. It is perfect for people who want to train with good quality gloves without spending too much money.",
    img: "/images/belts/middle.webp",
  },
  {
    name: "heavy",
    depiction: "€250 to €500",
    details:
      "The heavy category is the intermediate category. It is perfect for people who want to train with good quality gloves without spending too much money.",
    img: "/images/belts/heavy.webp",
  },
  {
    name: "superheavy",
    depiction: "€500 to €950",
    details:
      "The superheavy category is the intermediate category. It is perfect for people who want to train with good quality gloves without spending too much money.",
    img: "/images/belts/superheavy.webp",
  },
  {
    name: "luxury",
    depiction: "€950 and more",
    details:
      "The luxury category is the intermediate category. It is perfect for people who want to train with good quality gloves without spending too much money.",
    img: "/images/belts/luxury.webp",
  },
];
