import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const LandingPageHeader = () => {
  const [expend, setExpend] = useState(true);
  return (
    <div
      className={`glass-effect flex-col md:flex-row gap-2 md:gap-0 flex justify-between items-center transition-all  ${
        expend ? "max-w-[330px] md:max-w-[767px]" : " max-w-[270px]"
      } mx-auto w-full  headerShadow fixed top-10 right-0 left-0 z-[100] rounded-[40px] px-6 py-3`}
    >
      <Link href={"/"} className="table min-w-[130px] max-w-[130px]">
        <Image
          src={logo}
          alt="logo"
          width={130}
          height={60}
          quality={100}
          fetchPriority="high"
        />
      </Link>

      <div
        className={`transition-all ease-in-out overflow-hidden  hidden md:block ${
          expend ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* <ul className={`flex flex-col sm:flex-row gap-4`}>
          {navItems?.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.href}
                className={`text-white whitespace-nowrap hover:text-themeGreen-0 transition-all text-sm`}
              >
                {item.name}
              </Link>
              {item?.subLinks && (
                <ul className="group-hover:block hidden absolute z-[999] left-0 top-full bg-white text-black w-max p-2 mt-2 shadow-lg rounded-md">
                  {item.subLinks.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.href}
                        className="block whitespace-nowrap hover:text-themeGreen-0 transition-all text-sm p-2"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul> */}
      </div>
      {}
      <div
        onClick={() => setExpend(!expend)}
        className={`${
          expend ? "hidden" : "block"
        } bg-white hover:bg-themeGreen-0 group transition-all rounded-[51px] px-2 py-1 cursor-pointer`}
      >
        <p className="text-themeGreen-0 group-hover:text-white text-sm">Menu</p>
      </div>

      <div
        className={`${
          expend ? "block" : "hidden"
        } flex justify-end items-center gap-3`}
      >
        <div className="  transition-all  group rounded-full px-4 py-2 hidden md:block">
          <Link
            href={"/"}
            className="text-lg text-white group-hover:text-themeGreen-0 flex flex-row gap-3 items-center"
          >
            <FaEnvelope className="text-3xl"/>
            welcome@singularity.tax
          </Link>
        </div>
        <div className="bg-[#32BB98] transition-all hover:bg-white group rounded-full px-4 py-2 hidden md:block">
          <Link
            href={"/"}
            className="text-lg text-white group-hover:text-themeGreen-0 flex flex-row gap-1 items-center"
          >
            <FaWhatsapp className="text-3xl"/>
            Whatsapp
          </Link>
        </div>
        
         
      </div>
      {/* <div
        className={`transition-all bg-white/60 border-[5px] border-black/10 ease-in-out overflow-hidden block md:hidden absolute top-20 rounded-xl left-0 w-full p-4 ${
          expend ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className={`flex flex-col sm:flex-row gap-4`}>
          {navItems?.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-white whitespace-nowrap hover:text-themeGreen-0 transition-all text-sm"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default LandingPageHeader;
