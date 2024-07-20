"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Footer from "@/components/layout/Footer";
import LandingFooter from "../landingpage/LandingFooter";

const BothFooter = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/landing-page";
  return <div>{isLandingPage ? <LandingFooter /> : <Footer />}</div>;
};

export default BothFooter;
