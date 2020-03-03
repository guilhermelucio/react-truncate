import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import "./TruncateContent.scss";

export class TruncateContent extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = {
      isTruncated: true,
      shouldTruncate: null
    };
  }

  componentDidMount() {
    this.updateTruncateState();
    window.addEventListener("resize", this.updateTruncateState.bind(this));
  }

  componentDidUpdate() {
    this.updateTruncateState();
  }

  updateTruncateState() {
    if (this.state.shouldTruncate !== this.shouldTruncate()) {
      this.setState(prevState => ({
        shouldTruncate: this.shouldTruncate()
      }));
    }
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
    const { isTruncated, shouldTruncate } = this.state;

    const baseStyles = {
      lineHeight: `${lineHeight}px`
    };

    if (isTruncated && shouldTruncate) {
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
    const { shouldTruncate } = this.state;
    console.log(style);

    return (
      <div className="Truncate-Content">
        <div className={`Truncate-Content--Content`} style={style}>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              ref: this.myRef
            });
          })}
        </div>
        {shouldTruncate && (
          <div>
            <button
              onClick={() =>
                this.setState({ isTruncated: !this.state.isTruncated })
              }
            >
              Click me
            </button>
          </div>
        )}
      </div>
    );
  }
}

TruncateContent.propTypes = {
  lines: PropTypes.number.isRequired,
  lineHeight: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired
};
