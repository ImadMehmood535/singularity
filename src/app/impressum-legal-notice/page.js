import AboutBanner from "@/components/about/AboutBanner";
import ImpressumBody from "@/components/impressum/ImpressumBody";
import React from "react";

const page = () => {
 
  return (
    <div className="w-full text-center">
      <AboutBanner subtitle="Impressum" title="Impressum Legal Notice" />
      <ImpressumBody  />
    </div>
  );
};

export default page;
