"use client";

import React from "react";
import { SearchIcon } from "../SVG";
import Image from "next/image";

interface BreadcrumbProps {
  loading?: boolean;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  loading = false,
  searchQuery = "",
  onSearchChange = () => {},
}) => {
  if (loading) {
    return (
      <nav
        aria-label="Breadcrumb Loading"
        className="py-6 min-h-[334px] flex items-center relative animate-pulse "
      >
        <div className="bg-gray-200 absolute top-0 left-0 w-full h-full rounded-lg" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="h-[45px] bg-gray-300 rounded-[7px] w-[200px] mb-4" />
          <div className="h-[42px] bg-gray-300 rounded w-3/4 mb-4" />
          <div className="flex items-center gap-4">
            <div className="h-6 bg-gray-300 rounded w-16" />
            <div className="h-6 bg-gray-300 rounded w-24" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className="pt-48 pb-4 -mt-[100px] mb-20"
      style={{
        background: "linear-gradient(180deg, #FF6B6B 0%, #FFD93D 100%)",
      }}
    >
      <div className="container px-6 mx-auto">
        <div className="text-center relative">
          <div className="max-w-[714px] mx-auto mb-6">
            <div className="relative">
              <div className="h-[37px] w-[37px] rounded-full border border-[#F03561] absolute left-2 lg:left-20 -top-3"></div>
              <h1 className="text-[46px] lg:text-[70px] font-bold leading-[80px] inline-block relative tracking-[2px]">
                <Image
                  height={31}
                  width={32}
                  alt="three-line"
                  src="/images/three-line.png"
                  className="absolute -left-6 -top-3"
                />
                Blogs
              </h1>
              <div className="h-[37px] w-[37px] rounded-full border border-[#F03561] absolute right-1 lg:right-12 bottom-2"></div>
            </div>
            <div className="bg-white shadow-search rounded-[10px] flex items-center px-4 md:px-6 lg:px-8 lg:py-3 mt-6 -mb-20">
              <input
                type="text"
                className="bg-transparent w-full h-[60px] focus:outline-none placeholder:text-[#170F49] text-primary text-base md:text-[20px] lg:text-[22px] font-medium leading-[28px]"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <button>
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
