import { Faq } from "@/components";
import { galleryPageData, homePageData } from "@/data/pagesData";
import { Banner, ImageSlider } from "./components";

export default function Home() {
  return (
    <main className="margin">
      <Banner {...galleryPageData.bannerData} />
      <ImageSlider items={galleryPageData.galleryData} />
      <Faq {...homePageData.faq} />
    </main>
  );
}
