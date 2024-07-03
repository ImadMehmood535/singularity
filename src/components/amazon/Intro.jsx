import React from "react";

const Intro = ({ subtitle, title, content }) => {
  return (
    <div className="Explore bg-[#0F121D]">
      <div className="containerCust !py-20 border-b-[1px] border-[#2C3246]">
        <div className="max-w-[767px] mx-auto text-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="bg-themeGray-0 rounded-[28px] px-6 py-1 w-fit flex">
              <p className="text-sm">{subtitle}</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h2>
            <p className="text-gradent-p text-lg md:text-3xl">{content}</p>
          </div>
          
        </div>
        {/* <div className="service-area pt-8 ">
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
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
