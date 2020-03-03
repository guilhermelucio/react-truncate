import React, { useState } from "react";
import PropTypes from "prop-types";
import { SingleLine } from "./single-line/SingleLine";
import { MultiLine } from "./multi-line/MultiLine";
import "./Truncate.scss";

export const Truncate = function({ children, type, lines }) {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div>
      {type === "single" ? (
        <>
          <SingleLine isDisabled={isVisible} children={children} />
          <button
            onClick={() => setVisibility(!isVisible)}
            className="Truncate--button__link"
          >
            Toggle
          </button>
        </>
      ) : (
        <>
          <MultiLine lines={lines} isDisabled={isVisible} children={children} />
          <button
            onClick={() => setVisibility(!isVisible)}
            className="Truncate--button"
          >
            Toggle
          </button>
        </>
      )}
    </div>
  );
};

Truncate.defaultProps = {
  lines: 3
};

Truncate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  type: PropTypes.oneOfType([
    PropTypes.exact("single"),
    PropTypes.exact("multi")
  ]).isRequired,
  lines: PropTypes.number
};
