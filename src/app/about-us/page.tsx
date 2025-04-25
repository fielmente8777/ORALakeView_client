import { aboutPageData } from "@/data/pagesData";
import { Banner, OurHotel, OurJourney } from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ORA Lakeview Hotel | Swiss Hospitality by the Lake",
  description:
    "Discover the story behind ORA Lakeview—where stunning views, unmatched convenience, and warm hospitality combine to create memorable stays in the heart of Switzerland.",
  keywords:"",
  alternates: {
    canonical: "https://https://oralakeview.com/about-us",
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
  authors: [{ name: "oralakeview", url: "https://https://oralakeview.com/about-us" }],
  openGraph: {
    title: "About ORA Lakeview Hotel | Swiss Hospitality by the Lake",
    description:
      "Discover the story behind ORA Lakeview—where stunning views, unmatched convenience, and warm hospitality combine to create memorable stays in the heart of Switzerland.",
    url: "https://https://oralakeview.com/about-us",
    siteName: "oralakeview",
    locale: "en_IN",
    type: "website",

    
    images: [
      {
        url: "https://oralakeview.com/about-us/og-image.png",
        width: 800,
        height: 600,
        alt: "About ORA Lakeview Hotel | Swiss Hospitality by the Lake",
      },
      {
        url: "https://oralakeview.com/about-us/og-image.png",
        width: 900,
        height: 800,
        alt: "About ORA Lakeview Hotel | Swiss Hospitality by the Lake",
      },
      {
        url: "https://oralakeview.com/about-us/og-image.png",
        width: 1080,
        height: 1080,
        alt: "About ORA Lakeview Hotel | Swiss Hospitality by the Lake",
      },
    ],
  },
};


export default function Home() {
  return (
    <main className="margin">
      <Banner {...aboutPageData.bannerData} />
      <OurHotel {...aboutPageData.section2} />
      <OurJourney {...aboutPageData.ourJourney} />
    </main>
  );
}
