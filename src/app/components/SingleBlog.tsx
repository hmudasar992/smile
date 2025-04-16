import React from "react";
import Image from "next/image";
import Link from "next/link";
import { capitalizeFirst } from "../utils/constent";
import ProgressiveImage from "./ProgressiveImage";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
interface Blog {
  title: string;
  cover?: {
    url: string;
    alternativeText: string;
  };
  description: string;
  author?: {
    name: string;
    updatedAt: string;
  };
  slug: string;
}

interface Props {
  data: Blog;
}

const SingleBlog = ({ data }: Props) => {
  return (
    <Link
      href={`/blogs/${data?.slug}`}
      className="block shadow-blog border border-theme hover:shadow-blog-hover transition-all duration-300 p-6 rounded-[15px] w-full hover:-translate-y-2"
      prefetch
    >
      <div className="rounded-[15] overflow-hidden mb-6 -mt-20">
        {data?.cover?.url ? (
          <ProgressiveImage
            src={
              data?.cover?.url.startsWith("http")
                ? data?.cover?.url
                : `https://admin.iillestfindsagency.com${data.cover.url}`
            }
            height={250}
            width={276}
            className="w-full h-full object-center object-cover"
            alt={`Image for ${data?.cover?.alternativeText || "default"}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/related-blog-1.jpg";
            }}
          />
        ) : (
          <Image
            src="/images/related-blog-1.jpg"
            height={175}
            width={276}
            className="w-full h-full object-center object-cover"
            alt={`Image for ${data?.cover?.alternativeText || "default"}`}
          />
        )}
      </div>
      <p className="inline-block text-[20px] font-semibold bg-theme-2 bg-opacity-40 leading-[1.3] rounded-[7px] text-black px-[7px] mb-3">
        {data?.author?.updatedAt ? formatDate(data.author.updatedAt) : "N/A"}
      </p>
      <h2 className="text-black text-base lg:text-[18px] 2xl:text-[20px] leading-[22px] lg:leading-[26px] 2xl:leading-[28px] font-bold mb-5 text-truncate-2">
        {capitalizeFirst(data?.title)}
      </h2>
      <p className="text-[14px] leading-[1.4] font-medium text-truncate-4">
        {capitalizeFirst(data?.description)}
      </p>
    </Link>
  );
};

export default SingleBlog;
