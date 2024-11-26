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
    setIsInCard(state => !state);
  }

  return (
    <div
      className='relative w-[165px] h-[180px]'
      onClick={() => {
        funcToGetCategory(title);
        if (mobileDialogState.state) mobileDialogState.toggle();
      }}
      onMouseEnter={handleIsInCard}
      onMouseLeave={handleIsInCard}>
      {isInCard && (
        <div className='absolute inset-1 z-10 bg-popover opacity-90 cursor-pointer rounded-xl p-4 flex items-center justify-center flex-col text-center text-sm'>
          <p className='text-xs mb-1'>category</p>
          <h5 className='font-bold'>{title}</h5>
          <Separator className='w-full h-px  bg-primary my-4' orientation='horizontal' />
          <p className='text-xs mb-1'>price</p>
          <h6 className='font-bold'>{p}</h6>
        </div>
      )}
      <Image
        src={img}
        alt={title}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </div>
  );
}

export default BeltCard;
