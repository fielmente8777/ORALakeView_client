"use client";
import Image from "next/image";
import Section from "../../../components/SectionComponents/Section";
import Container from "../../../components/SectionComponents/Container";
import { Heading, Paragraph } from "../../../components/TextAndInputComponents";
import { Navigation } from "swiper/modules";
import SliderSwip from "@/components/SliderSwip";
import { navButtons } from "@/data/navData";
import { useEffect, useState } from "react";
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
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section className="!py-0">
      <div className="w-full relative lg:aspect-[4/1.9] aspect-[4/5.5]">
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
          classNameSwiperSlide="w-full h-full relative lg:aspect-[4/1.8] aspect-[4/5]"
        >
          {(item) => (
            <Image
              src={item}
              alt="banner"
              fill
              className="object-cover object-center"
            />
          )}
        </SliderSwip>
        <div className="absolute top-0 left-0 z-10 w-full h-full pb-4 bg-black/50">
          <div className="lg:mt-32 mt-20 h-4/5">
            <Container className="h-full">
              <div className="flex flex-col items-center justify-between w-full h-full">
                <div
                  className={`relative aspect-square h-[15rem] ${navbar ? "opacity-0" : "opacity-100"}`}
                >
                  <Image
                    src="/logosm1.png"
                    alt="ora lake view"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex lg:hidden items-center gap-4">
                  {navButtons.map((button) => (
                    <button
                      key={button.id}
                      className={`flex ${button.class} items-center text-white  gap-2 border transition-all duration-500 ease-in-out disabled:border-white disabled:border-opacity-100 border-opacity-0 border-transparent p-1`}
                    >
                      {button.icon}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                  <Heading
                    level={1}
                    className="heading2 font-montaga text-white capitalize"
                  >
                    {title}
                  </Heading>
                  <Paragraph className="description font-medium text-center capitalize">
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
