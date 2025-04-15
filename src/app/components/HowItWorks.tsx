"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

const HowItWorks = () => {
  return (
    <section className="relative py-24">
      <Image
        src="/images/bg-layer.png"
        height={398}
        width={250}
        alt="bg-layer"
        className="absolute right-0 lg:-top-72 bottom-0 w-[250px] lg:w-[398px]"
      />
      <div className="container px-6 mx-auto relative">
        <div className="flex flex-wrap lg:flex-nowrap md:gap-12 lg:gap-12 2xl:gap-20 ">
          <div className="w-full lg:w-6/12 lg:pe-8 mb-8 lg:mb-0">
            <p className="block text-[#A7A6A6] font-medium text-base lg:text-[18px] 2xl:text-[20px] leading-[25px] mb-6 flex">
              <span className="w-[17px] h-[2px] bg-primary mt-3 me-3"></span>
              How It Works?
            </p>
            <h2 className="text-blue-grey text-[24px] lg:text-[34px] 2xl:text-[48px] font-bold leading-[1.4] mb-6 relative">
              <Image
                src="/images/heading-layer-2.png"
                height={10}
                width={181}
                alt="layer"
                className="absolute top-[30px] lg:top-[42px] 2xl:top-[56px] left-28 md:inline-block hidden md:inline-block"
              />
              <span className="relative">
                From Forgotten Chores to Happier Ever Afters
              </span>
            </h2>
            <p className="font-medium mb-8 text-base md:text-[24px] lg:text-[28px] leading-[1.6] text-blue-grey ">
              Assign tasks. Complete them. Watch your partner’s smiley glow.
            </p>
            <Button text="Get Smilo’s Help – Try Free" varient="secondary" />
          </div>
          <div className="w-full lg:w-6/12 text-right">
            <Image
              src="/images/robot.png"
              alt="rebote"
              height={490}
              width={557}
              className="ms-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
