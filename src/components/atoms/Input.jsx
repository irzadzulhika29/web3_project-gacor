import React from "react";
import "../../index.css";
import "../../App.css";

const Input = ({
  label,
  name,
  size = "md",
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  const sizeClass = {
    sm: "text-sm px-4 py-2",
    md: "text-lg px-6 py-3",
    lg: "text-xl px-8 py-4",
  };

  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor={name}
        className="font-montserrat font-semibold text-black"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border-2 border-gray-500 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 ${sizeClass[size]}`}
      />
    </div>
  );
};

export default Input;
