import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import "./TruncateContent.scss";

export class TruncateContent extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = {
      shouldTruncate: true
    };
  }

  componentDidMount() {
    this.shouldTruncate();
  }

  componentDidUpdate() {
    this.shouldTruncate();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  shouldTruncate = () => {
    const { lineHeight, lines } = this.props;
    const maxHeight = lines * lineHeight;
    return this.measureHeight() > maxHeight;
  };

  measureHeight = () => {
    if (this.myRef.current) {
      const element = this.myRef.current;
      const height = element.clientHeight;
      return height;
    }
    return null;
  };

  getCSSProperties = () => {
    const { lineHeight, lines } = this.props;
    const { shouldTruncate } = this.state;
    const baseStyles = {
      lineHeight: `${lineHeight}px`
    };

    if (shouldTruncate) {
      return {
        ...baseStyles,
        maxHeight: `${lineHeight * lines}px`
      };
    }

    return baseStyles;
  };

  render() {
    const { children } = this.props;
    const style = this.getCSSProperties();

    return (
      <div className="Truncate-Content">
        <div className={`Truncate-Content--Content`} style={style}>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              ref: this.myRef
            });
          })}
        </div>
        <div>
          <button
            onClick={() =>
              this.setState({ shouldTruncate: !this.state.shouldTruncate })
            }
          >
            Click me
          </button>
        </div>
      </div>
    );
  }
}

TruncateContent.propTypes = {
  lines: PropTypes.number.isRequired,
  lineHeight: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired
};
