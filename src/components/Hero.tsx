import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { GiBoxingGlove, GiConverseShoe } from "react-icons/gi";

function RingImg(): JSX.Element {
  return (
    <div
      className='w-full h-full'
      style={{
        backgroundImage: "url('/images/ring.png')",
        backgroundPosition: "bottom",
        backgroundSize: "auto",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}

function MainCharImg(): JSX.Element {
  return (
    <div className='absolute z-20 bottom-0 right-[10%]  w-[600px] h-[500px] desktop:h-[400px] tablet:h-[300px] tablet:right-0 mobile:w-screen '>
      <Image
        src='/images/hero-main-char.svg'
        alt='hero image'
        fill
        priority
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='object-contain tablet:object-right-bottom'
      />
    </div>
  );
}

function LittleCharImg(): JSX.Element {
  return (
    <div className='absolute z-10 bottom-48 right-[5%] w-[300px] h-[400px]  tablet:hidden min-qhd:right-[6%] min-4k:right-[7%]'>
      <Image
        src='/images/little-char-2.svg'
        alt='hero image'
        fill
        priority
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </div>
  );
}

function HeroBackground(): JSX.Element {
  return (
    <div className='absolute inset-0 -z-10 opacity-70'>
      <RingImg />
      <MainCharImg />
      <LittleCharImg />
    </div>
  );
}

function Hero(): JSX.Element {
  return (
    <>
      <HeroBackground />
      <section className='h-screen-nav flex flex-col tablet:items-center min-tablet:justify-center'>
        <div className='flex flex-col gap-6 items-start tablet:items-center text-center h-2/3 justify-center'>
          <h1 className='text-7xl tablet:text-5xl mobile:!text-4xl leading-none uppercase font-knockoutHeavy'>
            born <span className='text-secondary'>2 ring</span>
          </h1>
          <h2 className='font-primary leading-none text-2xl tablet:text-lg text-secondary italic tracking-normal'>
            "Discover top-rated boxing equipment"
          </h2>
          <div className="flex gap-4">
            <button className='icon-shadow rounded-full p-2 text-secondary bg-background'>
              <GiBoxingGlove size={48} className='svg-icon' />
            </button>
            <button className='icon-shadow rounded-full p-2 text-secondary bg-background'>
              <GiConverseShoe size={48} className='svg-icon' />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
