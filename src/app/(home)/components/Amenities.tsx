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
  const positions = [
    "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-[70%] lg:left-4 left-3 -translate-x-1/2 -translate-y-1/2 scale-[0.8]",
    "lg:top-[85%] top-[88%] lg:left-[4rem] left-[3rem] -translate-x-1/2 -translate-y-1/2 scale-[0.7]",
    "lg:top-[95%] top-[98%] left-[4rem] translate-x-1/2 -translate-y-1/2 scale-[0.6]",
    "lg:top-[6%] top-[0.74rem] left-[4.2rem] lg:right-[22.5rem]  translate-x-1/2 -translate-y-1/2 scale-[0.6]",
    "top-[15%] lg:right-[26rem] left-0 translate-x-1/2 -translate-y-1/2 scale-[0.7]",
    "lg:top-[30%] top-[30.5%] lg:-left-[3rem] -left-[2rem] translate-x-1/2 -translate-y-1/2 scale-[0.8]",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [iconPositions, setIconPositions] = useState(
    items.map((_, index) => positions[index % positions.length])
  );
  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      const newPositions = [...iconPositions];
      newPositions.unshift(newPositions.pop()!); // Rotate positions forward
      setIconPositions(newPositions);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newPositions = [...iconPositions];
      newPositions.push(newPositions.shift()!); // Rotate positions backward
      setIconPositions(newPositions);
      setCurrentIndex((prev) => prev - 1);
    }
  };

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
                {items[currentIndex].title}
              </Heading>
              <Paragraph className="description1">
                {items[currentIndex].description}
              </Paragraph>
            </div>
            <div className="flex gap-1 items-center">
              <button
                onClick={handlePrev}
                className="text-white hover:scale-105 active:scale-95 w-8 aspect-square flex items-center justify-center"
              >
                <PrevBtnIcon />
              </button>
              <button
                onClick={handleNext}
                className="text-white hover:scale-105 w-8 aspect-square active:scale-95 flex items-center justify-center"
              >
                <NextBtnIcon />
              </button>
              <div className="text-white heading4 flex gap-1">
                <span className="w-3">{currentIndex + 1}</span>/
                <span className="w-3">{items.length}</span>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="w-full flex items-center justify-center overflow-hidden ps-8 py-6">
            {/* Main Image */}
            <div className="lg:p-11 p-9 relative flex items-center justify-center border-l-2 border-[#A0A0A0] rounded-full">
              <div className="w-full flex items-center bg-primary rounded-full p-2 z-10 justify-center overflow-hidden">
                <div className="relative flex items-center justify-center lg:w-[400px] lg:h-[400px] w-[240px] h-[240px] aspect-square rounded-full overflow-hidden z-20">
                  <Image
                    src={items[currentIndex]?.src}
                    alt={items[currentIndex]?.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Rotating Icons */}
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`lg:w-16 w-11 border-2 border-white aspect-square absolute ${iconPositions[index]}  flex items-center justify-center rounded-full transition-all duration-500 ease-linear`}
                  style={{ backgroundColor: item.color }}
                >
                  <div className="relative lg:w-8 w-6 aspect-square">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
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
