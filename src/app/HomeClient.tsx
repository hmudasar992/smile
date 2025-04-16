"use client";

import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Blogs from "./components/Blogs";
import HowItWorks from "./components/HowItWorks";
import Assistant from "./components/Assistant";
import Download from "./components/Download";
import { useEffect } from "react";
import { useAuth } from "./providers";

export default function HomeClient() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === false) {
    return null; // Redirect will be handled by ProtectedLayout
  }

  return (
    <div className="bg-white" id="home">
      <Banner />
      <AboutUs />
      <HowItWorks />
      <Features />
      <Assistant />
      <Testimonials />
      <Download />
      <FAQs />
      <Blogs />
    </div>
  );
}
