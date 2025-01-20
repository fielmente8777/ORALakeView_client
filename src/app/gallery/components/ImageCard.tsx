import { Heading } from "@/components";
import Image from "next/image";
interface ImageCardProps {
  images: string[];
  title: string;
  handleModal: (image: string, images: string[]) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  images,
  title,
  handleModal,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 relative">
      <div className="w-full h-max flex gap-14 items-center justify-center">
        {images.map((image, index) => (
          <>
            <div
              key={index}
              className={`w-[15rem] aspect-[4/6.5] shadow-lg h-full overflow-hidden relative ${index === 0 ? "rotate-[-25deg]" : index === 1 ? "rotate-[0 deg] mb-[15rem]" : index === 2 ? "rotate-[25deg]" : ""}`}
              onClick={() => handleModal(image, images)}
            >
              <Image
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                fill
              />
            </div>
            {index < images.length - 1 && (
              <div className="w-2 h-2 aspect-square rounded-full bg-primary"></div>
            )}
          </>
        ))}
      </div>
      <Heading
        level={3}
        className="text-quaternary capitalize font-montaga heading3 w-[15rem] text-center absolute bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {title}
      </Heading>
    </div>
  );
};

export default ImageCard;
