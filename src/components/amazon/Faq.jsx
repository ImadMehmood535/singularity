import React from "react";

const Faq = ({ subtitle, title, data }) => {
  return (
    <div className="Faq bg-[#0F121D]">
      <div className="containerCust">
        <div className="py-10 md:py-16 lg:py-20  ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-20 justify-between items-start ">
            <div className="content-area md:sticky md:top-4">
              <div className="bg-themeGray-0 mb-4 rounded-[28px] px-6 py-1 w-fit">
                <p className="text-sm">{subtitle}</p>
              </div>
              <h1 className="font-normal mb-4 text-4xl md:text-6xl leading-[78px]">
                {title}
              </h1>
            </div>
            <div className="faq-area col-span-3  ">
              <div className="  text-white rounded-[25px] px-4 pb-6 md:py-12 flex flex-col gap-4 h-full">
                <div className="w-full flex flex-col gap-4">
                  {data.map((item, key) => (
                    <div key={key} className="collapse collapse-arrow first:border-t-[1px]  rounded-none     border-b-[1px] border-[#373A45] first-child:bg-red-200">
                      <input
                        type="radio"
                        name='my-accordion-${key}'
                        defaultChecked={key === 0}
                      />
                      <div className="collapse-title  font-medium">
                        {item.title}
                      </div>
                      <div className="collapse-content ">
                        <p
                          className="text-[12px] text-[#AAAAAA] text-lg"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
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

export default Faq;
