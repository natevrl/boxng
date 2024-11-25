"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { IoClose, IoMenu } from "react-icons/io5";
import LogoSvg from "./ui/LogoSvg";

function Logo({ wsize }: { wsize: number }): JSX.Element {
  const logoSize = wsize >= 768 ? 'h-16 w-16' : 'h-12 w-12';
  return (
    <Link href='/' className={`${logoSize} p-1`}>
      <LogoSvg className='w-full h-full text-background' />
    </Link>
  );
}

function MobileNav(): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div
        className='relative z-50 text-background  cursor-pointer'
        onClick={() => setModalIsOpen(curr => !curr)}>
        {modalIsOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
      </div>
      {modalIsOpen && (
        <div className='fixed z-40 top-0 bottom-0 right-0 left-0 bg-background/95'>
          <nav className='h-full w-full flex flex-col justify-evenly items-center text-secondary tracking-widest uppercase'>
            <Link onClick={() => setModalIsOpen(curr => !curr)} href='/gloves'>
              gloves
            </Link>
            <div className='h-px w-full bg-gradient-to-l from-background/20 via-popover to-background/20' />
            <Link onClick={() => setModalIsOpen(curr => !curr)} href=''>
              shoes
            </Link>
            <div className='h-px w-full bg-gradient-to-l from-background/20 via-popover to-background/20' />
            <Link onClick={() => setModalIsOpen(curr => !curr)} href=''>
              about
            </Link>
            <div className='h-px w-full bg-gradient-to-l from-background/20 via-popover to-background/20' />
            <Button variant='secondary' asChild>
              <a href='https://www.youtube.com/@Fit2Box/' target='_blank' rel='noopener noreferrer'>
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
    <nav className='h-full flex gap-4 justify-end items-center text-white'>
      <Link href='/gloves' className="link-hover-effect">gloves</Link>
      <Link href='' className="link-hover-effect">shoes</Link>
      <Link href='' className="link-hover-effect">about</Link>
      <button  className="btn-hover-effect px-3 py-1 rounded-sm bg-background text-popover">
        <a href='https://www.youtube.com/@Fit2Box/' target='_blank' rel='noopener noreferrer' className="relative z-10">
          fit2box Channel
        </a>
      </button>
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
    <header className='sticky top-0 z-20 w-full flex  justify-center  px-6 lg:px-8'>
      <div className="relative h-full w-[600px] flex items-center justify-between px-4 bg-popover rounded-b-lg">
        <Logo wsize={winWidth}/>
        {winWidth < 768 ? <MobileNav /> : <LaptopNav />}
      </div>
    </header>
  );
}

export default NavBar;
