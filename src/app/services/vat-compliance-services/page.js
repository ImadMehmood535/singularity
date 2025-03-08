import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";
import { VATCompliance } from "@/data/InnerServicePagesData";
import { VatComplianceFaq } from "@/data/SingleServiceData";
import React from "react";

export const metadata = {
  title: " VAT Compliance Services | Expert VAT Specialists",
  description:
    " Ensure full VAT compliance with our expert VAT services. Trusted VAT specialists for businesses of all sizes.",
  keyword: [
    "VAT compliance services",
    "VAT specialists",
    "VAT experts",
    "tax compliance services",
    "outsource accounting service",
  ],
};

const whyusdata =[
  {
    head : "Worldwide Visibility",
    para : "A reliable team of interdisciplinary consultants with vast experience and profound knowledge in the field will be the basis of our cooperation.",
  },
  {
    head : "Absolute Compliance",
    para : "Attain Your Maximum Potential with Unrivalled and Uniform Compliance Services.",
  },
  {
    head : "Ultimate Flexibility",
    para : "We offer precisely what your company wants and have high-quality products that exceed those needs.",
  },
  {
    head : "Exceptional Service Excellence",
    para : "Partnership – Building The Definitive Tool For Establishing and Sustaining Lasting, Cohesive, and Productive Business Associations for Collective Gains.",
  },
]
const Index = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: VAT Compliance Service"}
        title={"Vat Compliance Service"}
        content={
          "At Singularity, we work comprehensively and responsibly and realize how vital VAT compliance is in the EU, especially regarding cross-border contracts. These VAT specialists are designed to help your business run smoothly, particularly in terms of taxation and within the European Union standards. As a partner of ours, you get to take advantage of the best VAT compliance services that ensure the efficiency of your operations."
        }
        text={"Reach Us Out"}
        href={"#ReachUs"}
      />
      <InnerServiceFeature
        subtitle={"Mastering VAT Compliance"}
        title={"Tax and Accounting Services"}
        content={
          "This is a consolidated part of our extensive range of services, comprehending tax and other accounting services. Hence, using our profound tax management and accounting knowledge, we offer professional services in VAT solutions based on your requirements. Our VAT team takes over the VAT responsibility and manages it proactively, reducing risks and adapting VAT best practices to the specific EU market."
        }
        data={VATCompliance?.vat1}
      />
      <InnerServiceFeature
        subtitle={"VAT Compliance Service"}
        title={"E-Commerce Accounting Solutions"}
        content={
          "This approach engages our areas of specialization in dealing with the peculiarities of the e-commerce environment, which results in a simplified and effective VAT regime. Provide your financial requirements to our outsource accounting service team to ensure we take the load off your business."
        }
        flip={true}
        data={VATCompliance?.vat2}
      />
      <InnerServiceFeature
        subtitle={"VAT Compliance Service"}
        title={"VAT Obligations of an Expatriate Living in the EU"}
        content={
          "When it comes to VAT compliance in the EU, specifically for expatriates, it is prudent to seek the services of an expert. an expert or a specialized consultancy firm that provides professional advisory services for expats to meet the legal requirements of the EU VAT laws and optimize their strategies."
        }
        data={VATCompliance?.vat3}
      />

      <div className="relative z-50 ">
        <WhyUs whyusdata={whyusdata} onlyslider={false} />
      </div>
      <div id="ReachUs">
        <InnerFaq
          data={VatComplianceFaq}
          title={"Frequently Asked Questions"}
        />
      </div>
    </div>
  );
};

export default Index;
