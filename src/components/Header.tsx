"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { header } from "framer-motion/client";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header>
      <nav
        className={`fixed top-0 w-full flex justify-between z-10 max-h-fit mx-auto items-center p-4 px-16 pt-5 text-white text-center transition-all duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-primary shadow-lg" : "bg-transparent"}`}
      >
        <a href="/">
          <Image
            src="/hackathon_landing/assets/TDLogo.svg"
            alt="Takedown Logo"
            width={250}
            height={250}
          />
        </a>
        <ul className="flex justify-center space-x-16 underline font-semibold font-primary text-secondary text-xl">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">IEDC</a>
          </li>
          <li>
            <a href="#">Race</a>
          </li>
        </ul>
        <div>
          <a
            href="#register"
            className="text-primary font-semibold rounded-lg text-lg bg-secondary px-6 py-3 hover:opacity-95"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}
