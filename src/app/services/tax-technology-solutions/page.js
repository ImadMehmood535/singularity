import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";
import { technologysolutions } from "@/data/InnerServicePagesData";
import { VatComplianceFaq } from "@/data/SingleServiceData";

import React from "react";

const Index = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: Tax Technology Solutions"}
        title={"Innovative Tax Technology Solutions"}
        content={
          "In today's digital age, technology plays a vital role in efficient tax management. Singularity GmbH offers cutting-edge technology solutions to streamline your tax processes, enhance accuracy, and provide real-time insights."
        }
        text={"Learn More"}
        href={"/"}
      />
      <InnerServiceFeature
        subtitle={"Streamlining Tax Processes"}
        title={"Automation of Tax Workflows"}
        content={
          "Automating tax workflows reduces manual errors, saves time, and increases efficiency. Singularity GmbH implements automation solutions to streamline your tax processes and enhance overall productivity."
        }
        data={technologysolutions.taxprocesses}
      />
      <InnerServiceFeature
        subtitle={"Real-Time Insights for Better Decision Making"}
        title={"Real-Time Reporting and Analytics"}
        content={
          "Real-time reporting and analytics are crucial for making informed business decisions. Singularity GmbH provides advanced analytics solutions to give you immediate insights into your tax data."
        }
        flip={true}
        data={technologysolutions.realtimereporting}
      />
      <InnerServiceFeature
        subtitle={"Seamless Integration for Efficiency"}
        title={"Integration with Existing Systems"}
        content={
          "Integrating tax technology with your existing systems is essential for operational efficiency. Singularity GmbH ensures seamless integration to enhance functionality and performance."
        }
        data={technologysolutions.integrationefficiency}
      />

      <div className="relative z-50 ">
        <WhyUs onlyslider={false} />
      </div>
      {/* <InnerFaq
        data={VatComplianceFaq}
        title="What is Lorem Ipsum?"
        content="rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
      /> */}
    </div>
  );
};

export default Index;
