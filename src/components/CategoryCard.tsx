import React from "react";

function CategoryCard({title, p, img}: {title: string; p: string; img: string}): JSX.Element {
  return (
    <div className={`${img} w-[180px] h-[200px] rounded-2xl`}>
      <h1>{title}</h1>
      <p>{p}</p>
    </div>
  );
}

export default CategoryCard;
