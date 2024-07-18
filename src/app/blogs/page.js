import { about2  } from "@/assets";
import AboutBanner from "@/components/about/AboutBanner";
import Bloglist from "@/components/Blogs/Bloglist";
import React from "react";

const page = () => {
  const data = [
    {
      image: about2,
      tite: "VAT Compliance For Amazon Sellers",
      slug: "VAT-Compliance-For-Amazon-Sellers",
      content: "As e-commerce continues to surge, Amazon has become a haven for sellers worldwide, offering a global product marketplace. Understanding Value-Added Tax (VAT) compliance is crucial for those eyeing the German market. As Europe’s largest economy, Germany presents lucrative opportunities but also demands strict adherence to its tax regulations. This blog aims to illuminate the essential considerations and strategies for Amazon sellers regarding VAT compliance in Germany.",
      data: "December 19, 2023",
      category: "artical 23",
    },
    
  ];
  return (
    <div className="text-center w-full">
      <AboutBanner subtitle="Our Blogs" title="Blogs" />
      <Bloglist data={data} />
    </div>
  );
};

export default page;
