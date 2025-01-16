import { aboutPageData } from "@/data/pagesData";
import { Banner, OurHotel, OurJourney } from "./components";

export default function Home() {
  return (
    <main className="margin">
      <Banner {...aboutPageData.bannerData} />
      <OurHotel {...aboutPageData.section2} />
      <OurJourney {...aboutPageData.ourJourney} />
    </main>
  );
}
