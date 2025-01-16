"use client";
import { Heading, SectionWithContainer } from "@/components";
import { ButtonNext } from "@/icons/icons";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface ImageSliderProps {
  items: {
    title: string;
    images: string[];
  }[];
}
const ImageSlider: React.FC<ImageSliderProps> = ({ items }) => {
  return (
    <SectionWithContainer>
      <div className="flex  items-center justify-center gap-4">
        <button className="bg-primary text-white py-2 px-4 button-prev rotate-180">
          <ButtonNext />
        </button>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          modules={[Navigation]}
          className="w-full h-full"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-4">
                  {item.images.map((image, index) => (
                    <div className="w-full aspect-[4/3] relative" key={index}>
                      <Image src={image} alt={item.title} fill />
                    </div>
                  ))}
                </div>
                <Heading
                  level={2}
                  className="text-center text-secondary capitalize font-montaga heading3"
                >
                  {item.title}
                </Heading>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <button className="bg-primary text-white py-2 px-4 button-next">
          <ButtonNext />
        </button>
      </div>
      
    </SectionWithContainer>
  );
};

export default ImageSlider;
