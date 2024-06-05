"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  useEffect(() => {
    const listenForScrollTop = () => {
      let opacity = 75;

      if (window.scrollY !== 0) {
        document.querySelector("#navbar")?.classList.add(`bg-black/${opacity}`);
        document.querySelector("#navbar")?.classList.add("backdrop-blur-lg");
      } else {
        document
          .querySelector("#navbar")
          ?.classList.remove(`bg-black/${opacity}`);
        document.querySelector("#navbar")?.classList.remove("backdrop-blur-lg");
      }
    };

    window.addEventListener("scroll", listenForScrollTop);

    return () => {
      window.removeEventListener("scroll", listenForScrollTop);
    };
  }, []);

  return (
    <div
      id="navbar"
      className="fixed dark:text-white left-1/2 -translate-x-1/2 top-0  z-50 w-full inline-flex p-2"
    >
      <div className="container flex justify-between">
        <span className="my-auto text-xl font-semibold">Aaron Soto</span>
        <div className="buttons">
          <Link
            href="/"
            className={buttonVariants({
              variant: "link",
              className: "dark:text-white",
            })}
          >
            Home
          </Link>
          <Link
            href="/writing"
            className={buttonVariants({
              variant: "link",
              className: "dark:text-white",
            })}
          >
            Writing
          </Link>
          <Link
            href="contact"
            className={buttonVariants({
              variant: "link",
              className: "dark:text-white",
            })}
          >
            Contact
          </Link>
          {/* <ThemeToggle></ThemeToggle> */}
        </div>
      </div>
    </div>
  );
}
