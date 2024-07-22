"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../general/FormInput";
import axios from "axios";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {   landingcontactSchema } from "@/validations/contact";
import { API } from "@/api";
import { errorToast, successToast } from "@/hooks/useToast";
import FormInputSelect from "../general/FormInputSelect";

const LandingContactForm = () => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [defaultCountry, setDefaultCountry] = useState("");
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(landingcontactSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await API.contact(data);
      successToast(response?.data?.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
      errorToast(error, "Can not submit form at the moment");
      setLoading(false);
    }
  };
  const getCountry = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const countryData = response.data.map((country) => ({
        value: country.cca2,
        name: country.name.common,
      }));
      setCountryOptions(countryData);
      const userCountry = await axios.get("https://api.country.is");
      setDefaultCountry(userCountry?.data?.country.toLowerCase());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div className="contactBg   rounded-[25px] px-4 py-12 flex flex-col gap-4  h-full  ">
      <h3 className="font-bold text-white">We would love to hear from you</h3>

      <p className="text-white">
        Contact Singularity GmbH today for more information about our
        comprehensive tax services or to schedule a consultation with our
        experienced team. We are committed to providing tailored solutions to
        help your business succeed.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
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
            placeholder="Company name"
            control={control}
            name="company"
            label="Company"
            register={register}
            error={errors}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <p className="font-medium">Phone Number</p>

            <div className="w-full flex flex-col gap-2">
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
            placeholder="email"
            control={control}
            name="email"
            label="Email"
            register={register}
            error={errors}
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-1 gap-2">
          <FormInputSelect
            type="select"
            placeholder="Select Country"
            control={control}
            name="country"
            label="Country"
            register={register}
            options={countryOptions}
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
          disabled={loading}
          className="bg-black hover:bg-white hover:text-black transition-all relative customLink rounded-full w-[160px] py-4 text-center text-sm text-white"
        >
          Send message
          <span className="gradientBorder"></span>
        </button>
      </form>
    </div>
  );
};

export default LandingContactForm;