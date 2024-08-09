"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { fetchDestinations } from "../services/api";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500", "700"] });

interface Destination {
  related_variant: {
    itinerary_variant_pub_price: string;
  };
  itinerary_id: string;
  related_galleries: {
    src: string;
    gallery_alt_text: string;
  }[];
  itinerary_day: number;
  itinerary_name: string;
  partner_name: string;
  itinerary_short_description: string;
}

const formatPrice = (price: string): string => {
  const numberPrice = parseInt(price, 10);
  return `IDR ${numberPrice.toLocaleString()}`;
};

const DestinationCard = ({
  destination,
  index,
}: {
  destination: Destination;
  index: number;
}) => {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } bg-white rounded-lg overflow-hidden`}
    >
      <div className="md:w-1/2">
        <Image
          src={destination.related_galleries[1]?.src || "/default-image.jpg"}
          alt={
            destination.related_galleries[1]?.gallery_alt_text ||
            "Destination Image"
          }
          width={536}
          height={374}
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
        <div>
          <p className="text-[14px] md:text-[16px] text-darkTeal">
            {destination.itinerary_day} DAYS {destination.itinerary_day + 1}{" "}
            NIGHTS
          </p>
          <h3
            className={`text-[24px] md:text-[36px] font-[700] ${unbounded.className} text-darkTeal`}
          >
            {destination.itinerary_name}
          </h3>
          <p className="text-xs md:text-sm text-gray-700 mb-4">
            <span className="text-[14px] md:text-[16px] font-[700] text-darkTeal">
              Organized by {destination.partner_name}
            </span>
            <br />
            <span className="text-[14px] md:text-[16px] text-darkTeal">
              {destination.itinerary_short_description}
            </span>
          </p>
          <p className="text-[14px] md:text-[16px] text-darkTeal">Start from</p>
          <p
            className={`text-[14px] md:text-[16px] font-[500] ${unbounded.className} text-gray line-through`}
          >
            {formatPrice("9999999")} {/* Example price */}
          </p>
          <div className="flex items-center justify-between mt-4">
            <p
              className={`text-[20px] md:text-[28px] font-[500] ${unbounded.className} text-teal`}
            >
              {formatPrice(
                destination.related_variant.itinerary_variant_pub_price
              )}
            </p>
            <button className="text-[14px] md:text-[16px] font-[700] px-4 py-2 border border-teal text-darkTeal rounded-full hover:bg-gold hover:text-white transition duration-300">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Destination = () => {
  const { data, error, isLoading } = useQuery(
    ["destinations"],
    fetchDestinations
  );

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return <p>Error fetching destinations: {(error as Error).message}</p>;

  return (
    <section id="destinations" className="px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8 space-x-4">
          <h2
            className={`text-[24px] md:text-[36px] font-[700] ${unbounded.className} text-darkTeal`}
          >
            Destinations
          </h2>
          <Image
            src="/icons/destinations/arrow-right.webp"
            alt="arrow"
            width={36}
            height={36}
          />
          <a
            href="#"
            className="text-[14px] md:text-[16px] text-darkTeal hover:underline"
          >
            Explore More
          </a>
        </div>

        <div className="space-y-8">
          {data.data.map((destination: Destination, index: number) => (
            <DestinationCard
              key={destination.itinerary_id}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
