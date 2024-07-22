import { about2, informationBanner } from "@/assets";
import { getSingleBlog } from "@/cached-requests";
import SingleBlogBody from "@/components/Blogs/SingleBlogBody";
import SinlgeBlogHeader from "@/components/Blogs/SinlgeBlogHeader";

import React from "react";


export async function generateMetadata({ params }, parent) {
  const { data: data } = await getSingleBlog(params.slug);

  return {
    title: data?.metaTitle,
    description: data?.metaDescription,
    keywords : data?.keywords
  };
}


const page = async ({ params }) => {
  const { data: item } = await getSingleBlog(params.slug);
 
  return (
    <div className="single-blog">
      <SinlgeBlogHeader
        bannerimage={item?.imageUrl}
        subtitle={item?.categoryName}
        title={item?.name}
        content={item?.shortDescription}
      />
      <SingleBlogBody content={item?.description} />
    </div>
  );
};

export default page;
