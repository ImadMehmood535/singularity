import { informationBanner } from "@/assets";
import InformationBanner from "@/components/Information/InformationBanner";
import KeyResources from "@/components/Information/KeyResources";
import TableList from "@/components/Information/TableList";
import { informationlistdata, tabledata } from "@/data/informationdata";
import React from "react";

export const metadata = {
  title: " Information Center | Tax & VAT Resources",
  description:
    "Access valuable resources and information on VAT, tax, accounting, and business consultancy. Stay informed with Singularity",
  keyword: [
    " VAT resources",
    " business information",
    " VAT compliance resources",
    "accounting guides",
    " business consultancy tips",
  ],
};

const Index = () => {
  return (
    <div className="Information w-full">
      <InformationBanner
        bannerimage={informationBanner}
        subtitle={"Information"}
        title={"Essential Information for Our Clients"}
        content={
          "This page is the official Information Center of Singularity GmbH. Here, you shall get a compass to new materials and changes that were crafted to help and inform about the unpredictable nature of tax laws. We want to equip you with as much information as possible to enable you to understand how best to approach taxation issues."
        }
      />
      <KeyResources
        subtitle={"Information"}
        title={"Key Resources"}
        data={informationlistdata}
      />
      <TableList data={tabledata} />
    </div>
  );
};

export default Index;
