import Image from "next/image";
import BannerBoxes from "./BannerBoxes";
import { homeBg } from "@/assets";
import LinkComponent from "../general/LinkComponent";

const HomeBanner = () => {
  return (
    <section className="homeBackground h-screen md:h-[120vh] w-full relative pt-[230px] md:pt-[140px] lg:pt-[0px] pb-[80px] ">
      <Image
        src={homeBg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        fetchPriority="high"
        loading="eager"
      />
      <div className="flex z-40 flex-col items-center justify-center h-full gap-12 containerCust relative top-4 md:top-8">
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
          Regarding tax and accounting services, Singularity GmbH can offer you
          everything from complete audit management to submitting everyday VAT
          returns. Leave it to us and be assured of clean books of account for
          your company&apos;s business. We have a professional staff of specialists
          who aim to provide comprehensive taxation and accountancy solutions
          optimized for your company&apos;s requirements, encompassing such services
          as bookkeeping, payroll services, and preparation of financial
          statements.
        </p>

        <LinkComponent text={"Learn More"} href={"/about-us"} />
      </div>
    </section>
  );
};

export default HomeBanner;
