import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Button.module.css";

export default class Button extends React.Component {
  render() {
    const {
      content,
      handleClick,
      onFocus,
      id,
      transparent,
      fullwidth,
      hidden,
      disabled,
      isloading,
      isripplerequired,
      borderradius,
      style,
      contentStyle,
    } = this.props;
    return (
      <button
        className={classNames(
          isripplerequired ? styles.buttonRipple : styles.buttonNoRipple,
          style
        )}
        type_="button"
        onClick={handleClick}
        onFocus={onFocus}
        id={id}
        disabled={disabled}
        hidden={hidden}
        transparent={transparent}
        fullwidth={fullwidth}
        isripplerequired={isripplerequired && isripplerequired.toString()}
        isloading={isloading}
        borderradius={borderradius}
      >
        <div className={contentStyle}>{content}</div>
      </button>
    );
  }
}
Button.propTypes = {
  content: PropTypes.string,
  borderradius: PropTypes.string,
  handleClick: PropTypes.func,
  onFocus: PropTypes.func,
  id: PropTypes.string,
  transparent: PropTypes.bool,
  fullwidth: PropTypes.bool,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  isloading: PropTypes.bool,
  isripplerequired: PropTypes.bool,
  style: PropTypes.string,
};
