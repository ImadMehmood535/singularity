import { award } from "@/assets";
import Image from "next/image";
import React from "react";

const Ticker = () => {
  const wordlist = ["Trusted by 2950+ Businesses around the world"];

  return (
    <div className="Ticker bg-transparent">
      <div className="relative    overflow-hidden">
        <div className="ticker-wrapper">
          <div className="ticker flex py-2  justify-evenly items-center space-x-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <>
                {wordlist.map((word, idx) => (
                  <React.Fragment key={`${word}-${index}-${idx}`}>
                    <span className=" font-semibold gradient-text text-xl w-full GeneralSans   whitespace-nowrap">
                      {word}
                    </span> 
                    <Image
                      src={award}
                      width={30}
                      height={30}
                      alt="award-icon"
                    />
                  </React.Fragment>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
