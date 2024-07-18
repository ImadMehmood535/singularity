import WhyUs from "@/components/home/WhyUs";
import InnerFaq from "@/components/services/InnerFaq";
import InnerServiceFeature from "@/components/services/InnerServiceFeature";
import ServiceBanner from "@/components/services/ServiceBanner";
import { technologysolutions } from "@/data/InnerServicePagesData";
 

import React from "react";

const Index = () => {
  return (
    <div>
      <ServiceBanner
        subtitle={"Services: Customs Indirect Representation Services"}
        title={<>Customs Indirect <br/> Representation Services</>}
        content={
          "Navigating the complexities of customs clearance in the European Union (EU) can be challenging. With our Customs Indirect Representation services, we become your reliable partner, ensuring compliance with EU customs regulations. Acting as your indirect representation, we facilitate smooth and efficient operations, allowing your business to thrive without the hassle of customs complexities."
        }
        text={"Learn More"}
        href={"/"}
      />
      <InnerServiceFeature
        subtitle={"Customs Indirect Representation "}
        title={"Indirect Customs Representative"}
        content={
          "At Singularity, we specialise in indirect representation customs, serving as your trusted intermediary within the EU customs framework. By partnering with us, you can focus on your core business activities while we handle the complexities of customs, providing you with peace of mind and seamless operations across the European Union."
        }
        data={technologysolutions.customIndirect}
      />
      <InnerServiceFeature
        subtitle={"Customs Indirect Representation Services"}
        title={"Indirect Representation Procedures in the EU Customs System"}
        content={
          "Singularity takes pride in offering top-tier Indirect Customs Representation services for businesses looking to expand into the European Union. Our seasoned professionals possess extensive knowledge of EU customs laws and regulations, ensuring your goods clear customs efficiently and accurately."
        }
        flip={true}
        data={technologysolutions.realtimereporting}
      />
      <InnerServiceFeature
        subtitle={"Customs Indirect Representation Services"}
        title={"Singularity for Risk-Free Compliant Customs Representation"}
        content={
          "Choosing Singularity as your indirect customs representative means partnering with a team that prioritises compliance, reduces risks, and minimises errors."
        }
        data={technologysolutions.customIndirect2}
      />

      <div className="relative z-50 ">
        <WhyUs onlyslider={false} />
      </div>
      
    </div>
  );
};

export default Index;
