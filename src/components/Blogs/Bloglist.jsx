import React from "react";
import Blogitem from "./Blogitem";

const Bloglist = ({ data }) => {
  return (
    <div className="Bloglist bg-[#0f121d] py-16">
      <div className="containerCust">
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 w-full">
          {data?.map((item, index) => (
            <Blogitem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bloglist;
