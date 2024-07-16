import React from "react";

const SalesFeature = ({ data }) => {
  return (
    <div className="SalesFeature bg-[#0F121D] pt-10">
      <div className="containerCust">
        {data.map((item, index) => (
          <div className="wrapper pt-10 pb-16" key={index}>
            <div className="max-w-[560px] mx-auto text-left md:text-center mb-10">
              <div className="flex flex-col gap-4 items-start md:items-center">
                <h2 className="text-2xl gradientstyle2 md:text-3xl lg:text-4xl mb-4 font-bold">
                  {item.sectionheading}
                </h2>
                <p className="text-base text-[#C1C1C1]">
                  {item.sectioncontent}
                </p>
              </div>
            </div>
            <div className="service-area col-span-2 ">
              <div className="flex flex-col lg:flex-row gap-4 ">
                {item.block.map((item, index) => (
                  <div
                    key={index}
                    className=" w-full lg:w-[50%] p-6 rounded-2xl overflow-hidden relative custom-gradent2 rotate-360 bg-[#0F121D] "
                  >
                    <div className="relative z-30 h-full flex flex-col justify-between">
                      <div className="bg-[#ffffff26] custom-shadow rounded-[28px] px-6 py-2 border-white border w-fit mb-16">
                        <p className="text-sm">{item.title}</p>
                      </div>

                      <p className="text-[#A4A4A4] text-base">{item.content}</p>
                      {item.points && (
                        <ul className="list-disc ml-6 mt-2 flex flex-col gap-1 text-[#A4A4A4] text-base">
                          {item.points.map((item, index) => (
                            <li key={index}>{item.point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesFeature;
