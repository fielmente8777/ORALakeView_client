import Image from "next/image";
import { Heading, Paragraph } from "../TextAndInputComponents";

const NearByCard2: React.FC<{
  src: string;
  alt: string;
  description: string;
}> = ({ src, alt, description }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 shadow-sm">
      <div className="relative aspect-[4/3] w-full">
        <Image src={src} alt={alt} fill className="object-cover" />
        <div className="absolute top-0 h-full bg-gradient-to-t from-black/60 left-0 w-full z-20 flex flex-col items-center justify-end p-4">
          <Heading
            level={3}
            className="text-xl font-normal text-center capitalize font-p-d text-white"
          >
            {alt}
          </Heading>
        </div>
      </div>
      <div className="w-full bg-white py-4">
        <Paragraph className="description1 capitalize !text-primary">
          {description}
        </Paragraph>
      </div>
    </div>
  );
};

export default NearByCard2;
