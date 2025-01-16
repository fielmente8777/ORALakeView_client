import { contactPageData } from "@/data/pagesData";
import { Banner, ReachUs } from "./components";
import FindUsEasily from "./components/FindUsEasily";

export default function page() {
  return (
    <main className="margin">
      <Banner {...contactPageData.bannerData}/>
      <ReachUs {...contactPageData.reachUsDate}/>
      <FindUsEasily />
    </main>
  );
}
