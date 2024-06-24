"use client";
import React from "react";
import NextNProgress from "nextjs-progressbar";

const ProgressComponent = () => {
  return (
    <NextNProgress
      color="#32BB98"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
  );
};

export default ProgressComponent;
