import React from "react";
import { WhatsAppIcon } from "../SVG";
import Link from "next/link";

// ✅ Define props type explicitly
interface ButtonProps {
  varient?: "primary" | "secondary" | "default" | "theme"; // Added "theme" to the allowed values
  text: string;
  className?: string;
  icon?: string;
  path?: string;
  onClick?: () => void; // Add onClick handler prop
}

const Button: React.FC<ButtonProps> = ({
  varient = "default",
  text,
  className = "",
  icon,
  path = "#",
  onClick,
}) => {
  // If onClick is provided, use button element
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`bg-theme text-primary text-[14px] inline-flex items-center justify-center py-4 px-[50px] rounded-[8px] ${
          className || ""
        }`}
      >
        {text}
      </button>
    );
  }

  return (
    <Link
      className={`py-2 lg:py-3 px-4 lg:px-5 xl:px-7 relative inline-flex items-center justify-center overflow-hidden group rounded-[8px] font-bold transition ease text-[14px] lg:text-base xl:text-[18px] 2xl:text-[20px] ${
        varient === "primary"
          ? "bg-theme text-primary"
          : varient === "secondary"
          ? "bg-theme-2"
          : varient === "theme"
          ? "bg-primary text-white"
          : "bg-white text-primary"
      } ${className}`}
      href={path}
      prefetch
    >
      <span
        className={`duration-400 ease absolute left-0 top-1/2 block h-0 w-full ${
          varient === "primary"
            ? "bg-theme-2"
            : varient === "secondary"
            ? "bg-theme"
            : varient === "theme"
            ? "bg-primary text-white"
            : "bg-white"
        } opacity-100 transition-all group-hover:top-0 group-hover:h-full`}
      ></span>
      <span className="relative">
        <span className="ease absolute right-0 top-1/2 -translate-y-1/2 flex h-5 w-6 translate-x-2 opacity-0 group-hover:opacity-[1] transform items-center justify-start duration-500 group-hover:translate-x-full">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span
          className={`relative ${varient !== "primary" && ""} ${
            icon && "gap-3"
          } transform ease transform duration-700 group-hover:-translate-x-3 flex items-center`}
        >
          {icon === "WhatsAppIcon" && <WhatsAppIcon />}
          {text}
        </span>
      </span>
    </Link>
  );
};

export default Button;
