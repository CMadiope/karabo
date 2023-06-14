"use client";
import React, { useState, useEffect, useRef } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ nav, setNav }) => {
  const [clickOutSide, setClickOutSide] = useState(false);
  const pathname = usePathname();

  const navRef = useRef();
  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutSide = (e) => {
    if (!navRef.current.contains(e.target)) {
      setClickOutSide(true);
      setNav(false);
    }
  };
  const handleClickInside = () => {
    setClickOutSide(false);
    setNav(!nav);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  return (
    <nav className=' bg-[#f5f5f5] drop-shadow-md text-black min-w-full'>
      <div className='flex justify-between px-6 py-4 items-center'>
        <Link
          href='/'
          className='uppercase font-semibold text-lg md:text-xl lg:text-2xl flex flex-col '
        >
          <h1>Karabo Mdluli</h1>
          <h1>Photographer & Director</h1>
        </Link>
        <div className=''>
          <ul className='hidden md:flex gap-6 text-black'>
            <li>
              <Link
                href='/about'
                className={`${pathname === "/about" ? "font-bold" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/film'
                className={`${pathname === "/film" ? "font-bold" : ""}`}
              >
                Film
              </Link>
            </li>
            <li>
              <Link
                href='/landscapes'
                className={`${pathname === "/landscapes" ? "font-bold" : ""}`}
              >
                Landscapes
              </Link>
            </li>
            <li>
              <Link
                href='/portraits'
                className={`${pathname === "/portraits" ? "font-bold" : ""}`}
              >
                Portraits
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={`${pathname === "/contact" ? "font-bold" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className='md:hidden cursor-pointer' onClick={handleClickInside}>
            <HiMenuAlt2 size={30} />
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={`fixed h-screen top-0 right-0 z-20  bg-white w-[250px] sm:w-[320px] ease-in-out duration-300 overflow-y-scroll md:hidden ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
        ref={navRef}
      >
        <div
          className='flex justify-end pr-10 pt-6 cursor-pointer'
          onClick={handleNav}
        >
          <RxCross2 size={30} />
        </div>
        <div className='flex text-center font-semibold flex-col gap-6 px-10 py-10 text-xl'>
          <Link href='/about' onClick={handleNav}>About</Link>
          <Link href='/film' onClick={handleNav}>Film</Link>
          <Link href='/landscapes' onClick={handleNav}>Landscapes</Link>
          <Link href='/portraits' onClick={handleNav}>Portraits</Link>
          <Link href='/contact' onClick={handleNav}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
