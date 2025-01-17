"use client";
import { useState } from "react";
import { SectionWithContainer } from "@/components";
import { Heading, Paragraph } from "@/components/TextAndInputComponents";
import { Arrow1 } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";

interface GalleryProps {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}
const Gallery: React.FC<GalleryProps> = ({ title, description, images }) => {
  const gridPattern = [
    "lg:col-span-3 col-span-4 row-span-2 lg:row-span-3",
    "lg:col-span-2 col-span-3 row-span-5 lg:row-span-4",
    "lg:col-span-2 col-span-4 row-span-3 lg:row-span-3",
    "lg:col-span-1 col-span-3 row-span-2 lg:row-span-4",
    "lg:col-span-2 col-span-4 row-span-2 lg:row-span-4",
    "lg:col-span-2 col-span-4 lg:row-span-4 row-span-3",
    "lg:col-span-2 col-span-3 row-span-3 ",
  ];

  const [isHovered, setIsHovered] = useState<null | number>(null);

  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col items-center justify-center gap-14">
        <div className="flex flex-col items-center justify-center gap-4">
          <Heading
            level={2}
            className="text-center text-secondary capitalize font-montaga heading2"
          >
            {title}
          </Heading>

          <Paragraph className="text-white text-center description">
            {description}
          </Paragraph>
        </div>
        <div
          className={`grid grid-cols-7  lg:auto-rows-[6rem] group auto-rows-[4rem] gap-3 w-full h-full rounded-sm`}
        >
          {images.map((image, index) => (
            <div
              className={`${
                gridPattern[index % gridPattern.length]
              } relative w-full aspect-auto rounded-sm cursor-pointer  transition-all duration-500 ease-in-out  ${isHovered === index ? "hover:scale-100 filter brightness-100 blur-0" : "group-hover:scale-[0.99] group-hover:filter group-hover:brightness-90 group-hover:blur-sm"}`}
              key={index}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full object-cover "
                fill
              />
              <div className="absolute top-0 left-0 z-10 w-full h-full  bg-gradient-to-b from-white/10 to-black/70">
                <Heading
                  level={3}
                  className="text-white text-center capitalize text-base w-full absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {image.alt}
                </Heading>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/gallery"
          className="text-white lg:text-center description1 flex max-md:flex-col flex-wrap items-center gap-2"
        >
          Explore the Beauty of Lakeview Hotel Through Our Gallery.{" "}
          <span className="inline border-white border-b-2 capitalize">
            {/* <span className="border-white border-b-2 capitalize"> */}
            See all photos
            {/* </span>
            <span className="text-white">
            </span> */}
          </span>
          <Arrow1 />
        </Link>
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;
