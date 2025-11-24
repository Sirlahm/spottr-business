import React from "react";


const Button = ({
  text,
  icon: Icon,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-opacity duration-200 hover:opacity-90 ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {text}
    </button>
  );
};

export default Button;
