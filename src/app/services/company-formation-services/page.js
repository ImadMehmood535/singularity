import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";
import { companyformation, taxcompliance } from "@/data/InnerServicePagesData";
import { companyformationfaq } from "@/data/SingleServiceData";
import React from "react";

export const metadata = {
  title: " Company Formation Services | Setup in UK & Germany",
  description:
    "Professional company formation services in the UK and Germany. Simplify your business setup with our expert guidance.",
  keyword: [
    "company formation services",
    "company setup in UK",
    "register company in Germany",
    "company formation UK",
    "VAT services",
  ],
};
const whyusdata =[
  {
    head : "Worldwide Visibility",
    para : "Availing Expert International Consultants with Subject Specific Knowledge and Credible Information.",
  },
  {
    head : "Absolute Compliance",
    para : "Go Further Faster with Unparalleled and Predictable Compliance Solutions.",
  },
  {
    head : "Ultimate Flexibility",
    para : "Professional and Business Solutions to Fulfill and Surpass All the Expectations of Any Enterprise.",
  },
  {
    head : "Exceptional Service Excellence",
    para : "The foundation for the accomplishment of Strong, Rreliable, and Comitted Relationship will be based on strong, reliable, and committed partnerships that foster mutual success.",
  },
]

const Index = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: Company Formation Services"}
        title={"Company Formation Services"}
        content={
          "Company formation is one of the core services offered by Singularity, which specializes in providing integrated and specialized services for forming a new company and helping companies lay down a proper foundation in the UK and EU."
        }
        text={"Reach Us Out"}
        href={"#ReachUs"}
      />
      <InnerServiceFeature
        subtitle={"Formation Services"}
        title={"Professional Experts and Consultants"}
        content={
          "This is what our professional staff of experienced consultants at Singularity GmbH, with over thirty years of practical expertise, collectively offers business owners to register company in germany."
        }
        data={companyformation?.formationServices}
      />
      <InnerServiceFeature
        subtitle={"Formation Services"}
        title={"UK And EU Company Formation Services"}
        content={
          "Our specialized services include UK and German incorporations, for which we pay meticulous attention to both places’ legal and bureaucratic peculiarities."
        }
        flip={true}
        data={companyformation?.formationServices2}
      />
      <InnerServiceFeature
        subtitle={"Formation Services"}
        title={"EU Company Formation"}
        content={
          "When launching a company in EU, German laws, taxes, and bureaucratic procedures are significant issues. As a client of Singularity, you receive individualized services that help you with each phase of company formation in EU."
        }
        data={companyformation.formationServices3}
      />

      <div className="relative z-50 ">
        <WhyUs whyusdata={whyusdata} onlyslider={false} />
      </div>
      <div id="ReachUs">
        <InnerFaq
        title={"Frequently Asked Questions"}
          data={companyformationfaq}
          
        />
      </div>
    </div>
  );
};

export default Index;
