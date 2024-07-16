import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";
import { taxconsulting } from "@/data/InnerServicePagesData";
import { VatComplianceFaq } from "@/data/SingleServiceData";

import React from "react";

const Index = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: Tax Consulting"}
        title={"Expert Tax Consulting Services"}
        content={
          "Navigating the complex world of taxation requires expert guidance and strategic planning. At Singularity GmbH, our personalized tax consulting services are designed to optimize your business's tax strategies, ensuring compliance and minimizing risk. With our extensive expertise, we offer tailored solutions that meet your specific needs."
        }
        text={"Learn More"}
        href={"/"}
      />
      <InnerServiceFeature
        subtitle={"Tailored Tax Planning for Your Business"}
        title={"Customized Tax Planning"}
        content={
          "Effective tax planning is essential for maximizing business efficiency and profitability. At Singularity GmbH, we provide customized tax planning strategies that align with your business goals. By understanding your unique circumstances, we develop tailored plans that offer significant tax-saving opportunities and long-term financial benefits."
        }
        data={taxconsulting.taxplanning}
      />
      <InnerServiceFeature
        subtitle={"Ensuring Compliance and Mitigating Risks"}
        title={"Compliance and Risk Management"}
        content={
          "In today’s regulatory environment, maintaining compliance is crucial to avoid penalties and protect your business's reputation. Singularity GmbH helps you stay compliant with all relevant tax laws and regulations while effectively managing potential risks."
        }
        flip={true}
        data={taxconsulting.riskmanagement}
      />
      <InnerServiceFeature
        subtitle={"Navigating International Tax Landscapes"}
        title={"International Tax Solutions"}
        content={
          "Handling international taxation requires specialized knowledge and strategies. Singularity GmbH offers expert international tax solutions to help you navigate complex global tax environments, ensuring compliance and optimizing your tax position."
        }
        data={taxconsulting.taxsolutions}
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
