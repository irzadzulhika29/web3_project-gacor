import React from "react";
import "../../index.css";
import "../../App.css";

const Button = ({ children, onClick, size = "md" }) => {
  const sizeClass = {
    sm: "text-sm px-6 py-3",
    md: "text-lg px-10 py-4",
    lg: "text-xl px-12 py-5",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-primary text-cyan-200 font-montserrat font-bold rounded-full transition-all duration-300 bg-dark-hover ${sizeClass[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
