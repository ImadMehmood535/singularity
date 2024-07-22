import { about2 } from "@/assets";
import { getAllBlogs } from "@/cached-requests";
import AboutBanner from "@/components/about/AboutBanner";
import Bloglist from "@/components/Blogs/Bloglist";
import React from "react";

export const metadata = {
  title: " Blogs | Latest Insights on Tax & VAT",
  description:
    "Stay updated with our latest blogs on VAT regulations, compliance, business strategies, and financial insights.",
  keywords: [
    "VAT blogs",
    "business insights",
    " VAT compliance tips",
    "financial advice",
    "business strategies",
  ],
};

const page = async () => {
  const { data: blogs } = await getAllBlogs();

  return (
    <div className="text-center w-full">
      <AboutBanner subtitle="Our Blogs" title="Publications/Articles" />
      <Bloglist data={blogs} />
    </div>
  );
};

export default page;
