import Image from "next/image";
import React from "react";

function Hero(): JSX.Element {
  return (
    <section className='relative h-[calc(100vh-80px)] w-full'>
      <div className=''>
        <Image
          src='/images/hero-image-test.webp'
          alt='hero image'
          fill
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover xl:object-fill object-left'
        />
      </div>
    </section>
  );
}

export default Hero;
