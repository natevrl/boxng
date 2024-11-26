"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navData } from "@/constants/navDb";
import { IoClose, IoMenu } from "react-icons/io5";
import LogoSvg from "@/components/ui/LogoSvg";

function GradientSeparator(): JSX.Element {
  return (
    <div className='h-px w-full bg-gradient-to-l from-background/20 via-popover to-background/20' />
  );
}

function Logo(): JSX.Element {
  const tabletSize = "tablet:h-12 tablet:w-12";
  return (
    <Link href='/' className={`${tabletSize} h-16 w-16 p-1`}>
      <LogoSvg className='w-full h-full text-background filter:shadow-xl' />
    </Link>
  );
}

function NavButton({ isMobile = false }: { isMobile?: boolean }): JSX.Element {
  const btnStyle = isMobile ? "bg-popover text-white" : "bg-background text-popover";
  return (
    <button className={`btn-hover-effect px-3 py-1 rounded-sm ${btnStyle}`}>
      <a
        href='https://www.youtube.com/@Fit2Box/'
        target='_blank'
        rel='noopener noreferrer'
        className='relative z-10'>
        fit2box Channel
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
        className={`min-tbl:hidden relative z-50 cursor-pointer ${iconColor}`}
        onClick={() => setModalIsOpen(curr => !curr)}>
        {modalIsOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
      </div>
      {modalIsOpen && (
        <div className='fixed z-40 top-0 bottom-0 right-0 left-0 bg-background/80 backdrop-blur-md'>
          <nav className='h-full w-full flex flex-col justify-evenly items-center text-secondary tracking-widest uppercase'>
            {navData.map((name, i) => (
              <React.Fragment key={i}>
                <Link onClick={() => setModalIsOpen(curr => !curr)} href={`/${name}`}>
                  {name}
                </Link>
                <GradientSeparator />
              </React.Fragment>
            ))}
            <NavButton isMobile={true} />
          </nav>
        </div>
      )}
    </>
  );
}

function LaptopNav(): JSX.Element {
  return (
    <nav className='tablet:hidden h-full flex gap-4 justify-end items-center text-white'>
      {navData.map(
        (name, i): JSX.Element => (
          <Link key={i} href={`/${name}`} className='link-hover-effect'>
            {name}
          </Link>
        )
      )}
      <NavButton />
    </nav>
  );
}

function NavBar(): JSX.Element {
  return (
    <header className='sticky top-0 z-20 w-full flex  justify-center  px-6 lg:px-8'>
      <div className='relative h-full w-[600px] flex items-center justify-between px-4 bg-popover rounded-b-lg'>
        <Logo />
        <MobileNav />
        <LaptopNav />
      </div>
    </header>
  );
}

export default NavBar;
