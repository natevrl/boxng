import Image from "next/image";
import React from "react";

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
    <div className="absolute w-[600px] h-[500px] bottom-0 right-[10%]">
    <Image
      src="/images/hero-main-char.svg"
      alt="hero image"
      fill
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-center"
    />
    </div>

  );
}

function Hero(): JSX.Element {
  return (
    <section className="relative w-full h-[calc(100vh-80px)]">
      <RingImg />
      <MainCharImg />
    </section>
  );
}

export default Hero;
