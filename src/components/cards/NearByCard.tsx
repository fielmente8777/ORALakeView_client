import Image from "next/image";
import { Heading } from "../TextAndInputComponents";

const NearByCard: React.FC<{
  src: string;
  alt: string;
  description: string;
}> = ({ src, alt, description }) => {
  return (
    <div className="w-full h-[20.25rem] lg:h-[31.25rem]  overflow-hidden group hover:lg:w-[250rem] transition-all ease-linear duration-300">
      <div className="group-hover:h-[77.5%] transition-all ease-linear duration-300 relative w-full h-full">
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

      <div className="w-full bg-white p-4 opacity-0 group-hover:opacity-100 translate-y-full z-[-1] group-hover:z-20 group-hover:-translate-y-0 duration-500">
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-sm  font-normal capitalize text-primary">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NearByCard;
