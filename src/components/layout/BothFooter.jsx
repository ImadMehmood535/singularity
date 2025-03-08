"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "@/components/layout/Footer";
import LandingFooter from "../landingpage/LandingFooter";

const BothFooter = () => {
  const pathname = usePathname();
  const isLandingPage =
    pathname === "/vat-compliance-and-customs-indirect-representative-services";
  return <div>{isLandingPage ? <LandingFooter /> : <Footer />}</div>;
};

export default BothFooter;
