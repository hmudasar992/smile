// src/app/smile-bizz/page.tsx
import { Metadata } from "next";
import { Suspense } from "react";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "Smile Bizz",
  description: "The page you are looking for does not exist.",
};

export default async function NotFound() {
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
