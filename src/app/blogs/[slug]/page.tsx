import { Suspense } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import styles from "@/app/Markdown.module.css";
import { capitalizeFirst } from "@/app/utils/constent";
import { Blog } from "@/app/types/blog";
import ProgressiveImage from "@/app/components/ProgressiveImage";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb";
import { apiURL, authToken } from "@/app/utils/constent";
import axios from "axios";
import { Metadata } from "next";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { blog } = await fetchBlogAndList((await params).slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.seo?.metaTitle || blog.title,
    description: blog.seo?.metaDescription || blog.description,
    openGraph: {
      title: blog.seo?.metaTitle || blog.title,
      description: blog.seo?.metaDescription || blog.description,
      images: blog.cover?.url ? [{ url: blog.cover.url }] : [],
      url: `https://yourwebsite.com/blogs/${blog.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo?.metaTitle || blog.title,
      description: blog.seo?.metaDescription || blog.description,
      images: blog.cover?.url ? [blog.cover.url] : [],
    },
  };
}

async function fetchBlogAndList(slug: string) {
  try {
    const response = await axios.get<{ data: Blog[] }>(
      `${apiURL}/articles?populate=*`,
      { headers: { Authorization: `Bearer ${authToken}` } }
    );
    const blogs = response.data.data;
    const blog = blogs.find((b: Blog) => b.slug === slug) || null;
    return { blog, blogs };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { blog: null, blogs: [] };
  }
}

function BlogLoading() {
  return <Breadcrumb loading />;
}

export default async function BlogDetailPage({ params }: PageProps) {
  // Properly handle the params
  const slug = Array.isArray((await params).slug)
    ? (await params).slug[0]
    : (await params).slug;
  const { blog, blogs } = await fetchBlogAndList(slug);

  if (!blog) {
    return (
      <div className="text-center text-red-500 text-lg mt-10">
        Blog not found
      </div>
    );
  }

  const currentIndex = blogs.findIndex((b) => b.slug === blog.slug);
  const prevBlog = blogs[currentIndex - 1];
  const nextBlog = blogs[currentIndex + 1];

  return (
    <Suspense fallback={<BlogLoading />}>
      <div className="services">
        <div className="pt-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="shadow-blog p-6 md:p-10 lg:p-12">
              <div className="rounded-[20px]">
                {blog.cover?.url && (
                  <div className="w-full h-full shadow-blog rounded-[20px] overflow-hidden mb-10 -mt-24">
                    <ProgressiveImage
                      src={
                        blog.cover.url.startsWith("http")
                          ? blog.cover.url
                          : `https://admin.iillestfindsagency.com${blog.cover.url}`
                      }
                      height={175}
                      width={276}
                      className="max-w-full max-h-full"
                      alt={`Image for ${
                        blog.cover?.alternativeText || "blog image"
                      }`}
                    />
                  </div>
                )}
                <p className="inline-block text-[20px] font-semibold bg-theme bg-opacity-40 leading-[1.4] rounded-[7px] text-black px-[10px] mb-8">
                  {blog?.author?.updatedAt
                    ? formatDate(blog.author.updatedAt)
                    : "N/A"}
                </p>

                <h2 className="text-black text-[24px] md:text-[30px] lg:text-[40px] 2xl:text-[48px] leading-[32px] md:leading-[42px] lg:leading-[54px] 2xl:leading-[60px] font-bold mb-5 text-truncate-2">
                  {capitalizeFirst(blog?.title)}
                </h2>
                <p className="text-[16px] leading-[1.4] text-black font-medium gap-2 flex items-center">
                  {blog.author?.name}{" "}
                  <span className="w-[5px] h-[5px] bg-[#FF9A6C] rounded-full inline-block"></span>
                  Comments
                </p>
                {blog.body && (
                  <div className="py-10">
                    <div className={styles.markdownReset}>
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                      >
                        {blog.body}
                      </ReactMarkdown>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              {prevBlog && (
                <Link
                  href={`/blogs/${prevBlog.slug}`}
                  className="bg-white shadow-blog rounded-[15px] border-[0.25px] border-theme p-[16px] md:p-[19px] block"
                >
                  <div className="flex gap-4 md:gap-6">
                    <div className="overflow-hidden rounded-[7px] w-[80px] md:w-[100px] lg:w-[123px] h-[72px] md:h-[92px] lg:h-[113px] bg-[#FF9A6C] flex-none">
                      <Image
                        src={
                          prevBlog?.cover?.url.startsWith("http")
                            ? prevBlog?.cover?.url
                            : `https://admin.iillestfindsagency.com${prevBlog?.cover?.url}`
                        }
                        height={175}
                        width={276}
                        className="w-full h-full object-cover"
                        alt={`Image for ${prevBlog?.cover?.alternativeText}`}
                      />
                    </div>
                    <div>
                      <button className="inline-block rounded-[5px] px-3 bg-[#FF9A6C] text-white flex items-center gap-3 text-base md:text-[18px] lg:text-[20px] font-semibold leading-[1.5] mb-3 md:mb-[19px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="10"
                          viewBox="0 0 20 10"
                          fill="none"
                          className="rotate-180"
                        >
                          <path
                            d="M20 5.15072L14.9713 0.98405V4.31738H0V5.98405H14.9713V9.31738L20 5.15072Z"
                            fill="#fff"
                          />
                        </svg>
                        PREVIOUS BLOG
                      </button>
                      <h4 className="text-base md:text-[18px] lg:text-[20px] font-bold text-black leading-[28px]">
                        {prevBlog.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              )}
            </div>
            <div>
              {nextBlog && (
                <Link
                  href={`/blogs/${nextBlog.slug}`}
                  className="bg-white shadow-blog rounded-[15px] border-[0.25px] border-theme p-[16px] md:p-[19px] block ms-auto"
                >
                  <div className="flex gap-4 md:gap-6">
                    <div className="overflow-hidden rounded-[7px] w-[80px] md:w-[100px] lg:w-[123px] h-[72px] md:h-[92px] lg:h-[113px] bg-[#FF9A6C] flex-none">
                      <Image
                        src={
                          nextBlog?.cover?.url.startsWith("http")
                            ? nextBlog?.cover?.url
                            : `https://admin.iillestfindsagency.com${nextBlog?.cover?.url}`
                        }
                        height={175}
                        width={276}
                        className="w-full h-full object-cover object-center"
                        alt={`Image for ${nextBlog?.cover?.alternativeText}`}
                      />
                    </div>
                    <div>
                      <button className="inline-block rounded-[5px] px-3 bg-[#FF9A6C] text-white flex items-center gap-3 text-base md:text-[18px] lg:text-[20px] font-semibold leading-[1.5] mb-3 md:mb-[19px]">
                        NEXT BLOG
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="10"
                          viewBox="0 0 20 10"
                          fill="none"
                        >
                          <path
                            d="M20 5.15072L14.9713 0.98405V4.31738H0V5.98405H14.9713V9.31738L20 5.15072Z"
                            fill="#fff"
                          />
                        </svg>
                      </button>
                      <h4 className="text-base md:text-[18px] lg:text-[20px] font-bold text-black leading-[28px]">
                        {nextBlog.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
