import React, { useState } from "react";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

interface BeltCardProps {
  title: string;
  p: string;
  img: string;
  funcToGetCategory: (title: string) => void;
  mobileDialogState: { state: boolean; toggle: () => void };
}

function BeltCard({
  title,
  p,
  img,
  funcToGetCategory,
  mobileDialogState,
}: BeltCardProps): JSX.Element {
  const [isInCard, setIsInCard] = useState(false);

  function handleIsInCard() {
    setIsInCard((state) => !state);
  }

  return (
    <div
      className="relative h-[177px] w-[165px]"
      onClick={() => {
        funcToGetCategory(title);
        if (mobileDialogState.state) mobileDialogState.toggle();
      }}
      onMouseEnter={handleIsInCard}
      onMouseLeave={handleIsInCard}
    >
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
      <Image
        src={img}
        alt={title}
        priority
        loading="eager"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default BeltCard;
