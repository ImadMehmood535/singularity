import HomeBanner from "@/components/home/HomeBanner";
import ScrollHome from "@/components/home/ScrollHome";
import TrustedPartners from "@/components/home/TrustedPartners";
import VideoComponent from "@/components/home/VideoComponent";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <TrustedPartners />
         <ScrollHome />
       <div className="relative z-50 ">
      <VideoComponent />

      </div>
    </>
  );
}
