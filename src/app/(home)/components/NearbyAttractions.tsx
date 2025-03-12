"use client"
import {
  Container,
  Heading,
  NearByCard,
  Paragraph,
  Section,
  NearByCard2
} from "@/components";
import SliderSwip from "@/components/SliderSwip";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ButtonNext } from "@/icons/icons";

interface NearbyAttractionsProps {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    description: string;
    des: string;
  }[];
}

const NearbyAttractions: React.FC<NearbyAttractionsProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <Section className="lg:!pb-0 " >
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 lg:mb-16 mb-8">
          <Heading
            level={2}
            className="text-center text-[#FFCD42] capitalize font-montaga heading2 lg:px-20"
          >
            {title}
          </Heading>
          <Paragraph className="text-center !text-primary description1">
            {description}
          </Paragraph>
        </div>
      </Container>
      <div className="lg:flex hidden  justify-center items-center w-full">
        {images?.map((image, index) => <NearByCard {...image} key={index} />)}
      </div>
      {/* <div className="grid md:grid-cols-2 bg-red-900 grid-cols-1 max-width lg:hidden justify-center items-center  w-full gap-4">
        {images?.map((image, index) => <NearByCard2 {...image} key={index} />)}
      </div> */}


      <div className="lg:hidden w-full flex items-center justify-center gap-4 lg:max-width max-md:px-2">
        <button className="button-prev text-white lg:block hidden rotate-180 hover:scale-105 active:scale-95 disabled:text-tertiary">
          <ButtonNext />
        </button>
        <SliderSwip
          data={images}
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
              autoplay: false,
            },
          }}
          classNameSwiperSlide="w-full lg:min-h-[22.5rem] min-h-[26rem] bg-white rounded overflow-hidden"
        >
          {(item) => <NearByCard2 {...item} />}
        </SliderSwip>
        <button className="button-next text-white lg:block hidden hover:scale-105 active:scale-95 disabled:text-tertiary">
          <ButtonNext />
        </button>
      </div>
    </Section>
  );
};

export default NearbyAttractions;
