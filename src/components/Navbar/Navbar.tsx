"use client";
import Link from "next/link";
import Container from "../SectionComponents/Container";
import { navButtons, NavLink } from "@/data/navData";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./MobileNavbar";
import Button from "../Button";
import { bookingUrl } from "@/data/links";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        pathname !== "/"
          ? "py-3 fixed top-0 left-0 w-full z-50 max-md:py-4 bg-white"
          : `transition-all duration-500 ease-in-out  fixed top-0 left-0 w-full z-50 max-md:py-4 ${navbar ? "sticky  bg-white text-primary" : "bg-transparent text-white "}`
      }
    >
      <Container>
        <nav className="flex justify-between items-center uppercase gap-2">
          <div className="lg:hidden block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${navbar ? "text-primary" : pathname === "/" ? "text-white" : "text-primary"} text-3xl ${isOpen ? "rotate-180" : ""} transition duration-300 ease-in-out`}
            >
              {isOpen ? <IoMdClose /> : <CiMenuBurger />}
            </button>

            <div
              className={`fixed top-[4.5rem] right-0 w-[90%] h-full bg-primary/95 backdrop-brightness-75  border-r border-primary/90  z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <MobileNavbar setIsOpen={setIsOpen} />
            </div>
          </div>
          <Link href="/" className="flex flex-col">
            <span
              className={`relative lg:block hidden lg:h-[6.2rem] h-14 lg:aspect-[4/2] aspect-[4/1.2] transition-all duration-300 ease-in-out ${navbar ? "opacity-100" : pathname === "/" ? "lg:opacity-0" : "lg:opacity-100"}`}
            >
              <Image
                src="/logo.png"
                alt="ora lake view"
                fill
                className="object-contain"
              />
            </span>
            <span
              className={`relative block lg:hidden h-9 lg:aspect-[4/2] aspect-[4/1.2] transition-all duration-300 ease-in-out ${navbar ? "opacity-100" : "lg:opacity-0"}`}
            >
              <Image
                src={`${navbar || pathname !== "/" ? "/logosm2.png" : "/Lakeview.svg"}`}
                alt="ora lake view"
                fill
                className="object-contain"
              />
            </span>
          </Link>
          <div className="lg:flex hidden items-center justify-center gap-4 text-base">
            <ul className="flex items-center gap-4">
              {NavLink.map((link) => (
                <li className="relative group" key={link.id}>
                  <Link
                    href={link.href}
                    className={`transition-all font-medium duration-100 ease-linear py-2 px-4 group flex flex-col items-center justify-center`}
                  >
                    {link.name}
                    <span
                      className={`block w-0 h-[2px] absolute bottom-0 ${pathname === link.href && "w-full"} ${navbar || pathname !== "/" ? "bg-primary" : "bg-white"} mt-1 transition-all duration-300 ease-in-out group-hover:w-full`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">

            {pathname === "/" && navButtons.map((button) => (
              <button
                key={button.id}
                className={`uppercase lg:flex hidden ${button.class}  disabled:border-opacity-100 items-center transition-all duration-500 ease-linear gap-2 border border-opacity-0  ${navbar || pathname !== "/" ? " disabled:border-primary" : "disabled:border-white "} border-transparent lg:px-4 p-1 lg:py-2`}
              >
                {button.icon}{" "}
                <span
                  className={navbar || pathname !== "/" ? "hidden" : "lg:block"}
                >
                  {button.name}
                </span>
              </button>
            ))}
            <Button
              href={bookingUrl}
              label="Book Now"
              className={`${navbar || pathname !== "/" ? "block border border-primary" : "hidden"} max-md:text-[0.78rem] transition-all duration-75 ease-in-out`}
              newTabe={true}
            />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
