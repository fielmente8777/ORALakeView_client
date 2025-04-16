"use client";

import {
  CloseIcon,
  NextBtnIcon,
  PrevBtnIcon,
} from "@/icons/icons";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Heading } from "./TextAndInputComponents";
import { BsFullscreen } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";
interface FullScreenImageViewPopUPProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  src: string;
  showModal: boolean;
  imageArray: string[];
  title?: string;
}

const FullScreenImageViewPopUP: React.FC<FullScreenImageViewPopUPProps> = ({
  setShowModal,
  src,
  imageArray,
  title,
}) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Ensure unique images in the array
  const uniqueImageArray = Array.from(new Set(imageArray));

  const [currentImageIndex, setCurrentImageIndex] = useState(
    uniqueImageArray.includes(src) ? uniqueImageArray.indexOf(src) : 0
  );

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [handleKeydown]);

  const toggleFullscreen = useCallback(() => {
    const element = document.querySelector(".image-container");
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => console.error(err));
    } else {
      if (element) {
        element.requestFullscreen().catch((err) => console.error(err));
      }
    }
  }, []);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  const handelNext = () => {
    const nextIndex = (currentImageIndex + 1) % uniqueImageArray.length;
    setCurrentImageIndex(nextIndex);
  };

  const handelPrev = () => {
    const prevIndex =
      (currentImageIndex - 1 + uniqueImageArray.length) %
      uniqueImageArray.length;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <section
      className="fixed inset-0 z-50 flex items-center bg-black/80 justify-center backdrop-blur-sm py-5"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowModal(false);
      }}
    >
      <button
        className="text-white bg-secondary/70 z-10 rounded-full p-4"
        onClick={handelPrev}
      >
        <PrevBtnIcon />
      </button>
      <div className="max-w-[60rem] max-md:px-5 w-full flex justify-center mt-6 -top-5 relative">
        <button
          onClick={() => setShowModal(false)}
          className="z-10 rounded-md p-2 absolute -top-14 -right-10"
        >
          <CloseIcon />
        </button>

        <div
          className="relative w-full max-w-4xl aspect-[4/2.5] image-container"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={uniqueImageArray[currentImageIndex]}
            alt="Full screen view"
            fill
            priority={true}
            className="object-resize max-lg:object-contain cursor-pointer"
            onClick={toggleFullscreen}
          />
          <div className="absolute bottom-0 left-0">
            <button
              className="w-full h-full cursor-pointer flex items-end justify-end"
              onClick={toggleFullscreen}
            >
              <span className="p-2 text-2xl bg-tertiary/70 w-max rounded-md">
                {isFullscreen ? <BsFullscreen /> : <BsFullscreenExit />}
              </span>
            </button>
          </div>

          <div className={`absolute bottom-0 w-fit h-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 ${imageArray.length > 3 ? "max-md:hidden" : "block"}`}>
            {uniqueImageArray.map((image, index) => (
              <button
                key={index}
                className={`w-16 h-1 cursor-pointer ${index === currentImageIndex ? "bg-white" : "bg-tertiary"
                  }`}
                onClick={() => setCurrentImageIndex(index)}
              ></button>
            ))}
          </div>
          <div className="absolute -bottom-12 w-fit  h-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
            <Heading level={3} className="text-quaternary heading3 font-montaga ">
              {title}
            </Heading>
          </div>
        </div>
      </div>
      <button
        className="text-white bg-secondary/70 z-10 rounded-full p-4"
        onClick={handelNext}
      >
        <NextBtnIcon />
      </button>
    </section>
  );
};

export default FullScreenImageViewPopUP;
