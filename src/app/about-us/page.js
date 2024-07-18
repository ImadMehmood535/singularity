import AboutBanner from "@/components/about/AboutBanner";
import Aboutarea from "@/components/about/Aboutarea";
import Centercontent from "@/components/about/Centercontent";
import VatComponent from "@/components/about/VatComponent";

import IndividuallyFaq from "@/components/general/IndividuallyFaq";
import InnerBanner from "@/components/general/InnerBanner";
import ContactForm from "@/components/home/ContactForm";
 

import React from "react";

export const metadata = {
  title: "About Singularity Tax | Pioneering Tax Solutions for Tech Innovators",
  description:
    "Learn about Singularity Tax, the leading provider of specialized tax solutions for tech innovators. Discover our team of experts and our commitment to helping businesses in the technology industry thrive financially.",
};

const Index = () => {
  const faq = [
    {
      title:
        "What is Singularity GmbH?",
      content:
        "Singularity GmbH is an international organization that specializes in supporting its partners with their VAT needs in all EU countries.",
    },
    {
      title:
        "Which regions does Singularity GmbH provide VAT support for?",
      content:
        "Singularity GmbH provides VAT support for all EU customs, assisting businesses in navigating the complexities of VAT regulations.",
    },
    {
      title:
        "What type of VAT support does Singularity GmbH offer?",
      content:
        "Singularity GmbH offers comprehensive VAT support, including VAT registration, compliance, reporting, and advisory services to ensure that businesses meet their VAT obligations effectively.",
    },
    {
      title:
        "Who can benefit from Singularity GmbH's services?",
      content:
        "Businesses operating in or expanding to all of the EU customs, and markets can benefit from Singularity GmbH's specialized VAT services, ensuring compliance and optimizing their VAT processes.",
    },
    {
      title:
        "How can I get started with Singularity GmbH's VAT services?",
      content:
        "To get started, you can contact Singularity GmbH through their website or directly via phone or email. Our team will arrange an initial consultation to discuss your specific VAT needs and how we can assist you.",
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
              content="Welcome to Singularity's Frequently Asked Questions (FAQs) section! At Singularity, we understand that you may have questions about our innovative services, our unique approach, and how we can help your business excel. If your question isn't answered below, please don't hesitate to reach out to us directly , we're always here to assist you!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
