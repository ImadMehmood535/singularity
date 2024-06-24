import React from "react";
import LinkComponent from "../general/LinkComponent";
import Image from "next/image";
import { vectorL, vectorR } from "@/assets";

const VectorComponent = () => {
  return (
    <div className="w-full bg-black py-12 relative z-30 h-[55vh] flex flex-col gap-8 justify-center items-center">
      <h1 className="font-bold">
        Lorem ipsum dolor sit amet <br /> ipsum dolor sit amet
      </h1>
      <LinkComponent text={"Reach Us Out"} href={"/"} />

      <div className="absolute right-0  ">
        <Image src={vectorR} alt="vector-right" width={250} height={250} />
      </div>
      <div className="absolute left-0 bottom-0">
        <Image src={vectorL} alt="vector-right" width={250} height={250} />
      </div>
    </div>
  );
};

export default VectorComponent;
