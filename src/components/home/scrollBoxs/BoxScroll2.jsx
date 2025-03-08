import React from "react";
import {  b2 } from "@/assets";
import SBox from "./SBox";

const BoxScroll2 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 justify-evenly h-screen px-2">
              <div className="md:col-span-1"></div>

      <div className="col-span-3 md:col-span-1 mt-[35%] md:mt-[60%]">
        <SBox
          pic={b2}
          head={<>Prioritizing Compliance</>}
          paragh={"We assist you in achieving your full potential while ensuring adherence to regulations."}
        />
      </div>

      <div className=" col-span-1 md:col-span-2"></div>
    </div>
  );
};

export default BoxScroll2;
