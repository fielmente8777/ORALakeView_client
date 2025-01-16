import { SectionWithContainer, Heading, Paragraph } from "@/components";
import Image from "next/image";

interface BannerProps {
  title: string;
  description: string;
  src: string;
}
const Banner: React.FC<BannerProps> = ({ title, description, src }) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary lg:py-20">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
        <div className="flex lg:col-span-3 flex-col justify-center gap-4 max-w-3xl w-full">
          <Heading
            level={1}
            className="text-[#FFCD42] capitalize font-montaga lg:text-5xl/snug heading2 max-md:text-center tracking-wider"
          >
            {title}
          </Heading>
          <Paragraph className="description max-md:text-center">{description}</Paragraph>
        </div>
        <div className="relative lg:aspect-[4/3.5] aspect-square w-full">
          <Image src={src} alt={title} className="object-cover" fill />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
