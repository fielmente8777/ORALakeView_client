"use client";
import { Heading, Paragraph, SectionWithContainer } from "@/components";
import { NextBtnIcon, PrevBtnIcon } from "@/icons/icons";
import Image from "next/image";
import { useState } from "react";

interface IAmenities {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    icon: string;
    src: string;
    color: string;
  }[];
}

const Amenities: React.FC<IAmenities> = ({ title, description, items }) => {
  const [item, setItem] = useState(items[0]);
  // const [rotation, setRotation] = useState(0); // Controls rotation of the icon orbit

  const handlePrev = () => {
    const currentIndex = items.findIndex((i) => i === item);
    if (currentIndex > 0) {
      setItem(items[currentIndex - 1]);
      // setRotation((prev) => prev - 45); // Adjust rotation angle
    } else {
      setItem(items[0]);
    }
  };

  const handleNext = () => {
    if (item === items[items.length - 1]) {
      setItem(items[0]);
      // setRotation((prev) => prev + 45); // Adjust rotation angle
    } else {
      const currentIndex = items.findIndex((i) => i === item);
      setItem(items[(currentIndex + 1) % items.length]);
      // setRotation((prev) => prev + 45); // Adjust rotation angle
    }
  };

  const positions = [
    "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-[70%] left-4 -translate-x-1/2 -translate-y-1/2 scale-[0.8]",
    "top-[85%] left-[4rem] -translate-x-1/2 -translate-y-1/2 scale-[0.7]",
    "top-[95%] left-[4rem] translate-x-1/2 -translate-y-1/2 scale-[0.6]",
    "top-[30%] right-[29rem] translate-x-1/2 -translate-y-1/2 scale-[0.8]",
    "top-[15%] right-[26rem] translate-x-1/2 -translate-y-1/2 scale-[0.7]",
    "top-[7.5%] right-[22.5rem] translate-x-1/2 -translate-y-1/2 scale-[0.6]",
  ];

  return (
    <SectionWithContainer sectionClassName="bg-primary lg:pb-28">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <Heading
          level={2}
          className="text-center text-secondary capitalize font-montaga heading3"
        >
          {title}
        </Heading>
        <Paragraph className="text-center description1 capitalize tracking-wider">
          {description}
        </Paragraph>
        <div className="w-full lg:grid grid-cols-2 gap-4 flex flex-col-reverse items-center mt-8">
          {/* Left Content */}
          <div className="w-full flex-col h-full justify-center flex gap-4">
            <div className="flex flex-col gap-4 min-h-[10rem]">
              <Heading
                level={2}
                className="text-white capitalize font-montaga text-2xl"
              >
                {item.title}
              </Heading>
              <Paragraph className="description1">{item.description}</Paragraph>
            </div>
            <div className="flex gap-1 items-center">
              <button
                disabled={item === items[0]}
                onClick={handlePrev}
                className={`disabled:opacity-50 text-white hover:scale-105 active:scale-95 w-8 aspect-square flex items-center justify-center`}
              >
                <PrevBtnIcon />
              </button>
              <button
                onClick={handleNext}
                disabled={item === items[items.length - 1]}
                className={`disabled:opacity-50 text-white hover:scale-105 w-8 aspect-square active:scale-95 flex items-center justify-center`}
              >
                <NextBtnIcon />
              </button>
              <div className="text-white heading4 flex gap-1">
                <span className="w-3">{items.indexOf(item) + 1}</span>/
                <span className="w-3">{items.length}</span>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="w-full flex items-center justify-center overflow-hidden ps-8">
            {/* Main Image */}
            <div className="p-11 relative flex items-center justify-center border-l-2 border-[#A0A0A0] rounded-full">
              <Image
                src={item.src}
                alt={item.title}
                width={400}
                height={400}
                className="object-cover aspect-square rounded-full"
              />
              {/* Rotating Icons */}
              {items.map((item, index) => (
                <div
                  key={index}
                  className={` w-16 border-2 border-white aspect-square absolute ${positions[index]} flex items-center justify-center rounded-full ${
                    index === items.indexOf(item) ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: item.color }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Amenities;
