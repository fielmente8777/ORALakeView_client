import Image from "next/image";
import { Heading } from "../TextAndInputComponents";
interface HomeRoomCardProps {
  src: string;
  alt: string;
}
const HomeRoomCard: React.FC<HomeRoomCardProps> = ({ src, alt }) => {
  return (
    <div className="w-full relative lg:aspect-[4/2.8] aspect-square">
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
  );
};

export default HomeRoomCard;
