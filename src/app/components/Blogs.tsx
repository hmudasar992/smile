"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiURL, authToken } from "../utils/constent";
import Image from "next/image";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiURL}/articles?populate=*`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <section
      id="blog"
      className="py-14"
      aria-label="Expert Insights & Growth Strategies"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="w-[800px] max-w-full mb-0 mx-auto">
          <div className="text-center">
            <p className="text-[#A7A6A6] font-medium text-base lg:text-[18px] 2xl:text-[20px] leading-[25px] mb-6 flex justify-center">
              <span className="w-[17px] h-[2px] bg-primary mt-3 me-3"></span>
              Featured Updates
            </p>
            <div>
              <h2 className="inline-block text-blue-grey text-[24px] lg:text-[34px] 2xl:text-[48px] font-bold leading-[1.4] mb-6 relative">
                <Image
                  src="/images/heading-layer-2.png"
                  height={10}
                  width={181}
                  alt="layer"
                  className="absolute top-[30px] lg:top-[40px] 2xl:top-[56px] right-[140px] hidden md:inline-block"
                />
                <span className="relative">On The Move, Our Latest Blogs</span>
              </h2>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 2xl:gap-14 md:justify-center mt-20">
          {loading
            ? // Loading Skeletons
              Array.from({ length: 3 }).map((_, i) => (
                <article
                  key={i}
                  className="w-full"
                  aria-label="Loading blog post"
                >
                  <div className="shadow-blog border border-[#EBEAED] hover:shadow-blog-hover transition-all duration-300 p-6 rounded-[8.6px] w-full">
                    <div className="rounded-[8.6px] overflow-hidden mb-5 animate-pulse">
                      <div className="w-full h-[175px] bg-gray-200 rounded-lg" />
                    </div>

                    <div className="space-y-3">
                      <div className="h-6 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-4 bg-gray-200 rounded w-5/6" />
                    </div>

                    <footer className="flex gap-5 items-center mt-5 animate-pulse">
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-1/3" />
                        <div className="h-3 bg-gray-200 rounded w-1/4" />
                      </div>
                    </footer>
                  </div>
                </article>
              ))
            : // Actual Blog Items
              blogs?.slice(0, 3)?.map((data, i: number) => (
                <article key={i} className="w-full">
                  <SingleBlog data={data} />
                </article>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
