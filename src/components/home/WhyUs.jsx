"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import { whyTrustData } from "@/data/homePage";
import WhyTrustBox from "./WhyTrustBox";
import ContactForm from "./ContactForm";
import FaqComponent from "../general/FaqComponent";

const WhyUs = ({ onlyslider }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactForm(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={` ${
        onlyslider === false
          ? `bg-[#0F121D]`
          : `bg-gradient-to-b from-[#0F121D] to-[#275A4F]`
      } h-full`}
    >
      <section className=" h-full pt-12 flex flex-col gap-10 ">
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

          <div className={onlyslider === false ? "pb-20" : ""}>
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
          {onlyslider === true && (
            <div className="pt-12">
              <p className="pb-4 text-left">
                Ideal for businesses seeking complete VAT assistance,
                Singularity GmbH provides support at every stage. As expert
                accounting and business consultants, we simplify your VAT
                processes from start to finish, ensuring your financial records
                are flawless and compliant. Leave the details to us so you can
                concentrate on nurturing your business.
              </p>
              <p className="pb-4 text-left">
                Our complete solutions for accounting and business consultancy
                include VAT registration, preparation, and submission of VAT
                returns, as well as extensive advice on VAT compliance. We
                assist you in unraveling essential concepts of VAT and improving
                your organization's VAT management. We also provide VAT audits;
                thus, our team ensures you are prepared for the tax department's
                inspection and review.
              </p>
              <p className="pb-4 text-left">
                Singularity GmbH offers customized tax and accounting services
                based on the client’s needs. Our concern is to ease the burden
                of all the paperwork that comes with your business's growth.
                Regarding your taxes and consolidations, you are in the best
                hands with our outstanding tax and accounting services. Let us
                provide reliable, efficient, and, most of all, legal and
                financial solutions for your company.
              </p>
            </div>
          )}
        </div>
      </section>
      {onlyslider === true && (
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-10 items-start containerCust !py-[130px]">
          <div className="w-full lg:w-[50%] md:sticky top-32">
            {showContactForm && <ContactForm />}
          </div>
          <div className="w-full lg:w-[50%]">
            <FaqComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyUs;
