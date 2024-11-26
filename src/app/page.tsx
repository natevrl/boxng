"use client";
import Hero from "@/src/components/sections/Hero";

export default function HomePage(): JSX.Element {
  return (
    <main className='contenair flex flex-col gap-10 px-5 sm:px-8'>
      <Hero />
    </main>
  );
}
