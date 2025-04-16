import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <section id="downloads" className="py-20 xl:py-24 2xl:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <header className="w-[755px] max-w-full mb-14 mx-auto">
          <div className="text-center">
            <p className="text-[#A7A6A6] font-medium text-base lg:text-[18px] 2xl:text-[20px] leading-[25px] mb-6 flex justify-center">
              <span className="w-[17px] h-[2px] bg-primary mt-3 me-3"></span>
              Love Better in 3 Steps
            </p>
            <div>
              <h2 className="inline-block text-blue-grey text-[24px] lg:text-[34px] 2xl:text-[48px] font-bold leading-[1.4] mb-6 relative">
                <Image
                  src="/images/heading-layer-2.png"
                  height={10}
                  width={181}
                  alt="layer"
                  className="absolute top-[30px] lg:top-[40px] 2xl:top-[58px] left-4 2xl:-left-1 hidden md:inline-block"
                />
                <span className="relative">
                  Ready to Become the Partner They’ve Always Wanted?
                </span>
              </h2>
            </div>
          </div>
        </header>
        <div className="grid md:flex md:justify-between items-cente md:gap-3 lg:gap-4 2xl:gap-5 md:w-[1036px] w-[350px] mx-auto">
          <div className="w-[165px] h-[165px] md:w-[135px] md:h-[135px] lg:w-[150px] lg:h-[150px] lg:p-8 2xl:w-[165px] 2xl:h-[165px] flex-none rounded-[25px] flex items-center justify-center bg-theme-2 md:mt-20">
            <Image
              src="/images/icons/download.svg"
              width={86}
              height={86}
              alt=""
            />
          </div>
          <Image
            src="/images/arrow-dotted-up.png"
            width={211}
            height={92}
            alt=""
            className="mt-16 ml-4 md:ml-0 mb-5 md:mt-auto md:mb-10 rotate-[69deg] md:rotate-0 w-[160px] md:w-[130px] lg:w-[200px] 2xl:w-[211px]"
          />
          <div className="w-[165px] h-[165px] md:w-[135px] md:h-[135px] lg:w-[150px] lg:h-[150px] lg:p-8 2xl:w-[165px] 2xl:h-[165px] flex-none rounded-[25px] flex items-center justify-center bg-[#FF6B6B] -mt-10 md:mt-0 ms-auto md:ms-0 md:mb-auto">
            <Image
              src="/images/icons/connect.svg"
              width={103}
              height={103}
              alt=""
            />
          </div>

          <Image
            src="/images/arrow-dotted-down.png"
            width={211}
            height={92}
            alt=""
            className="mb-auto mt-16 me-5 md:me-0 ms-auto md:ms-0 rotate-[105deg] md:rotate-0 w-[160px] md:w-[130px] lg:w-[200px] 2xl:w-[211px]"
          />
          <div className="w-[165px] h-[165px] md:w-[135px] md:h-[135px] lg:w-[150px] lg:h-[150px] lg:p-8 2xl:w-[165px] 2xl:h-[165px] flex-none rounded-[25px] flex items-center justify-center bg-theme-2 -mt-6 md:mt-20">
            <Image
              src="/images/eyes-logo.png"
              width={512}
              height={357}
              alt=""
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
