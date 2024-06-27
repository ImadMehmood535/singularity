import React from "react";

const WhyTrustBox = ({ head, para }) => {
  return (
    <div className="p-[2px] customLink2  relative">
      <div className="w-full z-20 relative rotate-360 custom-gradent-slider  overflow-hidden bg-[#19161A] h-[180px]  p-8 flex flex-col gap-4 !rounded-[12px]">
        <div className="">
          <h3 className="font-bold whitespace-nowrap">{head}</h3>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyTrustBox;
