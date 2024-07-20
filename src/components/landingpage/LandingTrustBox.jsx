import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkComponent from "../general/LinkComponent";

const LandingTrustBox = ({ item }) => {
  return (
     
      <div className="p-[1px] customLink2 relative bg-[#19161A]">
        <div className="w-full z-20 relative px-4 md:px-7 py-8 flex flex-col gap-3 bg-[#19161A] overflow-hidden rounded-[18px] custom-gradent rotate-360">
          <div className="  h-[60px] relative w-full">
            <Image
              src={item?.pic}
              alt={item?.head}
              width={60}
              height={40}
              quality={75}
              loading="eager"
              fetchPriority="high"
              className="  bottom-0"
            />
          </div>
          <h3 className="text-themeTextGray-0 min-h-[64px]">{item?.head}</h3>
          <p className="text-base text-themeTextGray-0  min-h-[240px] xl:min-h-[120px]">{item?.para}</p>
          <div className="flex">
            <LinkComponent text={item.btntext} href={item.linladdress} bannerbtn={true} />
          </div>
        </div>
      </div>
     
  );
};

export default LandingTrustBox;
