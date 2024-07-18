"use client";
import React from "react";
import SBox from "./SBox";
import { b4 } from "@/assets";

const BoxScroll4 = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 justify-evenly h-screen px-2">
        {/* for desktop */}

        <div className="hidden lg:block col-span-3"></div>

        <div className="hidden lg:block col-span-1 mt-[80%]">
          <SBox
            pic={b4}
            head={<>Service</>}
            paragh={
              "We believe in relationships that are supported by real results"
            }
          />
        </div>

        {/* for mobile */}
        <div className=" block lg:hidden  col-span-2"></div>

        <div className=" block lg:hidden   mt-[110%] col-span-3 md:col-span-1">
          <SBox
            pic={b4}
            head={<>Service</>}
            paragh={
              "We believe in relationships that are supported by real results"
            }
          />
        </div>
        <div className=" block lg:hidden col-span-1 md:col-span-3"></div>
      </div>
      {/* <p className="text-center pb-6 hidden md:block">
        Reach out to Singularity GmbH today to learn more about our extensive
        tax services or to book a consultation with our expert team. We are
        dedicated to offering customized solutions to ensure your business
        thrives.
      </p> */}
    </>
  );
};

export default BoxScroll4;
