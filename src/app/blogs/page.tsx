import type { Metadata } from "next";
import BlogListServer from "./BlogListServer";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Expert Insights & Growth Strategies | Digital Marketing Blog Phoenix",
  description:
    "Explore our latest blogs for expert insights, SEO hacks, and growth strategies from Phoenix's top digital marketing experts.",
  alternates: {
    canonical: "http://smylimc.com/blogs",
  },
  openGraph: {
    title:
      "Expert Insights & Growth Strategies | Digital Marketing Blog Phoenix",
    description:
      "Discover expert tips, SEO hacks, and growth strategies from Phoenix's leading digital marketing agency.",
    url: "http://smylimc.com/blogs",
    type: "website",
  },
  robots: "index, follow",
};

export const revalidate = 3600;

export default async function BlogListPage() {
  return (
    <Suspense fallback={<BlogLoading />}>
      <BlogListServer />
    </Suspense>
  );
}

function BlogLoading() {
  return (
    <React.Fragment>
      {/* Breadcrumb Skeleton */}
      <div className="container px-6 mx-auto">
        <div className="py-16 md:py-18 lg:py-20 pb-0">
          <div className="flex gap-10 flex-wrap lg:flex-nowrap">
            {/* Main Content */}
            <div className="w-full relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="group overflow-hidden rounded-[15px] shadow-custom animate-pulse"
                  >
                    {/* Image Skeleton */}
                    <div className="bg-[#F8F9FC] relative aspect-[276/175] w-full">
                      <div className="absolute inset-0 bg-gray-200 rounded-lg" />
                    </div>

                    {/* Content Skeleton */}
                    <div className="py-8 px-6 space-y-4">
                      <div className="flex gap-5 items-center text-[#737588] mb-4">
                        <div className="flex gap-3 items-center w-full">
                          <div className="w-4 h-4 bg-gray-200 rounded-full" />
                          <div className="h-4 bg-gray-200 rounded w-1/4" />
                        </div>
                        <div className="flex gap-3 items-center w-full">
                          <div className="w-4 h-4 bg-gray-200 rounded-full" />
                          <div className="h-4 bg-gray-200 rounded w-1/3" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="h-6 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-5/6" />
                      </div>

                      <div className="flex items-center gap-5 mt-5">
                        <div className="w-6 h-6 bg-gray-200 rounded-full" />
                        <div className="h-4 bg-gray-200 rounded w-1/4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-4 mt-10">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
