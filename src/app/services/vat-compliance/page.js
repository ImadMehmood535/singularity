import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";

import { taxcompliance } from "@/data/InnerServicePagesData";
import { VatComplianceFaq } from "@/data/SingleServiceData";

import React from "react";

const Index = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: VAT Compliance  "}
        title={"VAT Compliance  Services: Simplifying Your Tax Journey"}
        content={
          "At Singularity, we understand the critical role of VAT compliance within the European Union, particularly for businesses involved in cross-border transactions. Our VAT services are expertly crafted to support your business, ensuring seamless tax operations and adherence to EU regulations. By partnering with us, you gain access to comprehensive VAT compliance solutions that streamline your processes and keep your business running smoothly."
        }
        text={"Learn More"}
        href={"/"}
      />
      <InnerServiceFeature
        subtitle={"Precision in Tax Filings"}
        title={"Accurate and Timely Filings"}
        content={
          "Accurate and timely tax filings are essential to avoid penalties and maintain compliance. Singularity GmbH ensures precision through meticulous processes and advanced technology, so your filings are always accurate and on time."
        }
        data={taxcompliance.taxfilings}
      />
      <InnerServiceFeature
        subtitle={"Expert Audit Support"}
        title={"Audit Support and Representation"}
        content={
          "Audit support is a crucial aspect of tax compliance, providing you with the necessary expertise to navigate audits smoothly. Singularity GmbH offers comprehensive audit support services to minimize disruptions and ensure compliance."
        }
        flip={true}
        data={taxcompliance.auditsupport}
      />
      <InnerServiceFeature
        subtitle={"Navigating Multi-Jurisdictional Compliance"}
        title={"Multi-Jurisdictional Compliance"}
        content={
          "Managing tax compliance across multiple jurisdictions is complex and challenging. Singularity GmbH provides solutions to navigate these complexities, ensuring compliance in all relevant jurisdictions."
        }
        data={taxcompliance.jurisdictionalcompliance}
      />

      <div className="relative z-50 ">
        <WhyUs onlyslider={false} />
      </div>

      <InnerFaq
        data={VatComplianceFaq}
        title="What is Lorem Ipsum?"
        content="rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
      />
    </div>
  );
};

export default Index;
