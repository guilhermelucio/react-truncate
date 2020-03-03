import React from "react";
import "./TruncateLine.scss";

export const TruncateLine = function({ content, isDisabled, maxWidth }) {
  const disabledClass = isDisabled ? "Truncate__disabled" : "";
  const style = { maxWidth };
  return (
    <div style={style} className={`Truncate__single ${disabledClass}`}>
      {content}
    </div>
  );
};

export default TruncateLine;
