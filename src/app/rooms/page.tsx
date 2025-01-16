import { Faq, SectionWithContainer } from "@/components";
import TwoColGridCard from "@/components/TwoColGridCard";
import { homePageData, roomsPageData } from "@/data/pagesData";
import { Banner } from "./components";

export default function Home() {
  return (
    <main className="margin">
      <Banner {...roomsPageData.bannerData} />
      <SectionWithContainer>
        {roomsPageData.roomcard.map((room, index) => (
          <TwoColGridCard key={index} index={index} {...room} />
        ))}
      </SectionWithContainer>
      <Faq {...homePageData.faq} />
    </main>
  );
}
