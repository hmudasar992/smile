"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";

const headerMenu = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Smile Bizz", path: "/smile-bizz" },
  { name: "Blogs", path: "/blogs" },
  { name: "Help Center", path: "/contact-us" },
];

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleShowMenu = () => {
    setShowMenu(true);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMenu]);

  return (
    <React.Fragment>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300`}
      >
        <div
          className={`bg-white transition-all duration-300 ${
            isScrolled ? "bg-white shadow-custom-hover py-1 lg:py-2" : "py-3"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center">
              <div className="logo">
                <Link href="/" prefetch>
                  <Image
                    src="/images/smyl-logo.png"
                    height={70}
                    width={99}
                    alt="logo"
                    className={` ransition-all duration-300 h-auto ${
                      isScrolled
                        ? "h-auto w-[70px] md:w-[80px]"
                        : "h-auto w-[80px] md:w-[99px]"
                    }`}
                  />
                </Link>
              </div>
              <div className="header-menu hidden lg:flex items-center">
                <nav>
                  <ul className="flex gap-8 items-center">
                    {headerMenu.map((item, index) => {
                      const isActive =
                        pathname === item.path ||
                        pathname.startsWith(item.path + "/");

                      return (
                        <li key={index}>
                          <Link
                            href={item.path}
                            className={`${
                              isActive
                                ? "text-[20px] font-semibold text-theme"
                                : "text-primary text-semibold font-[400]"
                            } transition-all duration-300 hover:text-theme"
                      `}
                            prefetch
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  varient="primary"
                  text="Get Started"
                  path="/contact-us"
                />
                <button
                  className="h-[30px] w-[35px] flex-none relative z-[999] lg:hidden"
                  onClick={handleShowMenu}
                >
                  <span className="h-[3px] bg-gradient rounded-[3px] block mb-2 w-[70%] ms-auto"></span>
                  <span className="h-[3px] bg-gradient rounded-[3px] block mb-2"></span>
                  <span className="h-[3px] bg-gradient rounded-[3px] block w-[80%] ms-auto"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu fixed top-0 ${
          showMenu ? "open" : ""
        } left-0 w-full h-full z-50 transition-all duration-400 z-[999]`}
      >
        <div
          className="absolute bg-black bg-opacity-50 left-0 right-0 bottom-0 top-0"
          onClick={handleCloseMenu}
        ></div>
        <nav
          className={`bg-white w-[300px] p-5 h-full relative off-canvas-inner-content`}
        >
          <ul className="">
            {headerMenu.map((item, index) => {
              const isActive =
                pathname === item.path || pathname.startsWith(`${item.path}/`);

              return (
                <li key={index} className="mb-4">
                  <Link
                    href={item.path}
                    className={`${
                      isActive
                        ? "text-[20px] font-semibold"
                        : "text-[18px] font-[400]"
                    }  transition-all duration-300 hover:gradient-text block"
                      `}
                    prefetch
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
