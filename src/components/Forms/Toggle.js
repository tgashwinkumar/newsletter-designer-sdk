import React, { useEffect, useState } from "react";
import Row from "./Row";

const Toggle = ({
  options = [],
  title = "",
  className = "",
  buttonClassName = "",
  valueState = ["", (v) => {}],
  icons = [],
  subtext = "",
}) => {
  const [value, setValue] = valueState;

  useEffect(() => {
    value && value.length <= 0 && setValue(options[0]);
  }, []);

  return (
    <div className={`${className}`}>
      <p className="font-poppins text-ming mb-2">{title}</p>
      <p className="font-poppins text-ming text-sm mb-4">{subtext}</p>
      <div className="grid grid-cols-2 gap-4 lg:flex lg:space-x-4 min-h-24 justify-items-stretch">
        {options.map((item, idx) => (
          <ToggleItem
            handleSelect={() => {
              setValue(item);
            }}
            isSelected={item === value}
            text={item}
            icon={icons[idx]}
            className={buttonClassName}
          />
        ))}
      </div>
    </div>
  );
};

const ToggleItem = ({
  isSelected,
  text,
  handleSelect,
  className = "",
  icon,
}) => {
  return (
    <button
      onClick={handleSelect}
      className={`${className} h-full relative  border-ming ${
        isSelected && "bg-middle"
      } border-2  rounded-lg p-4 px-6 space-y-2 flex-1 flex flex-col items-start text-left`}
    >
      <div className="rounded-full h-6 w-6 aspect-square p-1 border-ming border">
        <div
          className={`${
            isSelected ? "bg-ming" : ""
          } rounded-full h-full w-full`}
        ></div>
      </div>
      <p className="font-poppins text-ming ">{text}</p>
      <p>
        {icon &&
          React.cloneElement(icon, {
            className:
              "hidden lg:block text-ming absolute top-[50%] right-2 -translate-y-[50%] opacity-[50%]",
            size: 64,
          })}
      </p>
    </button>
  );
};

export default Toggle;
