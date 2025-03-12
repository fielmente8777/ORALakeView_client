"use client";
import {
  Heading,
  HomeRoomCard,
  Paragraph,
  SectionWithContainer,
} from "@/components";
import SliderSwip from "@/components/SliderSwip";
import { ArrowRightIcon, NextBtnIcon, PrevBtnIcon } from "@/icons/icons";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";

const RoomsSilder: React.FC<{
  title: string;
  description: string;
  subDescription: string;
  images: { src: string; alt: string }[];
}> = ({ title, description, subDescription, images }) => {
  return (
    <SectionWithContainer sectionClassName="">
      <div className="flex flex-col items-center justify-center gap-5">
        <Heading className="text-center text-[#FFCD42] capitalize font-montaga heading2 px-20">
          {title}
        </Heading>
        <Paragraph className="text-center !text-primary description1">
          {description}
        </Paragraph>
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-4 mt-4">
          <div className="flex flex-col col-span-1 max-md:order-2 justify-center gap-4">
            <Paragraph className="description1 !text-primary">
              {subDescription}
            </Paragraph>
            <Link
              href="/rooms"
              className="text-quaternary font-medium capitalize  py-3 px-6 flex items-center justify-center gap-2 hover:text-white hover:bg-quaternary hover:scale-x-105 active:scale-x-95
              transition-all duration-300 ease-in-out border border-quaternary  w-fit description1 "
            >
              View Rooms{" "}
              <span>
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
          <div className="col-span-2 max-md:order-1 w-full relative">
            <SliderSwip
              data={images}
              modules={[Pagination, Navigation]}
              pagination={{
                type: "fraction",
              }}
              navigation={{
                nextEl: ".home-room-next",
                prevEl: ".home-room-prev",
              }}
              slidesPerView={1.3}
              spaceBetween={5}
              breakpoints={{
                1024: {
                  slidesPerView: 1.3,
                  spaceBetween: 35,
                },
                768: {
                  slidesPerView: 1.3,
                  spaceBetween: 35,
                },
              }}
              classNameSwiper="h-full w-full roomsSilder"
              classNameSwiperSlide="h-full w-full pb-11"
            >
              {(item) => <HomeRoomCard {...item} />}
            </SliderSwip>
            <div className="flex items-center justify-center gap-4 absolute bottom-1 lg:right-28 z-10">
              <button
                className={` hover:scale-105 w-[2rem] aspect-square flex items-center justify-center disabled:text-primary active:scale-95 text-secondary home-room-prev`}
              >
                <PrevBtnIcon />
              </button>
              <button
                className={`hover:scale-105 active:scale-95 w-[2rem] aspect-square flex items-center justify-center disabled:text-primary text-secondary home-room-next`}
              >
                <NextBtnIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default RoomsSilder;
