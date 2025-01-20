"use client";
import { ImageSliderProps } from "@/@types/types";
import { Section } from "@/components";
import ImageCard from "./ImageCard";
import { useState } from "react";
import { NextBtnIcon, PrevBtnIcon } from "@/icons/icons";
import FullScreenImageViewPopUP from "@/components/FullScreenImageViewPopUP";

const CircleSlider: React.FC<ImageSliderProps> = ({ items }) => {
  const [rotation, setRotation] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [imageArray, setImageArray] = useState<string[]>([]);

  const handleModal = (image: string, imageArray: string[]) => {
    setShowModal(true);
    setSelectedImage(image);
    setImageArray([...imageArray, image]);
  };

  const handleNext = () => {
    setRotation((prev) => prev - 90);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + 90);
  };

  return (
    <Section className="lg:block hidden">
      <div className="h-[700px] relative z-20 overflow-hidden ">
        <div className="w-full h-full relative top-[60rem]">
          <div
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)", // Smooth animation
            }}
            className="absolute w-[10px] aspect-square flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
          >
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  transform: `rotate(${(360 / items.length) * index}deg) translate(950px) rotate(-${(360 / items.length) * index}deg)`,
                  transition: "transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)", // Smooth transition for individual items
                }}
                className="absolute"
              >
                <div
                  className={`flex items-center justify-center gap-4 relative ${
                    index === 0
                      ? "rotate-[90deg]"
                      : index === 1
                        ? "rotate-180"
                        : index === 2
                          ? "rotate-[-90deg]"
                          : index === 4
                            ? "rotate-0"
                            : ""
                  }`}
                >
                  <button
                    onClick={handleNext}
                    className="absolute left-[-15%] top-[70%] rotate-[-50deg] p-5 text-white bg-quaternary rounded-full"
                  >
                    <PrevBtnIcon />
                    <span className="sr-only">Previous button</span>
                  </button>
                  {/* <span className="w-[30rem] h-1 rotate-[-50deg] bg-clip-content bg-gradient-to-r from-[#000000] to-[#D9D9D9] absolute top-[70%] left-[-15%] "></span> */}

                  <ImageCard {...item} handleModal={handleModal} />

                  <button
                    onClick={handlePrev}
                    className="absolute right-[-15%] top-[70%] rotate-[50deg] p-5 text-white bg-quaternary rounded-full"
                  >
                    <NextBtnIcon />
                    <span className="sr-only">Next button</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {showModal && (
        <FullScreenImageViewPopUP
          setShowModal={setShowModal}
          src={selectedImage}
          showModal={showModal}
          imageArray={imageArray}
        />
      )}
    </Section>
  );
};

export default CircleSlider;
