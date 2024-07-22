import { homeBg } from "@/assets";
import Image from "next/image";
import React from "react";
import LandingForm from "./LandingForm";
import LinkComponent from "../general/LinkComponent";
import Link from "next/link";

const LandingBanner = () => {
  return (
    <section className="homeBackground  w-full relative pt-[140px] pb-[100px]  ">
      <Image
        src={homeBg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        fetchPriority="high"
        loading="eager"
      />
      <div className="grid grid-cols-1  lg:grid-cols-2 items-center z-50 justify-center h-full gap-6 md:gap-12 containerCust xl:px-[10%] relative z-10 top-4 md:top-8  ">
        <div className="flex flex-col items-left gap-2 text-center md:text-left order-2 md:order-1">
          <h1 className="mb-4  text-4xl md:text-5xl leading-[40px] md:leading-[58px]  ">
            Effortless VAT <br /> Mastery for <br />
            <span className="text-gradent">Business Brilliance</span>
          </h1>

          <p className="text-base  max-w-[800px] w-full mb-4">
            Achieve business brilliance with our effortless VAT mastery
            solutions. Simplify compliance and maximize efficiency with our
            expert guidance. Elevate your business success with streamlined VAT
            management tailored to your needs.
          </p>

          <Link
            href={"https://wa.me/+971566290808"}
            target="_blank"
            className={`table hidden md:block hover:bg-themeGreen-0 transition-all bg-themeGray-0  py-3 relative customLink rounded-full w-[150px] text-center text-white z-30`}
          >
            Talk to Us
          </Link>
        </div>
        <div className="form-area order-1 md:order-2 ">
          <LandingForm />
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
