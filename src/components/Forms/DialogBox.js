import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";

const DialogBox = ({ title, content, className, type = "alert" }) => {
  return (
    <div
      className={`${className} rounded-lg bg-middle border-dashed border-ming border-2 py-4 px-6`}
    >
      <div className="flex items-center space-x-2 mb-4 text-ming">
        {type === "alert" && <AiFillExclamationCircle size={24} />}
        <h1 className="font-fira text-lg ">{title}</h1>
      </div>
      <p className="font-poppins text-sm text-ming">{content}</p>
    </div>
  );
};

export default DialogBox;
