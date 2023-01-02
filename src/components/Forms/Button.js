import React from "react";

const Button = ({ handleClick, text, className = "", isOutlined = false }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick(e);
      }}
      className={`${className} border-2 border-orange hover:border-yellow ${isOutlined ? "text-orange" : "bg-orange hover:bg-yellow text-black"}  font-fira text-xl w-full px-6 py-3 rounded-lg shadow-lg`}
    >
      {text}
    </button>
  );
};

export default Button;
