import {
  Heading,
  Paragraph,
  SectionWithContainer,
  Videocard,
} from "@/components";

const Banner = ({
  title,
  description,
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
        <Videocard src={videoSrc} label={title} 
        // thumbnail={"https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Designer.webp"} 
        href="" />
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
