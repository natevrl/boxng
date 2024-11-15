"use client";
import { glovesData } from "@/src/utils/itemsDb";
import Image from "next/image";
import { Button } from "./ui/button";
import ReactCountryFlag from "react-country-flag";
import { MdOutlineStarBorder, MdOutlineStar } from "react-icons/md";
import { IoLogoYoutube, IoLogoEuro } from "react-icons/io";
import { useState } from "react";

function StarsRating(): JSX.Element {
  function getStarsWithIcons(star: number): JSX.Element[] {
    let stars = [];
    for (let i = 0; i < 5; i++)
      stars.push(i < star ? <MdOutlineStar size={28} /> : <MdOutlineStarBorder size={28} />);
    return stars;
  }

  return (
    <ul className='flex'>
      {getStarsWithIcons(glovesData[0].stars).map((star, i) => (
        <li key={i} className='hover:scale-110'>
          {star}
        </li>
      ))}
    </ul>
  );
}

function Stats(): JSX.Element {
  const keys = Object.entries(glovesData[0].stats);
  return (
    <div className='flex justify-around items-center text-sm leading-4 border-t-[1px] border-t-primary pt-2 mx-4'>
      <div>
        {keys.slice(0, 3).map((key, i) => (
          <p key={i} className='font-bold truncate text-clip max-w-[9ch] leading-snug'>
            <span className='text-secondary mr-1'>{key[1]}</span> {key[0]}
          </p>
        ))}
      </div>
      <div>
        {keys.slice(3).map((key, i) => (
          <p key={i} className='font-bold truncate max-w-[9ch] leading-snug'>
            <span className='text-secondary mr-1'>{key[1]}</span> {key[0]}
          </p>
        ))}
      </div>
    </div>
  );
}

function Card() {
  const [backgroundSvgHandler, setBackgroundSvgHandler] = useState(false);

  return (
    <div className='relative h-[380px] w-[280px] flex flex-col justify-between pt-2 card-custom-border hover:scale-105'>
      {/* SVG background image */}
      {backgroundSvgHandler && (
        <Image
          src='/images/card-boom-effect.svg'
          alt='card boom effect on hover'
          fill
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className={`object-cover object-center absolute -z-10 ${
            backgroundSvgHandler ? "rotate-animation" : ""
          }`}
        />
      )}
      {/* top bloc */}
      <div className='flex flex-col justify-center items-center gap-2 z-10'>
        <StarsRating />
        <div>
          <h3 className='text-center font-bold text-sm uppercase'>{glovesData[0].brand}</h3>
          <h4 className='text-center font-bold text-secondary uppercase'>{glovesData[0].title}</h4>
        </div>
      </div>
      {/* mid bloc */}
      <div className='flex items-center justify-evenly z-10'>
        <div className='flex flex-col gap-1 max-w-10'>
          <Button variant='secondary' className='rounded-t-full py-5'>
            <IoLogoYoutube className='icon-size' />
          </Button>
          <Button className='rounded-b-full bg-accent hover:bg-accent/80'>
            <IoLogoEuro className='icon-size' />
          </Button>
        </div>
        {/* glove img */}
        <div className='relative w-[150px] h-[160px] border-primary img-shadow'>
          <Image
            src={glovesData[0].img}
            alt={glovesData[0].title}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover object-center'
            onMouseEnter={() => setBackgroundSvgHandler(true)}
            onMouseLeave={() => setBackgroundSvgHandler(false)}
          />
        </div>
        <div className=' flex flex-col gap-2'>
          {/* flag #1 */}
          <ReactCountryFlag
            svg
            title={glovesData[0].country.designed}
            countryCode={glovesData[0].countryCode.designed}
            className='flag-size'
          />
          {/* flag #2 */}
          <ReactCountryFlag
            svg
            title={glovesData[0].country.madeIn}
            countryCode={glovesData[0].countryCode.madeIn}
            className='flag-size'
          />
        </div>
      </div>

      {/* bot bloc */}
      <div>
        <Stats />
        <div className='flex justify-center'>
          <p className='global-note-shadow  font-bold text-secondary text-2xl px-2'>
            {glovesData[0].global_note}
          </p>
        </div>
      </div>
      <div className='absolute left-2/4 bottom-[75px] translate-x-2/4	translate-y-2/4  h-12 w-[1px] bg-primary z-50	'></div>
    </div>
  );
}

export default Card;
