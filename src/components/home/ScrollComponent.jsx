import { scrollbg } from "@/assets";
import Image from "next/image";
import React from "react";

const ScrollComponent = () => {
  return (
    <div className="h-screen bg-gradient-to-b overflow-hidden from-[#0F121D] to-[#1536DA] relative  text-center flex flex-col justify-start items-center">
      <div className="absolute bottom-0 left-0 z-20 spin-slow">
        <Image
          src={scrollbg}
          alt="bg"
          width={800}
          height={800}
          loading="eager"
          quality={100}
        />
      </div>

      <div className="max-w-[350px] w-full relative py-20  z-50">
        <h2 className="mb-3">What sets us apart from the rest?</h2>
        <p>Continuous commitment to excellence has gotten us this far.</p>
      </div>
    </div>
  );
};

export default ScrollComponent;
