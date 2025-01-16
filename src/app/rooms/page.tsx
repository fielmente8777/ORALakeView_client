import { Faq } from "@/components";
import TwoColGridCard from "@/components/TwoColGridCard";
import { homePageData, roomsPageData } from "@/data/pagesData";
import { Banner } from "./components";

export default function Home() {
  return (
    <main className="margin">
      <Banner {...roomsPageData.bannerData} />
      {roomsPageData.roomcard.map((room, index) => (
        <TwoColGridCard key={index} index={index} {...room} />
      ))}
      <Faq {...homePageData.faq} />
    </main>
  );
}
