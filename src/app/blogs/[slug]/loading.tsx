// app/blogs/[slug]/loading.tsx
import Breadcrumb from "@/app/components/Breadcrumb";

export default function Loading() {
  return (
    <div className="services">
      <div>
        <Breadcrumb />

        <div className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="border border-[#E3E3E3] rounded-[10px] p-4 animate-pulse">
              {/* Main Image Skeleton */}
              <div className="w-full h-[300px] md:[400px] lg:h-[500px] xl:h-[589px] rounded-[10px] overflow-hidden mb-6 bg-gray-200" />

              {/* Author/Category Skeleton */}
              <div className="flex gap-5 items-center text-[#737588] mb-4">
                <div className="flex gap-3 items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full" />
                  <div className="h-4 bg-gray-200 rounded w-24" />
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full" />
                  <div className="h-4 bg-gray-200 rounded w-24" />
                </div>
              </div>

              {/* Content Skeleton */}
              <div className="pb-10 space-y-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-full" />
                ))}
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </div>
            </div>

            {/* Related Blogs Skeleton */}
            <div className="py-16 md:py-18 lg:py-20">
              <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16">
                  <div className="h-10 bg-gray-200 rounded w-1/4 mb-4" />
                </div>
                <div className="flex gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-full md:w-1/3">
                      <div className="rounded-[15px] shadow-custom overflow-hidden">
                        <div className="h-[211px] bg-gray-200 relative overflow-hidden">
                          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-white/50 to-gray-200 animate-shimmer" />
                        </div>
                        <div className="py-8 px-6 space-y-4">
                          <div className="h-6 bg-gray-200 rounded w-3/4" />
                          <div className="h-4 bg-gray-200 rounded w-full" />
                          <div className="h-4 bg-gray-200 rounded w-5/6" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
