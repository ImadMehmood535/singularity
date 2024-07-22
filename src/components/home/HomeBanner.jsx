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
      <div className="flex flex-col items-center justify-center h-full gap-12 containerCust relative z-10 top-4 md:top-8">
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
          Singularity GmbH is your trusted partner for all tax and accounting
          services, from comprehensive audit management to regular VAT returns.
          Let us handle the complexities and ensure your financial records are
          impeccable. Our expert team offers a full suite of tax and accounting
          services designed to meet the unique needs of your business, including
          bookkeeping, payroll processing, and financial statement preparation.
        </p>

        <LinkComponent text={"Learn More"} href={"/about-us"} />
      </div>
    </section>
  );
};

export default HomeBanner;
