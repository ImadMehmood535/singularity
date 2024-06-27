 
import MapArea from "@/components/contact/MapArea";
import InnerBanner from "@/components/general/InnerBanner";
import ContactForm from "@/components/home/ContactForm";
import React from "react";

const Index = () => {
  return (
    <div className="contactpage  w-full ">
      <InnerBanner title={"Contact Us"} />
      <div className="bg-gradient-to-b from-[#0F121D] to-[#275A4F] h-full !text-start">
        <div className="flex flex-col md:flex-row gap-10 items-center containerCust !py-[130px]">
          <div className=" flex-1 w-full lg:w-[50%]">
            <ContactForm />
          </div>
          <div className="flex-1 w-full lg:w-[50%]">
             <MapArea/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
