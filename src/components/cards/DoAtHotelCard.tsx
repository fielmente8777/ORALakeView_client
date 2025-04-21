"use client";
import Image from "next/image";
import { Heading } from "@/components";
import SliderSwip from "../SliderSwip";
import { Autoplay, EffectFade } from "swiper/modules";

interface DoAtHotelProps {
  title: string;
  description: string;
  images: string[];
  index?: number;
}
const DoAtHotelCard: React.FC<DoAtHotelProps> = ({
  title,
  description,
  images,
  index = 0,
}) => {
  return (
    <div className="flex flex-col gap-6 bg-white shadow-2xl">
      <SliderSwip
        data={images}
        modules={[Autoplay, EffectFade]}
        loop={true}
        effect="fade"
        // crossFade={true}
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{ delay: (index * 100) + 1000, disableOnInteraction: false }}
        // speed={1000}
        slidesPerView={1}
        classNameSwiper="w-full"
        classNameSwiperSlide="w-full"
      >
        {(image) => (
          <div className="relative md:aspect-[4/2.2] aspect-[4/3.08] w-full">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )}
      </SliderSwip>

      <div className="w-full bg-white pb-4 px-2 min-h-[180px] flex flex-col gap-4">
        <Heading level={3} className="capitalize font-montaga heading3">
          {title}
        </Heading>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default DoAtHotelCard;
