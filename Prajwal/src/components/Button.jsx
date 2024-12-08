import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-2 text-white font-semibold rounded-md transition-all hover:scale-105 hover:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
