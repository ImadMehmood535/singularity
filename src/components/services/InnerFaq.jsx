import React from "react";
import ContactForm from "../home/ContactForm";

const InnerFaq = ({ data, title, content }) => {
  return (
    <div className="Faq bg-[#0F121D]">
      <div className="containerCust">
        <div className="py-10 md:py-16 lg:py-20  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 justify-between items-start ">
            <div className="content-area md:sticky md:top-4">
              <ContactForm />
            </div>
            <div className="faq-area  ">
              <div className="  bg-black  text-white rounded-[25px] px-4 py-12 flex flex-col gap-4 h-full">
                <div className="w-full flex flex-col gap-4">
                  <div className="pb-8 border-b-2 border-white">
                    <h3 className="font-bold  ">{title}</h3>
                    <p className="text-[13px]">
                      {content}
                    </p>
                  </div>
                  {data.map((item, key) => (
                    <div
                      key={key}
                      className="collapse collapse-arrow first:border-t-[1px]  rounded-none     border-b-[1px] border-[#373A45] first-child:bg-red-200"
                    >
                      <input
                        type="radio"
                        name="my-accordion-${key}"
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

export default InnerFaq;
