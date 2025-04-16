// ContactUs.tsx
import type { Metadata } from "next";
import React from "react";
import Image from "next/image";

import Button from "../components/Button";
import { Discord, Instagram, Twitter } from "../SVG";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Contact Us | Digital Marketing Agency Phoenix",
  description:
    "Get in touch with iillest finds agency, your local digital marketing partner in Phoenix, AZ. Contact us today for expert SEO, social media, and website development solutions.",
  alternates: {
    canonical: "https://iillestfindsagency.com/contact-us",
  },
  openGraph: {
    title: "Contact Us | Digital Marketing Agency Phoenix",
    description:
      "Reach out to iillestfindsagency.com, your trusted digital marketing partner in Phoenix. Let&rsquo;s work together to elevate your online presence.",
    url: "https://iillestfindsagency.com/contact-us",
    type: "website",
  },
  robots: "index, follow",
};

const contactUsData = [
  {
    name: "Call us",
    link: "+1012 3456 789",
    icon: "/images/icons/call-us.svg",
  },
  {
    name: "Make a quote",
    link: "demo@gmail.com",
    icon: "/images/icons/make-email.svg",
  },
  {
    name: "Location",
    link: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
    icon: "/images/icons/get-location.svg",
  },
];

const ContactUs = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth-token")?.value;

  // Server-side redirect if not authenticated
  if (!authToken) {
    redirect("/login");
  }
  return (
    <div>
      <div className="container px-6 mx-auto">
        <div className="text-center relative py-10">
          <div className="max-w-[714px] mx-auto mb-6">
            <div className="relative">
              <h1 className="text-theme text-[40px] font-bold leading-[70px] inline-block relative tracking-[2px]">
                Contact Us
              </h1>
              <p className="text-[18px] font-medium text-primary leading-[23px]">
                Any question or remarks? Just write us a message!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 md:py-18 lg:py-20 mb-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-12 shadow-blog rounded-[10px] p-5">
            <div className="w-full lg:w-5/12">
              <div
                className="rounded-[10px] overflow-hidden p-[10px] md:p-[20px] lg:p-[30px] 2xl:p-[40px] relative"
                style={{
                  background:
                    "linear-gradient(180deg, #FF9759 0%, #FFCE42 100%)",
                }}
              >
                <h2 className="font-semibold text-[24px] lg:text-[28px] leading-[1.4] text-white mb-3">
                  Contact Information
                </h2>
                <p className="text-white text-[18px] font-[400] mb-14">
                  Say something to start a live chat!
                </p>
                <div className="py-6 max-w-[337px]">
                  {contactUsData.map((data, i) => (
                    <div
                      className="flex gap-4 items-center [&:not(:last-child)]:mb-8 lg:[&:not(:last-child)]:mb-10"
                      key={i}
                    >
                      <div className="flex-none">
                        <Image
                          src={data.icon}
                          alt={data.name}
                          height={24}
                          width={24}
                        />
                      </div>
                      <div>
                        <a
                          href={
                            data.name === "Call us"
                              ? `tel:10123456789`
                              : data.name === "Make a quote"
                              ? `mailto:${data.link}`
                              : ""
                          }
                          className="block text-[18px]  font-[400] leading-[1.4] text-white"
                        >
                          {data.link}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-6 mt-24 lg:mt-48">
                  <a
                    href="#"
                    className="group bg-primary h-[30px] w-[30px] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-theme"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="#"
                    className="group bg-primary h-[30px] w-[30px] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-theme"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="#"
                    className="group bg-primary h-[30px] w-[30px] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-theme"
                  >
                    <Discord />
                  </a>
                </div>
                <div className="rounded-full h-[137px] w-[137px] bg-[#FFF9F921] absolute bottom-[71px] right-[70px]"></div>
                <div className="rounded-full h-[269px] w-[269px] bg-[#FFF9F921] absolute -bottom-[100px] -right-[100px]"></div>
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="relative h-full pb-28">
                <p className="text-[24px] leading-[30px] text-primary font-semibold mb-4">
                  Send Details
                </p>
                <form className="pt-5">
                  <div className="mb-3">
                    <h6 className="text-base text-[#9796A1] leading-[32px] font-medium mb-2">
                      Full Name
                    </h6>
                    <div className="border border-[#EEEEEE] rounded-[10px] flex items-center gap-4 px-4 hover:border-theme transition ease">
                      <input
                        type="text"
                        placeholder="Arlene Mccoy"
                        className="w-full py-4 px-6 text-[14px] bg-transparent focus:outline-none placeholder:text-[#111719] text-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6 className="text-base text-[#9796A1] leading-[32px] font-medium mb-2">
                      Your Email
                    </h6>
                    <div className="border border-[#EEEEEE] rounded-[10px] flex items-center gap-4 px-4 hover:border-theme transition ease">
                      <input
                        type="text"
                        placeholder="arlenemccoy54@gmail.com"
                        className="w-full py-4 px-6 text-[14px] bg-transparent focus:outline-none placeholder:text-[#111719] text-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6 className="text-base text-[#9796A1] leading-[32px] font-medium mb-3">
                      Comments
                    </h6>
                    <div className="border border-[#EEEEEE] rounded-[10px] flex items-center hover:border-theme transition ease">
                      <textarea
                        placeholder="Enter here"
                        className="w-full py-4 px-6 text-[14px] bg-transparent focus:outline-none placeholder:text-[#111719] text-primary"
                        rows={4}
                      />
                    </div>
                  </div>
                  <div className="text-right mt-10 relative">
                    <Button
                      className="text-[24px] leading-[30px] font-semibold bg-[#F5F5F7] py-4 bg-primary w-[184px]"
                      varient="theme"
                      text="Submit"
                    />
                  </div>
                </form>
                <Image
                  src="images/letter_send1.png"
                  height={112}
                  width={240}
                  alt="letter_send1"
                  className="absolute right-32 -bottom-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
