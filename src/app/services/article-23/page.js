import React from "react";
import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";
import { article23 } from "@/data/InnerServicePagesData";
import { article23faq } from "@/data/SingleServiceData";

export const metadata = {
  title: "Article 23 VAT Services | Simplified Tax Solutions",
  description:
    "Simplify your VAT processes with our Article 23 VAT services. Expert solutions for efficient VAT management.",
  keyword: [
    "Article 23 providers",
    "VAT services",
    "VAT registration",
    "VAT management",
  ],
};

const whyusdata =[
  {
    head : "Worldwide Visibility",
    para : "We offer Professional international consultants who have extensive knowledge and provide credible advice.",
  },
  {
    head : "Absolute Compliance",
    para : "Unique and Uniform Quality Compliance Services for Maximum Efficiency in Your Organization.",
  },
  {
    head : "Ultimate Flexibility",
    para : "The Solutions that fit to meet and exceed the unique needs of any business.",
  },
  {
    head : "Exceptional Service Excellence",
    para : "Strategic alliances are powered by strength, reliability, and commitment to the success of every business.",
  },
]

const page = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: Article 23"}
        title={"Article 23 Services"}
        content={
          "At Singularity, specialized Article 23 services are provided, and the company parades itself as one of the best Article 23 service providers in the UK and Germany. The intended services support organizations in utilizing the advantages of the Article 23 mechanism, with the purpose of improving the efficiency of VAT control and the company's cash flow."
        }
        text={"Reach Us Out"}
        href={"#ReachUs"}
      />
      <InnerServiceFeature
        subtitle={"Article 23"}
        title={"Trusted VAT Compliance Partner"}
        content={
          "Get your Article 23 services from a reliable firm like Singularity and reach out to experienced experts whose goal is to help your business succeed in the boardroom and the area of VAT compliance."
        }
        data={article23?.trustedvat}
      />
      <InnerServiceFeature
        subtitle={"Article 23"}
        title={"VAT Deferment Across the EU, UK, and Germany"}
        content={
          "Although the Article 23 mechanism is specifically a Dutch system, similar VAT deferment schemes exist in other member states of the EU, such as the United Kingdom and Germany."
        }
        flip={true}
        data={article23?.defermentacross}
      />
      <InnerServiceFeature
        subtitle={"Article 23"}
        title={"Article 23 Benefits"}
        content={
          "Cooperating with Singularity, you receive qualified VAT consulting, better control over your cash flow, and professional assistance so that you can concentrate on developing your business."
        }
        data={article23?.benefits}
      />
      <div className="relative z-50 ">
        <WhyUs whyusdata={whyusdata}  onlyslider={false} />
      </div>
      <div id="ReachUs">
        <InnerFaq title={"Frequently Asked Questions"} data={article23faq} />
      </div>
    </div>
  );
};

export default page;
