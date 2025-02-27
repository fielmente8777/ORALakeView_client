import { Heading, Paragraph, SectionWithContainer } from "@/components";
import LazyLoadedMap from "@/components/Map/LazyLoadedMap";

const FindUsEasily = () => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col items-center justify-center gap-4 pb-8">
        <Heading
          level={2}
          className="text-center text-secondary capitalize font-montaga heading2"
        >
          Find us easily
        </Heading>
        <Paragraph className="text-center description1">
          Conveniently located by Lake Brienz with easy access to major travel
          hubs
        </Paragraph>
        <div className="relative lg:aspect-[4/2] rounded-sm overflow-hidden aspect-square mt-6 w-full">
          <LazyLoadedMap src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d79212.6902451619!2d7.847235480417626!3d46.71752542692801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x478fbd24b41ed00b%3A0xda0af664e3809ba5!2sLakeview%20Hotel%2C%20Hauptstrasse%2032%2C%203853%20Niederried%20bei%20Interlaken%2C%20Switzerland!3m2!1d46.717591999999996!2d7.9295421!5e1!3m2!1sen!2sin!4v1740411207417!5m2!1sen!2sin" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FindUsEasily;
