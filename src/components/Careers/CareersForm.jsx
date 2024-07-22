"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../general/FormInput";
import axios from "axios";
import "react-international-phone/style.css";
import { API } from "@/api";
import { errorToast, successToast } from "@/hooks/useToast";
import { careerSchema } from "@/validations/contact";

const CareersForm = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(careerSchema),
  });

  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", data.file[0]);

      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const response = await API.careerForm(formData);
      successToast(response?.data?.message);
      setLoading(false);
      reset();
    } catch (error) {
      console.log(error);
      errorToast(error, "Can not submit form at the moment");
      setLoading(false);
    }
  };

  return (
    <div className="contactBg   rounded-[25px] px-4 py-12 flex flex-col gap-4  h-full  ">
      <h3 className="font-bold text-white mb-4 text-4xl">
        Want to Join the Team?
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
          <div className="col-span-2">
            <FormInput
              type="text"
              placeholder="First Name"
              control={control}
              name="firstName"
              label="First Name"
              register={register}
              error={errors}
            />
          </div>
          <div className="col-span-2">
            <FormInput
              type="text"
              placeholder="Last Name"
              control={control}
              name="lastName"
              label="Last Name"
              register={register}
              error={errors}
            />
          </div>
          <div className="col-span-1">
            <Controller
              name="file"
              control={control}
              render={({ field }) => (
                <FormInput
                  type="file"
                  label="Attach Your CV"
                  register={register}
                  name="file"
                  error={errors}
                  field={field}
                />
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
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
          disabled={loading}
          className="bg-black hover:bg-white hover:text-black transition-all relative customLink rounded-full w-[160px] py-4 text-center text-sm text-white"
        >
          Submit
          <span className="gradientBorder"></span>
        </button>
      </form>
    </div>
  );
};

export default CareersForm;
