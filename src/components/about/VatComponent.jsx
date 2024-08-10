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
              VAT, also known as Value-Added Tax, is a consumption tax charged
              at every stage of production, distribution, or supply of goods and
              services. It is computed in each step and depends on the product&apos;s
              price or the provided service. Maintaining VAT compliance entails
              forwarding VAT returns to the appropriate taxation bodies within
              some stipulated guidelines that rely on the characteristics of the
              trading company as well as the size of the business.
            </p>
            <p>
              In a nutshell, VAT compliance entails staying up to scratch with
              the requirements for filing and reporting an entity&apos;s VAT
              returns by the required deadlines awarded by the relevant VAT
              authority. This enables the formulation of the correct tax amount
              collected and paid by any business at every point in its
              operations.
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
              VAT control entails exercising a lot of care and ensuring proper
              documentation of all transactions under the VAT bracket. This
              involves retaining invoices, receipts and other account books used
              in the recording of VAT charged and VAT paid. To manage this,
              businesses have to realize that the accounting systems in use have
              to come up with provisions for VAT and be able to produce the
              required reports.
            </p>
            <p>
              There are variations in the percentage of VAT for every country
              and some limitations while entering a foreign country; therefore,
              it is essential to be conversant with the country&apos;s
              legislation. The second level of complication is that some
              jurisdictions provide standard, reduced or zero rates or
              exemptions on some goods and services.
            </p>
            <p>
              Most VAT rules must be followed to avoid stiff penalties,
              including fines and, in some extreme cases, legal proceedings.
              Consequently, businesses should always be aware of the
              contemporary changes in the rules and regulations concerning VAT.
              It thus pays to conduct or carry out periodic audits and reviews
              of the established VAT processes to pinpoint any prevalent process
              anomalies or alleged VAT noncompliant status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VatComponent;
