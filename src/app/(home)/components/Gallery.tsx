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
    "col-span-3 row-span-3",
    "col-span-2 row-span-4",
    "col-span-2 row-span-3",
    "col-span-1 row-span-4",
    "col-span-2 row-span-4",
    "col-span-2 row-span-4",
    "col-span-2 row-span-3",
  ];
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col items-center justify-center gap-14">
        <div>
          <Heading
            level={2}
            className="text-center text-secondary capitalize font-montaga heading3"
          >
            {title}
          </Heading>

          <Paragraph className="text-white text-center description1">
            {description}
          </Paragraph>
        </div>
        <div
          className={`grid grid-cols-7 lg:auto-rows-[6rem] auto-rows-[8rem] gap-3 w-full h-full rounded-sm`}
        >
          {images.map((image, index) => (
            <div
              className={`${
                gridPattern[index % gridPattern.length]
              } relative w-full aspect-auto group rounded-sm overflow-hidden`}
              key={index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
                fill
              />
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/20 group">
                <Heading
                  level={3}
                  className="text-white text-center text-base w-full absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {image.alt}
                </Heading>
              </div>
            </div>
          ))}
        </div>
        <Paragraph className="text-white text-center description1 flex items-center gap-2">
          Explore the Beauty of Lakeview Hotel Through Our Gallery.{" "}
          <Link href={"/gallery"} className="flex items-center gap-2">
            <span className="border-white border-b-2 capitalize">
              See all photos
            </span>
            <span className="text-white">
              <Arrow1 />
            </span>
          </Link>
        </Paragraph>
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;
