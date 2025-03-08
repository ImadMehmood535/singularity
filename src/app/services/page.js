import IndividuallyFaq from "@/components/general/IndividuallyFaq";
import ContactForm from "@/components/home/ContactForm";
import Ticker from "@/components/home/Ticker";
import VideoComponent from "@/components/home/VideoComponent";
import WhyUs from "@/components/home/WhyUs";
import Explore from "@/components/services/Explore";
import ServiceBanner from "@/components/services/ServiceBanner";
import ServiceCategory from "@/components/services/ServiceCategory";
import { TaxConsultingData } from "@/data/TaxConsultingData";
import React from "react";

export const metadata = {
  title: " Our Services | VAT Compliance & Business Solutions",
  description:
    " Explore our comprehensive services including VAT compliance, company formation, customs representation, and more. Expertise in VAT and business solutions.",
  keyword: [
    "VAT compliance services",
    " company formation services",
    "customs representation",
    "business solutions",
    "VAT services",
  ],
};

const Index = () => {
  const faq = [
    {
      title: "What kinds of VAT assistance does Singularity GmbH provide?",
      content:
        "Therefore, businesses in need of VAT support can find it all in Singularity GmbH, such as VAT registration, compliance, reporting, and VAT consultancy, to ensure that they meet their VAT responsibilities efficiently.",
    },
    {
      title: "To whom is Singularity GmbH useful?",
      content:
        "Organizations that trade in or plan to trade across any of the EU customs or markets can use Singularity GmbH's services for Specialised VAT compliance and necessary VAT optimization.",
    },
    {
      title: "What steps should I take to use the services of Singularity GmbH to report the VAT?",
      content:
        "As for the initial communication, it is possible to use the company’s website or phone/email addresses provided by the firm. We shall schedule an introductory meeting where the clients’ particular VAT requirements will be assessed and how our team can help them resolve them.",
    },
    {
      title: "What is Singularity GmbH?",
      content:
        "Singularity GmbH is an international organization supporting its partners with VAT needs in all EU countries.",
    },
    {
      title: "In which regions do Singularity GmbH provide VAT support?",
      content:
        "Singularity provides tax compliance and registration support to all EU countries.",
    },
  ];
  return (
    <div className="secvices w-full  ">
      <ServiceBanner
        title={"Tax services of Singularity GmbH"}
        subtitle={"Services"}
        content={
          "The complete list of tax services for your business can be found on Singularity GmbH’s official website. Our experts stand with you to provide you with custom solutions. This is how we can assist you: Learn more about our services today."
        }
        text={"Reach Us Out"}
        href={"/contact-us"}
      />
      <div className="bg-[#0F121D]">
        <Ticker />
      </div>
      <Explore
        subtitle={"Explore"}
        title={"Comprehensive Tax Services"}
        content={
          "Regarding taxation issues, Singularity GmbH is always ready to become your reliable business companion. Given our experience in helping people find the best tax solutions, we pride ourselves on delivering the best solutions for your business. Discover the main solutions developed by our company to improve the tax planning and compliance processes and use advanced technologies."
        }
      />
      <ServiceCategory
        title={"Expert VAT Compliance"}
        content={
          "At Singularity, we fully appreciate the significance of VAT and its significance in countries within the EU, especially organizations that carry out overseas transactions. Rely on us to make your VAT, VAT registration, and Filings simple to enable you to navigate the European market."
        }
        text={"Learn More"}
        href={"services/vat-compliance-services"}
        data={TaxConsultingData.vatcompliance}
      />

      <ServiceCategory
        title={"Company Formation Services"}
        content={
          "Singularity offers professional company formation services to assist you in forming your business in the EU. This guarantees an institutionalized process that effectively addresses all markets’ outlines and spheres of activity. Take your first steps to your enterprise with us."
        }
        text={"Learn More"}
        href={"services/company-formation-services"}
        data={TaxConsultingData.taxcompliance}
      />
      <ServiceCategory
        title={"Customs Indirect Representation"}
        content={
          "When dealing with imports of products in the European Union or exporting products to it, it is basic to maneuver through customs clearance, and this is where our Customs Indirect Representation services benefit you. To our clients, we are your one-stop-shop and SP-Checkpoint when it comes to issues of customs in the European Union for the best compliance and your business."
        }
        text={"Learn More"}
        href={"services/customs-indirect-representation-services"}
        data={TaxConsultingData.technologysolutions}
      />
      <ServiceCategory
        title={"Article 23"}
        content={
          "Specialized Article 23 services form the basis of our service provision strategy at Singularity while advocating for our firm to become one of the best Article 23 firms in the UK and EU. The provided services aim to assist various enterprises in properly using the possibilities of the Article 23 mechanism and improving control over VAT and cash flow."
        }
        text={"Learn More"}
        href={"services/article-23"}
        data={TaxConsultingData.article23}
      />
      <div className="relative z-50 ">
        <VideoComponent />
      </div>

      <div className="bg-gradient-to-b from-[#0F121D] to-[#275A4F] h-full !text-start">
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-10 items-start containerCust !py-[130px]">
          <div className=" w-full lg:w-[50%]">
            <ContactForm />
          </div>
          <div className=" w-full lg:w-[50%]">
            <IndividuallyFaq
              data={faq}
              title="Frequently Asked Questions"
              content="This is Singularity’s Frequently Asked Questions (FAQs) session! At Singularity, we recognize that you may have some questions about what we offer in terms of services and solutions, the new generation approaches, and how it will be possible for your business to augur higher. If you do not find the answer to your question below, contact us anytime; we will be glad to help you."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
