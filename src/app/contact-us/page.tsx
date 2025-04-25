import { contactPageData } from "@/data/pagesData";
import { Banner, ReachUs } from "./components";
import FindUsEasily from "./components/FindUsEasily";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ORA Lakeview Hotel | Plan Your Swiss Getaway",
  description:
    "Have questions or ready to book your lakeside stay? Contact ORA Lakeview Hotel—we’re just a message away from making your Swiss escape seamless.",
  keywords:"",
  alternates: {
    canonical: "www.oralakeview.com/contact-us",
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
  authors: [{ name: "oralakeview", url: "www.oralakeview.com/contact-us" }],
  openGraph: {
    title: "Contact ORA Lakeview Hotel | Plan Your Swiss Getaway",
    description:
      "Have questions or ready to book your lakeside stay? Contact ORA Lakeview Hotel—we’re just a message away from making your Swiss escape seamless.",
    url: "www.oralakeview.com/contact-us",
    siteName: "oralakeview",
    locale: "en_IN",
    type: "website",

    
    images: [
      {
        url: "www.oralakeview.com/contact-us/og-image.png",
        width: 800,
        height: 600,
        alt: "Contact ORA Lakeview Hotel | Plan Your Swiss Getaway",
      },
      {
        url: "www.oralakeview.com/contact-us/og-image.png",
        width: 900,
        height: 800,
        alt: "Contact ORA Lakeview Hotel | Plan Your Swiss Getaway",
      },
      {
        url: "www.oralakeview.com/contact-us/og-image.png",
        width: 1080,
        height: 1080,
        alt: "Contact ORA Lakeview Hotel | Plan Your Swiss Getaway",
      },
    ],
  },
};


export default function page() {
  return (
    <main className="margin">
      <Banner {...contactPageData.bannerData}/>
      <ReachUs {...contactPageData.reachUsDate}/>
      <FindUsEasily />
    </main>
  );
}
