import { MetadataRoute } from "next";
import axios from "axios";
import { apiURL, authToken } from "./utils/constent";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://iillestfindsagency.com"
    : "http://localhost:3000";

// Define static last modified dates for static pages
const STATIC_PAGES = [
  { url: `${BASE_URL}/`, lastModified: "2025-03-16T00:00:00.000Z" },
  { url: `${BASE_URL}/services`, lastModified: "2025-03-16T00:00:00.000Z" },
  { url: `${BASE_URL}/case-study`, lastModified: "2025-03-16T00:00:00.000Z" },
  { url: `${BASE_URL}/contact-us`, lastModified: "2025-03-16T00:00:00.000Z" },
  { url: `${BASE_URL}/blog`, lastModified: "2025-03-16T00:00:00.000Z" },

  // SEO Services
  {
    url: `${BASE_URL}/services/seo-services-phoenix`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/seo-services-phoenix/on-page-seo`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/seo-services-phoenix/off-page-seo`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/seo-services-phoenix/technical-seo`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/seo-services-phoenix/local-seo`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/seo-services-phoenix/ecommerce-seo`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/seo-services-phoenix/gmp`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },

  // SMM Services
  {
    url: `${BASE_URL}/services/social-media-marketing-phoenix`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/social-media-marketing-phoenix/social-media-strategy`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/social-media-marketing-phoenix/content-creation-management`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/social-media-marketing-phoenix/social-media-advertising`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/social-media-marketing-phoenix/community-engagement`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/social-media-marketing-phoenix/influencer-marketing`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/social-media-marketing-phoenix/social-media-paid-marketing`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },

  // Website Development Services
  {
    url: `${BASE_URL}/services/website-development-phoenix`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/website-development-phoenix/landing-page-development`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/website-development-phoenix/wordpress-website-development`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/website-development-phoenix/custom-website-development`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/website-development-phoenix/ecommerce-website-development`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/website-development-phoenix/website-redesign-optimization`,
    lastModified: "2025-03-16T00:00:00.000Z",
  },
  {
    url: `${BASE_URL}/services/website-development-phoenix/speed-performance-optimization`,
    lastModified: "2025-03-27T00:00:00.000Z",
  },
];

interface Blog {
  slug: string;
  updatedAt: string;
  related_articles?: Array<{
    slug: string;
    updatedAt?: string;
  }>;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch blog posts from API with related articles
    const response = await axios.get<{ data: Blog[] }>(
      `${apiURL}/articles?populate=related_articles`,
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );

    const blogs: Blog[] = response.data.data || [];

    // Generate unique sitemap entries for blog posts and related blogs
    const blogPages: MetadataRoute.Sitemap = blogs.flatMap((blog) => {
      const mainEntry = {
        url: `${BASE_URL}/blogs/${blog.slug}`,
        lastModified: blog.updatedAt
          ? new Date(blog.updatedAt).toISOString()
          : undefined,
      };

      // Ensure related articles are also included as separate entries
      const relatedEntries = blog.related_articles
        ? blog.related_articles.map((related) => ({
            url: `${BASE_URL}/blogs/${related.slug}`,
            lastModified: related.updatedAt
              ? new Date(related.updatedAt).toISOString()
              : undefined,
          }))
        : [];

      return [mainEntry, ...relatedEntries];
    });

    // Remove duplicate blog pages
    const uniqueBlogPages = Array.from(
      new Map(blogPages.map((b) => [b.url, b])).values()
    );

    return [...STATIC_PAGES, ...uniqueBlogPages];
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    return [];
  }
}
