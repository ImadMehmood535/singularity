"use client";

import React, { useState, useEffect } from "react";

const CircularProgressBar = () => {
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
    <div className="flex items-center justify-center">
      <div className="relative">
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
      </div>
    </div>
  );
};

export default CircularProgressBar;
