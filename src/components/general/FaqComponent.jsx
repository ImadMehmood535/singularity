import React from "react";

const FaqComponent = () => {
  return (
    <div className="bg-black  text-white rounded-[25px] px-4 py-12 flex flex-col gap-4 h-full  ">
      <h3 className="font-bold  ">Frequently Asked Questions</h3>
      <p className="text-[13px]">
        At Singularity, we are dedicated to providing clarity and support for
        all your queries regarding our innovative services and unique approach.
        We strive to help your business excel. If you don't find your question
        answered below, please feel free to contact us directly. We're always
        here to assist you!
      </p>

      <div className="w-full flex flex-col gap-4 faq-area   ">
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title  font-medium">
            What tax and accounting services does Singularity offer?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Singularity specializes in VAT compliance, VAT registration, and a
              range of tax and accounting services for businesses in the UK and
              Germany.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            How can Singularity help with VAT compliance and VAT inspection?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Singularity ensures your business meets all VAT regulations,
              assisting with VAT inspection preparation, accurate reporting, and
              timely submissions to avoid penalties.
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
              VAT registration is essential for legal compliance, avoiding
              fines, and ensuring smooth business operations in the UK and
              Germany.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            Can Singularity assist with VAT registration and inspection in both
            the UK and Germany?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              VAT registration is essential for legal compliance, avoiding
              fines, and ensuring smooth business operations in the UK and
              Germany.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            What industries does Singularity cater to with its tax and
            accounting services?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Singularity serves various industries, including e-commerce,
              retail, manufacturing, and more, offering tailored tax and
              accounting solutions.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            How experienced is Singularity in VAT services and accounting
            consulting?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Singularity boasts a team of seasoned professionals with extensive
              experience in VAT compliance, VAT inspection preparation, and
              accounting consulting in the UK and Germany.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            How experienced is Singularity in VAT services and accounting
            consulting?
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Singularity boasts a team of seasoned professionals with extensive
              experience in VAT compliance, VAT inspection preparation, and
              accounting consulting in the UK and Germany.
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
              Contact us via our website or call our office to discuss your
              needs and receive a customized VAT and accounting service plan.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#171717]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">
            What makes Singularity different from other VAT and accounting
            service providers? 
          </div>
          <div className="collapse-content ">
            <p className="text-[12px]">
              Contact us via our website or call our office to discuss your
              needs and receive a customized VAT and accounting service plan.
            </p>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default FaqComponent;
