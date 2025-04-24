export default function customImageLoader({ src, width, quality = 75 }) {
  // Determine environment
  const isProduction = process.env.NODE_ENV === "production";
  const cmsBaseUrl = isProduction
    ? "https://admin.iillestfindsagency.com"
    : "http://localhost:1337";

  // Local images (public/images)
  if (src.startsWith("/images/")) {
    return `${src}?w=${width}&q=${quality}`;
  }

  // CMS uploaded images
  if (src.startsWith("/uploads/")) {
    return `${cmsBaseUrl}${src}?w=${width}&q=${quality}`;
  }

  // Absolute URLs from frontend domain
  if (src.includes("iillestfindsagency.com")) {
    const url = new URL(src);
    url.searchParams.set("w", width);
    url.searchParams.set("q", quality);
    return url.toString();
  }

  // Absolute URLs from CMS domain
  if (src.includes("admin.iillestfindsagency.com")) {
    const url = new URL(src);
    url.searchParams.set("w", width);
    url.searchParams.set("q", quality);
    return url.toString();
  }

  // External URLs (with error handling)
  try {
    if (/^https?:\/\//.test(src)) {
      const url = new URL(src);
      url.searchParams.set("w", width);
      url.searchParams.set("q", quality);
      return url.toString();
    }
  } catch (error) {
    console.error("Error processing external image URL:", error);
  }

  // Fallback for unhandled cases
  return src;
}
