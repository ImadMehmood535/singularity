import HomeBanner from "@/components/home/HomeBanner";
import ScrollHome from "@/components/home/ScrollHome";
import TrustedPartners from "@/components/home/TrustedPartners";
import VideoComponent from "@/components/home/VideoComponent";
import WhyUs from "@/components/home/WhyUs";

export const metadata = {
  title: "Tax & VAT Services | Business Consultants",
  description:
    "Professional tax, VAT, and business consultancy services. Ensure VAT ",
  keyword: [
    "tax and VAT services",
    "accounting and business consultants",
    "VAT consultant",
    "business consultants",
    "VAT inspection",
    " financial and tax advisor",
  ],
};

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
