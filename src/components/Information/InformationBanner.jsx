import React from "react";

const InformationBanner = ({ bannerimage, title, subtitle, content }) => {
  return (
    <section
      className="InformationBanner bg-[#0F121D] pb-36 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerimage.src})`,
      }}
    >
      <div className="containerCust rounded-b-[20px] md:rounded-b-[60px] lg:rounded-b-[80px]  ">
        <div className="py-[60px] md:py-[100px] lg:py-[150px] md:pt-[180px] pb:[150px] px-10 flex justify-center">
          <div className="content-area max-w-[1000px] flex flex-col gap-3 items-center justify-center text-center">
            <div className="bg-[#ffffff40] rounded-[28px] px-6 py-1 w-fit">
              <p className="text-sm">{subtitle}</p>
            </div>
            <h1 className="mb-4 text-4xl leading-[50px] md:text-6xl md:leading-[78px] text-gradent">
              {title}
            </h1>
            <p className="text-lg text-center max-w-[720px] w-full mb-6">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationBanner;
