"use client";
import {
  DoAtHotelCard,
  Heading,
  Paragraph,
  SectionWithContainer,
} from "@/components";
import SliderSwip from "@/components/SliderSwip";
import { ButtonNext } from "@/icons/icons";
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
    <SectionWithContainer sectionClassName="bg-primary !pb-0">
      <div className="flex flex-col items-center justify-center gap-4">
        <Heading
          level={2}
          className="text-center text-[#FFCD42] capitalize font-montaga heading2"
        >
          {title}
        </Heading>
        <Paragraph className="text-center description1">
          {description}
        </Paragraph>
        <div
          className="w-full block mt-4 shadow-md relative"
          id="custom-pagination-fraction"
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
          <div className="flex items-center justify-center gap-4 absolute bottom-2 left-3 z-10">
            <button
              className={`text-primary hover:scale-105 active:scale-95 rotate-180 hover:text-tertiary prev`}
            >
              <ButtonNext />
            </button>
            <button
              className={`text-primary hover:scale-105 active:scale-95 hover:text-tertiary next`}
            >
              <ButtonNext />
            </button>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default DoAtHotel;
