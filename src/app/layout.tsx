import type { Metadata } from "next";
import "./globals.scss";
import { Call, Footer, GreetingCard, Navbar, Whatsapp } from "@/components";

export const metadata: Metadata = {
  title: "ORA Lakeview Hotel | Scenic Swiss Alps & Lake View Stay",
  description:
    "Wake up to breathtaking lake and mountain views at ORA Lakeview Hotel in Switzerland. Just minutes from transit, pet-friendly, and with free parking—your effortless alpine escape starts here.",
  keywords: "",
  alternates: {
    canonical: "https://https://oralakeview.com/",
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
  authors: [{ name: "oralakeview", url: "https://https://oralakeview.com/" }],
  openGraph: {
    title: "ORA Lakeview Hotel | Scenic Swiss Alps & Lake View Stay",
    description:
      "Wake up to breathtaking lake and mountain views at ORA Lakeview Hotel in Switzerland. Just minutes from transit, pet-friendly, and with free parking—your effortless alpine escape starts here.",
    url: "https://https://oralakeview.com/",
    siteName: "oralakeview",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://oralakeview.com/og-image.png",
        width: 800,
        height: 600,
        alt: "ORA Lakeview Hotel | Scenic Swiss Alps & Lake View Stay",
      },
      {
        url: "https://oralakeview.com/og-image.png",
        width: 900,
        height: 800,
        alt: "ORA Lakeview Hotel | Scenic Swiss Alps & Lake View Stay",
      },
      {
        url: "https://oralakeview.com/og-image.png",
        width: 1080,
        height: 1080,
        alt: "ORA Lakeview Hotel | Scenic Swiss Alps & Lake View Stay",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <GreetingCard />
        <Footer />
        <Whatsapp />
        <Call callNumber="+41779731981" />
      </body>
    </html>
  );
}
