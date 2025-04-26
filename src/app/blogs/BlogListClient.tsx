"use client";

import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProgressiveImage from "../components/ProgressiveImage";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { capitalizeFirst } from "../utils/constent";
import type { BlogPost, BlogListProps } from "../types/blog";
import FAQs from "../components/FAQs";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
export function BlogListClient({ initialPosts }: BlogListProps) {
  const [blogs] = useState<BlogPost[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const blogsPerPage = 6;
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (!blogs.length) return notFound();

  return (
    <div className="blogs">
      <Breadcrumb searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="py-16 md:py-18 lg:py-36 pb-0">
        <div className="container px-6 mx-auto">
          <div className="flex gap-10 flex-wrap lg:flex-nowrap">
            {/* Main Content */}
            <div className="w-full relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {currentBlogs.map((data, i) => (
                  <Link
                    href={`/blogs/${data?.slug}`}
                    className="block shadow-blog border border-theme hover:shadow-blog-hover transition-all duration-300 p-6 rounded-[15px] w-full hover:-translate-y-2 mb-12"
                    prefetch
                    key={i}
                  >
                    <div className="rounded-[15px] overflow-hidden mb-6 -mt-20">
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
                          alt={`Image for ${
                            data?.cover?.alternativeText || "default"
                          }`}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/images/related-blog-1.jpg";
                          }}
                        />
                      ) : (
                        <Image
                          src="/images/related-blog-1.jpg"
                          height={175}
                          width={276}
                          className="w-full h-full object-center object-cover"
                          alt={`Image for ${
                            data?.cover?.alternativeText || "default"
                          }`}
                        />
                      )}
                    </div>
                    <p className="inline-block text-[20px] font-semibold bg-theme-2 bg-opacity-40 leading-[1.3] rounded-[7px] text-black px-[7px] mb-3">
                      {data?.author?.updatedAt
                        ? formatDate(data.author.updatedAt)
                        : "N/A"}
                    </p>
                    <h2 className="text-black text-base lg:text-[18px] 2xl:text-[20px] leading-[22px] lg:leading-[26px] 2xl:leading-[28px] font-bold mb-5 text-truncate-2">
                      {capitalizeFirst(data?.title)}
                    </h2>
                    <p className="text-[14px] leading-[1.4] font-medium text-truncate-4">
                      {capitalizeFirst(data?.description)}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <div className="flex items-center p-2 justify-center bg-theme rounded-full w-[120px] h-[66px] z-10">
                  {/* Prev Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative overflow-hidden group w-[50px] h-[50px] flex items-center justify-center rounded-full"
                    aria-label="Previous"
                  >
                    <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0 rounded-full" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="10"
                      viewBox="0 0 20 10"
                      fill="none"
                      className="rotate-180 relative z-10 transition-colors duration-300 group-hover:[&>path]:fill-white"
                    >
                      <path
                        d="M20 5.15072L14.9713 0.98405L14.9713 4.31738L5.96244e-08 4.31738L3.97496e-08 5.98405L14.9713 5.98405L14.9713 9.31738L20 5.15072Z"
                        fill="#3F3115"
                      />
                    </svg>
                  </button>

                  {/* Next Button */}
                  <button
                    className="relative overflow-hidden group w-[50px] h-[50px] flex items-center justify-center rounded-full"
                    aria-label="Next"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <span className="absolute inset-0 bg-primary translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0 rounded-full" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="10"
                      viewBox="0 0 20 10"
                      fill="none"
                      className="relative z-10 transition-colors duration-300 group-hover:[&>path]:fill-white"
                    >
                      <path
                        d="M20 5.15072L14.9713 0.98405L14.9713 4.31738L5.96244e-08 4.31738L3.97496e-08 5.98405L14.9713 5.98405L14.9713 9.31738L20 5.15072Z"
                        fill="#3F3115"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQs />
    </div>
  );
}

export default BlogListClient;
