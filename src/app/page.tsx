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

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import HomeClient from "./HomeClient";

export default async function Home() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth-token")?.value;

  // Server-side redirect if not authenticated
  if (!authToken) {
    redirect("/login");
  }

  // Client component will handle the rest
  return <HomeClient />;
}
