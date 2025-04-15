// app/page.tsx
// "Digital Marketing Agency Phoenix | SEO, Social Media & Web Design"
{
  /* <title>Digital Marketing Agency Phoenix | SEO & Social Media | iillestfinds</title> */
}
// "Top-rated Phoenix digital marketing agency: Drive growth with expert SEO, social media, & web development. Free consultation today! | iillestfinds"
export const metadata = {
  title: "Smile",
  description:
    "Looking for a top digital marketing agency in Phoenix, AZ? At Iillest Finds Agency, Faeezah Lun and his team specialize in SEO, social media marketing, and website development to boost your online success. Get your free quote today!",
  alternates: {
    canonical: "https://iillestfindsagency.com/",
  },
  openGraph: {
    title: "Digital Marketing Agency Phoenix | iillestfindsagency.com",
    description:
      "Looking for a top digital marketing agency in Phoenix, AZ? At Iillest Finds Agency, Faeezah Lun and his team specialize in SEO, social media marketing, and website development to boost your online success. Get your free quote today!",
    url: "https://iillestfindsagency.com/",
    type: "website",
  },
};

import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Blogs from "./components/Blogs";
import HowItWorks from "./components/HowItWorks";
import Assistant from "./components/Assistant";
import Download from "./components/Download";

export default function Home() {
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
