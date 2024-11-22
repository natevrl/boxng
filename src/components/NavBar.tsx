"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {Button} from "./ui/button";
import {IoClose, IoMenu} from "react-icons/io5";
import Image from "next/image";
import LogoSvg from "./ui/LogoSvg";

function Logo(): JSX.Element {
  return (
    <Link href="/" className="h-16 w-16">
      <LogoSvg fill="currentColor" className=" w-full h-full text-primary" />
    </Link>
  );
}

function MobileNav(): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="relative z-50 text-secondary cursor-pointer" onClick={() => setModalIsOpen((curr) => !curr)}>
        {modalIsOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
      </div>
      {modalIsOpen && (
        <div className="fixed z-40 top-0 bottom-0 right-0 left-0 bg-primary/95">
          <nav className="h-full w-full flex flex-col justify-evenly items-center text-secondary tracking-widest uppercase">
            <Link onClick={() => setModalIsOpen((curr) => !curr)} href="/gloves">
              gloves
            </Link>
            <div className="h-px w-full bg-gradient-to-l from-primary/20 via-secondary to-primary/20" />
            <Link onClick={() => setModalIsOpen((curr) => !curr)} href="">
              shoes
            </Link>
            <div className="h-px w-full bg-gradient-to-l from-primary/20 via-secondary to-primary/20" />
            <Link onClick={() => setModalIsOpen((curr) => !curr)} href="">
              about
            </Link>
            <div className="h-px w-full bg-gradient-to-l from-primary/20 via-secondary to-primary/20" />
            <Button variant="secondary" asChild>
              <a href="https://www.youtube.com/@Fit2Box/" target="_blank" rel="noopener noreferrer">
                fit2box Channel
              </a>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}

function LaptopNav(): JSX.Element {
  return (
    <nav className="h-full flex gap-4 justify-end items-center">
      <Link href="/gloves">gloves</Link>
      <Link href="">shoes</Link>
      <Link href="">about</Link>
      <Button variant="secondary" asChild>
        <a href="https://www.youtube.com/@Fit2Box/" target="_blank" rel="noopener noreferrer">
          fit2box Channel
        </a>
      </Button>
    </nav>
  );
}

function NavBar(): JSX.Element {
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between border-b-secondary border-b-2 bg-background px-6 py-3 lg:px-8">
      <Logo />
      {winWidth < 992 ? <MobileNav /> : <LaptopNav />}
    </header>
  );
}

export default NavBar;
