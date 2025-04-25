import { Faq } from "@/components";
import { galleryPageData, homePageData } from "@/data/pagesData";
import { Banner, CircleSlider, ImageSlider } from "./components";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ORA Lakeview Gallery | Alpine & Lake Views in Every Frame",
  description:
    "Explore our gallery and get a glimpse of the panoramic lake and mountain vistas that await you at ORA Lakeview—where nature paints the perfect backdrop.",
  keywords:"",
  alternates: {
    canonical: "www.oralakeview.com/gallery",
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
  authors: [{ name: "oralakeview", url: "www.oralakeview.com/gallery" }],
  openGraph: {
    title: "ORA Lakeview Gallery | Alpine & Lake Views in Every Frame",
    description:
      "Explore our gallery and get a glimpse of the panoramic lake and mountain vistas that await you at ORA Lakeview—where nature paints the perfect backdrop.",
    url: "www.oralakeview.com/gallery",
    siteName: "oralakeview",
    locale: "en_IN",
    type: "website",

    
    images: [
      {
        url: "www.oralakeview.com/gallery/og-image.png",
        width: 800,
        height: 600,
        alt: "ORA Lakeview Gallery | Alpine & Lake Views in Every Frame",
      },
      {
        url: "www.oralakeview.com/gallery/og-image.png",
        width: 900,
        height: 800,
        alt: "ORA Lakeview Gallery | Alpine & Lake Views in Every Frame",
      },
      {
        url: "www.oralakeview.com/gallery/og-image.png",
        width: 1080,
        height: 1080,
        alt: "ORA Lakeview Gallery | Alpine & Lake Views in Every Frame",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="margin">
      <Banner {...galleryPageData.bannerData} />
      <ImageSlider items={galleryPageData.galleryData} />
      <CircleSlider items={galleryPageData.galleryData} />
      <Faq {...homePageData.faq} />
    </main>
  );
}
