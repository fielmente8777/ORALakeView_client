import { Heading, Paragraph, SectionWithContainer } from "@/components";
import Image from "next/image";

const OurHotel = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) => {
  return (
    <SectionWithContainer sectionClassName="!pb-0">
      <div className="flex flex-col items-center justify-center gap-4 max-w-3xl mx-auto">
        <Heading
          level={2}
          className="text-center text-secondary capitalize font-montaga heading3"
        >
          {title}
        </Heading>
        <Paragraph className="text-center description1 !text-primary">
          {description}
        </Paragraph>
        <div className="relative lg:aspect-[4/2] rounded-sm overflow-hidden aspect-square top-16 w-full">
          <Image src={src} alt={title} fill className="object-cover" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurHotel;
