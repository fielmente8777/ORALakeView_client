import { SectionWithContainer } from "@/components";
import { Paragraph } from "@/components/TextAndInputComponents";
import { bookingUrl } from "@/data/links";
import { MountainIcon } from "@/icons/icons";
import Link from "next/link";
import { BigArrowIcon } from '../../../icons/icons';

const WhoWeAre = () => {
  const description1 =
    "Wake up to the soft shimmer of Lake Brienz, where every glance out your window reveals nature at its finest.";
  const description2 = [
    "At ORA Lakeview Hotel, the breathtaking views of the Swiss Alps and pristine lake set the stage for unforgettable memories Perfectly located just 2 minutes from the train station, 1 minute from the bus stop, and 5 minutes from the ferry, we offer unmatched convenience to explore the wonders of the region. And with free parking and no extra fees, we’ve made sure your stay is as effortless as it is beautiful, And yes, we’re a pet-friendly hotel! Bring your four-legged friends along - they’ll love the view just as much as you do. Here, your story becomes our story.",
  ];

  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col items-center justify-center md:gap-10 gap-5">
        <div className="flex flex-col gap-1 justify-center">
          {/* <p className="text-white text-center">ORA LAKEVIEW HOTEL</p> */}
          <h2 className="text-secondary heading2 font-montaga  capitalize text-center">
            Who we are
          </h2>
        </div>
        <div className="w-full lg:grid grid-cols-3 flex items-center justify-center gap-4">
          <div className="w-full h-[1px] bg-white/50" />
          <span className="flex items-center justify-center max-md:w-[10rem]">
            <MountainIcon />
          </span>
          <div className="w-full h-[1px] bg-white/50" />
        </div>
        <h3 className="text-center text-white md:text-3xl text-xl  max-w-[1050px] mx-auto font-montaga">{description1}</h3>

        <div className="flex justify-center">
          <div className="w-[1px] md:h-[96px] h-[64px] bg-[#FFCD42] text-center" />
        </div>
        <div className="max-w-[1050px] mx-auto">
          {description2.map((item, index) => (
            <Paragraph
              key={index}
              className="text-white  text-center description tracking-wider mb-2"
            >
              {item}
            </Paragraph>
          ))}
        </div>
        <Link href={bookingUrl} className="flex md:text-lg text-sm items-center justify-center gap-2 mt-5 border-y py-3 text-white border-secondary uppercase hover:text-secondary hover:border-white transition-all ease-in-out px-px">Book directly with us <BigArrowIcon/></Link>
      </div>
    </SectionWithContainer>
  );
};

export default WhoWeAre;
