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

  // const itemIndex = items.findIndex((i) => i === item);

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
          <div className="w-full relative flex items-center justify-center overflow-hidden">
            {/* Main Image */}
            <div>
              <Image
                src={item.src}
                alt={item.title}
                width={400}
                height={400}
                className="object-cover aspect-square rounded-full"
              />
            </div>

            {/* Rotating Icons */}
            {/* <div
              style={{ transform: `rotate(${rotation}deg)` }}
              className="absolute w-[500px] h-[500px] flex items-center justify-center"
            >
              {items.map((iconItem, index) => (
                <div
                  key={index}
                  style={{
                    transform: `rotate(${(160 / items.length) * index}deg) translate(290px) rotate(-${(160 / items.length) * index}deg)`,
                  }}
                  className="absolute"
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 border-2 border-white aspect-square rounded-full ${index === itemIndex ? "scale-125" : "scale-100"}`}
                    style={{ backgroundColor: iconItem.color }}
                  >
                    <Image
                      src={iconItem.icon}
                      alt={iconItem.title}
                      width={30}
                      height={30}
                      className={`object-contain `}
                    />
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Amenities;
