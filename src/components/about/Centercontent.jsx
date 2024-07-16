import React from "react";

const Centercontent = () => {
  return (
    <div className="Centercontent bg-[#0f121d]">
      <div className="containerCust">
        <div className=" flex flex-col items-center gap-5 containerCust !py-12">
          <h2>What Is Indirect Representation?</h2>
          <p>
            In contrast, indirect representation transfers the rights and
            obligations entirely to the representative, who manages all required
            procedures. Importers often choose this approach when they lack
            residency in the target market or when they want to avoid the
            complexities associated with customs clearance. In indirect
            representation, the representative assumes full responsibility for
            the import process, including the payment of duties, taxes, and any
            penalties. This method can provide greater peace of mind for
            importers, as the representative handles all interactions with
            customs authorities and navigates any potential challenges.
          </p>
          <p>
            Navigating EU customs can be complex due to unpredictable risks,
            fees, and duties. The EU has stringent regulations that vary between
            member states, requiring a deep understanding of local customs laws
            and procedures. Factors such as tariff classifications, valuation
            methods, and origin rules can significantly impact the import
            process. Additionally, importers must be aware of specific
            documentation requirements, including certificates of origin,
            commercial invoices, and packing lists, to ensure smooth customs
            clearance.
          </p>
          <div className="px-0 md:px-[10%] flex flex-col gap-5">
            <h2 className="mt-12">
              Singularity GmbH&apos;s Oblique Representation
            </h2>
            <p>
              We offer comprehensive indirect representation services throughout
              Germany, the UK, and the EU. Our expert team ensures smooth and
              efficient customs clearance, allowing you to focus on your core
              business activities. To register for our services, you must meet
              the following criteria:
            </p>
            <p>
              Connect the shipper to Singularity GmbH’s address with a valid EU
              EORI number. This unique identifier is crucial for customs
              processes within the EU, ensuring that all transactions are
              properly tracked and documented.
            </p>
            <p>
              Provide a legitimate VAT number for the destination country linked
              to the shipper’s business. This is essential for compliance with
              local tax regulations and enables the correct processing of VAT on
              imported goods.
            </p>
            <p>
              Ensure compliance with applicable regulations and provide a
              security deposit or guarantee. This step is necessary to cover any
              potential liabilities or duties that may arise during the import
              process, safeguarding both your business and our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centercontent;
