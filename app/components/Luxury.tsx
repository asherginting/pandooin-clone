import React from "react";
import Image from "next/image";

const images = [
  { src: "/images/luxury/1.png", alt: "Beach" },
  { src: "/images/luxury/2.png", alt: "Whale" },
  { src: "/images/luxury/3.png", alt: "Forest" },
  { src: "/images/luxury/4.png", alt: "Diving" },
  { src: "/images/luxury/5.png", alt: "Island" },
  { src: "/images/luxury/6.png", alt: "Boat" },
];

const ImageGrid = ({ images }: { images: { src: string; alt: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 justify-items-center">
    {images.map((image, index) => (
      <div
        key={index}
        className={`${index === 0 ? "block" : "hidden md:block"}`}
      >
        <Image src={image.src} alt={image.alt} width={350} height={350} />
      </div>
    ))}
  </div>
);

const Luxury = () => {
  return (
    <div className="bg-gold">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-[36px] md:text-[72px] font-light font-signature text-teal text-start">
            Luxury Footages
          </h1>
        </div>
        <ImageGrid images={images.slice(0, 3)} />
        <div className="hidden md:flex justify-center">
          <div className="flex items-center">
            <Image
              src="/images/luxury/separator.svg"
              alt="Separator"
              width={1096}
              height={96}
            />
          </div>
        </div>
        <div className="hidden md:block">
          <ImageGrid images={images.slice(3, 6)} />
        </div>
      </div>
    </div>
  );
};

export default Luxury;
