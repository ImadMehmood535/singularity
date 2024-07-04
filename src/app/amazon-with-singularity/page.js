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

const Index = () => {
  return (
    <div className="amazon-with-singularity  w-full">
      <InformationBanner
        bannerimage={informationBanner}
        subtitle={"VAT Services on Amazon with Singularity"}
        title={"Simplifying Amazon Sales Tax Compliance for Sellers"}
        btntext="Get Started With Our Free Consultation"
        btnlink="/conact-us"
        bannerbtn={true}
      />
      <Intro
        subtitle={"Explore"}
        title={"Introduction"}
        content="Understanding sales tax obligations is crucial for Amazon sellers. Sales tax regulations can be complex and vary by state, making compliance challenging. Staying informed and compliant can save you from costly penalties and ensure your business runs smoothly."
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
