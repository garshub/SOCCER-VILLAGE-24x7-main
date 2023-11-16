import React, { Component } from "react";
import classNames from "classnames";
import { getDevice, isValueEmpty } from "./utils/Constants";
import "./TruncateText.css";

class TruncateText extends Component {
  constructor() {
    super();
    this.state = {
      showSnackBar: false,
    };
  }
  textClicked = () => {
    if (getDevice() === "mobile") {
      this.setState({ showSnackBar: !this.state.showSnackBar });
      setTimeout(() => {
        this.setState({ showSnackBar: !this.state.showSnackBar });
      }, 3000);
    }
  };
  render() {
    const { text, maxLine, textStyle, hideTitle } = this.props;
    return (
      <>
        {!isValueEmpty(text) ? (
          <>
            <span
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: maxLine || 1,
                overflow: "hidden",
              }}
              title={!hideTitle && text ? text : null}
              onClick={this.textClicked}
              className={classNames("spanFont", textStyle)}
            >
              <span>{text}</span>
            </span>
          </>
        ) : null}
        {this.state.showSnackBar ? (
          <div className={classNames("snackbar", "showSnackBar")}>
            {text}
          </div>
        ) : null}
      </>
    );
  }
}
export default TruncateText;
