import React from "react";
import "../../index.css";
import "../../App.css";

const Button = ({ children, onClick, size = "md", className = "" }) => {
  const sizeClass = {
    sm: "text-sm px-8 py-3",
    md: "text-lg px-12 py-4",
    lg: "text-xl px-14 py-5",
  };

  // Tambahkan bg-primary hanya jika className TIDAK mengandung bg-
  const hasBackgroundClass = /\bbg-/.test(className);
  const backgroundClass = hasBackgroundClass ? "" : "bg-primary";

  return (
    <button
      onClick={onClick}
      className={`${backgroundClass} text-cyan-200 font-montserrat font-bold rounded-full transition-all duration-300 bg-dark-hover focus:ring-4 focus:ring-primary focus:outline-none ${sizeClass[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
