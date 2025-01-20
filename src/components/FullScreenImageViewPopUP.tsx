"use client";

import {
  NextBtnIcon,
  PrevBtnIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "@/icons/icons";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface FullScreenImageViewPopUPProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  src: string;
  showModal: boolean;
  imageArray: string[];
}

const FullScreenImageViewPopUP: React.FC<FullScreenImageViewPopUPProps> = ({
  setShowModal,
  src,
  imageArray,
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
      <div className="max-w-6xl max-md:px-5 w-full flex justify-center mt-6 relative">
        <button
          onClick={() => setShowModal(false)}
          className="z-10 rounded-md p-2 absolute -top-14 -right-10"
        >
          <CloseIcon />
        </button>

        <div
          className="relative w-full max-w-5xl aspect-[4/2.5] image-container"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={uniqueImageArray[currentImageIndex]}
            alt="Full screen view"
            fill
            priority={true}
            className="object-resize cursor-pointer"
            onClick={toggleFullscreen}
          />
          <div className="absolute bottom-0 left-0">
            <button
              className="w-full h-full cursor-pointer flex items-end justify-end"
              onClick={toggleFullscreen}
            >
              <span className="p-7 bg-tertiary/70 w-max rounded-md">
                {isFullscreen ? <ZoomOutIcon /> : <ZoomInIcon />}
              </span>
            </button>
          </div>
          <div className="absolute bottom-10 w-fit h-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
            {uniqueImageArray.map((image, index) => (
              <button
                key={index}
                className={`w-16 h-1 cursor-pointer ${
                  index === currentImageIndex ? "bg-white" : "bg-tertiary"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              ></button>
            ))}
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

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M28.9216 27.3287C29.0261 27.4332 29.109 27.5573 29.1656 27.6939C29.2221 27.8305 29.2513 27.9768 29.2513 28.1246C29.2513 28.2725 29.2221 28.4188 29.1656 28.5554C29.109 28.692 29.0261 28.8161 28.9216 28.9206C28.817 29.0251 28.693 29.108 28.5564 29.1646C28.4198 29.2212 28.2734 29.2503 28.1256 29.2503C27.9778 29.2503 27.8314 29.2212 27.6949 29.1646C27.5583 29.108 27.4342 29.0251 27.3297 28.9206L18.0006 19.5901L8.67156 28.9206C8.46047 29.1317 8.17416 29.2503 7.87563 29.2503C7.57709 29.2503 7.29078 29.1317 7.07969 28.9206C6.86859 28.7095 6.75 28.4232 6.75 28.1246C6.75 27.8261 6.86859 27.5398 7.07969 27.3287L16.4102 17.9996L7.07969 8.67059C6.86859 8.45949 6.75 8.17318 6.75 7.87465C6.75 7.57611 6.86859 7.28981 7.07969 7.07871C7.29078 6.86762 7.57709 6.74902 7.87563 6.74902C8.17416 6.74902 8.46047 6.86762 8.67156 7.07871L18.0006 16.4092L27.3297 7.07871C27.5408 6.86762 27.8271 6.74902 28.1256 6.74902C28.4242 6.74902 28.7105 6.86762 28.9216 7.07871C29.1327 7.28981 29.2513 7.57611 29.2513 7.87465C29.2513 8.17318 29.1327 8.45949 28.9216 8.67059L19.5911 17.9996L28.9216 27.3287Z"
        fill="white"
      />
    </svg>
  );
};
