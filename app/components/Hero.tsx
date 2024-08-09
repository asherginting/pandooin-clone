import Image from "next/image";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500", "700"] });

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center md:items-start text-white px-4 md:px-8">
      <Image
        src="/images/bg.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-[-1]"
      />
      <div className="relative max-w-3xl mx-auto text-center md:text-left md:mx-72">
        <h1 className="text-[48px] md:text-[128px] font-[400] font-signature text-gold mb-0 leading-none">
          Premium Travel
        </h1>
        <h2
          className={`text-[32px] md:text-[54px] font-[700] ${unbounded.className} text-cream mt-0 leading-none`}
        >
          Beyond Expectation
        </h2>
        <p className="text-[16px] md:text-[24px] font-[400] text-cream">
          Experience the finest that Indonesia has to offer with our{" "}
          <br className="hidden md:block" /> curated selection of premium trips,
          ensuring comfort every step of the way.
        </p>
        <button className="mt-8 text-[14px] md:text-[16px] font-[700] text-cream border border-white py-2 px-6 rounded-full hover:bg-white hover:text-darkTeal">
          Take me there
        </button>
      </div>
    </section>
  );
};

export default Hero;
