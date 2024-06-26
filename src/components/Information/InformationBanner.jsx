import React from "react";

const InformationBanner = ({ bannerimage, title, subtitle, content }) => {
  return (
    <section className="InformationBanner bg-[#0F121D] bg-cover bg-center bg-no-repeat">
      <div
        className="containerCust overflow-hidden relative rounded-b-[20px] md:rounded-b-[60px] lg:rounded-b-[80px]  "
        style={{
          backgroundImage: `url(${bannerimage.src})`,
        }}
      >
        <div className="py-[60px] z-20 relative md:py-[100px]  lg:pt-[250px] lg:pb-[150px] px-10 flex justify-center">
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
