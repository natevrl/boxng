import Link from "next/link";
import { Suspense } from "react";
import { socials } from "@/constants/utils";
import VideoComponents from "@/components/ui/VideoComponent";

function YTChannelSection() {
  return (
    <section className="min-h-screen-nav flex flex-col items-center justify-center">
      <h1 className="mb-12 scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:mb-20 lg:text-5xl">
        Discover my channels
      </h1>
      <Link href={socials.yt} aria-label="Go to my YouTube channel"></Link>
      <Link href={socials.insta} aria-label="Go to my Instagram"></Link>
        <VideoComponents
          src="https://www.youtube-nocookie.com/embed/UiGXKKm1TqQ?si=PryLxtSBotN-ED-8"
          w={560}
          h={315}
        />
    </section>
  );
}

export default YTChannelSection;
