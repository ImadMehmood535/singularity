import Image from "next/image";
import React from "react";

const SBox = ({ pic, head, paragh }) => {
  return (
    <div className="max-w-[300px] border-4 border-black/10 font-light text-white w-full p-8 bg-gray-500/50 ra rounded-[25px] h-[350px]         ">
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
