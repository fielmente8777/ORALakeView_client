"use client";
import { NavLink } from "@/data/navData";
import Container from "../SectionComponents/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        <nav className="flex flex-col gap-4 w-full h-full">
          <ul>
            {NavLink.map((link, index) => (
              <li
                key={index}
                className={`${
                  link.href === pathname
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-2"
                >
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-primary text-white px-6 py-3 w-fit">
            Contact Us
          </button>
        </nav>
      </Container>
    </header>
  );
};
