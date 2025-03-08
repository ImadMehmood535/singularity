import React from "react";

const SingleBlogBody = ({ content }) => {
  return (
    <div className="SingleBlogBody bg-[#0F121D]">
      <div className="containerCust">
        <div className="flex flex-col  gap-5 containerCust !py-12 text-white ">
          <div
            className="customShortDescriptionStyling"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogBody;
