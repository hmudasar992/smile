export default function customImageLoader({ src, width, quality = 75 }) {
  // Local images
  if (src.startsWith("/images/")) {
    return `${src}?w=${width}&q=${quality}`;
  }

  // Absolute URLs from frontend domain
  if (src.includes("iillestfindsagency.com/images/")) {
    return `${src}?w=${width}&q=${quality}`;
  }

  // CMS or other absolute image URLs
  try {
    const decodedSrc = decodeURIComponent(src);

    // Only create URL object if it's absolute
    if (/^https?:\/\//.test(decodedSrc)) {
      const url = new URL(decodedSrc);
      url.searchParams.set("w", width);
      url.searchParams.set("q", quality);
      return url.toString();
    }

    // If not absolute, return as-is
    return decodedSrc;
  } catch (error) {
    console.error("Error processing image URL:", error);
    return src;
  }
}
