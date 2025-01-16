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
              } relative w-full aspect-auto rounded-sm  transition-all duration-500 ease-in-out`}
              key={index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover hover:scale-[1.05] scale-100  transition-all duration-500 ease-in-out"
                fill
              />
              <div className="absolute top-0 left-0 z-10 w-full h-full  bg-black/30 transition-all duration-300">
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
        <Link href="/gallery" className="text-white lg:text-center description1 flex max-md:flex-col flex-wrap items-center gap-2">
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
