import Image from "next/image";
import BannerBoxes from "./BannerBoxes";
import { homeBg } from "@/assets";
import LinkComponent from "../general/LinkComponent";

const HomeBanner = () => {
  return (
    <section className="homeBackground h-screen w-full relative">
      <Image
        src={homeBg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="flex flex-col items-center justify-center h-full gap-12 containerCust relative z-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#FAFAFA]/80 text-lg">We are</p>
          <h1 className="text-animation w-[220px] md:w-[360px]">
            Masters of{" "}
            <div className="words words-1">
              <span>VAT</span>
              <span>CFS</span>
              <span>CIRS</span>
            </div>
          </h1>
          <h1>you can trust </h1>
        </div>
        <BannerBoxes />
        <p className="text-base text-center max-w-[800px] w-full">
          Singularity GmbH is an international organization that supports its
          partners with their German VAT needs. We believe in fostering
          long-term business relationships by delivering value-driven output,
          that is tailor-made just for you.
        </p>

        <LinkComponent text={"Learn More"} href={"/"} />
      </div>
    </section>
  );
};

export default HomeBanner;
