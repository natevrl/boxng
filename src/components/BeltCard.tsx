import React from "react";

interface BeltCardProps {
  title: string;
  p: string;
  img: string;
  funcToGetCategory: (title: string) => void;
}

function BeltCard({ title, p, img, funcToGetCategory }: BeltCardProps): JSX.Element {
  return (
    <div className={`${img} w-[180px] h-[100px] rounded-2xl`} onClick={() => funcToGetCategory(title)}>
      <h1>{title}</h1>
      <p>{p}</p>
    </div>
  );
}

export default BeltCard;
