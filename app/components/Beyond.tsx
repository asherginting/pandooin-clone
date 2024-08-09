import Image from "next/image";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500", "700"] });

const Beyond = () => {
  return (
    <div
      id="customize"
      className="min-h-screen bg-white flex flex-col items-center justify-center py-12 text-black"
    >
      <h1 className="text-[60px] md:text-[84px] font-[400] font-signature text-teal text-center mb-8">
        Beyond Premium
      </h1>
      <h2
        className={`text-[28px] md:text-[32px] font-[700] ${unbounded.className} text-darkTeal text-center mb-10`}
      >
        ELEVATE YOUR EXPERIENCE
      </h2>

      <div className="flex flex-col md:flex-row justify-around w-full max-w-4xl mb-16 space-y-12 md:space-y-0 md:space-x-12 px-4">
        <FeatureCard
          imgSrc="/icons/beyond/personal.webp"
          altText="Personal Itineraries"
          title="PERSONAL ITINERARIES"
          description="Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires."
        />
        <FeatureCard
          imgSrc="/icons/beyond/exclusive.webp"
          altText="Exclusive Experiences"
          title="EXCLUSIVE EXPERIENCES"
          description="From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level."
        />
        <FeatureCard
          imgSrc="/icons/beyond/best.webp"
          altText="Best Facilities"
          title="BEST FACILITIES"
          description="Experience the epitome of luxury with our premium facilities, designed to provide an unparalleled level of comfort and indulgence."
        />
      </div>

      <div className="flex flex-col md:flex-row items-center mb-16 px-4">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/icons/beyond/discover.webp"
            alt="Discover"
            width={329}
            height={302}
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h3
            className={`text-[28px] md:text-[32px] font-[700] ${unbounded.className} text-darkTeal mb-8`}
          >
            Discover Tailored Experiences
          </h3>
          <p className="text-[16px] mb-8">
            Create your own journey, personalized to suit your preferences and
            interests, ensuring a once-in-a-lifetime adventure awaits.
          </p>
          <button className="text-[16px] font-[700] px-8 py-4 bg-darkTeal text-cream rounded-full hover:bg-gold">
            Customize Your Trip
          </button>
        </div>
      </div>

      {/* Separator */}
      <Image
        src="/icons/beyond/separator.webp"
        alt="Separator"
        width={1096}
        height={96}
      />
    </div>
  );
};

const FeatureCard = ({
  imgSrc,
  altText,
  title,
  description,
}: {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-6">
      <Image src={imgSrc} alt={altText} width={156} height={156} />
    </div>
    <h3 className="text-[20px] font-[700] text-teal mb-4 whitespace-nowrap">
      {title}
    </h3>
    <p className="text-[16px] text-black max-w-xs">{description}</p>
  </div>
);

export default Beyond;
