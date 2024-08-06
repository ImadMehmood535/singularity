import AboutBanner from "@/components/about/AboutBanner";
import ImpressumBody from "@/components/impressum/ImpressumBody";
import React from "react";
export const metadata = {
  title: "Impressum & Legal Notice | Singularity",
  description:
    "Access Singularity's legal notice and Impressum information. Learn about our company details, legal responsibilities, and contact information.",
};
const page = () => {
 
  return (
    <div className="w-full text-center">
      <AboutBanner subtitle="Impressum" title="Impressum Legal Notice" />
      <ImpressumBody  />
    </div>
  );
};

export default page;
