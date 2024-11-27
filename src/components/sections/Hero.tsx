import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { GiBoxingGlove, GiConverseShoe } from "react-icons/gi";

function RingImg(): JSX.Element {
  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: "url('/images/hero/ring.webp')",
        backgroundPosition: "bottom",
        backgroundSize: "auto",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}

function MainCharImg(): JSX.Element {
  return (
    <div className="absolute bottom-0 right-[10%] z-20 h-[500px] w-[600px] mobile:w-screen tablet:right-0 tablet:h-[300px] desktop:h-[400px]">
      <Image
        src="/images/hero/hero-main-char.svg"
        alt="hero image"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain tablet:object-right-bottom"
      />
    </div>
  );
}

function LittleCharImg(): JSX.Element {
  return (
    <div className="absolute bottom-48 right-[5%] z-10 h-[400px] w-[300px] tablet:hidden min-qhd:right-[6%] min-4k:right-[7%]">
      <Image
        src="/images/hero/little-char.svg"
        alt="hero image"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

function HeroBackground(): JSX.Element {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
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
      <section className="h-screen-nav min-tablet:justify-center flex flex-col tablet:items-center">
        <div className="flex h-2/3 flex-col items-start justify-center gap-6 text-center tablet:items-center">
          <h1 className="font-knockoutHeavy text-7xl uppercase leading-none mobile:!text-4xl tablet:text-5xl">
            born <span className="text-secondary">2 ring</span>
          </h1>
          <h2 className="font-primary text-2xl italic leading-none tracking-normal text-secondary tablet:text-lg">
            "Discover top-rated boxing equipment"
          </h2>
          <div className="flex gap-4">
            <button className="icon-shadow rounded-full bg-background p-2 text-secondary">
              <GiBoxingGlove size={48} className="svg-icon" />
            </button>
            <button className="icon-shadow rounded-full bg-background p-2 text-secondary">
              <GiConverseShoe size={48} className="svg-icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
