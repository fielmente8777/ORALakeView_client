import { SectionWithContainer } from "@/components";
import { Paragraph } from "@/components/TextAndInputComponents";
import { MountainIcon } from "@/icons/icons";

const WhoWeAre = () => {
  const description = [
    "Imagine waking up to the soft shimmer of Lake Brienz, where every glance out your window reveals nature at its finest. At ORA Lakeview Hotel, the breathtaking views of the Swiss Alps and pristine lake set the stage for unforgettable memories",

    "Perfectly located just 2 minutes from the train station, 1 minute from the bus stop, and 5 minutes from the ferry, we offer unmatched convenience to explore the wonders of the region. And with free parking and no extra fees, we’ve made sure your stay is as effortless as it is beautiful",

    "And yes, we’re a pet-friendly hotel! Bring your four-legged friends along - they’ll love the view just as much as you do",

    "Here, your story becomes our story. Book directly with us and experience a seamless escape to nature's best-kept secret"
  ];
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col items-center justify-center lg:gap-14 ">

        <div className="flex flex-col gap-1 justify-center">
          <p className="text-white text-center">ORA LAKEVIEW HOTEL</p>
          <h1 className="text-secondary heading2 font-montaga  capitalize text-center">&quot;A View Like No Other&quot;</h1>
          <div className="flex justify-center">
            <div className="w-[1px] h-8 bg-white/50 text-center" />

          </div>
          <p className="text-center text-white">In the Heart of Switzerland</p>
        </div>
        <div className="w-full lg:grid grid-cols-3 flex items-center justify-center gap-4">
          <div className="w-full h-[1px] bg-white/50" />
          <span className="flex items-center justify-center max-md:w-[10rem]">
            <MountainIcon />
          </span>
          <div className="w-full h-[1px] bg-white/50" />
        </div>
        {description.map((item, index) => (
          <Paragraph
            key={index}
            className="text-white text-center description tracking-wider mb-2"
          >
            {item}
          </Paragraph>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default WhoWeAre;
