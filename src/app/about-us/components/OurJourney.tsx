"use client";
import { Heading, OurJourneyCard, SectionWithContainer } from "@/components";
import SliderSwip from "@/components/SliderSwip";
import { NextBtnIcon, PrevBtnIcon } from "@/icons/icons";
import { Navigation, Pagination } from "swiper/modules";

interface OurJourneyProps {
  title: string;
  cards: {
    title: string;
    description: string;
    src: string;
    year: string;
  }[];
}
const OurJourney: React.FC<OurJourneyProps> = ({ title, cards }) => {
  const btn = title.replace(" ", "");

  console.log(cards[cards.length - 1].year);

  return (
    <SectionWithContainer sectionClassName="bg-primary lg:pt-32 pt-16 lg:pb-20">
      <div className="journey relative">
        <Heading
          level={2}
          className="text-center text-secondary capitalize font-montaga heading2"
        >
          {title}
        </Heading>

        <div className="mt-12 ">
          <SliderSwip
            data={cards}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: `.${btn}-pagination`,
              type: "bullets",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              renderBullet: () => `<span class="w-full h-full block"></span>`,
            }}
            navigation={{
              nextEl: `.${btn}-next`,
              prevEl: `.${btn}-pre`,
            }}
            slidesPerView={1}
            spaceBetween={20}
            classNameSwiperSlide="w-full min-h-[22.5rem] bg-white rounded overflow-hidden"
          >
            {(card) => (
              <>
                <OurJourneyCard {...card} key={card.year} />
                {/* <div
                  className={`${btn}-pagination bg-white mt-16 flex items-center justify-center gap-4`}
                ></div> */}
              </>
            )}
          </SliderSwip>
        </div>
        <div className="flex lg:items-center max-md:mt-8 lg:justify-center gap-4 lg:absolute bottom-8 left-2 z-10">
          <button
            className={`text-white hover:scale-105 active:scale-95 desabled:text-tertiary  ${btn}-pre`}
          >
            <PrevBtnIcon />
          </button>
          <button
            className={`text-white hover:scale-105 active:scale-95  ${btn}-next`}
          >
            <NextBtnIcon />
          </button>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurJourney;
