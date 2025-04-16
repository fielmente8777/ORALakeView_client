// import { Heading } from "../TextAndInputComponents";
import { Paragraph } from "@/components";

const GuestReviewCard = ({
  // title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center gap-6 p-5">
      {/* <Heading
        level={2}
        className="text-center text-primary capitalize font-montaga heading4"
      >
        {title}
      </Heading> */}
      <Paragraph className="text-center description1 !text-primary">{description}</Paragraph>
      <div>⭐⭐⭐⭐⭐️</div>
    </div>
  );
};

export default GuestReviewCard;
