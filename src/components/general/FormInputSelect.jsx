import React from "react";

const FormInputSelect = ({
  type,
  placeholder,
  register,
  options,
  name,
  error,
  label,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">{label}</p>
      <select
        className="bg-[#EDEDED] border-[1px] border-white bg-opacity-10 rounded-[10px] px-4 h-[3.5rem] text-white placeholder-white outline-none  transition duration-300"
        {...register(name)}
      >
        {options.map((item, index) => (
          <option
            key={index}
            value={item.value}
            disabled={index === 0}
            hidden={index === 0}
            className="bg-themeGray-0"
          >
            {item.name}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-red-500 text-sm">{error[name]?.message}</span>
      )}
    </div>
  );
};

export default FormInputSelect;
