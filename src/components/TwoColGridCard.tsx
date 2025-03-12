import { StaticImageData } from "next/image";
import Section from "./SectionComponents/Section";
import Button from "./Button";
import { Heading, Paragraph } from "./TextAndInputComponents";
import { ThumbsCardsSlider } from "./cards";

interface TwoColGridCardProps {
  title: string;
  description?: string;
  price: string;
  list?: string[];
  images: {
    src: string | StaticImageData;
    alt: string;
  }[];
  index?: number;
  arrImages?: string[];
}
const TwoColGridCard: React.FC<TwoColGridCardProps> = ({
  title,
  description,
  list,
  price,
  images,
  index = 0,
}) => {
  return (
    <Section>
      <div
        className={` lg:grid grid-cols-2 gap-4 lg:max-width  mx-auto ${index % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse"}`}
      >
        <div
          className={`col-span-1 mb-5 w-full h-full ${index % 2 === 0 ? "order-1 max-md:mt-4" : "order-2 max-md:mb-4"}`}
        >
          <ThumbsCardsSlider images={images} index={index} />
        </div>
        <div
          className={` flex flex-col  lg:gap-12 gap-5 col-span-1 md:max-width  ${index % 2 === 0 ? "order-2" : "order-1"}`}
        >
          <div className="flex flex-col gap-5">
            {title && (
              <Heading
                level={3}
                className="text-primary capitalize font-montaga heading3 max-md:w-[15rem] w-[21rem]"
              >
                {title}
              </Heading>
            )}

            {description && (
              <Paragraph className="description1 !text-primary">
                {description}
              </Paragraph>
            )}

            <Paragraph className="description1 !text-primary">
              <span className="sr-only">room price</span>
              {price}
            </Paragraph>

            <Button
              href="https://direct-book.com/properties/lakeviewhotelrestaurant?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=CHF&checkInDate=2025-01-31&checkOutDate=2025-02-01&trackPage=yes"
              label="CHECK AVAILABILITY"
              className="mt-2 w-fit bg-quaternary hover:bg-quaternary/80"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ul className="text-gray-600 list-disc pl-6 flex flex-col gap-2">
              {list
                ?.slice(0, 3)
                .map((item, index) => (
                  <li
                    key={index}
                    className="description1 capitalize text-textdark"
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></li>
                ))}
            </ul>
            <ul className="text-gray-600 list-disc pl-6 flex flex-col gap-2">
              {list
                ?.slice(3, list.length)
                .map((item, index) => (
                  <li
                    key={index}
                    className="description1 capitalize text-textdark"
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TwoColGridCard;
