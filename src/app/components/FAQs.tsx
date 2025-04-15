"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { data } from "../data";

interface FAQ {
  heading: string;
  description: string;
}

const FAQs = () => {
  const faqsData = data.faqs;
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    if (activeIndex !== null && contentRef.current[activeIndex]) {
      contentRef.current[
        activeIndex
      ].style.maxHeight = `${contentRef.current[activeIndex].scrollHeight}px`;
    }

    contentRef.current.forEach((el, idx) => {
      if (idx !== activeIndex && el) {
        el.style.maxHeight = "0";
      }
    });
  }, [activeIndex]);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faqs"
      className="py-14"
      aria-label="Frequently Asked Questions"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="w-[800px] max-w-full mb-0 mx-auto">
          <div className="text-center">
            <p className="text-[#A7A6A6] font-medium text-base lg:text-[18px] 2xl:text-[20px] leading-[25px] mb-6 flex justify-center">
              <span className="w-[17px] h-[2px] bg-primary mt-3 me-3"></span>
              Your Questions, Answered
            </p>
            <div>
              <h2 className="inline-block text-blue-grey text-[24px] lg:text-[34px] 2xl:text-[48px] font-bold leading-[1.4] mb-6 relative">
                <Image
                  src="/images/heading-layer-2.png"
                  height={10}
                  width={181}
                  alt="layer"
                  className="absolute top-[30px] lg:top-[40px] 2xl:top-[56px] left-0 hidden md:inline-block"
                />
                <span className="relative">Worried? We’ve Got You.</span>
              </h2>
            </div>
          </div>
        </header>
        <div className="flex flex-wrap lg:flex-nowrap gap-12 mt-6 md:mt-8 lg:mt-10 items-center">
          <div className="w-full lg:w-8/12">
            {faqsData.faqList.map((faq: FAQ, index: number) => (
              <article
                key={index}
                className={`${
                  activeIndex === index
                    ? "border-primary"
                    : "border-transparent"
                } [&:not(:last-child)]:mb-7 border-[2px] shadow-custom-hover overflow-hidden rounded-[14px]`}
                aria-label={`FAQ: ${faq.heading}`}
              >
                <button
                  className="flex justify-between items-center w-full px-4 py-4 lg:px-8 lg:py-5 text-left"
                  onClick={() => handleToggle(index)}
                  aria-expanded={activeIndex === index}
                >
                  <h3 className="text-[#170F49] text-[14px] lg:text-[22px] font-semibold leading-[22px] lg:leading-[28px]">
                    {faq.heading}
                  </h3>
                  <div
                    className={`w-[40px] h-[40px] rounded-full ml-4 transform transition-transform duration-300 flex items-center justify-center ${
                      activeIndex === index
                        ? "rotate-90 bg-primary text-white"
                        : "rotate-0 text-primary"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="16"
                      viewBox="0 0 9 16"
                      fill="none"
                    >
                      <path
                        d="M1.1123 14.4414L7.66204 7.81485L1.1123 1.18828"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  ref={(el) => {
                    contentRef.current[index] = el;
                  }}
                  className="transition-all duration-500 ease-in-out overflow-hidden"
                  style={{ maxHeight: "0" }}
                >
                  <div className="px-3 lg:px-8 pb-5">
                    <p className="text-[#6F6C90] text-sm lg:text-base 2xl:text-[18px] leading-[24px] lg:leading-[28px] 2xl:leading-[30px] font-[400]">
                      {faq.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="w-full lg:w-4/12 text-center">
            <Image
              src="/images/question.png"
              alt="question"
              height={497}
              width={497}
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
