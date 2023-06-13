import React from "react";
import Image from "next/image";
import footer from "../../public/Email-Signature-V23_04_04.jpg";

const Footer = () => {
  return (
    <footer className='bg-black'>
      <Image src={footer} alt='footer' />
    </footer>
  );
};

export default Footer;