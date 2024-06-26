import React from "react";
import LinkComponent from "../general/LinkComponent";

const VectorComponent = () => {
  return (
    <div className={`VectorComponent bg-black relative py-20 overflow-hidden`}>
      <div className="containerCust z-30 relative">
        <div className="w-full   z-30   flex flex-col gap-8 justify-center items-center">
          <h1 className="font-bold  text-center">
            Lorem ipsum dolor sit amet <br /> ipsum dolor sit amet
          </h1>
          <LinkComponent text={"Reach Us Out"} href={"/"} />
        </div>
      </div>
    </div>
  );
};

export default VectorComponent;
