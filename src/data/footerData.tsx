// footer data

import { Location, MailIcon, PhoneIcon } from "@/icons/icons";

export interface IFooter {
  id: number;
  title: string;
  links: {
    id: number;
    name: string;
    href: string;
    target?: string;
    icon?: React.ReactNode;
  }[];
}
export const footerLinks: IFooter[] = [
  {
    id: 1,
    title: "Reach Us At",
    links: [
      {
        id: 1,
        name: "info@oralakeview.com",
        href: "mailto:info@oralakeview.com",
        target: "_blank",
        icon: <MailIcon />,
      },
      {
        id: 2,
        name: "+41 33 123 4567",
        href: "tel:+41 33 123 4567",
        target: "_self",
        icon: <PhoneIcon />,
      },
      {
        id: 3,
        name: "Lakeview Hotel, Hauptstrasse 32 3853 Niederried bei Interlaken Switzerland",
        href: "https://maps.app.goo.gl/5oDm6kXuR8tCxzvY6",
        target: "_blank",
        icon: <Location />,
      },
    ],
  },
  {
    id: 2,
    title: "Quick Links",
    links: [
      { id: 1, name: "Rooms & Suites", href: "/rooms/" },
      { id: 2, name: "Amenities", href: "/#amenities" },
      { id: 3, name: "Activities Nearby", href: "/#nearby" },
      { id: 4, name: "contact us", href: "/contact-us/" },
    ],
  },
  {
    id: 3,
    title: "Connect with us",
    links: [
      { id: 1, name: "Instagram", href: "https://www.instagram.com/ora_lakeview?igsh=MTNvdWZjNjVja2dsNQ==", target: "_blank" },
      { id: 2, name: "Facebook", href: "https://www.facebook.com/profile.php?id=61574775855831", target: "_blank" },
      // { id: 3, name: "Twitter", href: "/", target: "_blank" },
      // { id: 4, name: "Pinterest", href: "/", target: "_blank" },
    ],
  },
];

export const footerLink2 = [
  { id: 1, name: "Privacy Policy", href: "/privacy-policy/" },
  // { id: 2, name: "Terms & Conditions", href: "/terms-and-conditions/" },
  { id: 2, name: "Cancellation & Refund Policy", href: "/cancellation-&-refund-policy/" },
];

