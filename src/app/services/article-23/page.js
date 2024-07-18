import React from "react";
import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";
import { article23, taxcompliance } from "@/data/InnerServicePagesData";
 

const page = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: Article 23"}
        title={"Article 23 Services"}
        content={
          "At Singularity, we offer specialised Article 23 services, positioning ourselves as leading article 23 providers in the UK and Germany. Our services are designed to help businesses leverage the benefits of the Article 23 mechanism, optimising VAT management and enhancing cash flow efficiency."
        }
        text={"Learn More"}
        href={"/"}
      />
      <InnerServiceFeature
        subtitle={"Article 23"}
        title={"Trusted VAT Compliance Partner"}
        content={
          "Trust Singularity for your Article 23 services and experience the benefits of working with seasoned professionals dedicated to your business's success in VAT management and compliance"
        }
        data={article23?.trustedvat}
      />
      <InnerServiceFeature
        subtitle={"Article 23"}
        title={"VAT Deferment Across the EU, UK, and Germany"}
        content={
          "Article 23 mechanism is specifically a Dutch system, similar VAT deferment schemes exist in other EU countries, including the UK and Germany."
        }
        flip={true}
        data={article23?.defermentacross}
      />
      <InnerServiceFeature
        subtitle={"Article 23"}
        title={"Article 23 Benefits"}
        content={
          "By partnering with Singularity, you gain access to expert VAT guidance, improved cash flow management, and dedicated support, allowing you to focus on growing your business."
        }
        data={article23?.benefits}
      />
      <div className="relative z-50 ">
        <WhyUs onlyslider={false} />
      </div>
 
    </div>
  );
};

export default page;
