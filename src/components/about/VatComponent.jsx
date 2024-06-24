import { about2, about3, aboutBg } from "@/assets";
import Image from "next/image";
import React from "react";

const VatComponent = () => {
  return (
    <div className="w-full flex flex-col gap-7 !py-16 containerCust text-center  aboutBg bg-cover bg-center bg-no-repeat h-full ">
      <h2>What Is VAT Compliance?</h2>
      <p>
        VAT is the value-added tax on goods and services tax levied
        incrementally on the price of a product or service at each point of
        production, distribution, or sale to consumers. VAT compliance is the
        commitment to submitting periodic VAT returns to jurisdiction-specific
        tax authorities according to certain parameters such as predetermined
        formats and requirements based on business nature and size. In a
        nutshell, VAT compliance means filing and reporting an entity’s VAT
        return periodically and as stipulated by the designated VAT authority.
      </p>

      <div className="flex justify-between flex-wrap md:flex-nowrap items-center gap-7 mt-20">
        <Image src={about2} alt="about" width={650} height={650} />
        <Image src={about3} alt="about" width={650} height={650} />
      </div>
    </div>
  );
};

export default VatComponent;
