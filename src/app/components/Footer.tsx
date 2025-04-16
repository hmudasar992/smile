import React from "react";
import Button from "./Button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mb-6 md:mb-16 2xl:mb-32 mt-24 xl:mt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-[#FF6B6B] rounded-[24px] relative">
          <div className="flex flex flex-wrap-reverse lg:flex-nowrap">
            <div className="w-full lg:w-1/2 text-center lg:text-left px-5 py-[50px] md:px-[60px] lg:py-[80px] xl:py-[90px] 2xl:px-[95px] 2xl:py-[100px]">
              <h2 className="text-[24px] md:text-[28px] lg:text-[34px] 2xl:text-[60px] font-semibold leading-[1.3] 2xl:leading-[1.4] text-white tracking-[0.2px] mb-3">
                Your Partner’s Smile is One Tap Away
              </h2>
              <p className="text-white text-base md:text-[18px] font-bold leading-[28px] tracking-[0.2px] mb-6">
                Join 500,000+ couples who found their spark again.
              </p>
              <Button
                varient="secondary"
                text="DOWNLOAD FREE"
                className="text-white hover:text-primary"
              />
            </div>
            <div className="w-full lg:max-w-[619px] xl:max-w-full xl:w-[619px] 2xl:w-[670px] lg:absolute lg:-right-5 lg:bottom-0 xl:right-4">
              <div className="lg:-mt-32 lg:-mb-14">
                <Image
                  src="/images/happy.png"
                  height={619}
                  width={619}
                  alt="footer"
                  className="ms-auto max-w-full lg:w-[550px] xl:w-full lg:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
