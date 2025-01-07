"use client";
import { useState, useCallback, ReactNode } from "react";
import Image from "next/image";
import { MdOutlineStarBorder, MdOutlineStar } from "react-icons/md";
import { IoLogoYoutube, IoLogoEuro } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";

import { cn } from "@/src/constants/utils";
import { IGlove, IGloveStats } from "@/src/constants/glovesDb";
import { Button } from "@/components/ui/button";

export default function Card(
  props: IGlove & { classement: number },
): JSX.Element {
  const {
    brand,
    title,
    img,
    country,
    stars,
    videoUrl,
    buyUrl,
    globalNote,
    stats,
    classement,
  } = props;

  return (
    <CardContent hoverImg={true} url="/images/card-boom-effect.svg">
      {/* <div className="absolute inset-0 overflow-visible bg-red-400">
        <div className="medalContainer"></div>

      </div> */}
      <CardHeader>
        <StarsRating stars={stars} />
        <div>
          <CardBrandTitle title={brand} />
          <CardGloveTitle title={title} />
        </div>
      </CardHeader>
      <CardBody>
        <CardUrlButtons />
        <CardMainImage url={img} alt={title} />
        <CardCountryIcons obj={country} />
      </CardBody>
      <CardFooter>
        <Stats s={stats} />
        <GlobalNote note={globalNote} />
      </CardFooter>
    </CardContent>
  );
}

function CardContent({
  children,
  className,
  hoverImg = false,
  url,
}: {
  children: ReactNode;
  className?: string;
  hoverImg: boolean;
  url: string;
}) {
  const [backgroundSvg, setBackgroundSvg] = useState(false);
  const setBackgroundSvgHandler = useCallback((value: boolean) => {
    setBackgroundSvg(value);
  }, []);

  const cardHoverEffect = "shadow-md z-10";

  return (
    <div
      className={cn(
        `card-custom-border noise-bg-primary relative m-1 flex h-[390px] w-[290px] flex-col justify-between overflow-hidden p-4 mobile:h-[360px] mobile:w-[260px] ${backgroundSvg && cardHoverEffect}`,
        className,
      )}
      onMouseEnter={() => setBackgroundSvgHandler(true)}
      onMouseLeave={() => setBackgroundSvgHandler(false)}
    >
      {/* boom effect on card's hovering */}
      {hoverImg && backgroundSvg && (
        <Image
          priority
          loading="eager"
          src={url}
          alt="image for card's hover effect"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`absolute -z-10 object-cover object-center tablet:hidden`}
        />
      )}
      {children}
    </div>
  );
}

function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "z-10 flex flex-col items-center justify-center gap-2",
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("z-10 flex items-center justify-evenly", className)}>
      {children}
    </div>
  );
}

function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("", className)}>{children}</div>;
}

function StarsRating({ stars }: { stars: number }): JSX.Element {
  const iconSize = "mobile:text-[24px] text-[28px]";

  function getStarsWithIcons(star: number): JSX.Element[] {
    let stars = [];
    for (let i = 0; i < 5; i++)
      stars.push(
        i < star ? (
          <MdOutlineStar className={iconSize} />
        ) : (
          <MdOutlineStarBorder className={iconSize} />
        ),
      );
    return stars;
  }

  return (
    <ul className="flex">
      {getStarsWithIcons(stars).map((star, i) => (
        <li key={i} className="hover:scale-110">
          {star}
        </li>
      ))}
    </ul>
  );
}

function CardBrandTitle({ title }: { title: string }) {
  return (
    <h4 className="text-center font-knockoutHeavyLight text-sm uppercase tracking-normal mobile:text-xs">
      {title}
    </h4>
  );
}
function CardGloveTitle({ title }: { title: string }) {
  const checkTitleSize: string = title.length > 18 ? "text-base" : "text-lg";

  return (
    <h3
      className={`${checkTitleSize} text-center font-knockoutHeavyLight font-bold uppercase leading-none text-secondary mobile:text-sm`}
    >
      {title}
    </h3>
  );
}

function CardUrlButtons() {
  return (
    <div className="flex max-w-10 flex-col gap-1">
      <Button variant="secondary" className="rounded-t-full py-5">
        <IoLogoYoutube className="icon-size" />
      </Button>
      <Button className="rounded-b-full bg-accent hover:bg-accent/80">
        <IoLogoEuro className="icon-size" />
      </Button>
    </div>
  );
}

function CardMainImage({ url, alt }: { url: string; alt: string }) {
  return (
    <div className="card-shadow relative h-[160px] w-[150px] border-primary mobile:h-[140px] mobile:w-[130px]">
      <Image
        src={url}
        alt={alt}
        loading="eager"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center"
      />
    </div>
  );
}

function CardCountryIcons({ obj }: { obj: Object }) {
  return (
    <div className="flex flex-col gap-2">
      {Object.entries(obj).map((item, i) => {
        return (
          <ReactCountryFlag
            key={i}
            svg
            title={item[1]}
            countryCode={item[1]}
            className="flag-size"
          />
        );
      })}
    </div>
  );
}

function Stats({ s }: { s: IGloveStats }): JSX.Element {
  const keys = Object.entries(s);
  return (
    <div className="mx-4 flex items-center justify-around font-knockoutHeavyLight text-sm leading-snug tracking-normal mobile:text-xs">
      <div>
        {keys.slice(0, 3).map((key, i) => (
          <p key={i}>
            <span className="mr-1 font-bold text-secondary">{key[1]}</span>{" "}
            {key[0]}
          </p>
        ))}
      </div>
      <div>
        {keys.slice(3).map((key, i) => (
          <p key={i}>
            <span className="mr-1 font-bold text-secondary">{key[1]}</span>{" "}
            {key[0]}
          </p>
        ))}
      </div>
    </div>
  );
}

function GlobalNote({ note }: { note: number }) {
  return (
    <div className="mt-2 flex justify-center">
      <p className="rounded-full bg-secondary px-2 font-knockoutHeavy text-xl text-background">
        {note}
      </p>
    </div>
  );
}
