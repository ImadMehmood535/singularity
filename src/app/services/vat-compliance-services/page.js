import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";
import { VATCompliance } from "@/data/InnerServicePagesData";
import { VatComplianceFaq } from "@/data/SingleServiceData";
import React from "react";

export const metadata = {
  title: " VAT Compliance Services | Expert VAT Specialists",
  description:
    " Ensure full VAT compliance with our expert VAT services. Trusted VAT specialists for businesses of all sizes.",
  keyword: [
    "VAT compliance services",
    "VAT specialists",
    "VAT experts",
    "tax compliance services",
    "outsource accounting service",
  ],
};

const Index = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: Vat Compliance Service"}
        title={"Vat Compliance Service"}
        content={
          "At Singularity, we understand the critical role of VAT compliance within the European Union, particularly for businesses involved in cross-border transactions. Our VAT services are expertly crafted to support your business, ensuring seamless tax operations and adherence to EU regulations. By partnering with us, you gain access to comprehensive VAT compliance solutions that streamline your processes and keep your business running smoothly."
        }
        text={"Reach Us Out"}
        href={"#ReachUs"}
      />
      <InnerServiceFeature
        subtitle={"Mastering VAT Compliance"}
        title={"Tax and Accounting Services"}
        content={
          "Our comprehensive VAT compliance services form a vital part of our broader tax and accounting offerings. As VAT specialists, we leverage our extensive tax management and accounting expertise to deliver tailored VAT solutions that meet your business needs. Our team of VAT experts ensures that your VAT obligations are managed efficiently, minimising risks and optimising your tax processes within the EU market."
        }
        data={VATCompliance?.vat1}
      />
      <InnerServiceFeature
        subtitle={"VAT Compliance Service"}
        title={"E-Commerce Accounting Solutions"}
        content={
          "Our expertise addresses the unique challenges of the e-commerce landscape, making VAT compliance straightforward and efficient. Trust our outsource accounting team to manage your financial needs, allowing you to focus on growing your business."
        }
        flip={true}
        data={VATCompliance?.vat2}
      />
      <InnerServiceFeature
        subtitle={"VAT Compliance Service"}
        title={"EU VAT Compliance for Expats"}
        content={
          "For expatriates navigating VAT compliance in the EU , expert guidance is essential. Singularity specialises in tailored advisory services for expats, ensuring adherence to EU VAT regulations while maximising efficiency."
        }
        data={VATCompliance?.vat3}
      />

      <div className="relative z-50 ">
        <WhyUs onlyslider={false} />
      </div>
      <div id="ReachUs">
        <InnerFaq
          data={VatComplianceFaq}
           
        />
      </div>
    </div>
  );
};

export default Index;
