import AboutBanner from "@/components/about/AboutBanner";
import Aboutarea from "@/components/about/Aboutarea";
import Centercontent from "@/components/about/Centercontent";
import VatComponent from "@/components/about/VatComponent";
import FaqComponent from "@/components/general/FaqComponent";
import InnerBanner from "@/components/general/InnerBanner";
import ContactForm from "@/components/home/ContactForm";

import React from "react";

const Index = () => {
  return (
    <div className="text-center w-full  ">
      <AboutBanner subtitle="Our Story" title="About Us" />
      {/* <InnerBanner title={"About Us"} /> */}
      <Aboutarea />
      <VatComponent />
      <Centercontent />
      <div className="bg-gradient-to-b from-[#0F121D] to-[#275A4F] h-full !text-start">
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-10 items-start containerCust !py-[130px]">
          <div className=" w-full lg:w-[50%]">
            <ContactForm />
          </div>
          <div className=" w-full lg:w-[50%]">
            <FaqComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
