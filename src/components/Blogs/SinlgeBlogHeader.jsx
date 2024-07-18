import React from "react";

const SinlgeBlogHeader = ({
  bannerimage,
  title,
  subtitle,
  content,
  btntext,
  btnlink,
  bannerbtn,
}) => {
  return (
    <section className="InformationBanner bg-[#0F121D] bg-cover bg-center bg-no-repeat">
      <div
        className="containerCust overflow-hidden relative rounded-b-[20px] md:rounded-b-[60px] lg:rounded-b-[80px]  "
        style={{
          backgroundImage: `url(${bannerimage.src})`,
        }}
      >
        <div className="pt-[150px] pb-[60px] z-20 relative md:py-[100px]  lg:pt-[250px] lg:pb-[150px] px-10 flex justify-center">
          <div className="content-area max-w-[1000px] flex flex-col gap-3 items-center justify-center text-center">
            <div className="bg-[#ffffff40] rounded-[28px] px-6 py-1 w-fit">
              <p className="text-sm">{subtitle}</p>
            </div>
            <h1 className="mb-4 text-4xl leading-[50px] md:text-6xl md:leading-[78px] text-gradent">
              {title}
            </h1>
            {content && (
              <p className="text-lg text-center max-w-[720px] w-full mb-6">
                {content}
              </p>
            )}
            {btntext && (
              <>
                <div className="flex justify-between flex-col md:flex-row gap-4 items-center mb-8">
                  <Image
                    src={amazonlogo1}
                    width={200}
                    height={100}
                    className="w-full"
                  />
                  <Image
                    src={amazonlogo2}
                    width={200}
                    height={100}
                    className="w-full"
                  />
                </div>
                <div className="flex">
                  <div className=" gradent-wrapper relative">
                    <Link
                      href={btnlink}
                      className={`table ${
                        bannerbtn
                          ? `bg-[#ffffff3b]  py-4`
                          : `bg-themeGray-0  py-3`
                      } relative customLink rounded-full px-6 text-center text-white z-30`}
                    >
                      {btntext}
                      <span className="gradientBorder"></span>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinlgeBlogHeader;
