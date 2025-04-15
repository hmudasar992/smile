export interface Blog {
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
  category: { name: string };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  body: string;
  hashTags: string;
  related_articles?: Array<{
    title: string;
    slug: string;
    description: string;
    cover?: {
      url: string;
      alternativeText: string;
    };
    body: string;
    author?: {
      name: string;
      updatedAt: string;
    };
    category: { name: string };
  }>;
}
export type BlogListProps = {
  initialPosts: BlogPost[];
};
export type BlogPost = {
  slug: string;
  cover?: {
    url: string;
    alternativeText?: string;
  };
  author?: {
    name: string;
    updatedAt?: string;
  };
  category?: {
    name: string;
  };
  title: string;
  description: string;
  hashTags?: string[];
};
export type BlogPageParams = {
  slug: string;
};
