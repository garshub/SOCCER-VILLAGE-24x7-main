import React, { Component } from "react";
import classNames from "classnames";
import { getDevice } from "./utils/Constants";
import "./ImageView.css";

class ImageView extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      title: undefined,
    };
  }
  textClicked(title) {
    if (this.props.onClick) {
      this.props.onClick();
    } else {
      if (title && title !== "") {
        if (getDevice() === "mobile") {
          this.setState({ show: !this.state.show, title });
          setTimeout(() => {
            this.setState({ show: !this.state.show, title });
          }, 3000);
        }
      }
    }
  }
  render() {
    const { id, title, src, style, alt, onMouseOver } = this.props;
    return (
      <>
        <img
          id={id}
          title={title}
          src={src}
          className={style}
          alt={alt}
          onClick={() => this.textClicked(title)}
          onMouseOver={onMouseOver}
        />
        <div
          className={classNames(
            "snackbar",
            this.state.show ? "show" : null
          )}
        >
          {this.state.title}
        </div>
      </>
    );
  }
}
export default ImageView;
