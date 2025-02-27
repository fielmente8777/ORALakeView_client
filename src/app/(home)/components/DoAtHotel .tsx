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
    <Section className="bg-primary">
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
      <div className="lg:mt-8 mt-2 relative w-full">
        <div className="lg:h-[29rem] h-[16.5rem]"></div>
        <div className="bg-white lg:h-[18rem] h-[20rem]"></div>
        <div className="absolute top-0 left-0  w-full">
          <Container>
            <div
              className="w-full block mt-4 shadow-md "
              id="custom-pagination-fraction relative overflow-hidden"
            >
              <SliderSwip
                data={items}
                modules={[Pagination, Navigation]}
                autoplay={{ delay: 2500 }}
                pagination={{
                  type: "fraction",
                }}
                navigation={{
                  nextEl: ".next",
                  prevEl: ".prev",
                }}
                slidesPerView={1}
                spaceBetween={0}
              >
                {(item) => <DoAtHotelCard {...item} />}
              </SliderSwip>
              <div className="flex items-center justify-center gap-4 absolute lg:bottom-2 bottom-3 lg:left-32 left-8 z-10">
                <button
                  className={`text-primary hover:scale-105 active:scale-95 hover:text-tertiary prev`}
                >
                  <PrevBtnIcon />

                </button>
                <button
                  className={`text-primary hover:scale-105 active:scale-95 hover:text-tertiary next`}
                >
                  {/* <ButtonNext /> */}
                  <NextBtnIcon />

                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default DoAtHotel;
