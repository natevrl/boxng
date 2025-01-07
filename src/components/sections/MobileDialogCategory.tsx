"use client";
import { useState } from "react";
import BeltCard from "@/components/ui/BeltCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categoryData } from "@/constants/categoryDb";
import { Button } from "@/components/ui/button";
import Dialog from "../ui/Dialog";



export default function MobileDialogCategory(): JSX.Element {

  const [isDialogOpen, setDialogIsOpen] = useState(false);

  function handleOpen() {
    setDialogIsOpen((state) => !state);
  }

  return (
    <Dialog
      title="categories menu"
      triggerButton={<Button variant="secondary">Categories</Button>}
      className="h-5/6 w-5/6 max-w-screen-xl"
      handleCloseOnCategorySelect={{state: isDialogOpen, func: handleOpen}}
    >
      <section className="h-full w-full rounded-xl border-2 border-popover">
        <ScrollArea
          type="always"
          className="h-full w-full whitespace-nowrap rounded-xl"
        >
          <div className="flex flex-col items-center justify-center">
            {categoryData.map((item, index) => {
              return (
                <BeltCard
                  key={index}
                  title={item.name}
                  p={item.depiction}
                  img={item.img}
                  funcToCloseDialog={handleOpen}
                />
              );
            })}
          </div>
        </ScrollArea>
      </section>
    </Dialog>
  );
}
