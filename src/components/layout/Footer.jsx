"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTiktok } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { logo } from "@/assets";
import Image from "next/image";
import VectorComponent from "../home/VectorComponent";
import { company_links, quick_links } from "@/data/footer";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="relative z-50 ">
        <VectorComponent />
      </div>
      <div
        className={`Footer overflow-hidden  relative py-10 md:pt-20 md:pb-10 px-0 mx-auto ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="containerCust">
          <div className="w-full  mb-14 mt-14 md:mt-0">
            <h2 className=" font-bold">
              Your trusted partner <br /> for taxation
            </h2>
          </div>
          <div className="  relative z-20">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div className="left-area w-full md:w-5/6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="useful-links">
                    <h4 className="uppercase  font-bold text-lg mb-4">
                      Quick Links
                    </h4>
                    <ul className="flex flex-col gap-3 text-sm font-medium">
                      {quick_links.map((item, key) => (
                        <li key={key}>
                          <Link
                            href={item.link}
                            className=" text-sm font-[300] hover:text-[#32BB98]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="useful-links">
                    <h4 className="uppercase  font-bold text-lg mb-4">
                      Company
                    </h4>
                    <ul className="flex flex-col gap-3 text-sm font-medium">
                      {company_links.map((item, key) => (
                        <li key={key}>
                          <Link
                            href={item.link}
                            className=" text-sm font-[300] hover:text-[#32BB98]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="useful-links">
                    <h4 className="uppercase  font-bold text-lg mb-4">
                      Contact Us
                    </h4>
                    <div className="flex flex-col gap-3">
                      <Link
                        href={"/"}
                        className="GeneralSans text-sm font-medium hover:text-[#32BB98] w-[80%]"
                      >
                        Sales
                      </Link>
                      <Link
                        href={"/"}
                        className="GeneralSans text-sm font-normal hover:text-[#32BB98] w-[80%]"
                      >
                        Contact Sales
                      </Link>
                      <Link
                        href={"tel:+9715612345678"}
                        className="GeneralSans text-md font-normal hover:text-[#32BB98] w-[80%]"
                      >
                        +971 (56) 123 45678
                      </Link>
                    </div>
                    {/* <ul className="flex flex-col gap-3 text-sm font-medium">
                      {quick_links.map((item, key) => (
                        <li key={key}>
                          <Link
                            href={item.link}
                            className=" text-sm font-[300] hover:text-[#32BB98]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul> */}
                  </div>

                  <div className="useful-links">
                    <h4 className="uppercase  font-bold text-lg mb-4">
                      Follow us on
                    </h4>
                    <div className="social-list mt-5">
                      <ul className="flex flex-row gap-2 justify-start">
                        <Link
                          href={
                            "https://www.facebook.com/SingularityGmbh/?_rdc=1&_rdr"
                          }
                          target="_blank"
                        >
                          <li
                            className={`p-3 rounded-2xl bg-[#464646] hover:bg-[#32BB98] text-white hover:text-black   transition-all duration-200 `}
                          >
                            <RiFacebookFill />
                          </li>
                        </Link>
                        <Link
                          href={"https://twitter.com/singularitygmbh"}
                          target="_blank"
                        >
                          <li
                            className={`p-3 rounded-2xl bg-[#464646] hover:bg-[#32BB98] text-white hover:text-black   transition-all duration-200 `}
                          >
                            <FaTwitter />
                          </li>
                        </Link>
                        <Link
                          href={"https://www.instagram.com/singularitygmbh/"}
                          target="_blank"
                        >
                        <li
                          className={`p-3 rounded-2xl bg-[#464646] hover:bg-[#32BB98] text-white hover:text-black   transition-all duration-200 `}
                        >
                          <PiInstagramLogo />
                        </li>
                        </Link>
                        <Link
                          href={"https://www.linkedin.com/company/singularity-gmbh"}
                          target="_blank"
                        >
                        <li
                          className={`p-3 rounded-2xl bg-[#464646] hover:bg-[#32BB98] text-white hover:text-black   transition-all duration-200 `}
                        >
                          <FaLinkedinIn />
                        </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-area w-full md:w-2/6">
                <div className="newsletter">
                  <h4 className="uppercase  font-bold text-lg mb-4">
                    Subscribe to our newsletter
                  </h4>
                  <p className="mb-3  font-[300] text-base">
                    Subscribe to our newsletter for expert VAT tips, regulatory
                    updates, and industry insights.
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-row justify-between items-center gap-1">
                      <div className="field-wrapper w-5/6">
                        <input
                          type="text"
                          className={` rounded-full py-3 px-6 focus:border-none focus:outline-none w-full ${
                            isDarkMode
                              ? "bg-white text-black"
                              : "bg-black text-white"
                          }`}
                          placeholder="Your email, please"
                          {...register("Email", {
                            required: "Enter your email",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Please enter a valid email address",
                            },
                          })}
                        />
                        {errors.Email && (
                          <span className="error text-red-500 text-sm mt-1">
                            {errors.Email.message}
                          </span>
                        )}
                      </div>
                      <div className="button-wrapper  w-1/3">
                        <button className="bg-black w-full rounded-full font-medium text-white  table py-3 transition-all duration-200 cursor-pointer text-center hover:bg-[#32BB98]">
                          Suscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="flex justify-between flex-wrap items-center py-10 md:py-[100px] gap-10">
              <div className="w-full md:w-1/5">
                <Image
                  src={logo}
                  alt="Description of box1"
                  width={280}
                  height={200}
                  quality={100}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="w-full md:w-[25%]">
                <div className="icon-list">
                  <ul className="flex flex-col gap-2 text-sm font-medium">
                    <li className="flex flex-row gap-3 items-center justify-start">
                      <div className="ml-[4px]">
                        <svg
                          width="20"
                          height="26"
                          viewBox="0 0 20 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.8198 0C4.74025 0 0.606598 4.40483 0.606598 9.82042C0.606598 17.5153 8.95376 25.4605 9.30898 25.7942C9.45536 25.9317 9.63758 26 9.8198 26C10.002 26 10.1842 25.9318 10.3306 25.7952C10.6858 25.4605 19.033 17.5153 19.033 9.82042C19.033 4.40483 14.8993 0 9.8198 0ZM9.8198 15.1667C6.99749 15.1667 4.70135 12.7367 4.70135 9.75C4.70135 6.76325 6.99749 4.33333 9.8198 4.33333C12.6421 4.33333 14.9382 6.76325 14.9382 9.75C14.9382 12.7367 12.6421 15.1667 9.8198 15.1667Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <Link
                        href={"https://maps.app.goo.gl/ogtxnMrFi4NX8cDu5"}
                        target="_blank"
                        className="GeneralSans text-sm font-medium hover:text-[#32BB98] w-[80%]"
                      >
                        Goerscheider Weg 50 42579 Heiligenhaus
                      </Link>
                    </li>
                    <li className="flex flex-row gap-3 items-center justify-start  w-full">
                      <svg
                        width="29"
                        height="30"
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.76014 25C4.10562 25 3.54551 24.7554 3.07981 24.2663C2.61331 23.7763 2.38007 23.1875 2.38007 22.5V7.5C2.38007 6.8125 2.61331 6.22417 3.07981 5.735C3.54551 5.245 4.10562 5 4.76014 5H23.8007C24.4553 5 25.0158 5.245 25.4823 5.735C25.948 6.22417 26.1808 6.8125 26.1808 7.5V22.5C26.1808 23.1875 25.948 23.7763 25.4823 24.2663C25.0158 24.7554 24.4553 25 23.8007 25H4.76014ZM14.2804 16.25L23.8007 10V7.5L14.2804 13.75L4.76014 7.5V10L14.2804 16.25Z"
                          fill="white"
                        />
                      </svg>

                      <Link
                        href={"mailto:gethelp@singularity.tax"}
                        className="GeneralSans text-sm font-medium hover:text-[#32BB98] max-w-[295px]"
                      >
                        Write to us for any query at gethelp@singularity.tax
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-white/10 mb-7 w-full" />

            <div className="bottom-footer flex-wrap mb-6 font-[300] text-sm w-full flex flex-col justify-between md:flex-row  items-center">
              <div className="rights-text">
                <p className=" whitespace-nowrap text-base">
                  <span className="font-[300] text-sm">Copyright © 2024 </span>
                  <span className="font-[300] text-sm">
                    Copyright © 2024 Singularity GmbH. All Rights Reserved. <br/>Design and Developed by<Link className="text-themeGreen-0 hover:text-white transition-all duration-200" href={"https://www.clicktap.ae/"} target="_blank"> Clicktap Digital</Link>.
                  </span>
                </p>
              </div>
              <div className="payments flex flex-row gap-1 items-start md:items-center justify-start md:justify-end">
                <div className="link-list">
                  <ul className="flex  flex-row gap-3 text-sm font-medium">
                    <li className="text-center">
                      <Link
                        href={"/impressum-legal-notice"}
                        className=" font-[300] text-sm hover:text-[#32BB98] w-[80%]"
                      >
                        Impressum
                      </Link>
                    </li>
                    <li className="text-center">
                      <Link
                        href={"/"}
                        className=" font-[300] text-sm hover:text-[#32BB98]"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="text-center">
                      <Link
                        href={"/"}
                        className=" font-[300] text-sm hover:text-[#32BB98]"
                      >
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
