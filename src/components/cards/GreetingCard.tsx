// import Image from "next/image";
import { Section, Container } from "../SectionComponents";
import { Heading } from "../TextAndInputComponents";

const GreetingCard = () => {

  return (
    <Section className="!pb-0">
      {/* <Image src="/bgimage.png" alt="Greeting" className="object-contain" fill /> */}
      <div className="lg:h-[14rem] flex justify-center items-center h-28 lg:pt-5 bg-no-repeat bg-cover bg-center lg:bg-[url('https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/home/Group.webp')] bg-[url('https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/home/bgimage.webp')]">
        <Container className="">
          <Heading
            level={2}
            className="text-center text-quaternary capitalize heading3"
          >
            &quot;The lake and the mountains have become my landscape, my real
            world.&quot;
            <br />— Georges Simenon
          </Heading>
        </Container>
      </div>
    </Section>
  );
};

export default GreetingCard;
