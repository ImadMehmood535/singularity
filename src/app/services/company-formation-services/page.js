import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";

import { taxcompliance } from "@/data/InnerServicePagesData";
import { companyformationfaq } from "@/data/SingleServiceData";
 

import React from "react";

const Index = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: Company Formation Services"}
        title={"Company Formation Services"}
        content={
          "At Singularity, we excel in providing comprehensive and customised company formation services, guiding businesses to establish a strong foothold in the United Kingdom and EU."
        }
        text={"Learn More"}
        href={"/"}
      />
      <InnerServiceFeature
        subtitle={"Formation Services"}
        title={"Professional Experts and Consultants"}
        content={
          "With decades of collective knowledge, our team of professional experts and consultants at Singularity GmbH is dedicated to helping business owners to achieve their goals."
        }
        data={taxcompliance?.formationServices}
      />
      <InnerServiceFeature
        subtitle={"Formation Services"}
        title={"UK And Germany Company Formation Services"}
        content={
          "Our dedicated services encompass UK and German company formation, meticulously addressing each jurisdiction's legal and administrative requirements."
        }
        flip={true}
        data={taxcompliance?.formationServices2}
      />
      <InnerServiceFeature
        subtitle={"Formation Services"}
        title={"Germany Company Formation"}
        content={
          "Starting a company in Germany involves navigating a complex landscape of local laws, tax regulations, and administrative requirements. At Singularity, we offer bespoke services that guide you through every step of company formation in Germany."
        }
        data={taxcompliance.formationServices3}
      />

      <div className="relative z-50 ">
        <WhyUs onlyslider={false} />
      </div>
      <InnerFaq
        data={companyformationfaq}
        title="What is Lorem Ipsum?"
        content="rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
      />
       
    </div>
  );
};

export default Index;
