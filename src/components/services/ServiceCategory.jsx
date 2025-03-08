import React from "react";
import LinkComponent from "../general/LinkComponent";

const ServiceCategory = ({ title, content, data, text, href }) => {
  return (
    <div className="ServiceCategory bg-[#0F121D]">
      <div className="containerCust">
        <div className="py-10 md:py-16 lg:py-20 border-t-2 border-[#2C3246]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 justify-between items-start lg:items-end">
            <div className="content-area md:sticky md:top-4">
              <h2 className="service-heading mb-4 text-2xl md:text-4xl text-gradent leading-[78px]">
                {title}
              </h2>
              <p className="text-lg max-w-[720px] text-[#C1C1C1] w-full mb-6">
                {content}
              </p>
              <div className="flex">
                <LinkComponent text={text} href={href} bannerbtn={true} />
              </div>
            </div>
            <div className="service-area col-span-2 ">
              <div className="flex flex-col lg:flex-row gap-4 ">
                {data.map((item, key) => (
                   
                  <div
                    key={key}
                    className=" w-full lg:w-[33.33%] p-6 rounded-2xl overflow-hidden relative custom-gradent rotate-360 bg-[#19161A] "
                  >
                    <div className="relative z-30">
                      <div className="bg-[#ffffff26] custom-shadow rounded-[28px] px-6 py-2 border-white border w-fit mb-16">
                        <p className="text-sm">{item.subtitle}</p>
                      </div>
                      <h4 className="text-xl text-[#A4A4A4] mb-4 w-full md:max-w-[70%]">
                        {item.title}
                      </h4>
                      <p className="text-[#A4A4A4] text-base">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory;
