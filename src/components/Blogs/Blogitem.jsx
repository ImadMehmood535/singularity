import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogitem = ({ item }) => {
  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };
  return  (
    <Link href={`/blogs/${item.slug}`}>
      <div className="p-[1px] customLink2  relative  bg-[#19161A] cursor-pointer group">
        <div className="w-full z-20 relative flex flex-col gap-3 bg-[#19161A] overflow-hidden rounded-[18px] custom-gradent rotate-360 ">
          <div className=" relative w-full">
            <Image
              src={item?.image}
              alt={item?.tite}
              width={400}
              height={400}
              quality={75}
              loading="eager"
              fetchPriority="high"
              className="w-full    bottom-0 rounded-none"
            />
          </div>
          <div className="content-area text-left px-4 py-6">
            <h3 className="text-themeTextGray-0 mb-4 group-hover:text-white">{item?.tite}</h3>
            <div className="flex justify-between items-center flex-row">

            </div>
            <p className="text-sm text-themeTextGray-0 h-[70px]">
              {truncateContent(item?.content, 100)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blogitem;
