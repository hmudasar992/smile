"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

const Assistant = () => {
  return (
    <section className="relative">
      <div className="container px-6 mx-auto relative">
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          <div className="w-full lg:w-6/12 text-right">
            <Image
              src="/images/assistant.png"
              alt="rebote"
              height={627}
              width={600}
              className="w-full"
            />
          </div>
          <div className="w-full lg:w-6/12 text-center lg:text-start">
            <p className="text-[#A7A6A6] font-medium text-base lg:text-[18px] 2xl:text-[20px] leading-[25px] mb-6 flex justify-center lg:justify-start">
              <span className="w-[17px] h-[2px] bg-primary mt-3 me-3"></span>
              Smilo AI Assistant
            </p>
            <h2 className="text-blue-grey text-[24px] lg:text-[34px] 2xl:text-[48px] font-bold leading-[1.4] mb-6 relative">
              <Image
                src="/images/heading-layer-2.png"
                height={10}
                width={181}
                alt="layer"
                className="absolute top-[30px] lg:top-[40px] 2xl:top-[56px] left-28 hidden  md:inline-block"
              />
              <span className="relative">Your Secret Relationship Weapon</span>
            </h2>
            <p className="font-semibold mb-4 text-[18px] md:text-[22px] lg:text-[26px] leading-[1.6] text-primary">
              Smilo Knows What Your Partner Wants… Before They Do
            </p>
            <p className="font-medium mb-8 text-base md:text-[20px] lg:text-[22px] leading-[1.6] text-primary">
              Smilo learns your partner’s loves, hates, and secret cravings.
              Just connect your profiles, answer a few questions, and let Smilo
              work its magic.
            </p>
            <Button text="Meet Smilo – Start Free Trial" varient="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;
