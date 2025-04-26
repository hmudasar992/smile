import HomeClient from "./HomeClient";
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

export default async function Home() {
  return <HomeClient />;
}
