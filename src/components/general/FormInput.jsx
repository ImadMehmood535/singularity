import React from "react";

const FormInput = ({ type, placeholder, register, name, error, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium">{label}</p>
      {type == "file" ? (
        <input
          type="file"
          name="file"
          register={register}
          error={error}
          className="file-input file-input-bordered file-input-[#0000] w-full max-w-xs   h-[3.5rem] bg-[#EDEDED] border-[1px] border-white bg-opacity-10 rounded-[10px]"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className="bg-[#EDEDED] border-[1px] border-white bg-opacity-10 rounded-[10px] px-4 h-[3.5rem] text-white placeholder-white outline-none  transition duration-300"
        />
      )}

      {error && (
        <span className="text-red-500 text-sm">{error[name]?.message}</span>
      )}
    </div>
  );
};

export default FormInput;
