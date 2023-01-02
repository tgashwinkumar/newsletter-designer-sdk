import React, { useState } from "react";
import {
  AiFillExclamationCircle,
  AiFillEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

const TextArea = ({
  valueState = ["", (v) => { }],
  errorState = ["", (v) => { }],
  wordsState = [0, (v) => { }],
  placeholder = "",
  title = "",
  className = "w-full",
  disabled = false,
  countLimit
}) => {
  const [value, setValue] = valueState;
  const [error, setError] = errorState;
  const [words, setWords] = wordsState;

  return (
    <div className={`${className} flex flex-col items-start justify-center font-poppins space-y-2 my-2`}>
      <label className="text-ming">{title}</label>
      <div className="flex flex-col space-x-2 w-full">
        <textarea
          disabled={disabled}
          placeholder={placeholder}
          value={disabled ? "None" : value}
          wrap="soft"
          rows="4"
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
            setWords(e.target.value.split(" ").length - (e.target.value.split(" ")
              .filter(x =>
                x.toLowerCase() == 'a' ||
                x.toLowerCase() == 'an' ||
                x.toLowerCase() == 'the' ||
                x.toLowerCase() == '.' ||
                x.toLowerCase() == ',' ||
                x.toLowerCase() == '-')
              .length) - 1)
            setError(words > countLimit ? `Maximum ${countLimit} words allowed` : "");
          }}
          className={`h-32 px-4 py-2 w-full rounded-lg text-slate bg-gray bg-clip-padding bg-no-repeat border-2 border-solid ${error.length !== 0 ? "border-red" : "border-gray"
            } first-letter:transition ease-in-out m-0 focus:outline-none focus:border-mid-violet`}
        />
        {countLimit && (
          <div className="flex flex-col items-end justify-end p-2">
            <p className={`${(words > countLimit) ? "text-red font-bold" : "text-slate"} text-right text-sm`}>
              {words}/{countLimit}
            </p>
          </div>
        )}
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

export default TextArea;
