// import Image from "next/image";
import { Section, Container } from "../SectionComponents";
import { Heading } from "../TextAndInputComponents";

const GreetingCard = () => {
  
  return (
    <Section className="!pb-0">
      {/* <Image src="/bgimage.png" alt="Greeting" className="object-contain" fill /> */}
      <div className="h-[14rem] pt-5 bg-no-repeat bg-cover bg-center bg-[url('https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/home/Group.webp')]">
        <Container className="">
          <Heading
            level={2}
            className="text-center text-quaternary capitalize font-montaga heading3"
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
