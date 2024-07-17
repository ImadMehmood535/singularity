import React from "react";
import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";
import { taxcompliance } from "@/data/InnerServicePagesData";
import { VatComplianceFaq } from "@/data/SingleServiceData";

const page = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: Article 23"}
        title={"Article 23"}
        content={
          "At Singularity, we understand the critical role of VAT compliance within the European Union, particularly for businesses involved in cross-border transactions. Our VAT services are expertly crafted to support your business, ensuring seamless tax operations and adherence to EU regulations. By partnering with us, you gain access to comprehensive VAT compliance solutions that streamline your processes and keep your business running smoothly."
        }
        text={"Learn More"}
        href={"/"}
      />
      <InnerServiceFeature
        subtitle={"Mastering VAT Compliance"}
        title={"Tax and Accounting Services"}
        content={
          "Our comprehensive VAT compliance services form a vital part of our broader tax and accounting offerings. As VAT specialists, we leverage our extensive tax management and accounting expertise to deliver tailored VAT solutions that meet your business needs. Our team of VAT experts ensures that your VAT obligations are managed efficiently, minimising risks and optimising your tax processes within the EU market."
        }
        data={taxcompliance?.vat1}
      />
      <InnerServiceFeature
        subtitle={"VAT Compliance Service"}
        title={"E-Commerce Accounting Solutions"}
        content={
          "Our expertise addresses the unique challenges of the e-commerce landscape, making VAT compliance straightforward and efficient. Trust our outsource accounting team to manage your financial needs, allowing you to focus on growing your business."
        }
        flip={true}
        data={taxcompliance?.vat2}
      />
      <InnerServiceFeature
        subtitle={"VAT Compliance Service"}
        title={"EU VAT Compliance for Expats"}
        content={
          "For expatriates navigating VAT compliance in the EU , expert guidance is essential. Singularity specialises in tailored advisory services for expats, ensuring adherence to EU VAT regulations while maximising efficiency."
        }
        data={taxcompliance?.vat3}
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

export default page;
