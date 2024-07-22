import AboutBanner from "@/components/about/AboutBanner";
import CareersForm from "@/components/Careers/CareersForm";
import LocationDetails from "@/components/contact/LocationDetails";
import MapArea from "@/components/contact/MapArea";
import ContactForm from "@/components/home/ContactForm";
import { locationdetails } from "@/data/locationdetails";
import React from "react";

const Index = () => {
  return (
    <div className="contactpage  w-full ">
      <AboutBanner subtitle="Reach Us" title="Careers" />

      <div className="!py-[130px]  bg-gradient-to-b from-[#0F121D] to-[#275A4F] h-full !text-start">
        <div className="containerCust">
          <div className="flex flex-col md:flex-row gap-10 items-center  ">
            <div className=" flex-1 w-full lg:w-[50%]">
              <CareersForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
