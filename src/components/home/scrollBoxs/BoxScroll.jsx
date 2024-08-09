import React from "react";
import { b1 } from "@/assets";
import SBox from "./SBox";

const BoxScroll = () => {
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-4 justify-evenly h-screen px-2 relative">
      <div className="md:col-span-1 mt-[45%]  lg:mt-[50%]">
        <SBox
          pic={b1}
          head={<>Global Reach</>}
          paragh={"Our consultants around the world understand your needs."}
        />
      </div>

      <div className="col-span-3"></div>
    </div>
  );
};

export default BoxScroll;
