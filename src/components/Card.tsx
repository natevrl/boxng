import { glovesData } from "@/src/utils/itemsDb";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";

import React from "react";
import { Button } from "./ui/button";

function StarsRating() {
  function printStars(star: number): JSX.Element[] {
    let i = -1;
    let stars = [];
    while (++i < 5) {
      if (i < star)
        stars.push(
          <li key={i}>
            <MdOutlineStar size={28} />
          </li>
        );
      else
        stars.push(
          <li key={i}>
            <MdOutlineStarBorder size={28} />
          </li>
        );
    }
    return stars;
  }
  return <ul className='flex'>{printStars(glovesData[0].stars)}</ul>;
}

function Card() {
  return (
    <div className='h-[380px] w-[270px] bg-blue-400'>
      {/* top bloc */}
      <div>
        <StarsRating />
        <p>{glovesData[0].brand}</p>
        <p>{glovesData[0].title}</p>
      </div>
      {/* mid bloc */}
      <div className="flex items-center justify-evenly">
        <div className="flex flex-col gap-2">
          <Button>t</Button>
          <Button>x</Button>
        </div>
        {/* glove img */}
        <div className='relative w-[150px] h-[170px] border-green-400 border-2'>
          <Image
            src={glovesData[0].img}
            alt={glovesData[0].title}
            fill
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className=" flex flex-col gap-2">
          {/* flag #1 */}
          <ReactCountryFlag
            svg
            title={glovesData[0].country.designed}
            countryCode={glovesData[0].countryCode.designed}
            style={{
              width: "2em",
              height: "2em",
            }}
          />
          {/* flag #2 */}
          <ReactCountryFlag
            svg
            title={glovesData[0].country.madeIn}
            countryCode={glovesData[0].countryCode.madeIn}
            style={{
              width: "2em",
              height: "2em",
            }}
          />
        </div>
      </div>

      {/* bot bloc */}
    </div>
  );
}

export default Card;
