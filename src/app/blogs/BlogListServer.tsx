import { BlogListClient } from "./BlogListClient";
import type { BlogPost } from "../types/blog";
import axios from "axios";
import { apiURL, authToken } from "../utils/constent";

export default async function BlogListServer() {
  try {
    const response = await axios.get(`${apiURL}/articles?populate=*`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const posts: BlogPost[] = response.data.data || [];

    return <BlogListClient initialPosts={posts} />;
  } catch (error) {
    console.error("Failed to load blog posts:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl text-red-500">Unable to load blog posts</h2>
        <p>Please try again later.</p>
      </div>
    );
  }
}
