"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  useEffect(() => {
    const listenForScrollTop = () => {
      let opacity = 75;

      if (window.scrollY !== 0) {
        document.querySelector("#navbar")?.classList.add(`bg-black/${opacity}`);
        document.querySelector("#navbar")?.classList.add("backdrop-blur-lg");
      } else {
        document.querySelector("#navbar")?.classList.remove(`bg-black/${opacity}`);
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
          <Button className=" dark:text-white" variant="link">
            Home
          </Button>
          <Button className=" dark:text-white" variant="link">
            About
          </Button>
          <Button className=" dark:text-white" variant="link">
            Skills
          </Button>
          <Button className=" dark:text-white" variant="link">
            Experience
          </Button>
          {/* <ThemeToggle></ThemeToggle> */}
        </div>
      </div>
    </div>
  );
}
