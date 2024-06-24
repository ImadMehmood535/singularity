import { innerBanner } from "@/assets";
import Image from "next/image";
import React from "react";

const InnerBanner = ({ title }) => {
  return (
    <section className="h-[30vh] md:h-[40vh] w-full relative">
    <Image
      src={innerBanner}
      alt="Background Image"
      layout="fill"
      objectFit="cover"
      quality={100}
      fetchPriority="high"
      loading="eager"
    />
    <div className="flex justify-center items-center h-full w-full relative z-10">
      <h1 className="text-white text-4xl">{title}</h1>
    </div>
  </section>
  
  );
};

export default InnerBanner;
