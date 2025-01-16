import { SectionWithContainer, Heading, Paragraph } from "@/components";
import Image from "next/image";
interface BannerProps {
  title: string;
  description: string;
  src: string;
}
const Banner: React.FC<BannerProps> = ({ title, description, src }) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary lg:py-20" >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col justify-center gap-4 max-w-xl w-full">
          <Heading
            level={1}
            className="text-[#FFCD42] max-md:!text-center capitalize font-montaga heading2 lg:max-w-xs w-full"
          >
            {title}
          </Heading>
          <Paragraph className="max-md:text-center description tracking-wider">
            {description}
          </Paragraph>
        </div>
        <div className="relative lg:aspect-[4/2] aspect-square w-full">
          <Image src={src} alt={title} className="object-contain" fill />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
