// RootLayout.tsx

import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./providers";

/*
  GBP Schema Markup for LocalBusiness
  (Currently not used - commented out for future use)

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Iillest Finds",
  image: "https://lh5.googleusercontent.com/p/AF1QipOKwofuCFKgPt4YMXjhSGnLdOAG5aWBYDtoiikL=w360-h270-k-no",
  "@id": "https://iillestfindsmarketing.com/",
  url: "https://iillestfindsmarketing.com/",
  telephone: "+1 925-818-4494",
  hasMap: "https://www.google.com/maps/place/?q=place_id:ChIJfZaU62ndv60RszfmLmhUWZQ",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "2",
    bestRating: "5",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Scottsdale, Greater Phoenix Area, Maricopa County, Arizona, USA",
  },
  makesOffer: [
    { "@type": "Offer", name: "Marketing agency" },
    { "@type": "Offer", name: "Service establishment" },
  ],
  sameAs: [
    "https://www.facebook.com/share/1AEuGAPGKZ",
    "https://www.instagram.com/iillestfinds",
    "https://www.tiktok.com/@faeezahlun",
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5611935,
    longitude: -111.95235559999999,
  },
};
*/

// Page Metadata
export const metadata: Metadata = {
  title: "Smile",
  description: "Digital marketing and web development services in NY.",
};

// Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Inject LocalBusiness GBP Schema (Currently commented out)

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        */}
      </head>
      <body className="bg-white text-black">
        <AuthProvider>
          {/* Header with Suspense boundary */}
          <Suspense
            fallback={
              <div className="h-[64px] md:h-[80px] lg:h-[148px] 2xl:h-[185px] bg-gray-100 animate-pulse" />
            }
          >
            <Header />
          </Suspense>

          {/* Main content with Suspense boundary */}
          <main className="pt-[81px] md:pt-[94px]">
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                </div>
              }
            >
              {children}
            </Suspense>
          </main>

          {/* Footer with Suspense boundary */}
          <Suspense
            fallback={
              <div className="h-[200px] bg-gray-100 animate-pulse mt-8" />
            }
          >
            <Footer />
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}
