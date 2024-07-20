import { homeBg } from "@/assets";
import Image from "next/image";
import React from "react";
import LinkComponent from "../general/LinkComponent";
import LandingForm from "./LandingForm";
 

const LandingBanner = () => {
  return (
    <section className="homeBackground  w-full relative pt-[130px] pb-[80px]  ">
      <Image
        src={homeBg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        fetchPriority="high"
        loading="eager"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center h-full gap-12 containerCust lg:px-[10%] relative z-10 top-4 md:top-8 ">
        <div className="flex flex-col items-left gap-2">
          <h1 className="mb-4  text-4xl md:text-5xl leading-[50px] md:leading-[68px]  ">
            Streamlined <br />
            VAT Solutions for <br />
            <span className="text-gradent">Business Excellence</span>
          </h1>

          <p className="text-base  max-w-[800px] w-full mb-4">
            Singularity GmbH is your trusted partner for all tax and accounting
            services, from comprehensive audit management to regular VAT
            returns. Let us handle the complexities and ensure your financial
            records are impeccable.
          </p>

          <div className="flex">
            <LinkComponent text={"Get Started"} href={"/"} bannerbtn={true} />
          </div>
        </div>
        <div className="form-area">
         <LandingForm/>
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
