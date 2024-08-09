"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Homepage");

  const handleClick = (tabName: string) => {
    setActiveTab(tabName);
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-80 py-6 bg-transparent absolute w-full z-10">
      <div className="flex items-center">
        <Image
          src="/images/zamrood.png"
          alt="Zamrood Logo"
          width={135}
          height={50}
        />
      </div>
      <div className="hidden md:flex items-center space-x-8 text-cream">
        <a
          href="#"
          onClick={() => handleClick("Homepage")}
          className={`relative py-2 px-4 text-[16px] leading-[19.2px] font-bold ${
            activeTab === "Homepage" ? "border-b-2 border-cream" : ""
          }`}
        >
          Homepage
        </a>
        <a
          href="#customize"
          onClick={() => handleClick("Customize Your Trip")}
          className={`relative py-2 px-4 text-[16px] leading-[19.2px] font-bold ${
            activeTab === "Customize Your Trip" ? "border-b-2 border-cream" : ""
          }`}
        >
          Customize Your Trip
        </a>
        <a
          href="#destinations"
          onClick={() => handleClick("Destination")}
          className={`relative py-2 px-4 text-[16px] leading-[19.2px] font-bold ${
            activeTab === "Destination" ? "border-b-2 border-cream" : ""
          }`}
        >
          Destination
        </a>
        <a
          href="#articles"
          onClick={() => handleClick("Article")}
          className={`relative py-2 px-4 text-[16px] leading-[19.2px] font-bold ${
            activeTab === "Article" ? "border-b-2 border-cream" : ""
          }`}
        >
          Article
        </a>
        <button className="border border-cream py-2 px-4 rounded-full hover:bg-cream hover:text-darkTeal text-[16px] leading-[19.2px] font-bold">
          Need Assistance?
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-cream">
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-cream"></div>
            <div className="w-8 h-0.5 bg-cream"></div>
            <div className="w-8 h-0.5 bg-cream"></div>
          </div>
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between w-full px-4 py-2 bg-white shadow-md fixed top-0 left-0 z-20">
        <div className="flex items-center">
          <Image
            src="/images/zamrood-color.png"
            alt="Zamrood Logo"
            width={100}
            height={38}
          />
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-teal">
          <div className="space-y-2">
            <div className="w-6 h-0.5 bg-teal"></div>
            <div className="w-6 h-0.5 bg-teal"></div>
            <div className="w-6 h-0.5 bg-teal"></div>
          </div>
        </button>
      </div>

      {/* Open/Hide Hamburger */}
      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-30 transition-transform transform translate-x-0">
          <div className="flex justify-end items-center p-4 border-b">
            <button onClick={() => setIsOpen(false)} className="text-teal">
              <div className="text-xl font-bold">×</div>
            </button>
          </div>
          <a
            href="#home"
            onClick={() => handleClick("Homepage")}
            className={`block px-4 py-2 text-teal text-[14px] leading-[16.8px] font-bold ${
              activeTab === "Homepage" ? "border-b-2 border-teal" : ""
            }`}
          >
            Homepage
          </a>
          <a
            href="#customize"
            onClick={() => handleClick("Customize Your Trip")}
            className={`block px-4 py-2 text-teal text-[14px] leading-[16.8px] font-bold ${
              activeTab === "Customize Your Trip"
                ? "border-b-2 border-teal"
                : ""
            }`}
          >
            Customize Your Trip
          </a>
          <a
            href="#destinations"
            onClick={() => handleClick("Destination")}
            className={`block px-4 py-2 text-teal text-[14px] leading-[16.8px] font-bold ${
              activeTab === "Destination" ? "border-b-2 border-teal" : ""
            }`}
          >
            Destination
          </a>
          <a
            href="#articles"
            onClick={() => handleClick("Article")}
            className={`block px-4 py-2 text-teal text-[14px] leading-[16.8px] font-bold ${
              activeTab === "Article" ? "border-b-2 border-teal" : ""
            }`}
          >
            Article
          </a>
          <div className="flex justify-center items-center w-full">
            <button className="border border-teal text-darkTeal py-2 px-4 rounded-full text-[14px] leading-[16.8px] font-bold">
              Need Assistance?
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
