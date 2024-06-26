import React from "react";
import Explore from "./Explore";

const InnerServiceFeature = ({ subtitle, title, content, data, flip }) => {
  return (
    <div className="InnerServiceFeature bg-[#0F121D]">
      <div className="border-b-2 border-[#2C3246]  pb-16 ">
        <Explore subtitle={subtitle} title={title} content={content} />
        <div className="containerCust">
          <div className={`flex flex-col ${flip ? `md:flex-row-reverse` : `md:flex-row`} gap-4 justify-between`}>
            <div
              className="flex-1 box-wrapper overflow-hidden rounded-xl bg-cover bg-no-repeat bg-center md:min-h-[660px]"
              style={{
                backgroundImage: `url(${data[0].image.src})`,
              }}
            >
              <div className="w-full h-full py-8 px-4 md:px-8 bg-gradient-to-tl from-[#0f2ac37a] to-[#32bb9967]">
                <h3 className="text-white text-xl mb-2">{data[0].title}</h3>
                <p className="text-white">{data[0].content}</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              {data.slice(1).map((item, index) => (
                <div
                  key={index}
                  className="box-wrapper overflow-hidden rounded-xl bg-cover bg-no-repeat bg-center h-[50%]"
                  style={{
                    backgroundImage: `url(${item.image.src})`,
                  }}
                >
                  <div className="w-full h-full py-8 px-4 md:px-8 bg-gradient-to-tl from-[#0f2ac37a] to-[#32bb9967]">
                    <h3 className="text-white text-xl mb-2">{item.title}</h3>
                    <p className="text-white">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerServiceFeature;
