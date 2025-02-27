"use client";
import Image from "next/image";
import { Heading } from "@/components";
import SliderSwip from "../SliderSwip";
import { Autoplay, EffectFade } from "swiper/modules";

interface DoAtHotelProps {
  title: string;
  description: string;
  images: string[];
}
const DoAtHotelCard: React.FC<DoAtHotelProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <div className="flex flex-col gap-6 bg-white ">
      <SliderSwip
        data={images}
        modules={[Autoplay, EffectFade]}
        loop={true}
        effect="fade"
        // crossFade={true}
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        classNameSwiper="w-full"
        classNameSwiperSlide="w-full"
      >
        {(image) => (
          <div className="relative lg:aspect-[4/1.55] aspect-[4/3.08] w-full">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )}
      </SliderSwip>

      <div className="w-full bg-white pb-16 px-2">
        <Heading level={3} className="capitalize font-montaga heading3">
          {title}
        </Heading>
        <p className="description1">{description}</p>
      </div>
    </div>
  );
};

export default DoAtHotelCard;
