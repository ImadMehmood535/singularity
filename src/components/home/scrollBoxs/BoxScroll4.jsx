"use client";
import React from "react";
import SBox from "./SBox";
import { b4 } from "@/assets";

const BoxScroll4 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 justify-evenly h-screen px-2">
      <div className="hidden lg:block col-span-3"></div>

      <div className="hidden lg:block col-span-1 mt-[100%]">
        <SBox
          pic={b4}
          head={<>Service</>}
          paragh={
            "We believe in relationships that are supported by real results"
          }
        />
      </div>

      <div className=" block lg:hidden  col-span-3"></div>

      <div className=" block lg:hidden col-span-3 mt-[95%]">
        <SBox
          pic={b4}
          head={<>Service</>}
          paragh={
            "We believe in relationships that are supported by real results"
          }
        />
      </div>
      <div className=" block lg:hidden col-span-1 md:col-span-2"></div>
    </div>
  );
};

export default BoxScroll4;