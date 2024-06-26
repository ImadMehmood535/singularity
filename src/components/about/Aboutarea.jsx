import React from "react";
import Image from "next/image";
import { about1 } from "@/assets";

const Aboutarea = () => {
  return (
    <div className="Aboutarea bg-[#0F121D]">
      <div className="containerCust">
        <div className="flex flex-col items-center gap-5 containerCust !py-12">
          <h2>Who We Are</h2>
          <p>
            Singularity GmbH Steuerberatungsgesellschaft is a German-qualified
            global team of experts, consultants, and professionals with decades
            of experience and a complete kit of tools, and knowledge curated to
            serve, assist, and provide advice for a wide range of growing
            clientele base stretching across Germany and the European Union
            countries and worldwide jurisdictions. A company that supports its
            client base with their German VAT needs.
          </p>
          <p>
            We understand the true meaning of long-term business relationships
            and how to create a dynamic work environment by delivering tailored
            services for value-driven solutions. With offices situated across
            Europe and the Middle East, we proudly serve with passion and strive
            for commitment. Through our strong foundations in service integrity,
            innovation, and continuous development in accordance with the
            evolving international and national market trends, our history of
            merits includes an incomparable record of successes, constant
            customer satisfaction and capacity to accommodate different
            businesses in size, nature, or requirements bandwidth.
          </p>

          <Image
            src={about1.src}
            width={1000}
            height={1000}
            alt="about-1"
            className="mt-12 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutarea;
