import Image from "next/image";
import Section from "../SectionComponents/Section";

const HomeBanner = () => {
  return (
    <Section className="!pt-0">
      <div className="w-full relative aspect-[4/2.5]">
        <Image
          src="/homeBanner1.jpg"
          alt="banner"
          fill
          className="object-cover"
        />
      </div>
    </Section>
  );
};

export default HomeBanner;
