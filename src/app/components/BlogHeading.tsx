import React from "react";

// ✅ Define props type explicitly
interface BlogHeadingProps {
  title: string;
}

const BlogHeading: React.FC<BlogHeadingProps> = ({ title }) => {
  return (
    <div className="relative mb-6">
      <h2 className="text-[20px] text-black font-semibold leading-[26px] mb-5">
        {title}
      </h2>
      <div className="h-[2px] bg-[#E3E3E3] w-full relative">
        <div className="absolute top-0 bottom-0 left-0 w-[60px] bg-black"></div>
      </div>
    </div>
  );
};

export default BlogHeading;
