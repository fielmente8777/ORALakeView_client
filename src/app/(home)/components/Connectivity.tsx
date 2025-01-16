import { Heading, Paragraph, SectionWithContainer } from "@/components";
import { GetDirections } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";

interface IConnectivity {
  title: string;
  description: string;
  src: string;
  items: {
    icon: React.ReactNode;
    address: string;
    distance: string;
  }[];
}
const Connectivity: React.FC<IConnectivity> = ({
  title,
  description,
  src,
  items,
}) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col items-center justify-center gap-4 ">
        <Heading
          level={2}
          className="text-center text-quaternary capitalize font-montaga heading2"
        >
          {title}
        </Heading>
        <Paragraph className="text-center !text-primary description1">
          {description}
        </Paragraph>
        <div className="grid grid-cols-2 gap-4 w-full mt-8">
          <div className="flex flex-col gap-8">
            {items?.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="">{item.icon}</div>
                <div className="flex flex-col gap-3">
                  <Heading level={3} className="heading4">
                    {item.address}
                  </Heading>
                  <Paragraph className="description1 !text-primary">
                    {item.distance}
                  </Paragraph>
                </div>
              </div>
            ))}

            <Link
              href="/contact-us"
              className="text-primary font-normal capitalize mt-2 group hover:scale-x-105 transition-all duration-300 ease-in-out border-primary/60 border-b-2 w-fit description1 flex items-center gap-2"
            >
              Get directions{" "}
              <span className="group-hover:translate-x-1 text-[#333333] group-hover:-translate-y-1 group-hover:text-quaternary">
                <GetDirections />
              </span>
            </Link>
          </div>
          <div className="relative lg:aspect-[4/2.5] rounded-sm overflow-hidden aspect-square  w-full">
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Connectivity;
