import { about2, about3, aboutBg } from "@/assets";
import Image from "next/image";
import React from "react";

const VatComponent = () => {
  return (
    <div className="aboutBg bg-cover bg-center bg-no-repeat">
      <div className="containerCust">
        <div className="w-full flex flex-col gap-7 !py-16  text-center   h-full ">
          <div className="content-area mb-12 flex flex-col gap-7 ">
            <h2>What Is VAT Compliance?</h2>
            <p>
              VAT, or Value-Added Tax, is a consumption tax applied at each
              stage of production, distribution, or sale of goods and services.
              It is calculated incrementally based on the product&apos;s or service&apos;s
              price at each stage. Ensuring VAT compliance involves regularly
              submitting VAT returns to the relevant tax authorities according
              to specific guidelines that vary based on the nature and size of
              the business.
            </p>
            <p>
              In essence, VAT compliance means adhering to the prescribed
              regulations for filing and reporting an entity&apos;s VAT returns
              within the stipulated deadlines set by the designated VAT
              authority. This ensures that businesses accurately account for the
              tax collected and paid at each stage of their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
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
          <div className="content-area mb-8 flex flex-col gap-7 ">
            <p>
              VAT compliance requires meticulous record-keeping and
              documentation of all transactions subject to VAT. This includes
              maintaining invoices, receipts, and other financial records that
              detail the amount of VAT charged and paid. Businesses must ensure
              that their accounting systems are capable of accurately tracking
              VAT and generating the necessary reports for submission..
            </p>
            <p>
              Different countries have varying VAT rates and regulations, making
              it essential for businesses operating internationally to be
              well-versed in the local requirements. In addition to standard
              rates, some jurisdictions offer reduced rates or exemptions for
              specific goods and services, adding another layer of complexity to
              VAT compliance.
            </p>
            <p>
              Failure to comply with VAT regulations can result in significant
              penalties, fines, and even legal action. Therefore, businesses
              must stay informed about any changes in VAT laws and regulations
              to ensure ongoing compliance. Regular audits and reviews of VAT
              processes can help identify and rectify any discrepancies or areas
              of non-compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VatComponent;
