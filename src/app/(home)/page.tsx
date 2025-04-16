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
      <Connectivity {...homePageData.connectivity} />
      <div id="nearby" />
      <NearbyAttractions {...homePageData.nearbyattractions} />
      <DoAtHotel {...homePageData.DoAtHotel} />
      <GuestReviews {...homePageData.guestreviews} />
      <Faq {...homePageData.faq} />
    </main>
  );
}
