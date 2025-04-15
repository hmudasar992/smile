// import React from "react";

// const Heading = ({ className, text }: any) => {
//   return (
//     <div className="inline-block flex-none mb-3 lg:mb-0">
//       <h2
//         className={`text-[35px] font-bold leading-[1] mb-3 bg-[#F5F5F7] inline py-[2px] px-[6px] ${className}`}
//       >
//         {text}
//       </h2>
//     </div>
//   );
// };

// export default Heading;

//TODO: <Heading tag="h1" text="Main Title" />

import React, { JSX } from "react";

interface HeadingProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({
  text,
  className = "",
  tag = "h2",
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <div className="inline-block flex-none mb-3 lg:mb-0">
      <Tag
        className={`text-[24px] md:text-[30px] lg:text-[35px] font-bold leading-[51px] mb-3 mb-3 bg-[#F5F5F7] inline py-[2px] px-[6px] ${className}`}
      >
        {text}
      </Tag>
    </div>
  );
};

export default Heading;
