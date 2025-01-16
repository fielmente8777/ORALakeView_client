import {
  Heading,
  Paragraph,
  SectionWithContainer,
  Videocard,
} from "@/components";

const Banner = ({
  title,
  description,
  src,
  videoSrc
}: {
  title: string;
  description: string;
  src: string;
  videoSrc: string;
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto">
        <Heading className="text-center text-[#FFCD42] capitalize font-montaga heading2">
          {title}
        </Heading>
        <Paragraph className="text-center description1">
          {description}
        </Paragraph>
      </div>
      <div className="mt-8">
        <Videocard src={videoSrc} label={title} thumbnail={src} href="" />
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
