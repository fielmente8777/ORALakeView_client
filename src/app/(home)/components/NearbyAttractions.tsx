import {
  Container,
  Heading,
  NearByCard,
  Paragraph,
  Section,
  NearByCard2
} from "@/components";

interface NearbyAttractionsProps {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    description: string;
  }[];
}

const NearbyAttractions: React.FC<NearbyAttractionsProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <Section className="!pb-0">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 mb-16">
          <Heading
            level={2}
            className="text-center text-[#FFCD42] capitalize font-montaga heading2 px-20"
          >
            {title}
          </Heading>
          <Paragraph className="text-center !text-primary description1">
            {description}
          </Paragraph>
        </div>
      </Container>
      <div className="lg:flex hidden justify-center items-center w-full">
        {images?.map((image, index) => <NearByCard {...image} key={index} />)}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 max-width lg:hidden justify-center items-center  w-full gap-4">
        {images?.map((image, index) => <NearByCard2 {...image} key={index} />)}
      </div>
    </Section>
  );
};

export default NearbyAttractions;
