import Image from "next/image";
import React from "react";
import { GiBoxingGlove, GiConverseShoe } from "react-icons/gi";
import { MdOutlineStar } from "react-icons/md";

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
    <div className="absolute bottom-0 right-0 z-20 aspect-[12/10] h-5/6 tablet:!-right-[20%] laptop:!h-3/6 desktop:-right-[10%] desktop:h-3/5 min-qhd:right-[10%]">
      <Image
        src="/images/hero/hero-main-char.svg"
        alt="hero image"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
      <div className="absolute w-1/2 h-1/2 right-0 top-0 -z-10 desktop:hidden">
        <Image
          src="/images/hero/little-char.svg"
          alt="hero image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-right-top"
        />
      </div>
    </div>
  );
}


function HeroBackground(): JSX.Element {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden border-b-4 border-primary">
      <RingImg />
      <MainCharImg />
    </div>
  );
}

function StarsRating({ stars }: { stars: number }): JSX.Element {
  function getStarsWithIcons(star: number): JSX.Element[] {
    let stars = [];
    for (let i = 0; i < 5; i++) stars.push(<MdOutlineStar size={32} />);
    return stars;
  }

  return (
    <ul className="mb-2 flex">
      {getStarsWithIcons(stars).map((star, i) => (
        <li key={i} className="hover:scale-110">
          {star}
        </li>
      ))}
    </ul>
  );
}

function Hero(): JSX.Element {
  return (
    <>
      <HeroBackground />
      <section className="h-screen-nav flex flex-col tablet:items-center">
        <div className="flex h-2/3 flex-col items-start justify-center text-center tablet:mt-16 tablet:justify-start">
          {/* hero title */}
          <div className="flex flex-col items-center gap-4">
            <StarsRating stars={5} />

            <div className="relative h-full w-full bg-popover">
              <h2 className="center-absolute overflow-hidden whitespace-nowrap font-knockoutHeavy text-4xl uppercase mobile:!text-xl tablet:text-2xl">
                welcome to
              </h2>
              <h1 className="text-clamp font-knockoutHeavy uppercase leading-[0.7] tracking-wider text-secondary">
                BOXNG
              </h1>
            </div>

            <h2 className="font-primary text-2xl italic tracking-normal">
              "Discover top-rated boxing equipment"
            </h2>
            <div className="mt-2 flex gap-5">
              <button className="icon-shadow rounded-full bg-background p-2 text-secondary">
                <GiBoxingGlove size={48} className="svg-icon" />
              </button>
              <button className="icon-shadow rounded-full bg-background p-2 text-secondary">
                <GiConverseShoe size={48} className="svg-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
