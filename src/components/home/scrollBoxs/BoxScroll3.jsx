import React from "react";
import { b3 } from "@/assets";
import SBox from "./SBox";

const BoxScroll3 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 justify-evenly h-screen px-2  ">
      <div className="col-span-2"></div>

      <div className="col-span-1 mt-[70%] md:mt-[90%]">
        <SBox
          pic={b3}
          head={<>Flexible</>}
          paragh={
            "We tailor-make solutions that are a unique fit for all of our clients"
          }
        />
      </div>

      <div className="col-span-1"></div>
    </div>
  );
};

export default BoxScroll3;
