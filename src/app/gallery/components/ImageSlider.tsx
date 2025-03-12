"use client";
import { Heading, SectionWithContainer } from "@/components";
import { CloseIcon, NextBtnIcon, PrevBtnIcon } from "@/icons/icons";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { ImageSliderProps } from "@/@types/types";
import { useState } from "react";

const ImageSlider: React.FC<ImageSliderProps> = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [title, setTitle] = useState("");
  const [imageArray, setImageArray] = useState<string[]>([]);

  const handleModal = (image: string, imageArray: string[], title: string) => {
    setShowModal(true);
    setSelectedImage(image);
    setTitle(title);
    setImageArray([...imageArray, image]);
  };
  return (
    <SectionWithContainer sectionClassName="lg:py-32 py-16 lg:hidden block">
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            nextEl: ".gallery-img-next",
            prevEl: ".gallery-img-prev",
          }}
          modules={[Navigation]}
          className="w-full h-full "
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-4">
                <div className="block w-full">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{
                      clickable: true,
                    }}
                    className="w-full h-full gallery-swiper-inside"
                  >
                    {item.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="w-full aspect-[4/5]  relative" onClick={() => handleModal(image, imageArray, item.title)}>
                          <Image
                            src={image}
                            alt={item.title}
                            fill
                            className="object-cover bg-gradient-to-t from-inherit to-black"

                          />

                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <Heading
                  level={2}
                  className="text-center text-quaternary capitalize font-montaga heading3"
                >
                  {item.title}
                </Heading>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="bg-quaternary text-white p-3 rounded-full gallery-img-prev absolute -bottom-2 z-30 left-5">
          <PrevBtnIcon />
        </button>
        <button className="bg-quaternary text-white p-3 rounded-full gallery-img-next absolute -bottom-2 right-5 z-30 ">
          <NextBtnIcon />
        </button>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowModal(false)}
            className="z-10 rounded-md p-2 absolute top-2 right-2"
          >
            <CloseIcon />
          </button>
          <div className="aspect-[4/5] w-full relative"
            onClick={() => setShowModal(false)}>
            <Image
              src={selectedImage}
              alt={title}
              fill
              className="object-contain bg-gradient-to-t from-inherit to-black"

            />
          </div>


        </div>

      )}
    </SectionWithContainer>
  );
};

export default ImageSlider;
