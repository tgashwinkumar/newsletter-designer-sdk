import React from "react";

const Heading = ({ children, event = false }) => {
  return (
    <div className={`w-fit ${event ? "mb-4" : ""}`}>
      <h1 className="text-4xl font-semibold font-fira">{children}</h1>
      <div className="w-[80%] bg-pacific h-1"></div>
    </div>
  );
};

export default Heading;
