import React from "react";
import LinkComponent from "../general/LinkComponent";

const TrustedReachOut = () => {
  return (
    <div className="hidden lg:flex w-full relative z-30  justify-center h-full   flex-col gap-4">
      <h3>
        Not having what you <br /> are for looking for?
      </h3>
      <p className="max-w-[85%]">
        You can fill out the form in the Contact Us section and receive services
        specifically designed for you.
      </p>
      <div className="flex">
        <LinkComponent text={"Reach Us Out"} href={"/contact-us"} />
      </div>
    </div>
  );
};

export default TrustedReachOut;
