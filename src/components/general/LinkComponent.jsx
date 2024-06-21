import Link from "next/link";
import React from "react";

const LinkComponent = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="bg-themeGray-0 relative customLink rounded-full w-[150px] py-3 text-center text-white"
    >
      {text}
      <span className="gradientBorder"></span>
    </Link>
  );
};

export default LinkComponent;
