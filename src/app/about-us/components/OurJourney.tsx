"use client";
import { Heading, OurJourneyCard, SectionWithContainer } from "@/components";
import SliderSwip from "@/components/SliderSwip";
import { NextBtnIcon, PrevBtnIcon } from "@/icons/icons";
import { useState, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";

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
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Define Swiper ref
  const swiperRef = useRef<SwiperCore | null>(null);

  const timelineData = cards.map((card) => ({
    year: card.year,
    height: "h-[52px]",
    color: "bg-zinc-500",
  }));

  const handleTimelineClick = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  };

  return (
    <SectionWithContainer sectionClassName="bg-primary lg:pt-32 pt-16 lg:pb-20">
      <div className="journey relative">
        <Heading level={2} className="text-center text-secondary capitalize font-montaga heading2">
          {title}
        </Heading>

        <div className="mt-12">
          <SliderSwip
            data={cards}
            modules={[Navigation, Pagination]}
            onSwiper={(swiper: SwiperCore) => (swiperRef.current = swiper)}
            onSlideChange={(swiper: SwiperCore) => setActiveIndex(swiper.activeIndex)}
            // ✅ Sync timeline with slides
            pagination={{
              clickable: true,
              el: `.${btn}-pagination`,
              type: "bullets",
            }}
            navigation={{
              nextEl: `.${btn}-next`,
              prevEl: `.${btn}-pre`,
            }}
            slidesPerView={1}
            spaceBetween={20}
            classNameSwiperSlide="w-full min-h-[22.5rem] bg-white rounded overflow-hidden"
          >
            {(card) => <OurJourneyCard {...card} key={card.year} />}
          </SliderSwip>
        </div>

        {/* Navigation Buttons */}
        <div className="flex bottom-0 lg:items-center max-md:mt-8 lg:justify-center gap-4 lg:absolute left-2 z-10">
          <button
            className={`text-white hover:scale-105 active:scale-95 disabled:text-tertiary `}
            onClick={() => {
              if (activeIndex > 0) {
                swiperRef.current?.slidePrev();
                setActiveIndex((prev) => prev);
              }
            }}
          >
            <PrevBtnIcon />
          </button>
          <button
            className={`text-white hover:scale-105 active:scale-95 `}
            onClick={() => {
              if (activeIndex < timelineData.length - 1) {
                swiperRef.current?.slideNext();
                setActiveIndex((prev) => prev);
              }
            }}
          >
            <NextBtnIcon />
          </button>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="flex justify-center gap-5 items-end mt-8 h-56">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-2 cursor-pointer"
            onClick={() => handleTimelineClick(index)}
          >
            <div className={`mt-2 text-2xl text-white font-montaga -rotate-90 ${activeIndex === index ? "text-yellow-300" : ""}`}>
              {item.year}
            </div>
            <div className={`mx-0 my-2 w-0.5 ${activeIndex === index ? "h-40" : item.height} ${item.color} transition-all duration-500`} />
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default OurJourney;
