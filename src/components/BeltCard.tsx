import React, { useState } from "react";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

interface BeltCardProps {
  title: string;
  p: string;
  img: string;
  funcToGetCategory: (title: string) => void;
}

function BeltCard({ title, p, img, funcToGetCategory }: BeltCardProps): JSX.Element {
  const [isInCard, setIsInCard] = useState(false);
  function handleIsInCard() {
    setIsInCard(state => !state);
  }

  console.log(String(isInCard));

  return (
    <div
      className='relative w-[165px] h-[180px]'
      onClick={() => funcToGetCategory(title)}
      onMouseEnter={handleIsInCard}
      onMouseLeave={handleIsInCard}>
      {isInCard && <div className='absolute inset-1 z-10 bg-popover opacity-90 rounded-xl p-4 flex items-center justify-center flex-col text-center text-sm'>
        <h5>category</h5>
        <p>{title}</p>
        <Separator className='w-full h-px  bg-primary mx-2' orientation='horizontal' />
        <h6>price</h6>
        <p>{p}</p>
      </div>}
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
