import Image from "next/image";
import { Heading, Paragraph } from "../TextAndInputComponents";

interface OurJourneyCardProps {
  title: string;
  description: string;
  src: string;
  year: string;
}
const OurJourneyCard: React.FC<OurJourneyCardProps> = ({
  title,
  description,
  src,
  year,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-primary">
      <div className="flex flex-col gap-4 max-w-md">
        <Heading
          level={4}
          className="text-white capitalize font-montaga lg:text-5xl text-2xl mb-8"
        >
          {year}
        </Heading>
        <Heading
          level={4}
          className="text-white capitalize font-montaga heading3"
        >
          {title}
        </Heading>
        <Paragraph className="des">{description}</Paragraph>
      </div>
      <div className="relative aspect-[4/2.5] w-full">
        <Image src={src} alt={title} className="object-cover" fill />
      </div>
    </div>
  );
};

export default OurJourneyCard;
