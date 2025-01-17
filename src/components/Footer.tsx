"use client";
import Link from "next/link";
import { Heading, Input, Paragraph } from "./TextAndInputComponents";
import Image from "next/image";
import { footerLinks, footerLink2 } from "../data/footerData";
import { useState } from "react";
import { homeImages } from "@/data/links";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const form = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Enter your name",
      value: userName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
      },
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Enter your email",
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      },
    },
  ];

  return (
    <footer className="bg-primary max-w-[1600px] max-sm:pb-16 mx-auto w-full">
      <div className="w-full grid lg:grid-cols-7 md:grid-cols-2 grid-cols-1 items-center gap-8">
        <div className="col-span-4 w-full">
          <div className="w-full relative lg:aspect-[4/2.8] aspect-[4/5]">
            <Image
              src={homeImages+"/img2.webp"}
              alt="alt"
              fill
              className="object-cover object-right-bottom scale-x-[-1]"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-end lg:px-28 px-4 py-16 bg-primary/50">
              <div className="w-full max-w-lg flex flex-col">
                <Heading
                  level={2}
                  className="text-white font-semibold uppercase heading4"
                >
                  Exclusive benefits,
                  <br /> insider news and more !
                </Heading>
                <form
                  action=""
                  className="w-full mt-4 flex max-sm:flex-col items-center justify-center gap-4 "
                >
                  {form.map((item) => (
                    <div
                      key={item.id}
                      className="w-full flex items-center gap-2"
                    >
                      <Input
                        {...item}
                        className="w-full bg-transparent placeholder:uppercase border-b text-start border-white outline-none py-2 description1 px-1 text-white placeholder:text-white"
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="bg-secondary text-white max-md:w-full uppercase py-2 px-6 hover:scale-105 active:scale-95 hover:bg-white hover:text-tertiary transition-colors duration-300 ease-in-out"
                  >
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 max-width col-span-2 flex flex-col h-full justify-center gap-6 lg:px-6 w-full uppercase">
          <div className="relative aspect-[4/2.5] h-[3rem]">
            <Image
              src="/logo2.png"
              alt="ora lake view"
              fill
              className="object-contain"
            />
          </div>
          {/* All links */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            {footerLinks.map((link) => (
              <div
                key={link.id}
                className={`flex flex-col gap-4  ${link.id === 1 ? "md:col-span-2" : ""}`}
              >
                <Heading
                  level={3}
                  className="text-tertiary font-medium lg:text-lg text-base"
                >
                  {link.title}
                </Heading>
                {link.links.map((item) => (
                  <Link
                    href={item.href}
                    key={item.id}
                    className="text-white max-w-sm text-sm flex items-center gap-2 hover:text-tertiary transition-colors duration-300 ease-in-out"
                    target={item?.target}
                  >
                    <span>{item?.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div>
            <ul className="flex max-sm:flex-col items-center justify-center gap-x-2 max-sm:gap-2 mt-4">
              {footerLink2.map((link) => (
                <li key={link.id} className="flex items-center gap-2">
                  <Link
                    href={link.href}
                    key={link.id}
                    className="text-white flex items-center gap-2 hover:text-tertiary transition-colors duration-300 ease-in-out"
                  >
                    {link.name}
                  </Link>
                  {link.id !== footerLink2.length && (
                    <span className="text-white text-sm max-sm:hidden">|</span>
                  )}
                </li>
              ))}
            </ul>
            <Paragraph className="text-white text-sm text-center">
              © {currentYear} Hotel Ora Lakeside. All Rights Reserved.
            </Paragraph>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
