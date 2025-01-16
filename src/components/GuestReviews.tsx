"use client";
import { GuestReviewsProps } from "@/@types/types";
import { Section, Heading, Paragraph } from "@/components";
import { GuestReviewCard } from "./cards";
import SliderSwip from "./SliderSwip";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ButtonNext } from "@/icons/icons";

const GuestReviews: React.FC<GuestReviewsProps> = ({
  title,
  description,
  items,
}) => {
  const data = items?.length <= 3 ? items.concat(items, items) : items;

  return (
    <Section className="bg-primary">
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
        <div className="w-full flex items-center justify-center gap-4 lg:max-width max-md:px-2">
          <button className="button-prev text-white lg:block hidden rotate-180 hover:scale-105 active:scale-95 disabled:text-tertiary">
            <ButtonNext />
          </button>
          <SliderSwip
            data={data}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            pagination={{ clickable: true, el: ".pagination" }}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            centeredSlides={true}
            autoplay={{ delay: 2500 }}
            slidesPerView={1.3}
            spaceBetween={15}
            breakpoints={{
              720: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
                loop: false,
              },
            }}
            classNameSwiperSlide="w-full min-h-[22.5rem] bg-white rounded overflow-hidden"
          >
            {(item) => <GuestReviewCard {...item} />}
          </SliderSwip>
          <button className="button-next text-white lg:block hidden hover:scale-105 active:scale-95 disabled:text-tertiary">
            <ButtonNext />
          </button>
        </div>
        <div className="pagination flex items-center justify-center gap-1 -mt-8 "></div>
      </div>
    </Section>
  );
};

export default GuestReviews;
