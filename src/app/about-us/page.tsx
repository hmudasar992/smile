// src/app/about/page.tsx
import { Metadata } from "next";
import { Suspense } from "react";
import Button from "../components/Button";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Smile",
  description: "The page you are looking for does not exist.",
};

export default async function AboutUs() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth-token")?.value;

  // Server-side redirect if not authenticated
  if (!authToken) {
    redirect("/login");
  }
  return (
    <div className="flex items-center justify-center px-4 pt-24">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg mb-8">
            Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist.
          </p>
          <Button varient="secondary" path="/" text="Return to Home" />
        </div>
      </Suspense>
    </div>
  );
}
