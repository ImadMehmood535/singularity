import React from "react";

const FaqComponent = () => {
  return (
    // <div className="bg-black  text-white rounded-[25px] px-4 py-12 flex flex-col gap-4 h-full lg:h-[690px]">
    <div className="bg-black  text-white rounded-[25px] px-4 py-12 flex flex-col gap-4 h-full">
      <h3 className="font-bold  ">Frequently Asked Questions</h3>
      <p className="text-[13px]">
        At Singularity, we are committed to helping you understand and get
        assistance in everything you have further questions about our services
        and distinct strategy. We intend to help your business reach its peak
        performance. If you still require an answer to your question, please
        contact us.
      </p>

      <div className="w-full flex flex-col gap-4 faq-area   ">
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title  font-medium">
            What detail services does Singularity offer in taxation and
            accounting consultation?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Singularity does focus on VAT compliance, newly registered VAT,
              and many other VAT and tax and accounting services in Europe.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            How can Singularity assist the business in terms of VAT compliance
            and VAT inspection?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Singularity helps your business operate effectively under the
              existing VAT laws, including helping prepare for VAT inspection,
              filing proper VAT reports, and submitting VAT returns on time to
              avoid fines.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            Why is VAT registration important for my business?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              VAT is critical to compliance with the legal requirements and
              penalties and to ensure easy operation in the UK and EU countries.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            Can Singularity provide VAT registration/inspection services for
            companies operating in the EU?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Yes, indeed. Singularity Company, a VAT consultant working with
              businesses in the EU, offers VAT registration assistance and
              assistance in preparation for the inspection.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            What industries does Singularity provide its tax and accounting
            services?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Singularity’s clients include electronics and communication,
              e-commerce and retail, manufacturing, and many industries needing
              unique tax and accounting support.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            How competent is Singularity in VAT service and accounting
            consulting?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Singularity boasts a team of seasoned professionals with extensive
              experience in VAT compliance, inspection preparation, and
              accounting consulting.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            What are the benefits of using Singularity’s financial and tax
            advisor services?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Singularity offers precise VAT management, reduced compliance
              risk, time savings, and expert financial and tax advisor guidance,
              ensuring peace of mind for your business.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            How do I get started with Singularity’s VAT and accounting services?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Contact us via our website or call our office to discuss your
              needs and receive a customized VAT and accounting service plan.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            Does Singularity offer ongoing support for VAT compliance and
            accounting consulting?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Yes, Singularity constantly supports us with updates on specific
              legal measures usually taken during this period, helps file VAT
              returns and inspections, and provides accounting advice.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            What sets Singularity apart from other VAT and accounting services
            companies?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Out of all the approaches adopted at the European level,
              Singularity can be viewed as the most distinctive since it is
              targeted at EU customs and markets either backed up by profound
              specialized and in-depth EU knowledge or supported by the
              financial/tax advisor services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
