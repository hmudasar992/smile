"use client";

import Image from "next/image";
import Button from "./Button";
import { AppleIcon, PlayStoreIcon } from "../SVG";

const Banner = () => {
  return (
    <header className="banner py-14 lg:pb-30 xl:pb-36 2xl:pb-48 lg:24 xl:py-28 relative">
      <div className=" absolute left-0 right-0 bottom-0 top-0">
        <Image
          src="/images/gif-edited.gif"
          alt="Banner GIF"
          fill
          className="max-w-full object-cover object-right"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex justify-between xl:flex-nowrap flex-wrap">
          <div className="max-w-[600px] xl:max-w-[733px] lg:pe-8 2xl:pr-10 xl:mb-0 mb-10">
            <h1 className="text-white text-[30px] md:text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[65px] font-bold lmd:leading-[1.35] 2xl:eading-[1.4] mb-3 xl:mb-5">
              YOUR PARTNER’S MOOD, MADE SIMPLE
            </h1>

            {/* ✅ Using backticks to avoid JSX unescaped entities error */}
            <p className="text-white text-[16px] xl:text-[22px] 2xl:text-[26px] leading-normal tracking-[1px] lg:leading-[35px] font-normal">
              Turn small gestures into lasting love. Sync your tasks, track your
              partner’s mood, and keep the spark alive
            </p>

            <div className="flex gap-4 mt-12">
              <Button
                text="DOWNLOAD FREE"
                className="py-3 h-[60px]"
                path="/contact-us"
              />

              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center bg-primary rounded-[6px] p-[1px] border border-primary h-[60px] w-[60px] hover:shadow-custom transition-all ease"
              >
                <PlayStoreIcon />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center bg-primary rounded-[6px] p-[1px] border border-primary h-[60px] w-[60px] hover:shadow-custom transition-all ease"
              >
                <AppleIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
