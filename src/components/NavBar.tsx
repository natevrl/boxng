import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function NavBar(): JSX.Element {
  return (
    <header className='h-navbar mx-12 flex justify-between items-center'>
      <Link href='/' className='uppercase text-bold text-4xl'>
        Boxing <span className="text-secondary">Reviews</span>
      </Link>
      <nav className='h-full flex gap-4 justify-end items-center'>
        <Link href='/gloves'>gloves</Link>
        <Link href=''>shoes</Link>
        <Link href=''>about</Link>
        <Button variant='secondary' asChild>
          <a href='https://www.youtube.com/@Fit2Box/' target='_blank' rel='noopener noreferrer'>
            fit2box Channel
          </a>
        </Button>
      </nav>
    </header>
  );
}

export default NavBar;
