"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import ReactCountryFlag from "react-country-flag";
import { MdOutlineStarBorder, MdOutlineStar } from "react-icons/md";
import { IoLogoYoutube, IoLogoEuro } from "react-icons/io";
import { useState, useCallback } from "react";

import { glovesData, IGlove, IGloveStats } from "@/src/constants/glovesDb";

function StarsRating({ stars }: { stars: number }): JSX.Element {
  function getStarsWithIcons(star: number): JSX.Element[] {
    let stars = [];
    for (let i = 0; i < 5; i++)
      stars.push(i < star ? <MdOutlineStar size={24} /> : <MdOutlineStarBorder size={24} />);
    return stars;
  }

  return (
    <ul className='flex'>
      {getStarsWithIcons(stars).map((star, i) => (
        <li key={i} className='text-secondary hover:scale-110'>
          {star}
        </li>
      ))}
    </ul>
  );
}

function Stats({ s }: { s: IGloveStats }): JSX.Element {
  const keys = Object.entries(s);
  return (
    <div className='font-knockoutHeavyLight flex justify-around items-center text-sm mobile:text-xs leading-snug tracking-normal mx-4'>
      <div>
        {keys.slice(0, 3).map((key, i) => (
          <p key={i}>
            <span className='text-secondary mr-1 font-knockoutHeavy'>{key[1]}</span> {key[0]}
          </p>
        ))}
      </div>
      <div>
        {keys.slice(3).map((key, i) => (
          <p key={i}>
            <span className='text-secondary mr-1 font-knockoutHeavy'>{key[1]}</span> {key[0]}
          </p>
        ))}
      </div>
    </div>
  );
}

function Card(props: IGlove): JSX.Element {
  const { brand, title, img, country, stars, videoUrl, buyUrl, globalNote, stats } = props;

  const [backgroundSvg, setBackgroundSvg] = useState(false);
  const checkTitleSize: string = title.length > 19 ? "text-sm" : "text-base font-bold";

  const setBackgroundSvgHandler = useCallback((value: boolean) => {
    setBackgroundSvg(value);
  }, []);

  return (
    <div
      className='m-1 relative card-custom-border noise-bg-primary h-[390px] w-[290px] mobile:h-[360px] mobile:w-[260px] flex flex-col justify-between p-4 overflow-hidden hover:scale-105 hover:shadow-none'
      onMouseEnter={() => setBackgroundSvgHandler(true)}
      onMouseLeave={() => setBackgroundSvgHandler(false)}>
      {/* SVG background image */}
      {backgroundSvg && (
        <Image
          src='/images/card-boom-effect.svg'
          alt='card boom effect on hover'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className={`tablet:hidden object-cover object-center absolute -z-10`}
        />
      )}
      {/* top bloc */}
      <div className='flex flex-col justify-center items-center gap-2 z-10'>
        <StarsRating stars={stars} />
        <div>
          <h4 className='text-center font-knockoutHeavyLight text-sm mobile:text-xs uppercase tracking-normal'>
            {brand}
          </h4>
          <h3
            className={`${checkTitleSize} text-center font-knockoutHeavy mobile:text-sm  text-secondary uppercase leading-none`}>
            {title}
          </h3>
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
        <div className='relative w-[150px] h-[160px] mobile:w-[130px] mobile:h-[140px] border-primary card-shadow'>
          <Image
            src={img}
            alt={title}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover object-center'
          />
        </div>
        <div className=' flex flex-col gap-2'>
          {/* flag #1 */}
          <ReactCountryFlag
            svg
            title={country.designed}
            countryCode={country.designed}
            className='flag-size'
          />
          {/* flag #2 */}
          <ReactCountryFlag
            svg
            title={country.madeIn}
            countryCode={country.madeIn}
            className='flag-size'
          />
        </div>
      </div>

      {/* bot bloc */}
      <div>
        <Stats s={stats} />
        <div className='flex justify-center mt-2'>
          <p className='font-knockoutHeavy text-background text-xl bg-secondary rounded-full px-2'>
            {globalNote}
          </p>
        </div>
        {/* vertical line */}
        {/* <div className='absolute left-2/4 bottom-[94px] translate-x-2/4	translate-y-2/4  h-12 w-[1px] bg-primary z-50'></div> */}
      </div>
    </div>
  );
}

export default Card;
