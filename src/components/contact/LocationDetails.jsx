import Link from "next/link";
import React from "react";

const LocationDetails = ({ icon , head, para }) => {
  return (
    <div className="LocationDetails">
        <Link href={`tel:${head}`}>
        <div className="p-[2px] customLink2  relative">
        <div className="w-full z-20 relative rotate-360 custom-gradent-slider  overflow-hidden bg-[#19161A]   p-8 flex flex-col gap-4 !rounded-[12px]">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="icon-area w-[20%] flex justify-center sm:justify-start">
              {icon}
            </div>
            <div className="content-area w-[80%]">
              <h3 className="font-semibold text-lg whitespace-nowrap text-center sm:text-left">{head}</h3>
              {para && <p>{para}</p>}
            </div>
          </div>
        </div>
      </div>
        </Link>
      
    </div>
  );
};

export default LocationDetails;
