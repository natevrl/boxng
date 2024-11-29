"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navData } from "@/constants/utils";
import { IoClose, IoMenu } from "react-icons/io5";
import LogoSvg from "@/components/ui/LogoSvg";

function GradientSeparator(): JSX.Element {
  return (
    <div className="h-px w-full bg-gradient-to-l from-background/20 via-popover to-background/20" />
  );
}

function Logo(): JSX.Element {
  const tabletSize = "tablet:h-12 tablet:w-12";
  return (
    <Link href="/" className={`${tabletSize} h-16 w-16 p-1`}>
      <LogoSvg className="filter:shadow-xl h-full w-full text-background" />
    </Link>
  );
}

function NavButton(): JSX.Element {
  return (
    <button className={`btn-hover-effect rounded-full px-8 py-2 bg-secondary text-white hover:bg-secondary/80`}>
      <a
        href="https://www.youtube.com/@Fit2Box/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10"
      >
        fit2box &nbsp;<span className="relative bottom-px">▶</span>
      </a>
    </button>
  );
}

function MobileNav(): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const iconColor = modalIsOpen ? "text-popover" : "text-background";
  return (
    <>
      <div
        className={`relative z-50 cursor-pointer min-tbl:hidden ${iconColor}`}
        onClick={() => setModalIsOpen((curr) => !curr)}
      >
        {modalIsOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
      </div>
      {modalIsOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-background/80 backdrop-blur-md">
          <nav className="flex h-full w-full flex-col items-center justify-evenly uppercase tracking-widest text-secondary">
            {navData.map((name, i) => (
              <React.Fragment key={i}>
                <Link
                  onClick={() => setModalIsOpen((curr) => !curr)}
                  href={`/${name}`}
                >
                  {name}
                </Link>
                <GradientSeparator />
              </React.Fragment>
            ))}
            <NavButton />
          </nav>
        </div>
      )}
    </>
  );
}

function LaptopNav(): JSX.Element {
  return (
    <nav className="flex h-full items-center justify-end gap-4 text-white tablet:hidden">
      {navData.map(
        (name, i): JSX.Element => (
          <Link key={i} href={`/${name}`} className="link-hover-effect">
            {name}
          </Link>
        ),
      )}
      <NavButton />
    </nav>
  );
}

function NavBar(): JSX.Element {
  return (
    <header className="sticky top-0 z-20 flex w-full justify-center px-6 lg:px-8">
      <div className="relative flex h-full w-[600px] items-center justify-between rounded-b-lg bg-popover px-4">
        <Logo />
        <MobileNav />
        <LaptopNav />
      </div>
    </header>
  );
}

export default NavBar;
