"use client";
import { useState } from "react";
import { SectionWithContainer } from "@/components";
import { Heading, Paragraph } from "@/components/TextAndInputComponents";
import { Arrow1 } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import FullScreenImageViewPopUP from "@/components/FullScreenImageViewPopUP";

interface GalleryProps {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ title, description, images }) => {
  // const [isHovered, setIsHovered] = useState<null | number>(null);
  const [showModal, setShowModal] = useState(false);
  // const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const gridPattern = [
    "lg:col-span-3 col-span-4 row-span-2 lg:row-span-3",
    "lg:col-span-2 col-span-3 row-span-5 lg:row-span-4",
    "lg:col-span-2 col-span-4 row-span-3 lg:row-span-3",
    "lg:col-span-1 col-span-3 row-span-2 lg:row-span-4",
    "lg:col-span-2 col-span-4 row-span-2 lg:row-span-4",
    "lg:col-span-2 col-span-4 lg:row-span-4 row-span-3",
    "lg:col-span-2 col-span-3 row-span-3",
  ];

  // const handleOpenModal = (index: number) => {
  //   setSelectedImageIndex(index);
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  //   setSelectedImageIndex(null);
  // };

  // const handleNextImage = () => {
  //   setSelectedImageIndex((prevIndex) => (prevIndex !== null && prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  // };

  // const handlePrevImage = () => {
  //   setSelectedImageIndex((prevIndex) => (prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  // };

  
  const [selectedImage, setSelectedImage] = useState("");
  const [imageArray, setImageArray] = useState<string[]>([]);

  const handleModal = (
    image: string,
    imageArray: string[],
  ) => {
    setShowModal(true);
    setSelectedImage(image);
    setImageArray([...imageArray, image]);
  };

  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col items-center justify-center lg:gap-14 gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <Heading level={2} className="text-center text-secondary capitalize font-montaga heading2">
            {title}
          </Heading>
          <Paragraph className="text-white text-center description">
            {description}
          </Paragraph>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-7 lg:auto-rows-[6rem] group auto-rows-[3rem] lg:gap-3 gap-1 w-full h-full rounded-sm">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${gridPattern[index % gridPattern.length]
                } relative w-full aspect-auto rounded-sm cursor-pointer `}
                  // transition-all duration-500 ease-in-out  ${isHovered === index ? "lg:hover:scale-100 filter brightness-100 blur-0" : "lg:group-hover:scale-[0.99] lg:group-hover:filter lg:group-hover:brightness-90 lg:group-hover:blur-sm"}`}
              onClick={() => handleModal(image.src, images.map((image) => image.src))}
              // onMouseEnter={() => setIsHovered(index)}
              // onMouseLeave={() => setIsHovered(null)}
            >
              <Image src={image.src} alt={image.alt} className="w-full object-cover" fill />
              <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-b from-white/20 to-black/40 to-95%">
                <Heading
                  level={3}
                  className="text-white text-center text-[0.75rem] capitalize lg:text-base w-full absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {image.alt}
                </Heading>
              </div>
            </div>
          ))}
        </div>
        <p className="text-white lg:text-center lg:description1 text-[0.85rem] flex max-md:flex-col lg:items-center gap-2 ">
          Beauty of Lakeview Hotel Through Our{" "}
          <span className="inline-flex max-sm:justify-center items-center gap-2">
            Gallery {" "}
            <Link href="/gallery" className="inline-flex items-center gap-2">
              <span className="border-white border-b-2 capitalize">
                See all photos
              </span>
              <span className="text-white">
                <Arrow1 />
              </span>
            </Link>
          </span>
        </p>
        {/* Modal */}
        {/* {showModal && selectedImageIndex !== null && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black/90 z-50 flex items-center justify-center">
            <button onClick={handleCloseModal} className="z-10 absolute top-2 right-2 p-2">
              <CloseIcon />
            </button>
            <div className="relative w-full max-w-[1600px] md:w-full aspect-[4/3] flex items-center justify-center">
              <button onClick={handlePrevImage} className="bg-quaternary p-2 rounded-full absolute left-5 z-50 text-white"><PrevBtnIcon /></button>
              <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className="object-contain w-full h-full"
                fill
              />
              <button onClick={handleNextImage} className="bg-quaternary p-2 rounded-full absolute right-5 text-2xl text-white"> <NextBtnIcon /></button>
            </div>
          </div>
        )} */}
      </div>
      {showModal && (
        <FullScreenImageViewPopUP
          setShowModal={setShowModal}
          src={selectedImage}
          showModal={showModal}
          imageArray={imageArray}
          title={title}
        />
      )}
    </SectionWithContainer>
  );
};

export default Gallery;
