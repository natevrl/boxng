"use client";
import { useState } from "react";
import BeltCard from "@/components/ui/BeltCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categoryData } from "@/constants/categoryDb";
import { Button } from "@/components/ui/button";
import Dialog from "../ui/Dialog";

interface CategorySliderProps {
  funcToGetCategory: (category: string) => void;
}

export default function MobileDialogCategory({
  funcToGetCategory,
}: CategorySliderProps): JSX.Element {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((curr) => !curr);
  }

  return (
    <Dialog
      title="categories menu"
      triggerButton={<Button variant="secondary">Categories</Button>}
      className="h-5/6 w-5/6 max-w-screen-xl"
    >
      <section className="h-full w-full rounded-xl border-2 border-popover">
        <ScrollArea
          type="always"
          className="h-full w-full whitespace-nowrap rounded-xl"
        >
          <div className="flex flex-col items-center justify-center gap-6 p-6">
            {categoryData.map((item, index) => {
              return (
                <BeltCard
                  key={index}
                  title={item.name}
                  p={item.depiction}
                  img={item.img}
                  funcToGetCategory={funcToGetCategory}
                  mobileDialogState={{ state: true, toggle: handleOpen }}
                />
              );
            })}
          </div>
        </ScrollArea>
      </section>
    </Dialog>
  );
}
