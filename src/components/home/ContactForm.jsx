"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../general/FormInput";
import axios from "axios";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { contactSchema } from "@/validations/contact";

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [country, setCountry] = useState("");

  const getCountry = async () => {
    try {
      const response = await axios.get("https://api.country.is");
      const code = response?.data?.country;
      setCountry(String(code?.toLowerCase()));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div className="contactBg rounded-[25px] px-4 py-12 flex flex-col gap-4  h-full lg:h-[690px]">
      <h3 className="font-bold text-white">We would love to hear from you</h3>

      <p className="text-white">
      Contact Singularity GmbH today for more information about our comprehensive tax services or to schedule a consultation with our experienced team. We are committed to providing tailored solutions to help your business succeed.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <FormInput
            type="text"
            placeholder="Name"
            control={control}
            name="name"
            label="Name"
            register={register}
            error={errors}
          />

          <FormInput
            type="text"
            placeholder="Company name here"
            control={control}
            name="company"
            label="Company"
            register={register}
            error={errors}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col gap-4">
            <p className="font-medium">Phone Number</p>

            {country && (
              <div className="w-full flex flex-col gap-4">
                <Controller
                  control={control}
                  name="phone"
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      value={value}
                      onChange={onChange}
                      defaultCountry={country}
                      placeholder="Enter phone number"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
            )}
          </div>
          <FormInput
            type="email"
            placeholder="example@gmail.com"
            control={control}
            name="email"
            label="Email"
            register={register}
            error={errors}
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-medium">Message</p>

          <textarea
            {...register("message")}
            rows={4}
            className="bg-[#EDEDED] border-[1px] border-white bg-opacity-10 rounded-lg px-4 py-4 text-white placeholder-white outline-none transition duration-300"
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-black hover:bg-white hover:text-black transition-all relative customLink rounded-full w-[160px] py-4 text-center text-sm text-white"
        >
          Send message
          <span className="gradientBorder"></span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
