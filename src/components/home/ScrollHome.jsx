import React from "react";
import ScrollComponent from "./ScrollComponent";
import BoxScroll from "./scrollBoxs/BoxScroll";
import BoxScroll2 from "./scrollBoxs/BoxScroll2";
import BoxScroll3 from "./scrollBoxs/BoxScroll3";
import BoxScroll4 from "./scrollBoxs/BoxScroll4";

const ScrollHome = () => {
  return (
    <>
      <div className="sticky top-0 z-0 ">
        <ScrollComponent />
      </div>
      <div className="containerCust mx-auto ">
        <div className="sticky top-16 mx-auto  z-20">
          <BoxScroll />
        </div>
        <div className="sticky top-16 mx-auto  z-20">
          <BoxScroll2 />
        </div>
        <div className="sticky top-16 mx-auto  z-20">
          <BoxScroll3 />
        </div>
        <div className="sticky top-16 mx-auto  z-20">
          <BoxScroll4 />
        </div>
        <p className="text-center pb-6 hidden md:block z-[998] relative  ">
          Reach out to Singularity GmbH today to learn more about our extensive
          tax services or to book a consultation with our expert team. We aim to
          provide specialized services that will make your business successful.
        </p>
      </div>
    </>
  );
};

export default ScrollHome;
