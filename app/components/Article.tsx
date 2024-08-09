"use client";

import { useQuery } from "react-query";
import Image from "next/image";
import { fetchArticles } from "../services/api";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500", "700"] });

const Article = () => {
  const { data, error, isLoading } = useQuery("articles", fetchArticles);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <>
      <style jsx>{`
        .image-container img {
          filter: grayscale(100%);
          transition: filter 0.3s ease-in-out;
        }
        .image-container img:hover {
          filter: grayscale(0%);
        }
      `}</style>

      <section id="articles" className="px-4 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-32">
              <Image
                src="/images/articles/bg.jpeg"
                alt="banner"
                layout="fill"
                objectFit="cover"
                className="opacity-80"
              />
              <div className="absolute inset-0 flex justify-between items-center px-4 bg-black bg-opacity-50">
                <Image
                  src="/images/zamrood.png"
                  alt="logo"
                  width={145}
                  height={54}
                />
                <div className="text-right">
                  <p className="text-[12px] sm:text-[14px] md:text-[16px] text-cream">
                    Want to see other destinations? Check us out at our website
                  </p>
                  <a
                    href="https://pandooin.com"
                    target="_blank"
                    className="text-[14px] sm:text-[16px] md:text-[20px] font-[700] text-cream underline mt-2"
                  >
                    Pandooin.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2
              className={`text-[20px] sm:text-[24px] md:text-[36px] font-[700] ${unbounded.className} text-teal`}
            >
              Articles
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[24px] text-teal">
              Our curated writings, offering something for every reader.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              {data?.data?.slice(0, 1).map((article: any) => (
                <div
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="image-container h-40 sm:h-48 md:h-64 lg:h-80">
                    <Image
                      src={article.featured_image}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 bg-teal text-white">
                    <h3 className="text-[14px] sm:text-md md:text-lg font-semibold mt-2 mb-4">
                      {article.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {data?.data?.slice(1).map((article: any) => (
                <div
                  key={article.id}
                  className="bg-teal border border-gray-200 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="image-container h-40 sm:h-48">
                    <Image
                      src={article.featured_image}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 bg-teal text-white">
                    <h3 className="text-[14px] sm:text-md md:text-lg font-semibold mt-2 mb-4">
                      {article.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
