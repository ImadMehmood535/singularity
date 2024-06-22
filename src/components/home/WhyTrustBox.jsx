import React from "react";

const WhyTrustBox = ({ head, para }) => {
  return (
    <div className="max-w-[450px] border-[#545459] border-2 h-[180px] w-full p-8 flex flex-col gap-4   !rounded-[15px]">
      <h3 className="font-bold whitespace-nowrap">{head}</h3>
      <p>{para}</p>
    </div>
  );
};

export default WhyTrustBox;
