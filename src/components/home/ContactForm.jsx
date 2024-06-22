"use client";
import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../general/FormInput";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white bg-opacity-20 rounded-[25px] px-4 py-12 flex flex-col gap-4">
      <h3 className="font-bold text-white">We would love to hear from you</h3>

      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur. Leo vestibulum nisl vitae
        aliquam etiam eu elementum. Vitae amet lectus sit risus amet metus
        malesuada. Diam sed bibendum.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <FormInput
            type="text"
            placeholder="Name"
            register={register}
            name="name"
            label={"Name"}
            error={errors}
          />

          <FormInput
            type="text"
            placeholder="Company name here"
            register={register}
            name="company"
            label={"Company"}
            error={errors}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <FormInput
            type="text"
            placeholder="Phone Number"
            register={register}
            name="phone"
            label={"Phone Number"}
            error={errors}
          />

          <FormInput
            type="email"
            placeholder="example@gmail.com"
            register={register}
            name="email"
            label={"Email"}

            error={errors}
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-medium">Message</p>

          <textarea
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
            rows={4}
            className="bg-[#EDEDED] border-[1px] border-white bg-opacity-10 rounded-lg px-4 py-4 text-white placeholder-white outline-none focus:ring-2 focus:ring-themeGreen-0 focus:border-themeGreen-0 transition duration-300"
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
