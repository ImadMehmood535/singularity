import HomeBanner from "@/components/home/HomeBanner";
import ScrollHome from "@/components/home/ScrollHome";
import TrustedPartners from "@/components/home/TrustedPartners";
import VectorComponent from "@/components/home/VectorComponent";
import VideoComponent from "@/components/home/VideoComponent";
import WhyUs from "@/components/home/WhyUs";

 

export default function Home() {
  return (
    <>
      <HomeBanner />
      <TrustedPartners />
      <div className=" ">
        <ScrollHome />
      </div>
      <div className="relative z-50 ">
        <VideoComponent />
      </div>
      <div className="relative z-50 ">
        <WhyUs onlyslider={true} />
      </div>
    </>
  );
}
