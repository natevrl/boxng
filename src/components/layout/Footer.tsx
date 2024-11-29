"use client";
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { socials } from "@/constants/utils";

interface FootLinkProps {
  children: ReactNode;
  href: string;
}

function FooterLink({ children, href }: FootLinkProps): JSX.Element {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-nowrap underline underline-offset-4"
    >
      {children}
    </Link>
  );
}

function Footer(): JSX.Element {
  return (
    <footer className="mt-5 flex flex-col-reverse gap-6 border-t border-t-popover p-5 sm:mt-8 sm:px-8 sm:py-10 lg:flex-row lg:justify-between lg:px-16">
      {/* left */}
      <div>
        <p className="font-bold text-popover">
          &copy;2024 Boxng-{" "}
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        </p>
        <p className="mt-3 text-sm text-popover">
          Designed and developed by{" "}
          <FooterLink href={socials.github}>natevrl</FooterLink>,
          for{" "}
          <FooterLink href={socials.yt}>
            fit2box
          </FooterLink>
          . All rights reserved.
        </p>
      </div>

      {/* right */}
      <Button
        variant={"secondary"}
        aria-label="go to the top of the page"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <FaChevronUp size={24} />
      </Button>
    </footer>
  );
}

export default Footer;
