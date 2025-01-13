"use client";
import Link from "next/link";
import Container from "../SectionComponents/Container";
import { NavLink } from "@/data/navData";
// import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./MobileNavbar";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="bg-transparent fixed top-0 left-0 w-full z-50 pb-2">
      <Container>
        <nav className="flex justify-end items-center">
          {/* <Link href="/" className="flex flex-col ">
            <span className="relative lg:h-28 h-14 lg:aspect-[4/2] aspect-[4/1.35]">
              <Image
                src="/logo.png"
                alt="ora lake view"
                fill
                className="object-contain"
              />
            </span>
          </Link> */}
          <div className="lg:flex hidden items-center justify-center gap-4 text-base">
            <ul className="flex items-center gap-4 text-base relative">
              {NavLink.map((link) => (
                <li className="" key={link.id}>
                  <Link href={link.href} className={`${pathname} capitalize `}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us"
              className="bg-primary text-white px-6 py-5"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-primary text-3xl ${isOpen ? "rotate-180" : ""} transition duration-300 ease-in-out`}
            >
              {isOpen ? <IoMdClose /> : <CiMenuBurger />}
            </button>

            <div
              className={`fixed top-24 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <MobileNavbar setIsOpen={setIsOpen} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
