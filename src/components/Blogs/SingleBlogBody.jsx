import React from "react";

const SingleBlogBody = ({ content }) => {
  return (
    <div className="SingleBlogBody bg-[#0F121D]">
      <div className="containerCust">
        <div className="flex flex-col items-center gap-5 containerCust !py-12 text-center">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogBody;
