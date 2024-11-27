import Hero from "@/src/components/sections/Hero";
import YTChannelSection from "@/components/sections/YTChannelSection";

export default function HomePage(): JSX.Element {
  return (
    <main className="contenair flex flex-col gap-10 px-5 sm:px-8">
      <Hero />
      <YTChannelSection />
    </main>
  );
}
