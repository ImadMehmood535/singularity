import React from "react";

const Resources = ({ subtitle, title, data }) => {
  return (
    <div className="Resources">
      <div className="ResourcesCategory bg-[#0F121D]">
        <div className="containerCust">
          <div className="py-10 md:py-16 lg:py-20 border-b-2 border-[#2C3246]">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-20 justify-between items-start ">            
              <div className="content-area md:top-4">
                <div className="bg-themeGray-0 mb-4 rounded-[28px] px-6 py-1 w-fit">
                  <p className="text-sm">{subtitle}</p>
                </div>
                <h1 className="font-normal mb-4 text-4xl md:text-6xl leading-[78px]">
                  {title}
                </h1>
              </div>
              <div className="service-area col-span-3 md:mt-10">
                <div className="flex flex-col lg:flex-row gap-4 ">
                  {data.map((item, key) => (
                    <div
                      key={key}
                      className=" w-full lg:w-[25%] p-6 pb-8 rounded-2xl overflow-hidden relative   bg-[#181B26] "
                    >
                      <div className="relative z-30">
                        <div className="icon-wrapper mb-4">{item.icon}</div>
                        <h4 className="text-xl mb-4 w-full  ">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
