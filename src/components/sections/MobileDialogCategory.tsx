"use client";
import { useState } from "react";
import BeltCard from "@/components/ui/BeltCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categoryData } from "@/constants/categoryDb";
import { Button } from "@/components/ui/button";

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
    <></>
    // <Dialog open={open} onOpenChange={setOpen}>
    //   <DialogTrigger asChild>
    //     <Button variant="outline">categories</Button>
    //   </DialogTrigger>
    //   <DialogContent
    //     className="flex h-5/6 w-5/6 flex-col items-center justify-center gap-4"
    //     aria-describedby={undefined}
    //   >
    //     <DialogHeader>
    //       <DialogTitle>select a category</DialogTitle>
    //     </DialogHeader>
    //     <ScrollArea
    //       type="always"
    //       className="h-full w-full whitespace-nowrap rounded-xl"
    //     >
    //       <div className="flex flex-col items-center justify-center gap-6">
    //         {categoryData.map((item, index) => {
    //           return (
    //             <BeltCard
    //               key={index}
    //               title={item.name}
    //               p={item.depiction}
    //               img={item.img}
    //               funcToGetCategory={funcToGetCategory}
    //               mobileDialogState={{ state: true, toggle: handleOpen }}
    //             />
    //           );
    //         })}
    //       </div>
    //     </ScrollArea>
    //     <DialogFooter className="sm:justify-start">
    //       <DialogClose asChild>
    //         <Button variant="secondary">Close</Button>
    //       </DialogClose>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
  );
}