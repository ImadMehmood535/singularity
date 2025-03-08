import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";
import {
  CustomsIndirectRepresentation,
  technologysolutions,
} from "@/data/InnerServicePagesData";
import { customsindirectfaq } from "@/data/SingleServiceData";
import React from "react";

export const metadata = {
  title: " Customs Indirect Representation | Expert VAT & Customs Services",
  description:
    "Expert customs indirect representation and VAT services. Ensure smooth customs clearance and VAT compliance with our professional team.",
  keyword: [
    "customs indirect representation",
    "indirect representation customs",
    "customs representative",
    "custom clearance UK",
    "European customs clearance",
    "VAT services",
  ],
};
const whyusdata = [
  {
    head: "Worldwide Visibility",
    para: "Specialized Global Consultants with Thorough Understanding and Sound Counseling.",
  },
  {
    head: "Absolute Compliance",
    para: "Unleash Your Potential Today and Boast of Uncompromised Compliance Services that Are Standardized.",
  },
  {
    head: "Ultimate Flexibility",
    para: "Solutions that are just right and even better to exceed the expectations of every business.",
  },
  {
    head: "Exceptional Service Excellence",
    para: "Steadfast partnerships, Sound and Proactive For Shared Victories.",
  },
];

const Index = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: Customs Indirect Representation Services"}
        title={
          <>
            Customs Indirect <br /> Representation Services
          </>
        }
        content={
          "Arranging customs clearances within the European Union territory can be challenging. To avail of our Customs Indirect Representation services, you can contact us as your reliable representative for European Union customs legislation enforcement. Since we act on your behalf, you can effectively manage the business as you want since it does not have to engage with customs directly."
        }
        text={"Reach Us Out"}
        href={"#ReachUs"}
      />
      <InnerServiceFeature
        subtitle={"Customs Indirect Representation "}
        title={"Indirect Customs Representative"}
        content={
          "Here, at Singularity, we specialize in indirect representation in customs. This means that we act as your representative in the framework of European Union customs. With our services, you can rely on our company's extensive expertise to take care of the customs formalities, allowing you to focus on your primary business in the European Union area."
        }
        data={CustomsIndirectRepresentation.customIndirect}
      />
      <InnerServiceFeature
        subtitle={"Customs Indirect Representation Services"}
        title={"Indirect Representation Procedures in the EU Customs System"}
        content={
          "Indirect Customs Representation services from Singularity are among the best foreign businesses that can be obtained when seeking entry into the European Union. The mature staff will understand EU customs laws and formalities in-depth to avoid many problems while clearing your goods."
        }
        flip={true}
        data={CustomsIndirectRepresentation.realtimereporting}
      />
      <InnerServiceFeature
        subtitle={"Customs Indirect Representation Services"}
        title={"Singularity for Risk-Free Compliant Customs Representation"}
        content={
          "Deciding to work with Singularity as your indirect customs representative gives you a dedicated team that focuses on compliance, risks, and errors."
        }
        data={CustomsIndirectRepresentation.integrationefficiency}
      />

      <div className="relative z-50 ">
        <WhyUs whyusdata={whyusdata} onlyslider={false} />
      </div>
      <div id="ReachUs">
        <InnerFaq
          title={"Frequently Asked Questions"}
          data={customsindirectfaq}
        />
      </div>
    </div>
  );
};

export default Index;
