import { informationBanner } from "@/assets";
import InformationBanner from "@/components/Information/InformationBanner";
import Faq from "@/components/amazon/Faq";
import Intro from "@/components/amazon/Intro";
import Resources from "@/components/amazon/Resources";
import SalesFeature from "@/components/amazon/SalesFeature";
import VideoComponent from "@/components/home/VideoComponent";
import {
  SalesFeatureData,
  faqData,
  resourcesData,
} from "@/data/AmazomPageData";
import React from "react";

export const metadata = {
  title: "Amazon VAT Service | Hassle-Free VAT Compliance",
  description:
    "Hassle-free VAT compliance for Amazon sellers. Ensure smooth VAT registration and management with our expert services.",
  keyword: [
    "Amazon VAT service",
    "VAT registration Amazon",
    "VAT services on Amazon",
    "Amazon UK tax",
    "VAT compliance",
  ],
};

const Index = () => {
  return (
    <div className="amazon-with-singularity  w-full">
      <InformationBanner
        bannerimage={informationBanner}
        subtitle={"VAT Services on Amazon with Singularity"}
        title={"Simplifying Amazon Sales Tax Compliance for Sellers"}
        btntext="Get Started With Our Free Consultation"
        btnlink="/contact-us"
        bannerbtn={true}
      />
      <Intro
        subtitle={"Explore"}
        title={"Introduction"}
        content="Managing VAT compliance can be a daunting task, but Amazon VAT Service simplifies the process for you. Singularity is proud to partner with Amazon VAT Service, offering comprehensive VAT compliance solutions. We handle your European VAT registration and filing obligations, covering the UK, France, Italy, Spain, Poland, and the Czech Republic."
      />
      <SalesFeature data={SalesFeatureData} />
      <Resources
        subtitle={"Resources"}
        title={"Helpful Resources"}
        data={resourcesData}
      />
      <Faq
        subtitle={"FAQ"}
        title={"Frequently Asked Questions"}
        data={faqData}
      />
      <div className="relative z-50 ">
        <VideoComponent />
      </div>
    </div>
  );
};

export default Index;
