import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-darkTeal text-cream py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-center md:text-left">
          © 2024 Zamrood by Asher Azriel Ginting
        </p>
        <div className="flex space-x-4">
          <FooterIcon href="#" src="/icons/footer/fb.png" alt="Facebook" />
          <FooterIcon href="#" src="/icons/footer/ig.png" alt="Instagram" />
          <FooterIcon href="#" src="/icons/footer/email.png" alt="Email" />
        </div>
      </div>
    </footer>
  );
};

const FooterIcon = ({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) => (
  <a href={href} className="hover:text-gray-400">
    <Image src={src} alt={alt} width={24} height={24} />
  </a>
);

export default Footer;
