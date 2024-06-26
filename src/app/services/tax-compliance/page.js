import WhyUs from "@/components/home/WhyUs";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";
import { taxcompliance } from "@/data/InnerServicePagesData";

import React from "react";

const Index = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: Tax Compliance"}
        title={"Comprehensive Tax Compliance Services"}
        content={
          "Tax compliance is critical to maintaining your business's reputation and avoiding penalties. At Singularity GmbH, we bring our extensive expertise to ensure your business meets all regulatory requirements with precision and accuracy."
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
    </div>
  );
};

export default Index;
