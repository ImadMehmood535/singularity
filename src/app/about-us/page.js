import AboutBanner from "@/components/about/AboutBanner";
import Aboutarea from "@/components/about/Aboutarea";
import Centercontent from "@/components/about/Centercontent";
import VatComponent from "@/components/about/VatComponent";
import IndividuallyFaq from "@/components/general/IndividuallyFaq"; 
import ContactForm from "@/components/home/ContactForm";

import React from "react";

export const metadata = {
  title: " About Singularity | Trusted Tax & VAT Experts",
  description:
    "Learn about Singularity, your trusted partner in tax, VAT, and business consultancy. Meet our team of experienced professionals.",
  keyword: [
    "Singularity about us",
    "VAT experts",
    "tax professionals",
    "business consultants",
    "VAT inspection",
    " VAT specialists",
  ],
};
const Index = () => {
  const faq = [
    {
      title: "What is Singularity GmbH?",
      content:
        "Singularity GmbH is an international affiliated company devoted to offering assistance with VAT issues for its partners across all European Union member states.",
    },
    {
      title: "For which countries does Singularity GmbH offer VAT assistance?",
      content:
        "Regarding taxes, Singularity offers tax compliance and registration in all countries in the European Union.",
    },
    {
      title: "Which type of VAT help is provided by Singularity GmbH?",
      content:
        "Our VAT services entail registration, compliance, reporting, and advisory to enable organizations to fulfill their VAT obligations efficiently through Singularity GmbH.",
    },
    {
      title: "For whom can Singularity GmbH be useful?",
      content:
        "Companies based in or planning to set up in EU customs and markets can leverage Singularity GmbH's focused VAT services to meet VAT standards and enhance VAT controls.",
    },
    {
      title: "Can we begin cooperation with Singularity GmbH's VAT services?",
      content:
        "First, you can make a request on the official website of Singularity GmbH or call and leave a message or email. We will then schedule a meeting where our experts will meet you, understand your VAT requirements, and discuss how we can help.",
    },
  ];

  return (
    <div className="text-center w-full  ">
      <AboutBanner subtitle="Our Story" title="About Us" />
      {/* <InnerBanner title={"About Us"} /> */}
      <Aboutarea />
      <VatComponent />
      <Centercontent />
      <div className="bg-gradient-to-b from-[#0F121D] to-[#275A4F] h-full !text-start">
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-10 items-start containerCust !py-[130px]">
          <div className=" w-full lg:w-[50%]">
            <ContactForm />
          </div>
          <div className=" w-full lg:w-[50%]">
            <IndividuallyFaq
              data={faq}
              title="Frequently Asked Questions"
              content="Here is a set of aims and objectives we believe only Singularity's team can deliver competently. Of course, when using Singularity's services, questions may appear concerning our services, ideas, and ways of improving the partner's success. If you do not find the answer to your question here, do not hesitate to contact us; we will be glad to help you!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
