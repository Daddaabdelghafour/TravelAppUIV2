import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" backdrop-blur-sm backdrop-brightness-95 sticky top-0  z-30 bg-white shadow-md">
      <div className="max-container padding-container py-5">
        <div className="flexBetween">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/camp.svg"
              className="object-contain"
              alt="logo"
              width={74}
              height={29}
            />
          </Link>

          {/* Navigation Menu */}
          <ul className="hidden h-full gap-12 lg:flex">
            {["Home", "Services", "About Us", "Contact"].map((item) => (
              <li
                key={item}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Avatar and Login Button */}
          <div className="lg:flexCenter hidden">
            <Link href="/login">
              <button className="btn_dark_green ml-5 rounded-3xl rounded">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flexCenter p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <Image
              src={isMenuOpen ? "/close.svg" : "/menu.svg"}
              alt={isMenuOpen ? "Close Menu" : "Open Menu"}
              width={32}
              height={32}
              className="inline-block cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
          <ul className="flex flex-col items-center gap-4">
            {["Home", "Services", "About Us", "Contact"].map((item) => (
              <li
                key={item}
                className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold"
              >
                <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/login">
                <button className="btn_dark_green rounded-lg rounded">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
