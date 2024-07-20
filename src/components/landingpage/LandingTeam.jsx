import { about2, about3 } from "@/assets";
import Image from "next/image";
import React from "react";

const LandingTeam = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-no-repeat">
        <div className="containerCust lg:px-[10%]">
          <div className="w-full flex flex-col gap-7  text-center   h-full ">
            <div className="content-area mb-12 flex flex-col gap-7 ">
              <h2>Meet Our Expert and Committed Team</h2>
              <p>
                Our team is composed of seasoned professionals dedicated to
                delivering exceptional results. With extensive expertise and a
                passion for excellence, we ensure the highest standards in every
                project. Trust our commitment to quality and innovation. Join
                Singularity and experience the difference of working with true
                experts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
              <Image
                src={about2}
                alt="about"
                width={650}
                height={650}
                className="w-full"
              />
              <Image
                src={about3}
                alt="about"
                width={650}
                height={650}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTeam;
