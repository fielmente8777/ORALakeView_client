import { Faq } from "@/components";
import { galleryPageData, homePageData } from "@/data/pagesData";
import { Banner } from "./components";

export default function Home() {
  return (
    <main className="margin">
      <Banner {...galleryPageData.bannerData} />
      <Faq {...homePageData.faq} />
    </main>
  );
}
