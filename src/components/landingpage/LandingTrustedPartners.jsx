import React from "react";
import { trusted1, trusted2 } from "@/assets";
import LandingTrustBox from "./LandingTrustBox";

const LandingTrustedPartners = () => {
  const trustedData = [
    {
      pic: trusted1,
      head: (
        <>
          VAT <br /> Compliance
        </>
      ),
      para: "At Singularity, we understand the vital importance of VAT compliance within the EU for businesses engaged in cross-border transactions. Trust us to simplify your VAT processes and navigate the European market with confidence.",
      btntext : "Reach Us Out",
      linladdress: "services/vat-compliance-services",
    },
    {
      pic: trusted2,
      head: (
        <>
          Customs Indirect <br /> Representative
        </>
      ),
      para: "Navigating EU customs clearance can be complex, but with our Customs Indirect Representation Services, you have a reliable partner by your side. We serve as your dedicated representative, expertly managing EU customs regulations to ensure full compliance and smooth operations for your business.",
      btntext : "Reach Us Out",
      linladdress: "services/company-formation-services",
    },
     
  ];
  return (
    <div className="bg-[#0f121d] h-full py-12 flex flex-col gap-10 ">
      <div className="containerCust lg:px-[10%] flex flex-col gap-14">
        <div className="w-full md:w-[600px] mx-auto">
          <div className="flex flex-col gap-4 text-center items-center">
            <div className="bg-themeGray-0 rounded-[28px] px-6 py-1 w-fit">
              <p className="text-sm">What We Do</p>
            </div>

            <h2 className="text-4xl md:text-4xl lg:text-5xl">
              Your Trusted Partner in <br /> Taxation Services
            </h2>
          </div>
        </div>
        <div className="item-wrapper grid grid-cols-1 md:grid-cols-2 gap-14 w-full  ">
          {trustedData?.map((item, index) => (
            <LandingTrustBox item={item} key={index} />
          ))}
        </div>
        <div className="text-center">
        <p>
        Contact Singularity GmbH today for more information about our comprehensive tax services or to schedule a consultation with our experienced team. We are committed to providing tailored solutions to help your business succeed.
        </p>
      </div>
      </div>
    </div>
  );
};

export default LandingTrustedPartners;
