import React from "react";
import ContactForm from "../home/ContactForm";
import IndividuallyFaq from "../general/IndividuallyFaq";

const LandingFormAndFaq = ({ title, content }) => {
  const faq = [
    {
      title: "What tax and accounting services does Singularity offer?",
      content:
        "Singularity specializes in VAT compliance, VAT registration, and a range of tax and accounting services for businesses in the EU.",
    },
    {
      title: "How can Singularity help with VAT compliance and VAT inspection?",
      content:
        "Singularity ensures your business meets all VAT regulations, assisting with VAT inspection preparation, accurate reporting, and timely submissions to avoid penalties.",
    },
    {
      title: "Why is VAT registration important for my business?",
      content:
        "VAT registration is essential for legal compliance, avoiding fines, and ensuring smooth business operations in the UK and EU.",
    },
    {
      title:
        "Can Singularity assist with VAT registration and inspection in the EU?",
      content:
        "Yes, Singularity provides expert VAT registration and inspection preparation services for businesses operating in the EU.",
    },
    {
      title:
        "What industries does Singularity cater to with its tax and accounting services?",
      content:
        "Singularity serves various industries, including e-commerce, retail, manufacturing, and more, offering tailored tax and accounting solutions.",
    },
    {
      title:
        "How experienced is Singularity in VAT services and accounting consulting?",
      content:
        "Singularity boasts a team of seasoned professionals with extensive experience in VAT compliance, VAT inspection preparation, and accounting consulting.",
    },
    {
      title:
        "What are the benefits of using Singularity’s financial and tax advisor services?",
      content:
        "Singularity offers precise VAT management, reduced compliance risk, time savings, and expert financial and tax advisor guidance, ensuring peace of mind for your business.",
    },
    {
      title:
        "How do I get started with Singularity’s VAT and accounting services?",
      content:
        "Contact us via our website or call our office to discuss your needs and receive a customized VAT and accounting service plan.",
    },
    {
      title:
        "Does Singularity offer ongoing support for VAT compliance and accounting consulting?",
      content:
        "Yes, Singularity provides continuous support, including updates on regulatory changes and assistance with VAT returns, inspections, and accounting consulting.",
    },
    {
      title:
        "What makes Singularity different from other VAT and accounting service providers?",
      content:
        "Singularity stands out with its dual focus on the EU customs and markets, offering specialized, in-depth knowledge and personalized financial and tax advisor services.",
    },
  ];
  return (
    <div className="Faq  ">
      <div className="containerCust xl:px-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 justify-between items-start ">
          <div className="content-area md:sticky md:top-4">
            <ContactForm />
          </div>
          <div className="faq-area  ">
            <div className="  bg-black  text-white rounded-[25px] px-4 py-12 flex flex-col gap-4 h-full">
              <div className="w-full flex flex-col gap-4">
                {title && content && (
                  <div className="pb-8 border-b-2 border-white">
                    <h3 className="font-bold  ">{title}</h3>
                    <p className="text-[13px]">{content}</p>
                  </div>
                )}

                {faq.map((item, key) => (
                  <div
                    key={key}
                    className="collapse collapse-arrow bg-[#171717]"
                  >
                    <input
                      type="radio"
                      name="my-accordion-${key}"
                      defaultChecked={key === 0}
                    />
                    <div className="collapse-title  font-medium">
                      {item.title}
                    </div>
                    <div className="collapse-content ">
                      <p
                        className="text-[12px] text-[#AAAAAA] text-lg"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFormAndFaq;
