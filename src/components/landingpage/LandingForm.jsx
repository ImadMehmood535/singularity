"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../general/FormInput";
import axios from "axios";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { landingcontactSchema } from "@/validations/landingform";
import FormInputSelect from "../general/FormInputSelect";
import { API } from "@/api";
import { errorToast, successToast } from "@/hooks/useToast";

const LandingForm = () => {
  const options = [
    {
      value: "select option",
      name: "select option",
    },
    {
      value: "VAT Compliance",
      name: "VAT Compliance",
    },
    {
      value: "Company Formation Services",
      name: "Company Formation Services",
    },
    {
      value: "Customs Indirect Representation",
      name: "Customs Indirect Representation",
    },
    {
      value: "Article 23",
      name: "Article 23",
    },
  ];
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(landingcontactSchema),
  });

  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await API.landingContact(data);
      successToast(response?.data?.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
      errorToast(error, "Can not submit form at the moment");
      setLoading(false);
    }
  };

  return (
    <div className="contactBg rounded-[25px] py-6 px-4 md:py-4 md:px-6 flex flex-col gap-4  h-full  ">
      <h3 className="font-medium text-3xl 	 text-white">Reach out to Us</h3>

      <p className="text-white text-sm font-light">
        Submit your details below, and our VAT experts will reach out to you
        shortly to discuss how we can optimize your business&apos;s VAT
        strategy.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
          <FormInput
            type="text"
            placeholder="Full name"
            control={control}
            name="name"
            label="Name"
            register={register}
            error={errors}
          />

          <FormInput
            type="text"
            placeholder="Company name "
            control={control}
            name="company"
            label="Company"
            register={register}
            error={errors}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <p className="font-medium  ">Phone Number</p>

            <div className="w-full flex flex-col gap-4">
              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    onChange={onChange}
                    defaultCountry={"de"}
                    placeholder="Enter phone number"
                  />
                )}
              />
              <p className="text-red-500"></p>
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <FormInput
            type="email"
            placeholder="Email"
            control={control}
            name="email"
            label="Email"
            register={register}
            error={errors}
          />
        </div>
        <div className="grid grid-cols-1  gap-2">
          <FormInputSelect
            type="select"
            placeholder="Select Service"
            control={control}
            name="service"
            label="Service Required"
            register={register}
            options={options}
            error={errors}
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="bg-[#32BB98] hover:bg-themeGray-0 hover:text-white transition-all relative customLink rounded-full w-[180px] py-4 text-center text-sm text-white"
        >
          Submit
          <span className="gradientBorder"></span>
        </button>
      </form>
    </div>
  );
};

export default LandingForm;
