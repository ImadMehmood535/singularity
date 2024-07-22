import Link from "next/link";
import React from "react";

const PrivacyPolicyBody = ({ content }) => {
  return (
    <div className="ImpressumBody bg-[#0F121D] text-white">
      <div className="containerCust">
        <div className="flex flex-col items-center gap-5 containerCust !py-12">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyBody;
