import { about2, about3, aboutBg } from "@/assets";
import Image from "next/image";
import React from "react";

const VatComponent = () => {
  return (
    <div className="aboutBg bg-cover bg-center bg-no-repeat">
      <div className="containerCust">
        <div className="w-full flex flex-col gap-7 !py-16  text-center   h-full ">
          <div className="content-area mb-8 flex flex-col gap-7 ">
            <h2>What Is VAT Compliance?</h2>
            <p>
              VAT is the value-added tax on goods and services tax levied
              incrementally on the price of a product or service at each point
              of production, distribution, or sale to consumers. VAT
              compliance is the commitment to submitting periodic VAT returns to
              jurisdiction-specific tax authorities according to certain
              parameters such as predetermined formats and requirements based on
              business nature and size. In a nutshell, VAT compliance means
              filing and reporting an entity’s VAT return periodically and as
              stipulated by the designated VAT authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
            <Image
              src={about2}
              alt="about"
              width={650}
              height={650}
              className="w-full"
            />
            <Image
              src={about3}
              alt="about"
              width={650}
              height={650}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VatComponent;
