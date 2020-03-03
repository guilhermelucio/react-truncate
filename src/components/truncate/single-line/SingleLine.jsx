import React from "react";
import "./SingleLine.scss";

export const SingleLine = function({ children, isDisabled }) {
  const disabledClass = isDisabled ? "Truncate__disabled" : "";
  return <div className={`Truncate__single ${disabledClass}`}>{children}</div>;
};

export default SingleLine;
