import React from "react";
import "../../index.css";
import "../../App.css";

const Button = ({ children, onClick, size = "md", className = "" }) => {
  const sizeClass = {
    xs: "text-xs px-14 py-1.5 h-8",
    sm: "text-sm px-16 py-2 h-9",
    md: "text-base px-18 py-2.5 h-11",
    lg: "text-lg px-20 py-3 h-14",
    xl: "text-xl px-22 py-4 h-16",
    "2xl": "text-2xl px-24 py-5 h-20",
  };

  // Deteksi apakah ada bg-* dan hover:bg-* di className
  const hasBackgroundClass = /\bbg-/.test(className);
  const hasHoverClass = /\bhover:bg-/.test(className);

  const backgroundClass = hasBackgroundClass ? "" : "bg-primary";
  const hoverClass = hasHoverClass ? "" : "bg-dark-hover";

  return (
    <button
      onClick={onClick}
      className={`${backgroundClass} ${hoverClass} text-cyan-200 font-montserrat font-bold rounded-full transition-all duration-300 focus:ring-4 focus:ring-primary focus:outline-none ${sizeClass[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
