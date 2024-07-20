"use client";
import React from "react";
import { usePathname } from "next/navigation";
import LandingPageHeader from "../landingpage/LandingPageHeader";
import Header from "./Header";

const BothHeader = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/landing-page";

  return <div>{isLandingPage ? <LandingPageHeader /> : <Header />}</div>;
};

export default BothHeader;
