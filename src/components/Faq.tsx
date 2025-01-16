import { FaqProps } from "@/@types/types";
import Accordion from "./Accordion";
import SectionWithContainer from "./SectionComponents/SectionWithContainer";
import { Paragraph, Heading } from "./TextAndInputComponents";

const Faq: React.FC<FaqProps> = ({ title, description, item }) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Heading
          level={2}
          className="text-center text-secondary uppercase heading3"
        >
          {title}
        </Heading>
        <Paragraph className="text-center capitalize description1">
          {description}
        </Paragraph>
        {item.map((item) => (
          <Accordion
            key={item.id}
            title={item.title}
            content={item.content}
            id={item.id}
          />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Faq;
