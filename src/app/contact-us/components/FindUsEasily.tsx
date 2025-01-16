import { Heading, Paragraph, SectionWithContainer } from "@/components";
import LazyLoadedMap from "@/components/Map/LazyLoadedMap";

const FindUsEasily = () => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col items-center justify-center gap-4 pb-8">
        <Heading
          level={2}
          className="text-center text-secondary capitalize font-montaga heading3"
        >
          Find us easily
        </Heading>
        <Paragraph className="text-center description1">
          Conveniently located by Lake Brienz with easy access to major travel
          hubs
        </Paragraph>
        <div className="relative lg:aspect-[4/2] rounded-sm overflow-hidden aspect-square mt-6 w-full">
          <LazyLoadedMap src="" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FindUsEasily;
