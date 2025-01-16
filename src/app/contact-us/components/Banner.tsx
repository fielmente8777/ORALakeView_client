import { Button, Heading, Paragraph, SectionWithContainer } from "@/components";

interface BannerProps {
  title: string;
  description: string;
  link: { href: string; label: string }[];
}
const Banner: React.FC<BannerProps> = ({ title, description, link }) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary py-[4rem]">
      <div className="flex flex-col items-center justify-center gap-6 lg:max-w-xl w-full mx-auto">
        <Heading
          className="text-center text-[#FFCD42] capitalize font-montaga heading2 lg:px-20"
        >
          {title}
        </Heading>
        <Paragraph className="text-center description1">
          {description}
        </Paragraph>
        <div className="grid grid-cols-2 items-center justify-center gap-4 mt=8">
          <Button
            href={link[0].href}
            label={link[0].label}
            className="capitalize border-quaternary bg-quaternary 
           border py-3 px-6"
          />
          <Button
            href={link[1].href}
            label={link[1].label}
            className="capitalize border-quaternary hover:bg-quaternary 
           border py-3 px-6"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
