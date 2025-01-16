import { Form, Heading, Paragraph, SectionWithContainer } from "@/components";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  src: string;
  items: {
    title: string;
    address: string;
    icon: React.ReactNode;
    src: string;
  }[];
}

const ReachUs: React.FC<Props> = ({ title, description, items, src }) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col items-center justify-center gap-4  ">
        <Heading
          level={2}
          className="text-center text-quaternary capitalize font-montaga heading2"
        >
          {title}
        </Heading>
        <Paragraph className="text-center description1 !text-primary">
          {description}
        </Paragraph>
        <div className="lg:grid flex flex-col-reverse grid-cols-2 gap-12 w-full mt-8">
          <div className="flex flex-col gap-8">
            {items.map((item, index) => (
              <div key={index} className="flex  gap-3">
                <div className="text-quaternary">{item.icon}</div>
                <div className="flex flex-col gap-3">
                  <Heading level={3} className="heading4 text-primary">
                    {item.title}
                  </Heading>
                  <Link
                    href={item.src}
                    className="description1 max-w-[15rem] hover:text-[#FFCD42] transition-all duration-300 ease-in-out [text-decoration:whitch]  !text-[#848484]"
                  >
                    {item.address}
                  </Link>
                </div>
              </div>
            ))}
            <div className="relative aspect-[4/1.8] lg:-bottom-10 lg:-left-36 w-full">
              <Image
                src={src}
                alt={title}
                className="object-cover scale-x-[-1]"
                fill
              />
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ReachUs;
