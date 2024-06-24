import Image from "next/image";
import React from "react";

const TrustedBox = ({ item }) => {
  return (
    <div className="p-[1px] customLink2 relative">
      <div className="w-full  z-20 relative  px-7 py-5 flex flex-col gap-3 trustedGradient   ">
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
        <h3 className="text-themeTextGray-0">{item?.head}</h3>
        <p className="text-sm text-themeTextGray-0 h-[70px]">{item?.para}</p>
      </div>
    </div>
  );
};

export default TrustedBox;
