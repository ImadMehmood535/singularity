"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import WhyTrustBox from "../home/WhyTrustBox";
import { trusted1, trusted2, trusted3, trusted5 } from "@/assets";

const PartnerList = () => {
  const whyTrustData = [
    {
      head: "Worldwide Visibility",
      para: "Expert International Consultants with Deep Knowledge and Reliable Advice.",
    },
    {
      head: "Absolute Compliance",
      para: "Achieve Your Full Potential with Unmatched and Consistent Compliance Services.",
    },
    {
      head: "Ultimate Flexibility",
      para: "Perfectly Tailored Solutions to Meet and Exceed Every Business Need.",
    },
    {
      head: "Exceptional Service Excellence",
      para: "Strong, Reliable, and Committed Partnerships for Mutual Success.",
    },
  ];
  return (
    <section className=" h-full  flex flex-col gap-10 ">
      <div className="containerCust">
        <div className="flex pb-12 flex-wrap md:flex-nowrap gap-2 justify-start  ">
          <div className="flex flex-col gap-4">
            <div className="bg-themeGray-0 rounded-[28px] px-6 py-1 w-fit">
              <p className="text-sm">Why Us</p>
            </div>

            <h2>
              Why partner <br /> with us?
            </h2>
          </div>
        </div>

        <div className={"pb-20"}>
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            slidesPerView={1}
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            spaceBetween={2}
            loop={false}
            breakpoints={{
              540: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {whyTrustData?.map((item, key) => (
              <SwiperSlide key={key}>
                <WhyTrustBox head={item?.head} para={item?.para} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PartnerList;
