import React from "react";

const IndividuallyFaq = ({ data, title, content }) => {
  return (
    <div className="  bg-black  text-white rounded-[25px] px-4 py-12 flex flex-col gap-4 h-full">
      <div className="w-full flex flex-col gap-4">
        <div className="pb-8 border-b-2 border-white">
          <h3 className="font-bold  ">{title}</h3>
          <p className="text-[13px]">{content}</p>
        </div>
        {data.map((item, key) => (
          <div
            key={key}
            className="collapse collapse-arrow first:border-t-[1px] bg-[#171717]  "
          >
            <input
              type="radio"
              name="my-accordion-${key}"
              defaultChecked={key === 0}
            />
            <div className="collapse-title  font-medium">{item.title}</div>
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
  );
};

export default IndividuallyFaq;
