import { about1 } from "@/assets";
import VatComponent from "@/components/about/VatComponent";
import FaqComponent from "@/components/general/FaqComponent";
import InnerBanner from "@/components/general/InnerBanner";
import ContactForm from "@/components/home/ContactForm";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="text-center w-full  ">
      <InnerBanner title={"About Us"} />

      <div className="bg-[#0f121d] flex flex-col items-center gap-5 containerCust !py-12">
        <h2>Who We Are</h2>
        <p>
          Singularity GmbH Steuerberatungsgesellschaft is a German-qualified
          global team of experts, consultants, and professionals with decades of
          experience and a complete kit of tools, and knowledge curated to
          serve, assist, and provide advice for a wide range of growing
          clientele base stretching across Germany and the European Union
          countries and worldwide jurisdictions. A company that supports its
          client base with their German VAT needs.
        </p>
        <p>
          We understand the true meaning of long-term business relationships and
          how to create a dynamic work environment by delivering tailored
          services for value-driven solutions. With offices situated across
          Europe and the Middle East, we proudly serve with passion and strive
          for commitment. Through our strong foundations in service integrity,
          innovation, and continuous development in accordance with the evolving
          international and national market trends, our history of merits
          includes an incomparable record of successes, constant customer
          satisfaction and capacity to accommodate different businesses in size,
          nature, or requirements bandwidth.
        </p>

        <img src={about1.src} width={1000} height={1000} alt="about-1" className="mt-12" />
      </div>

      <VatComponent />

      <div className="bg-[#0f121d] flex flex-col items-center gap-5 containerCust !py-12">
        <h2>What Is Indirect Representation?</h2>
        <p>
          Direct representation means to appoint a professional to represent an
          entity as jointly liable for the import formalities, including duties,
          taxes, and relevant agreed-upon activities. The importance of such
          representation is acquired to clear the goods from customs on account
          of the applicant. Indirect representation on the other hand means that
          the rights and obligations have been delegated and transferred to the
          representative to take over all stipulated procedures. The Primary
          reason for pursuing indirect representation is when importers do not
          have a residence in the target market. EU customs territory could be
          challenging because of incalculable risks, fees, and duties.
        </p>
        <h2 className="mt-12">Singularity GmbH&apos;s Oblique Representation</h2>
        <p>
          Provides a fully equipped indirect representation service, which
          serves in Germany, the UK and across the EU. To register for indirect
          representation, the following criteria are to be met:
        </p>
        <p>
          The shipper needs to be connected to Singularity GmbH&apos;s address by a
          legitimate EU EORI number. A valid VAT number for the destined nation
          connected to the shipper&apos;s business address is required. Compliance
          with relevant laws and a predetermined deposit or security guarantee.
        </p>
        <p>
          Verification with the shipping business or freight forwarder of item
          clearances with Fiscal IOR as your indirect representative.
        </p>
      </div>

      <div className="bg-gradient-to-b from-[#0F121D] to-[#275A4F] h-full !text-start">
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-10 items-center containerCust !py-[130px]">
          <div className=" w-full lg:w-[50%]">
            <ContactForm />
          </div>
          <div className=" w-full lg:w-[50%]">
            <FaqComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
