import { box1, box2, box3 } from "@/assets";
import Image from "next/image";
import React from "react";

const BannerBoxes = () => {
  return (
    <div className="relative flex items-center ">
      <figure className="relative z-10 -mr-[100px] md:-mr-5 top-0 hover:-top-[10%] transition-all  ">
        <Image
          src={box1}
          alt="Description of box1"
          width={280}
          height={200}
          quality={100}
          loading="eager"
          fetchPriority="high"
        />
        <figcaption className="sr-only">Box 1</figcaption>
      </figure>
      <figure className="relative z-20 top-0 hover:-top-[10%] transition-all">
        <Image
          src={box2}
          alt="Description of box2"
          width={280}
          height={200}
          quality={100}
          loading="eager"
          fetchPriority="high"
        />
        <figcaption className="sr-only">Box 2</figcaption>
      </figure>
      <figure className="relative md:z-30 -ml-[100px] md:-ml-5 top-0 hover:-top-[10%] transition-all ">
        <Image
          src={box3}
          alt="Description of box3"
          width={280}
          height={200}
          quality={100}
          loading="eager"
          fetchPriority="high"
        />
        <figcaption className="sr-only">Box 3</figcaption>
      </figure>
    </div>
  );
};

export default BannerBoxes;
