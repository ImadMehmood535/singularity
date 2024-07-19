import React from "react";
import { trusted1, trusted2 } from "@/assets";
import LandingTrustBox from "./LandingTrustBox";

const LandingTrustedPartners = () => {
  const trustedData = [
    {
      pic: trusted1,
      head: (
        <>
          VAT Compliance <br /> & Registration
        </>
      ),
      para: "By choosing Singularity GmbH, you gain a trusted partner dedicated to simplifying the complexities of company formation and VAT compliance. With our comprehensive services, we ensure that every step of establishing your business is seamless and hassle-free. From navigating legal requirements to providing expert advice on tax obligations, Singularity GmbH stands by your side to optimize efficiency and minimize risks.",
      btntext : "Reach Us Out",
      linladdress: "services/vat-compliance-services",
    },
    {
      pic: trusted2,
      head: (
        <>
          Custom Indirect  <br /> Representative
        </>
      ),
      para: "By choosing Singularity GmbH, you gain a trusted partner dedicated to simplifying the complexities of company formation and VAT compliance. With our comprehensive services, we ensure that every step of establishing your business is seamless and hassle-free. From navigating legal requirements to providing expert advice on tax obligations, Singularity GmbH stands by your side to optimize efficiency and minimize risks.",
      btntext : "Reach Us Out",
      linladdress: "services/company-formation-services",
    },
     
  ];
  return (
    <div className="bg-[#0f121d] h-full py-12 flex flex-col gap-10 ">
      <div className="containerCust flex flex-col gap-14">
        <div className="w-full md:w-[800px] mx-auto">
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
