// app/blogs/[slug]/blog-metadata.ts
import { Metadata } from "next";
import { apiURL, authToken } from "../../utils/constent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  try {
    const res = await fetch(
      `${apiURL}/articles?filters[slug]=${slug}&populate=*`,
      {
        headers: { Authorization: `Bearer ${authToken}` },
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Failed to fetch blog metadata");

    const data = await res.json();
    const blog = data?.data?.[0];

    if (!blog) {
      return {
        title: "Blog Not Found",
        description: "The blog you are looking for does not exist.",
      };
    }

    return {
      title: blog?.seo?.metaTitle || blog?.title || "Blog Post",
      description: blog?.seo?.metaDescription || blog?.description || "",
      alternates: {
        canonical: `https://iillestfindsagency.com/blogs/${slug}`,
      },
      openGraph: {
        title: blog?.seo?.metaTitle || blog?.title,
        description: blog?.seo?.metaDescription || blog?.description,
        url: `https://iillestfindsagency.com/blogs/${slug}`,
        type: "article",
        images: blog?.cover?.url
          ? [`https://iillestfindsagency.com${blog.cover.url}`]
          : [],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }
}
