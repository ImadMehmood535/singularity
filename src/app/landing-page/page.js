import IndividuallyFaq from "@/components/general/IndividuallyFaq";
import ContactForm from "@/components/home/ContactForm";
import ScrollHome from "@/components/home/ScrollHome";
import Ticker from "@/components/home/Ticker";
import LandingBanner from "@/components/landingpage/LandingBanner";
import LandingFormAndFaq from "@/components/landingpage/LandingFormAndFaq";
import LandingTeam from "@/components/landingpage/LandingTeam";
import LandingTrustedPartners from "@/components/landingpage/LandingTrustedPartners";
import PartnerList from "@/components/landingpage/PartnerList";
import React from "react";

const page = () => {
  return (
    <div className="landing-page">
      <LandingBanner />
      <div className="bg-[#0F121D]">
        <Ticker />
      </div>
      <LandingTrustedPartners />
      <div className=" ">
        <ScrollHome />
      </div>
      <div className="bg-gradient-to-b from-[#0F121D] to-[#275A4F] !py-16 ">
        <LandingTeam />
        <PartnerList />
        <LandingFormAndFaq
          title={"Frequently Asked Questions"}
          content={
            "At Singularity, we are dedicated to providing clarity and support for all your queries regarding our innovative services and unique approach. We strive to help your business excel. If you do't find your question answered below, please feel free to contact us directly. We're always here to assist you!"
          }
        />
      </div>
    </div>
  );
};

export default page;
