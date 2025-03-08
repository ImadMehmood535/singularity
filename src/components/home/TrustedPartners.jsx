import React from "react";
import Ticker from "./Ticker";
import { trustedData } from "@/data/homePage";
import TrustedBox from "./TrustedBox";
import TrustedReachOut from "./TrustedReachOut";

const TrustedPartners = () => {
  return (
    <section className="bg-[#0f121d] h-full py-12 flex flex-col gap-10 ">
      <Ticker />

      <div className="containerCust">
        <div className="flex flex-wrap md:flex-nowrap gap-2 justify-between items-center">
          <div className="flex flex-col gap-4">
            <div className="bg-themeGray-0 rounded-[28px] px-6 py-1 w-fit">
              <p className="text-sm">What We Do</p>
            </div>

            <h2>
              Your Reliable Solution <br /> for Taxation
            </h2>
          </div>

          <div className="max-w-[500px] w-full">
            <p>
              From a full-service Audit to the simplest VAT Returns, Singularity
              GmbH is here to meet the challenge and get your Tax in shape.
            </p>
          </div>
        </div>
      </div>
      <div className=" containerCust grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 w-full">
        {trustedData?.map((item, index) => (
          <TrustedBox item={item} key={index} />
        ))}

        <TrustedReachOut />
      </div>
      <div className=" containerCust text-center">
        <p>
          To learn more about Singularity for our broad range of tax solutions
          or to book a consultation with our specialists, contact us at
          Singularity GmbH now. We are enthusiastic about offering business
          solutions to enable organizations to flourish.
        </p>
      </div>
    </section>
  );
};

export default TrustedPartners;
