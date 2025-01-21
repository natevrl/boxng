import React, { useState } from "react";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";
import { useStore } from "@/src/hooks/useStore";

interface BeltCardProps {
  title: string;
  p: string;
  img: string;
  funcToCloseDialog?: () => void;
  isPriority?: boolean;
}

function BeltCard({
  title,
  p,
  img,
  funcToCloseDialog,
  isPriority=false,
}: BeltCardProps): JSX.Element {
  const [isInCard, setIsInCard] = useState(false);
  const category = useStore();

  function handleIsInCard() {
    setIsInCard((state) => !state);
  }

  const peintActiveCategory =
    title === category.selectedCategory ? isInCard ? "selected-category-bg" : "selected-category-bg before:bg-popover" : "";

  return (
    <div
      className={`relative ${peintActiveCategory} p-3 m-2`}
      onClick={() => {
        category.updateCategory(title);
        if (funcToCloseDialog) funcToCloseDialog();
      }}
    >
      <div
        className="relative h-[177px] w-[165px]"
        onMouseEnter={handleIsInCard}
        onMouseLeave={handleIsInCard}
      >
        <Image
          src={img}
          alt={title}
          fill
          priority={isPriority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />

        {isInCard && (
          <div className="absolute inset-1 z-10 flex cursor-pointer flex-col items-center justify-center rounded-xl bg-popover p-4 text-center text-sm opacity-90">
            <p className="mb-1 text-xs">category</p>
            <h5 className="font-bold">{title}</h5>
            <Separator
              className="my-4 h-px w-full bg-primary"
              orientation="horizontal"
            />
            <p className="mb-1 text-xs">price (€)</p>
            <h6 className="font-bold">{p}</h6>
          </div>
        )}
      </div>
    </div>
  );
}

export default BeltCard;
