import { Faq, GuestReviews } from "@/components";
import { homePageData } from "../../data/pagesData";
import {
  Amenities,
  Connectivity,
  DoAtHotel,
  Gallery,
  HomeBanner,
  NearbyAttractions,
  RoomsSilder,
  WhoWeAre,
} from "./components";

export default function Home() {
  return (
    <main className="">
      <HomeBanner {...homePageData.bannerData} />
      <WhoWeAre />
      <Gallery {...homePageData.galleryData} />
      <RoomsSilder {...homePageData.roomsData} />
      <div id="amenities" />
      <Amenities {...homePageData.amenitiesData} />
      <div id="nearby" />
      <NearbyAttractions {...homePageData.nearbyattractions} />
      <DoAtHotel {...homePageData.DoAtHotel} />
      <div className="w-full h-[14rem] bg-white relative -top-[14rem]"></div>
      <GuestReviews {...homePageData.guestreviews} />
      <Connectivity {...homePageData.connectivity} />
      <Faq {...homePageData.faq} />
    </main>
  );
}
