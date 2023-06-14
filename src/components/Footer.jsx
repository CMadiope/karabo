import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMail,
  AiFillInstagram,
  AiOutlineBehanceSquare,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { BsLinkedin, BsFacebook, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='px-6'>
      <div className='pt-10 mb-4'>
        <div className='flex max-sm:flex-col max-sm:gap-4 justify-between'>
          <div className='max-sm:hidden'>
            <Link href='/'>
              <h1 className='text-2xl font-bold font-stix_two lg:text-4xl'>
                K.M
              </h1>
            </Link>
          </div>
          <div>
            <ul className='flex flex-col lg:text-lg gap-2'>
              <Link href='/'>Home</Link>
              <Link href='/about'>About</Link>
              <Link href='/film'>Film</Link>
              <Link href='/landscapes'>Landscapes</Link>
              <Link href='/portraits'>Portraits</Link>
            </ul>
          </div>
          <div className=''>
            <ul className='flex flex-col lg:text-lg gap-2'>
              <Link
                href='https://www.instagram.com/kxrabo'
                target='_blank'
                className='flex items-center gap-2 text-lg cursor-pointer lg:text-xl'
              >
                <AiFillInstagram />
                <p>Instagram</p>
              </Link>
              <Link
                href='https://www.linkedin.com/in/karabomdluli/'
                target='_blank'
                className='flex items-center gap-2 text-lg cursor-pointer lg:text-xl'
              >
                <BsLinkedin />
                <p>Linkedin</p>
              </Link>
              <Link
                href='https://www.behance.net/karabomdluli'
                target='_blank'
                className='flex items-center gap-2 text-lg cursor-pointer lg:text-xl'
              >
                <AiOutlineBehanceSquare />
                <p>Behance</p>
              </Link>
              <Link
                href='https://www.facebook.com/lindakarabo.mdluli?ref=bookmarks'
                target='_blank'
                className='flex items-center gap-2 text-lg cursor-pointer lg:text-xl'
              >
                <BsFacebook />
                <p>Facebook</p>
              </Link>
              <Link
                href='https://za.pinterest.com/kxrabo/'
                target='_blank'
                className='flex items-center gap-2 text-lg cursor-pointer lg:text-xl'
              >
                <BsPinterest />
                <p>Pinterest</p>
              </Link>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 text-lg cursor-pointer lg:text-xl'>
              <AiOutlineMail />
              <p>karabo.mdluli@gmail.com</p>
            </div>
            <div className='flex items-center gap-2 text-lg cursor-pointer'>
              <GoLocation />
              <p>135 Daisy Street, Sandton</p>
            </div>
            <div className='flex items-center gap-2 text-lg cursor-pointer'>
              <FiPhone />
              <p>+27 65 528 6223</p>
            </div>
          </div>
        </div>
        <div className='text-center p-10'>
          <p className='text-sm font-bold font-rubik lg:text-base'>
            Karabo Mdluli © 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
