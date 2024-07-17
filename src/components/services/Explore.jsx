import React from "react";

const Explore = ({ subtitle, title, content }) => {
  return (
    <div className="Explore py-20 bg-[#0F121D]">
      <div className="containerCust">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 lg:gap-20 justify-between items-end">
          <div className="flex flex-col gap-4">
            <div className="bg-themeGray-0 rounded-[28px] px-6 py-1 w-fit">
              <p className="text-sm">{subtitle}</p>
            </div>
            <h2 className="text-3xl ">{title}</h2>
          </div>
          <div className="col-span-2 h-full flex items-center w-full">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
