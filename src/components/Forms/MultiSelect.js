import React, { useState, useEffect } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

const MultiSelect = ({
  valueState = [[], (v) => { }],
  errorState = ["", (v) => { }],
  placeholder = "",
  options = [],
  title = "",
  isDisabled = false,
  className = "w-full",
}) => {
  const [value, setValue] = valueState;
  const [error, setError] = errorState;

  return (
    <div
      className={`${className} flex flex-col items-start justify-center font-poppins space-y-2 mb-2`}
    >
      <label className="text-dark-gray">{title}</label>
      <div className="flex space-x-2 items-center w-full">
        <select
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue([...value, e.target.value]);
            setError("");
          }}
          className={`px-4 py-2 w-full rounded-lg text-slate bg-gray bg-clip-padding bg-no-repeat border-2 border-solid ${error.length !== 0 ? "border-yellow" : "border-gray"
            } first-letter:transition ease-in-out m-0 focus:outline-none focus:border-cloud`}
        >
          <option value="">
            {placeholder.length > 0 ? placeholder : "Select"}
          </option>
          {options.map((option, index) => (
            <option
              key={index}
              // selected={index === 0 && placeholder.length > 0}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center w-full flex-wrap gap-x-4 gap-y-4">
        {value && value.map((val, i) => (
          <ItemSelect
            val={val}
            onRemove={() => {
              setValue(value.slice(0, i).concat(value.slice(i + 1)));
            }}
          />
        ))}
      </div>
      {error.length !== 0 && (
        <div className="flex items-center space-x-2 text-xs text-red">
          <AiFillExclamationCircle />
          <p className="">{error}</p>
        </div>
      )}
    </div>
  );
};

const ItemSelect = ({ val, onRemove }) => {
  useEffect(() => {
    console.log(val);
  }, [val]);

  return (
    <div className="flex items-center relative bg-gray px-4 py-2 rounded-lg">

      <button
        className="rounded-full bg-cloud absolute -top-1 -right-2 p-1 hover:text-gray z-40 "
        onClick={(e) => onRemove()}
      >
        <IoCloseOutline />
      </button>
      <div>
        <p>{val}</p>
      </div>
    </div>
  );
};

export default MultiSelect;
