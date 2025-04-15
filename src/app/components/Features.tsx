"use client";
import React from "react";
import { data } from "../data";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Features {
  image: string;
  desc: string;
  title: string;
}

const Features = () => {
  const features = data.featuresData;
  if (!features) {
    return notFound();
  }
  // console.log(features, "service");
  return (
    <section
      id="case-study"
      className="py-10 lg:py-16"
      aria-label="Case Studies"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="w-[800px] max-w-full mb-10 mx-auto">
          <div className="text-center">
            <p className="text-[#A7A6A6] font-medium text-base lg:text-[18px] 2xl:text-[20px] leading-[25px] mb-6 flex justify-center">
              <span className="w-[17px] h-[2px] bg-primary mt-3 me-3"></span>
              Key Features
            </p>
            <div>
              <h2 className="inline-block text-blue-grey text-[24px] lg:text-[34px] 2xl:text-[48px] font-bold leading-[1.4] mb-6 relative">
                <Image
                  src="/images/heading-layer-2.png"
                  height={10}
                  width={143}
                  alt="layer"
                  className="absolute top-[30px] lg:top-[40px] 2xl:top-[56px] right-0 hidden md:inline-block"
                />
                <span className="relative">Why You’ll Love SMILE</span>
              </h2>
            </div>
          </div>
        </header>
        <div className="bg-theme-2 px-6 py-6 lg:px-0 lg:py-[46px] 2xl:py-[56px] rounded-[45px] bg-opacity-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 md:justify-center">
            {features.slice(0, 3).map((data: Features, i: number) => (
              <article
                key={i}
                className=" w-full 
  lg:px-[36px] xl:px-[42px] 2xl:px-[50px] 
  lg:py-0 pb-8 
  [&:not(:last-child)]:border-b border-0 
  lg:[&:not(:last-child)]:border-b-0 
  lg:[&:not(:last-child)]:border-r 
  lg:[&:not(:last-child)]:border-r-[1px] 
  border-primary"
                aria-label={`Case Study ${i + 1}`}
              >
                <div className="group relative">
                  <div className="mb-[20px] relative">
                    <Image
                      height={194}
                      width={285}
                      src={data.image}
                      alt={data.title}
                      className="max-w-full max-h-[250px] mx-auto"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="leading-[1.2] text-[28px] font-semibold text-black mb-4">
                      {data.title}
                    </h2>
                    <p className="leading-[1.6] text-[20px] font-medium text-black">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
