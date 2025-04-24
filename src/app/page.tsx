export const metadata = {
  title: "Smile",
  description:
    "Turn small gestures into lasting love. Sync your tasks, track your partner’s mood, and keep the spark alive",
  alternates: {
    canonical: "http://smylimc.com/",
  },
  openGraph: {
    title: "Digital Marketing Agency Phoenix | iillestfindsagency.com",
    description:
      "Turn small gestures into lasting love. Sync your tasks, track your partner’s mood, and keep the spark alive",
    url: "http://smylimc.com/",
    type: "website",
  },
};

import { cookies } from "next/headers";
import HomeClient from "./HomeClient";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth-token")?.value;

  // Server-side redirect if not authenticated
  if (!authToken) {
    redirect("/login");
  }
  return <HomeClient />;
}
