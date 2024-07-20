"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { usePathname } from "next/navigation";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const CircularProgressBar = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/landing-page";
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    setProgress(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const radius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center gap-4 flex-col">
      {/* <div className="relative">
        <svg className="w-24 h-24">
          <circle
            className="progress-ring"
            stroke="rgba(0, 0, 0, 0.1)"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
          />
          <circle
            className="progress-ring-circle"
            stroke="#32BB98"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="block text-lg font-bold text-themeGreen-0">
            {Math.round(progress)}%
          </span>
        </div>
      </div> */}
      {isLandingPage ? (
        <>
          <Link
            href={"mailto:welcome@singularity.tax"}
            target="_blank"
            className="block md:hidden bg-themeGreen-0 p-4 rounded-full hover:bg-themeGray-0   transition-all duration-300"
          >
            <FaEnvelope className="text-2xl md:text-[40px] text-white" />
          </Link>
          <Link
            href={"https://wa.me/+971566290808"}
            target="_blank"
            className="bg-themeGreen-0 p-4 rounded-full hover:bg-themeGray-0   transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl md:text-[40px] text-white" />
          </Link>
        </>
      ) : (
        <Link
          href={"https://wa.me/+971566290808"}
          target="_blank"
          className="bg-themeGreen-0 p-4 rounded-full hover:bg-themeGray-0   transition-all duration-300"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_589_3544)">
              <path
                d="M591.958 459.691C590.4 458.943 532.078 430.223 521.714 426.493C517.483 424.974 512.951 423.491 508.13 423.491C500.255 423.491 493.639 427.416 488.486 435.125C482.66 443.784 465.023 464.4 459.574 470.558C458.862 471.371 457.891 472.343 457.309 472.343C456.787 472.343 447.761 468.626 445.029 467.439C382.465 440.262 334.977 374.909 328.465 363.888C327.535 362.304 327.496 361.584 327.488 361.584C327.717 360.745 329.821 358.636 330.907 357.548C334.083 354.405 337.525 350.262 340.855 346.255C342.431 344.356 344.01 342.455 345.561 340.662C350.392 335.042 352.543 330.678 355.036 325.623L356.343 322.997C362.431 310.901 357.231 300.694 355.551 297.397C354.171 294.639 329.545 235.205 326.927 228.961C320.631 213.894 312.312 206.878 300.751 206.878C299.678 206.878 300.751 206.878 296.252 207.068C290.774 207.299 260.943 211.226 247.753 219.54C233.766 228.358 210.104 256.468 210.104 305.901C210.104 350.392 238.338 392.4 250.46 408.377C250.761 408.779 251.314 409.597 252.117 410.771C298.54 478.569 356.413 528.813 415.081 552.249C471.561 574.81 498.306 577.418 513.512 577.418H513.514C519.904 577.418 525.018 576.917 529.53 576.473L532.392 576.2C551.904 574.47 594.782 552.252 604.535 525.148C612.218 503.8 614.244 480.475 609.132 472.01C605.631 466.255 599.597 463.358 591.958 459.691Z"
                fill="white"
              />
              <path
                d="M407.101 0C190.436 0 14.1656 174.945 14.1656 389.982C14.1656 459.532 32.7786 527.613 68.0384 587.197L0.550046 786.275C-0.707097 789.987 0.227968 794.091 2.97342 796.886C4.95524 798.909 7.64355 800 10.389 800C11.441 800 12.5007 799.842 13.5345 799.512L221.119 733.548C277.924 763.899 342.127 779.92 407.103 779.92C623.747 779.922 799.999 604.995 799.999 389.982C799.999 174.945 623.747 0 407.101 0ZM407.101 698.686C345.96 698.686 286.742 681.031 235.838 647.629C234.127 646.504 232.14 645.927 230.14 645.927C229.083 645.927 228.023 646.088 226.992 646.416L123.005 679.47L156.573 580.434C157.659 577.229 157.116 573.694 155.116 570.961C116.353 517.995 95.8617 455.416 95.8617 389.982C95.8617 219.74 235.483 81.2364 407.098 81.2364C578.693 81.2364 718.298 219.74 718.298 389.982C718.301 560.203 578.698 698.686 407.101 698.686Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_589_3544">
                <rect width="800" height="800" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      )}
    </div>
  );
};

export default CircularProgressBar;
