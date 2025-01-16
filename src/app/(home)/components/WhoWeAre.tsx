import { SectionWithContainer } from "@/components";
import { Heading, Paragraph } from "@/components/TextAndInputComponents";
import { MountainIcon } from "@/icons/icons";

const WhoWeAre = () => {
  const description = [
    "Welcome to Lakeview Hotel, your serene retreat in the picturesque Niederried bei Interlaken, just 7 km from the vibrant heart of Interlaken. Our hotel boasts breathtaking panoramic views of Lake Brienz and the majestic Swiss Alps, making it an ideal getaway for nature enthusiasts and travellers seeking tranquillity.",

    "At Lakeview Hotel, we prioritise your comfort with 24 elegantly designed rooms, each equipped with modern amenities such as flat-screen TVs, private balconies or terraces, and complimentary WiFi. Start your day with a sumptuous continental breakfast buffet, setting the stage for a day filled with exploration or relaxation.",

    "Our prime location offers convenient access to nearby attractions like the Jungfrau region and various outdoor activities, ensuring that you can make the most of your Swiss adventure. Whether you’re planning a romantic escape or a family vacation, Lakeview Hotel promises an unforgettable stay enriched by stunning views and exceptional service. Join us at Lakeview Hotel and experience the best of Switzerland’s natural beauty!",
  ];
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col items-center justify-center gap-14">
        <Heading
          level={2}
          className="text-center text-secondary capitalize font-montaga heading3"
        >
          Who We Are
        </Heading>
        <div className="w-full grid grid-cols-3 items-center justify-center gap-4">
          <div className="w-full h-1 bg-white" />
          <span className="flex items-center justify-center">
            <MountainIcon />
          </span>
          <div className="w-full h-1 bg-white" />
        </div>
        {description.map((item, index) => (
          <Paragraph
            key={index}
            className="text-white text-center description1"
          >
            {item}
          </Paragraph>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default WhoWeAre;
