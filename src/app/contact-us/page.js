import AboutBanner from "@/components/about/AboutBanner";
import LocationDetails from "@/components/contact/LocationDetails";
import MapArea from "@/components/contact/MapArea";
import ContactForm from "@/components/home/ContactForm";
import { locationdetails } from "@/data/locationdetails";
import React from "react";

const Index = () => {
  return (
    <div className="contactpage  w-full ">
      <AboutBanner subtitle="Reach Us" title="Contact Us" />

      <div className="!py-[130px]  bg-gradient-to-b from-[#0F121D] to-[#275A4F] h-full !text-start">
        <div className="containerCust">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {locationdetails?.map((item, index) => (
              <LocationDetails
                key={index}
                icon={item.icon}
                head={item.heading}
                para={item.para}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center  ">
            <div className=" flex-1 w-full lg:w-[50%]">
              <ContactForm />
            </div>
            <div className="flex-1 w-full lg:w-[50%]">
              <MapArea />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
