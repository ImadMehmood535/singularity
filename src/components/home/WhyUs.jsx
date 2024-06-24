"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import { whyTrustData } from "@/data/homePage";
import WhyTrustBox from "./WhyTrustBox";
import ContactForm from "./ContactForm";
import FaqComponent from "../general/FaqComponent";

const WhyUs = () => {
  return (
    <div className="bg-gradient-to-b from-[#0F121D] to-[#275A4F] h-full">
      <section className=" h-full py-12 flex flex-col gap-10 ">
        <div className="containerCust">
          <div className="flex flex-wrap md:flex-nowrap gap-2 justify-start  ">
            <div className="flex flex-col gap-4">
              <div className="bg-themeGray-0 rounded-[28px] px-6 py-1 w-fit">
                <p className="text-sm">Why Us</p>
              </div>

              <h2>
                Why partner <br /> with us?
              </h2>
            </div>
          </div>
        </div>
      </section>

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
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
        }}
        className="mySwiper"
      >
        {whyTrustData?.map((item) => (
          <SwiperSlide key={item.id}>
            <WhyTrustBox head={item?.head} para={item?.para} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between flex-wrap lg:flex-nowrap gap-10 items-center containerCust !py-[130px]">
        <div className=" w-full lg:w-[50%]">
          <ContactForm />
        </div>
        <div className=" w-full lg:w-[50%]">
          <FaqComponent />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
