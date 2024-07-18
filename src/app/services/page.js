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
        title={"Tax Services By Singularity GmbH"}
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
          "At Singularity, we understand the vital importance of VAT compliance within the EU for businesses engaged in cross-border transactions. Trust us to simplify your VAT processes and navigate the European market with confidence."
        }
        text={"Learn More"}
        href={"services/vat-compliance-services"}
        data={TaxConsultingData.vatcompliance}
      />
      {/* <ServiceCategory
        title={"Tax Consulting"}
        content={
          "Singularity GmbH offers top-tier tax consulting services to help you optimize your tax strategies. Our expertise ensures that your business benefits from tailored advice and strategic planning."
        }
        text={"Learn More"}
        href={"services/tax-consulting"}
        data={TaxConsultingData.taxconsulting}
      /> */}
      <ServiceCategory
        title={"Company Formation Services"}
        content={
          "At Singularity, we provide tailored company formation services to establish your business in the UK, Germany, and EU. Our expertise ensures a smooth, compliant process, navigating the complexities of all markets. Start your enterprise on solid ground with us."
        }
        text={"Learn More"}
        href={"services/company-formation-services"}
        data={TaxConsultingData.taxcompliance}
      />
      <ServiceCategory
        title={"Customs Indirect Representation"}
        content={
          "Navigating EU customs clearance can be complex, but with our Customs Indirect Representation Services, you have a reliable partner by your side. We serve as your dedicated representative, expertly managing EU customs regulations to ensure full compliance and smooth operations for your business."
        }
        text={"Learn More"}
        href={"services/customs-indirect-representation-services"}
        data={TaxConsultingData.technologysolutions}
      />
      <ServiceCategory
        title={"Article 23"}
        content={
          "At Singularity, we offer specialised Article 23 services, positioning ourselves as leading article 23 providers in the UK and Germany. Our services are designed to help businesses leverage the benefits of the Article 23 mechanism, optimising VAT management and enhancing cash flow efficiency."
        }
        text={"Learn More"}
        href={"services/article-23"}
        data={TaxConsultingData.article23}
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
