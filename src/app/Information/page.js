import { informationBanner } from "@/assets";
import InformationBanner from "@/components/Information/InformationBanner";
import KeyResources from "@/components/Information/KeyResources";
import TableList from "@/components/Information/TableList";
import { informationlistdata, tabledata } from "@/data/informationdata";
import React from "react";
 
const Index = () => {
  return (
    <div className="Information w-full">
      <InformationBanner
        bannerimage={informationBanner}
        subtitle={"Information"}
        title={"Essential Information for Our Clients"}
        content={
          "Welcome to the Singularity GmbH Information Center. Here, you will find vital resources and updates designed to keep you informed and prepared for the dynamic world of tax regulations and compliance. Our goal is to provide you with clear, concise, and relevant information to help you navigate your tax responsibilities with confidence."
        }
      />
      <KeyResources
        subtitle={"Information"}
        title={"Key Resources"}
        data={informationlistdata}
      />
      <TableList data={tabledata}/>
    </div>
  );
};

export default Index;
