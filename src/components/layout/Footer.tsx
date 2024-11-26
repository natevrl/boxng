"use client";
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { FaChevronUp } from "react-icons/fa";
import Link from "next/link";

function FooterLink({ children, href }: { children: ReactNode; href: string }): JSX.Element {
  return (
    <Link href={href} target='_blank' className='text-nowrap underline underline-offset-4'>
      {children}
    </Link>
  );
}

function Footer(): JSX.Element {
  return (
    <footer className='mt-5 flex flex-col-reverse gap-6 border-t border-t-popover p-5 sm:mt-8 sm:px-8 sm:py-10 lg:flex-row lg:justify-between lg:px-16'>
      {/* left */}
      <div>
        <p className='text-popover font-bold'>
          &copy;2024 Born2Ring- <FooterLink href='/privacy-policy'>Privacy Policy</FooterLink>
        </p>
        <p className='mt-3 text-sm text-popover'>
          Designed and developed by{" "}
          <FooterLink href='https://github.com/natevrl'>natevrl</FooterLink>, for{" "}
          <FooterLink href='https://www.youtube.com/@Fit2Box'>fit2box</FooterLink>. All rights
          reserved.
        </p>
      </div>

      {/* right */}
      <Button
        variant={"secondary"}
        aria-label='go to the top of the page'
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}>
        <FaChevronUp size={24} />
      </Button>
    </footer>
  );
}

export default Footer;
