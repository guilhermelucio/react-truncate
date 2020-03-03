import React from "react";
import "./Multiline.scss";

export const MultiLine = function({ children, isDisabled, lines }) {
  const disabledClass = isDisabled ? "Truncate__disabled" : "";
  const lineHeight = "1.6rem";
  const maxHeight = `calc(${lineHeight} * ${lines})`;
  const style = !disabledClass ? { maxHeight, lineHeight } : { lineHeight };
  console.log(style);
  return (
    <div style={style} className={`Truncate__multi ${disabledClass}`}>
      {children}
    </div>
  );
};

export default MultiLine;
