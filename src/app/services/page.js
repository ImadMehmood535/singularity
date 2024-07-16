import Ticker from "@/components/home/Ticker";
import VideoComponent from "@/components/home/VideoComponent";
import WhyUs from "@/components/home/WhyUs";
import Explore from "@/components/services/Explore";
import ServiceBanner from "@/components/services/ServiceBanner";
import ServiceCategory from "@/components/services/ServiceCategory";
import { TaxConsultingData } from "@/data/TaxConsultingData";
import React from "react";

const Index = () => {
  return (
    <div className="secvices w-full  ">
      <ServiceBanner
        title={"Comprehensive Tax Services by Singularity GmbH"}
        subtitle={"Services"}
        content={
          "Explore Singularity GmbH's wide range of tax services designed to meet your business needs. Our experts are ready to assist you with personalized solutions. Learn more about our services today."
        }
        text={"Learn More"}
        href={"/"}
      />
      <div className="bg-[#0F121D]">
        <Ticker />
      </div>
      <Explore
        subtitle={"Explore"}
        title={"Comprehensive Tax Services"}
        content={
          "Welcome to Singularity GmbH, your trusted partner in navigating the complexities of taxation. With a rich history of providing tailored tax solutions, we specialize in delivering exceptional service to meet your specific business needs. Explore our primary services designed to optimize tax strategies, ensure compliance, and leverage cutting-edge technology."
        }
      />
      <ServiceCategory
        title={"VAT Compliance"}
        content={
          "Singularity GmbH offers top-tier tax consulting services to help you optimize your tax strategies. Our expertise ensures that your business benefits from tailored advice and strategic planning."
        }
        text={"Learn More"}
        href={"services/vat-compliance"}
        data={TaxConsultingData.vatcompliance}
      />
      <ServiceCategory
        title={"Tax Consulting"}
        content={
          "Singularity GmbH offers top-tier tax consulting services to help you optimize your tax strategies. Our expertise ensures that your business benefits from tailored advice and strategic planning."
        }
        text={"Learn More"}
        href={"services/tax-consulting"}
        data={TaxConsultingData.taxconsulting}
      />
      <ServiceCategory
        title={"Tax Compliance"}
        content={
          "Our tax compliance services at Singularity GmbH are designed to ensure your business remains compliant with all relevant tax laws. We provide meticulous attention to detail in filing and representation."
        }
        text={"Learn More"}
        href={"services/tax-compliance"}
        data={TaxConsultingData.taxcompliance}
      />
      <ServiceCategory
        title={"Tax Technology Solutions"}
        content={
          "Singularity GmbH provides innovative tax technology solutions to modernize your tax processes. Our services include automation, real-time reporting, and seamless integration with your existing systems."
        }
        text={"Learn More"}
        href={"services/tax-technology-solutions"}
        data={TaxConsultingData.technologysolutions}
      />
      <div className="relative z-50 ">
        <VideoComponent />
      </div>
      <div className="relative z-50 ">
        <WhyUs onlyslider={true} />
      </div>
    </div>
  );
};

export default Index;
