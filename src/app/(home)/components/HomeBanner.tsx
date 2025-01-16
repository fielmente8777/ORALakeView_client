"use client";
import Image from "next/image";
import Section from "../../../components/SectionComponents/Section";
import Container from "../../../components/SectionComponents/Container";
import { Heading, Paragraph } from "../../../components/TextAndInputComponents";
import { Navigation } from "swiper/modules";
import SliderSwip from "@/components/SliderSwip";
// import { CalendarIcon, DownArrow } from "@/icons/icons";
interface HomeBannerProps {
  images: string[];
  title: string;
  description: string;
}
const HomeBanner: React.FC<HomeBannerProps> = ({
  images,
  title,
  description,
}) => {
  // const date = new Date();

  return (
    <Section className="!py-0">
      <div className="w-full relative aspect-[4/1.8]">
        <SliderSwip
          data={images}
          modules={[Navigation]}
          navigation={{
            nextEl: ".banner-next",
            prevEl: ".banner-prev",
          }}
          slidesPerView={1}
          spaceBetween={0}
          classNameSwiper="w-full h-full"
          classNameSwiperSlide="w-full h-full relative aspect-[4/1.8]"
        >
          {(item) => (
            <Image src={item} alt="banner" fill className="object-cover" />
          )}
        </SliderSwip>
        <div className="absolute top-0 left-0 z-10 w-full h-full pb-4 bg-black/50">
          <div className="mt-32 h-4/5">
            <Container className="h-full">
              <div className="flex flex-col items-center justify-between w-full h-full">
                <div className="relative aspect-square h-[15rem] ">
                  <Image
                    src="/logosm1.png"
                    alt="ora lake view"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                  <Heading
                    level={1}
                    className="heading2 font-montaga text-white capitalize"
                  >
                    {title}
                  </Heading>
                  <Paragraph className="description font-medium capitalize">
                    {description}
                  </Paragraph>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeBanner;
