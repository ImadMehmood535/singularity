import Link from "next/link";
import React from "react";

const LinkComponent = ({ text, href, bannerbtn }) => {
  return (
    <div className=" gradent-wrapper relative">
      <Link
        href={href}
        className={`table ${bannerbtn ? `bg-[#ffffff3b]  py-4` : `bg-themeGray-0  py-3`} relative customLink rounded-full w-[150px] text-center text-white z-30`}
      >
        {text}
        <span className="gradientBorder"></span>
      </Link>
    </div>
  );
};

export default LinkComponent;
