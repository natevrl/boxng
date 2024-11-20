"use client";
import CardSection from "../components/CardSection";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default function HomePage(): JSX.Element {
  return (
    <main className="contenair flex flex-col gap-10 px-5 sm:px-8">
      <Hero />
    </main>
  );
}
