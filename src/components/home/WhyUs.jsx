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
          {whyTrustData?.map((item) => (
            <SwiperSlide key={item.id}>
              <WhyTrustBox head={item?.head} para={item?.para} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pt-12">
        <p className="pb-4 text-left">
        Ideal for businesses seeking complete VAT assistance, Singularity GmbH provides support at every stage. As expert accounting and business consultants, we simplify your VAT processes from start to finish, ensuring your financial records are flawless and compliant. Trust us to handle the complexities while you focus on growing your business.
        </p>
        <p className="pb-4 text-left">
        Our comprehensive services as accounting and business consultantsinclude VAT registration, preparation, and submission of VAT returns, as well as detailed guidance on VAT compliance. We help you understand the intricacies of VAT regulations and implement best practices to optimize your VAT management. Our team also offers VAT audit support, ensuring that you are well-prepared for any inspections or reviews by tax authorities.
        </p>
        <p className="pb-4 text-left">
        Singularity GmbH is committed to providing personalized tax and accounting services tailored to your specific needs. Our goal is to relieve you of the burdensome administrative tasks, allowing you to focus on growing your business. With our comprehensive tax and accounting services, you can rest assured that your financial affairs are in expert hands. Trust us to deliver reliable, efficient, and compliant financial solutions for your business
        </p>
        
      </div>
      </div>
      </section>
      {onlyslider === true && (
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-10 items-start containerCust !py-[130px]">
          <div className=" w-full lg:w-[50%]">
            {showContactForm && <ContactForm />}
          </div>
          <div className=" w-full lg:w-[50%]">
            <FaqComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyUs;
