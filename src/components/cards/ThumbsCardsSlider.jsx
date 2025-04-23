"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import { NextBtnIcon, PrevBtnIcon } from "@/icons/icons";

const ThumbsCardsSlider = ({ images, index }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  

  return (
    <div className="w-full relative thumbs">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#000",
        }}
        spaceBetween={10}
        navigation={{
          nextEl: ".thumbs-next" + index,
          prevEl: ".thumbs-prev" + index,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        pagination={{ type: "fraction" }}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative aspect-[4/3]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex mt-6">
        <button
          className={`disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:active:scale-100 thumbs-prev${index} text-primary hover:scale-105 active:scale-95 w-8 aspect-square flex items-center justify-center`}
        >
          <PrevBtnIcon />
        </button>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={images?.length}
          // slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="!max-w-sm !ml-0"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index} className="relative aspect-square !h-[4rem] border ">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`disabled:opacity-50 thumbs-next${index} text-primary hover:scale-105 w-8 aspect-square active:scale-95 flex items-center justify-center`}
        >
          <NextBtnIcon />
        </button>
      </div>
    </div>
  );
};

export default ThumbsCardsSlider;
