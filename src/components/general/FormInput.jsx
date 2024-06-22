import React from "react";

const FormInput = ({ type, placeholder, register, name, error , label }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="bg-[#EDEDED] border-[1px] border-white bg-opacity-10 rounded-lg px-4 py-4 text-white placeholder-white outline-none focus:ring-2 focus:ring-themeGreen-0 focus:border-themeGreen-0 transition duration-300"
      />
      {error && (
        <span className="text-red-500 text-sm">{error[name]?.message}</span>
      )}
    </div>
  );
};

export default FormInput;
