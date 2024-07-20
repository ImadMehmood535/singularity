import { homeBg } from "@/assets";
import Image from "next/image";
import React from "react"; 
import LandingForm from "./LandingForm";

const LandingBanner = () => {
  return (
    <section className="homeBackground  w-full relative pt-[110px] pb-[80px]  ">
      <Image
        src={homeBg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        fetchPriority="high"
        loading="eager"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center h-full gap-6 md:gap-12 containerCust lg:px-[10%] relative z-10 top-4 md:top-8 ">
        <div className="flex flex-col items-left gap-2 text-center md:text-left">
          <h1 className="mb-4  text-4xl md:text-5xl leading-[50px] md:leading-[68px]  ">
            Effortless VAT <br /> Mastery for <br />
            <span className="text-gradent">Business Brilliance</span>
          </h1>

          <p className="text-base  max-w-[800px] w-full mb-4">
            Achieve business brilliance with our effortless VAT mastery
            solutions. Simplify compliance and maximize efficiency with our
            expert guidance. Elevate your business success with streamlined VAT
            management tailored to your needs.
          </p>

           
        </div>
        <div className="form-area">
          <LandingForm />
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
