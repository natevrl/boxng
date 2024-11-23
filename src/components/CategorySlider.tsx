"use client";
import React from "react";
import BeltCard from "./BeltCard";
import {ScrollArea, ScrollBar} from "@/src/components/ui/scroll-area";
import {Separator} from "@/src/components/ui/separator";

interface CategorySliderProps {
  funcToGetCategory: (category: string) => void;
}

function CategorySlider({funcToGetCategory}: CategorySliderProps): JSX.Element {
  return (
    <section className="flex gap-4 items-center">
      <div className="h-1/2 w-52 flex flex-col items-center gap-4">
        <h1>Select Category</h1>
        <ScrollArea type="always" className="w-full rounded-xl whitespace-nowrap">
          <div className="flex flex-col gap-6 justify-center items-center bg-popover">
            {categoryData.map((item, index) => {
              return (
                <BeltCard
                  key={index}
                  title={item.name}
                  p={item.depiction}
                  img={item.img}
                  funcToGetCategory={funcToGetCategory}
                />
              );
            })}
          </div>
        </ScrollArea>

        {/* 
        Ce boutton va ouvrir une modal avec : 
            --> Une description claire des categorie (les prix),
            --> Comment les gants sont notés (img box2fit)
            --> Une description de chacune des stats 
        */}
        <button>Helper</button>
      </div>
      <Separator className="h-full bg-primary" orientation="vertical" />
    </section>
  );
}

interface Category {
  name: string;
  depiction: string;
  img: string;
}

const categoryData: Category[] = [
  {
    name: "feather",
    depiction: "€30 to €60",
    img: "bg-red-400",
  },
  {
    name: "welter",
    depiction: "€60 to €120",
    img: "bg-orange-400",
  },
  {
    name: "middle",
    depiction: "€120 to €250",
    img: "bg-indigo-400",
  },
  {
    name: "heavy",
    depiction: "€250 to €500",
    img: "bg-blue-400",
  },
  {
    name: "super_heavy",
    depiction: "€500 to €950",
    img: "bg-green-400",
  },
  {
    name: "luxury",
    depiction: "€950 and more",
    img: "bg-purple-400",
  },
];

export default CategorySlider;
