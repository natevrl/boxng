"use client";
import React from "react";
import BeltCard from "./BeltCard";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { Separator } from "@/src/components/ui/separator";
import { categoryData } from "@/src/constants/categoryDb";
import { IoMdHelpCircle } from "react-icons/io";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";

interface CategorySliderProps {
  funcToGetCategory: (category: string) => void;
}

function HelperDialogButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <IoMdHelpCircle
          size={40}
          className='text-popover icon-with-border rounded-full bg-background icon-shadow'
        />
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'></div>
          <Button type='submit' size='sm' className='px-3'>
            <span className='sr-only'>Copy</span>
          </Button>
        </div>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function CategorySlider({ funcToGetCategory }: CategorySliderProps): JSX.Element {
  return (
    <section className='flex gap-4 items-center'>
      <div className='h-full py-8 w-60 flex flex-col items-center gap-4'>
        <h1>Select Category</h1>
        <ScrollArea type='always' className='w-full rounded-xl whitespace-nowrap'>
          <div className='flex flex-col gap-6 justify-center items-center'>
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
        <HelperDialogButton />
      </div>
      <Separator className='h-full bg-primary' orientation='vertical' />
    </section>
  );
}

export default CategorySlider;
