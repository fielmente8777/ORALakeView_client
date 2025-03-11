import { navLinks } from "@/@types/types";
import { SummerIcon, WinterIcon } from "@/icons/icons";

export const NavLink: navLinks[] = [
  {
    id: 1,
    name: "home",
    href: "/",
  },
  {
    id: 2,
    name: "about us",
    href: "/about-us/",
  },
  {
    id: 3,
    name: "rooms",
    href: "/rooms/",
  },
  {
    id: 4,
    name: "gallery",
    href: "/gallery/",
  },
  {
    id: 5,
    name: "contact us",
    href: "/contact-us/",
  },
];

export const navButtons = [



  {
    id: 1,
    name: "summer",
    icon: <SummerIcon />,
    class: "banner-next"
  },
  {
    id: 2,
    name: "winter",
    icon: <WinterIcon />,
    class: "banner-prev"
  },
];

