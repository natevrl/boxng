import { useEffect, useState } from "react";

import BeltCard from "@/components/ui/BeltCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { categoryData } from "@/constants/categoryDb";
import MobileDialogCategory from "@/components/sections/MobileDialogCategory";
import HelperDialog from "./HelperDialog";



function CategorySlider(): JSX.Element {


  return (
    <>
      <section className="flex items-center gap-4 tablet:justify-center">
        {/* mobile */}
        <div className="flex items-end gap-4 min-tbl:hidden">
          <MobileDialogCategory />
          <HelperDialog />
        </div>
        {/* desktop */}
        <div className="flex h-full w-60 flex-col items-center gap-4 py-8 tablet:hidden">
          <h1>Select Category</h1>
          <ScrollArea
            type="always"
            className="w-full whitespace-nowrap rounded-xl"
          >
            <div className="flex flex-col items-center justify-center">
              {categoryData.map((item, index) => {
                return (
                  <BeltCard
                    key={index}
                    title={item.name}
                    p={item.depiction}
                    img={item.img}
                  />
                );
              })}
            </div>
          </ScrollArea>
          <HelperDialog />
        </div>
        <Separator
          className="h-full bg-primary tablet:hidden"
          orientation="vertical"
        />
      </section>
    </>
  );
}

export default CategorySlider;
