"use client";
import { NavLink } from "@/data/navData";
import Container from "../SectionComponents/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button";
import { bookingUrl } from "@/data/links";
// import { useState } from "react";

export const MobileNavbar = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  // const [isOpenDropdown, setIsOpenDropdown] = useState<number | null>(null);
  return (
    <header>
      <Container>
        <nav className="flex flex-col gap-4 w-full h-full py-8">
          <ul className="flex flex-col gap-2">
            {NavLink.map((link, index) => (
              <li
                key={index}
                className={`px-3 ${
                  link.href === pathname
                    ? "text-white/90 border-white border-l-2"
                    : "text-white "
                }`}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center font-semibold gap-2 py-2"
                >
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Button href={bookingUrl} label="Book Now" newTabe className="w-fit mx-2 py-3 px-6 bg-white !text-primary max-md:hover:bg-white max-md:hover:text-primary" />
        </nav>
      </Container>
    </header>
  );
};
