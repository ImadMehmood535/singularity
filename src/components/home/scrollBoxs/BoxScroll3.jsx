import React from "react";
import { b3 } from "@/assets";
import SBox from "./SBox";

const BoxScroll3 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 justify-evenly h-screen px-2  ">
      <div className="col-span-2"></div>

      <div className="col-span-1 mt-[50%] lg:mt-[70%]">
        <SBox
          pic={b3}
          head={<>Adaptable</>}
          paragh={
            "We create customized solutions that perfectly suit each of our clients."
          }
        />
      </div>

      <div className="col-span-1"></div>
    </div>
  );
};

export default BoxScroll3;
