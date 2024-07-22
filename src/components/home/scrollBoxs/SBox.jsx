import Image from "next/image";
import React from "react";

const SBox = ({ pic, head, paragh }) => {
  return (
    <div className="w-full md:max-w-[300px] border-4 border-black/10 font-light text-white  p-8 bg-themeGray-0 lg:bg-gray-500/50 rounded-[25px] h-[350px]">
      <Image
        src={pic}
        alt="pic"
        width={100}
        height={100}
        quality={75}
        loading="eager"
        fetchPriority="high"
      />
      <h2 className="  mt-6 py-4 ">{head}</h2>
      <p className="text-[12px]">{paragh}</p>
    </div>
  );
};

export default SBox;
