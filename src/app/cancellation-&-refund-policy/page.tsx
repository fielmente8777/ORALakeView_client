import { Heading, Paragraph, SectionWithContainer } from '@/components';
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ORA Lakeview Hotel | Cancellation & Refund Policy",
  description:
    "Learn about our flexible cancellation and refund policy. At ORA Lakeview Hotel, we aim to provide peace of mind for every booking. View details on timeframes, charges, and how to request a refund.",
  keywords:"",
  alternates: {
    canonical: "www.oralakeview.com/cancellation-&-refund-policy",
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
  authors: [{ name: "oralakeview", url: "www.oralakeview.com/cancellation-&-refund-policy" }],
  openGraph: {
    title: "ORA Lakeview Hotel | Cancellation & Refund Policy",
    description:
      "Learn about our flexible cancellation and refund policy. At ORA Lakeview Hotel, we aim to provide peace of mind for every booking. View details on timeframes, charges, and how to request a refund.",
    url: "www.oralakeview.com/cancellation-&-refund-policy",
    siteName: "oralakeview",
    locale: "en_IN",
    type: "website",

    
    images: [
      {
        url: "www.oralakeview.com/cancellation-&-refund-policy/og-image.png",
        width: 800,
        height: 600,
        alt: "ORA Lakeview Hotel | Cancellation & Refund Policy",
      },
      {
        url: "www.oralakeview.com/cancellation-&-refund-policy/og-image.png",
        width: 900,
        height: 800,
        alt: "ORA Lakeview Hotel | Cancellation & Refund Policy",
      },
      {
        url: "www.oralakeview.com/cancellation-&-refund-policy/og-image.png",
        width: 1080,
        height: 1080,
        alt: "ORA Lakeview Hotel | Cancellation & Refund Policy",
      },
    ],
  },
};
const page = () => {
    return (
        <main className="margin">
            <SectionWithContainer sectionClassName="bg-primary">
                <div className="flex flex-col items-center justify-center gap-4 pb-8">
                    <Heading
                        level={2}
                        className="text-center text-secondary capitalize font-montaga heading2"
                    >
                        Cancellation & Refund Policies

                    </Heading>
                    <Paragraph className="text-center description1">
                        The guest can cancel free of charge until 14 days before arrival. The guest will be charged the total price of the reservation if they cancel within 14 days of arrival. If the guest doesn&apos;t show up, they&apos;ll be charged the total price of the reservation.


                    </Paragraph>
                    <Paragraph className="text-center description1">
                        The guest will be charged a prepayment of the total price of the reservation within 14 days of arrival.

                    </Paragraph>

                </div>
            </SectionWithContainer>
        </main>
    )
}

export default page