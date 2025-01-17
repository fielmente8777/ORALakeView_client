import { SectionWithContainer, Heading, Paragraph } from "@/components";
import Image from "next/image";

interface BannerProps {
  title: string;
  description: string;
  src: string;
}
const Banner: React.FC<BannerProps> = ({ title, description, src }) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary lg:py-20 py-16">
      <div className="grid lg:grid-cols-4 grid-cols-1 max-md:gap-4">
        <div className="flex lg:col-span-3 flex-col  gap-4  w-full">
          <Heading
            level={1}
            className="text-[#FFCD42] capitalize font-montaga lg:text-5xl/snug text-2xl max-md:text-center tracking-widest lg:pe-16"
          >
            {title}
          </Heading>
          <Paragraph className="description max-md:text-center max-w-3xl">{description}</Paragraph>
        </div>
        <div className="relative lg:aspect-[4/3.5] lg:top-16 max-md:left-4 col-span-1 aspect-square">
          <Image src={src} alt={title} className="object-cover z-10 lg:!top-12 !top-10" fill />
          <div className="absolute top-0 right-0 w-4/5 h-full bg-white "></div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
