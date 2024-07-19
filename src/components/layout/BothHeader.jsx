"use client"; // Ensure this component runs on the client-side

import React from 'react';
import { usePathname } from 'next/navigation'; // Correct hook for client-side navigation
import LandingPageHeader from '../landingpage/LandingPageHeader';
import Header from './Header';

const BothHeader = () => {
  const pathname = usePathname(); // Get the current path
  const isLandingPage = pathname === "/landing-page"; // Check if the path is /landing-page

  return (
    <div>
      {isLandingPage ? <LandingPageHeader /> : <Header />}
    </div>
  );
}

export default BothHeader;
