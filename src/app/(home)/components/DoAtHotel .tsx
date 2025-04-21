"use client";
import {
  Container,
  DoAtHotelCard,
  Heading,
  Paragraph,
  Section,
} from "@/components";
import SliderSwip from "@/components/SliderSwip";
import { NextBtnIcon, PrevBtnIcon } from "@/icons/icons";
import { Navigation, Pagination } from "swiper/modules";

interface IDoAtHotelProps {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    images: string[];
  }[];
}
const DoAtHotel: React.FC<IDoAtHotelProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <Section className="bg-primary ">
      <div className="flex flex-col max-width items-center justify-center gap-4 ">
        <Heading
          level={2}
          className="text-center text-[#FFCD42] capitalize font-montaga heading2"
        >
          {title}
        </Heading>
        <Paragraph className="text-center description1">
          {description}
        </Paragraph>
      </div>
      <div className="w-full relative md:mt-10 mt-6">
        <Container>
          <div
            className="w-full block mt-4 shadow-md relative"
            id="custom-pagination-fraction"
          >
            <SliderSwip
              data={items}
              modules={[Pagination, Navigation]}
              autoplay={{ delay: 2500 }}
              pagination={{
                el: ".custom-swiper-pagination",
                type: "fraction",
                clickable: true,
                renderFraction: (currentClass: string, totalClass: string) => {
                  return `<span class="${currentClass} font-montaga"></span> / <span class="${totalClass} font-montaga"></span>`;
                },
              }}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
              }}
              classNameSwiper="w-full !px-3"
              classNameSwiperSlide="w-full py-3"
            >
              {(item) => <DoAtHotelCard {...item} index={items.indexOf(item)} />}
            </SliderSwip>
            <div className=" flex items-center gap-4 bottom-[-2.5rem] right-0 absolute px-4 z-10">
              <button
                className={`text-primary hover:scale-105 active:scale-95 hover:text-tertiary prev p-2 hover:bg-white rounded-full`}
              >
                <PrevBtnIcon />
              </button>

              <button
                className={`text-primary hover:scale-105 active:scale-95 hover:text-tertiary next p-2 hover:bg-white rounded-full`}
              >
                <NextBtnIcon />
              </button>
              <div className="text-primary font-montaga text-[1.2rem] custom-swiper-pagination">
                <span className="swiper-pagination-current"></span> /{" "}
                <span className="swiper-pagination-total"></span>
              </div>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 right-0 left-0 top-1/2 w-full md:h-[23rem] font-montaga h-[19.5rem] bg-white"></div>
      </div>
    </Section>
  );
};

export default DoAtHotel;
