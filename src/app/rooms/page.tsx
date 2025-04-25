import { Faq, SectionWithContainer } from "@/components";
import TwoColGridCard from "@/components/TwoColGridCard";
import { homePageData, roomsPageData } from "@/data/pagesData";
import { Banner } from "./components";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms at ORA Lakeview | Comfortable Stay with Stunning Views",
  description:
    "Relax in cozy rooms with sweeping views of Lake Brienz and the Swiss Alps. ORA Lakeview offers pet-friendly stays with modern comfort and effortless access.",
  keywords:"",
  alternates: {
    canonical: "www.oralakeview.com/rooms",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "oralakeview", url: "www.oralakeview.com/rooms" }],
  openGraph: {
    title: "Rooms at ORA Lakeview | Comfortable Stay with Stunning Views",
    description:
      "Relax in cozy rooms with sweeping views of Lake Brienz and the Swiss Alps. ORA Lakeview offers pet-friendly stays with modern comfort and effortless access.",
    url: "www.oralakeview.com/rooms",
    siteName: "oralakeview",
    locale: "en_IN",
    type: "website",

    
    images: [
      {
        url: "www.oralakeview.com/rooms/og-image.png",
        width: 800,
        height: 600,
        alt: "Rooms at ORA Lakeview | Comfortable Stay with Stunning Views",
      },
      {
        url: "www.oralakeview.com/rooms/og-image.png",
        width: 900,
        height: 800,
        alt: "Rooms at ORA Lakeview | Comfortable Stay with Stunning Views",
      },
      {
        url: "www.oralakeview.com/rooms/og-image.png",
        width: 1080,
        height: 1080,
        alt: "Rooms at ORA Lakeview | Comfortable Stay with Stunning Views",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="margin">
      <Banner {...roomsPageData.bannerData} />
      <SectionWithContainer>
        {roomsPageData.roomcard.map((room, index) => (
          <TwoColGridCard key={index} index={index} {...room} />
        ))}
      </SectionWithContainer>
      <Faq {...homePageData.faq} />
    </main>
  );
}
