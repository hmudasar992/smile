"use client";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <React.Fragment>
      <section id="about-us" className="py-32 lg:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap lg:flex-nowrap lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
            <div className="w-full lg:w-7/12">
              <div className="rounded-[25px] bg-[#F7E36F2B] flex relative grid grid-cols-1 md:grid-cols-2 h-full overflow-hidden mb-8 lg:mb-0">
                <div className="bg-[#FFD93D] py-3 px-2 mb-6 md:mb-0">
                  <Image
                    src="/images/girl.svg"
                    height={653}
                    width={284}
                    alt="girl"
                    className="h-[400px] md:h-[653px]  "
                  />
                </div>
                <div className="flex justify-center items-center py-10 px-5">
                  <div className="lg:h-[588px] w-[276px] border-[9px] border-black rounded-[38px] overflow-hidden">
                    <Image
                      src="/images/device.jpg"
                      height={579}
                      width={267}
                      alt="device"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <article className="w-full lg:w-5/12">
              <header>
                <p className="block text-[#A7A6A6] font-medium text-base lg:text-[18px] 2xl:text-[20px] leading-[25px] mb-6 flex">
                  <span className="w-[17px] h-[2px] bg-primary mt-3 me-3"></span>
                  Problem Statement
                </p>
                <h2 className="text-blue-grey text-[24px] lg:text-[34px] 2xl:text-[48px] font-bold leading-[1.4] mb-6 relative">
                  <Image
                    src="/images/heading-layer.png"
                    height={10}
                    width={75}
                    alt="layer"
                    className="absolute top-[40px] 2xl:top-[50px] hidden md:inline-block"
                  />
                  Love Isn’t About Big Moments… It’s About the Small Ones You
                  Miss
                </h2>
              </header>
              <p className="font-medium mb-8 text-[18px] md:text-[20px] lg:text-[22px] leading-[1.6] text-blue-grey ">
                You swore you’d remember their coffee order. But life gets busy,
                and ‘I’ll do it later’ becomes ‘Why don’t you ever listen?’!
              </p>
              <p className="font-semibold text-[20px] md:text-[24px] lg:text-[28px] text-blue-grey leading-[1.6]">
                SMILE turns those missed moments into shared joy.
              </p>
            </article>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutUs;
