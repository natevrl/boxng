import Hero from "@/src/components/sections/Hero";
import YTChannelSection from "@/components/sections/YTChannelSection";

export default function HomePage(): JSX.Element {

  console.log("I am rendered on the client side or server side ?");
  console.log(typeof window);
  return (
    <main className="contenair flex flex-col gap-10 px-5 sm:px-8">
      <Hero />
      <YTChannelSection />
    </main>
  );
}
