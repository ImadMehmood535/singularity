import React from "react";

const KeyResources = ({ subtitle, title, content, data }) => {
  return (
    <div className="Explore py-20 bg-[#0F121D]">
      <div className="containerCust">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 lg:gap-20 justify-between items-end">
          <div className="flex flex-col gap-4">
            <div className="bg-themeGray-0 rounded-[28px] px-6 py-1 w-fit">
              <p className="text-sm">{subtitle}</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">{title}</h2>
          </div>
          <div className="col-span-2 w-full">
            <p>{content}</p>
          </div>
        </div>
        <div className="service-area pt-8 ">
          <div className="flex flex-col lg:flex-row gap-4 ">
            {data.map((item, key) => (
              <div
                key={key}
                className=" w-full lg:w-[33.33%] p-8 rounded-2xl overflow-hidden relative custom-gradent bg-[#19161A] "
              >
                <div className="relative z-30">
                  <h4 className="text-xl md:text-2xl mb-10 text-[#A4A4A4] w-full lg:max-w-[70%]">
                    {item.title}
                  </h4>
                  <p className="text-[#A4A4A4] text-lg">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyResources;
