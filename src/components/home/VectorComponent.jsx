import React from "react";
import LinkComponent from "../general/LinkComponent";

const VectorComponent = ({ linking = true }) => {
  return (
    <div className={`VectorComponent bg-black relative py-20 overflow-hidden`}>
      <div className="containerCust z-30 relative">
        <div className="w-full   z-30   flex flex-col gap-8 justify-center items-center">
          <h2 className="font-bold  text-center">
            Are you ready to elevate <br /> your tax strategy?
          </h2>
          <LinkComponent
            text={"Reach Us Out"}
            href={linking ? "/contact-us" : "#"}
          />
        </div>
      </div>
    </div>
  );
};

export default VectorComponent;
