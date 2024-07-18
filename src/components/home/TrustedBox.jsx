import Image from "next/image";
import React from "react";

const TrustedBox = ({ item }) => {
  return (
    <div className="p-[1px] customLink2  relative  bg-[#19161A]">
      <div className="w-full z-20 relative  px-7 py-5 flex flex-col gap-3 bg-[#19161A] overflow-hidden rounded-[18px] custom-gradent rotate-360 ">
        <div className="h-[80px] relative w-full">
          <Image
            src={item?.pic}
            alt={item?.head}
            width={60}
            height={40}
            quality={75}
            loading="eager"
            fetchPriority="high"
            className="absolute bottom-0"
          />
        </div>
        <h3 className="text-themeTextGray-0 min-h-[64px]">{item?.head}</h3>
        <p className="text-sm text-themeTextGray-0 h-[70px]">{item?.para}</p>
      </div>
    </div>
  );
};

export default TrustedBox;
