import Image from "next/image";
import React from "react";
import {Button} from "./ui/button";

function RingImg(): JSX.Element {
  return (
    <div
      className="w-full h-full"
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
    <div className="absolute w-[600px] h-[500px] bottom-0 right-[10%] mobile:w-screen tablet:right-0 z-20">
      <Image
        src="/images/hero-main-char.svg"
        alt="hero image"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="tablet:object-cover"
      />
    </div>
  );
}

function LittleCharImg(): JSX.Element {
  return (
    <div className="absolute w-[300px] h-[400px] bottom-48 right-[5%] tablet:hidden desktop:right-0 z-10 min-qhd:right-[6%] min-4k:right-[7%]">
      <Image
        src="/images/little-char-2.svg"
        alt="hero image"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="tablet:object-fill"
      />
    </div>
  );
}

function HeroBackground(): JSX.Element {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
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
      <section className="min-h-[calc(100vh-80px)] flex flex-col mt-20">
        <div className="flex flex-col gap-6 items-start">
          <h1 className="h1 uppercase">
            boxing <span className="text-secondary">review app</span>
          </h1>
          <p className="text-xl">biggest boxing gloves reviews's webiste</p>
          <Button className="h-14 w-40 uppercase">start now</Button>
        </div>
      </section>
    </>
  );
}

export default Hero;
