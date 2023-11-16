import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./input.css";

const defaultPlaceHolderText = "Please Enter";

class Input extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    this.props.callback(event.target.value);
  }
  render() {
    const {
      inputGroupStyle,
      inputStyle,
      fluidEffectPercnt,
      id,
      autofocus,
      autoComplete,
      disabled,
      placeholder,
      min,
      max,
      asterik,
      title,
      maxlength,
    } = this.props;
    return (
      <div className={classNames("input-group", inputGroupStyle)}>
        <input
          className={classNames("input-element", inputStyle)}
          type={this.props.type}
          id={id}
          placeholder={
            placeholder && placeholder !== ""
              ? placeholder
              : defaultPlaceHolderText
          }
          autoFocus={autofocus}
          disabled={disabled}
          required
          autoComplete={autoComplete || "off"}
          value={this.props.value}
          onChange={e => this.handleChange(e)}
          onKeyUp={this.props.onEnter}
          onBlur={this.props.onFocusChange}
          min={min}
          max={max}
          title={title}
          maxLength={maxlength}
        />
        <span className={"input-highlight"} />
        <span className={classNames("input-bar", fluidEffectPercnt)} />
        <label
          className={classNames(
            "input-label",
            this.props.labelStyle,
            disabled ? "disabledLabelTop" : null
          )}
        >
          {this.props.label}
          {asterik ? <span className={"mandatoryField"}>*</span> : null}
        </label>
      </div>
    );
  }
}
Input.propTypes = {
  inputStyle: PropTypes.string,
  id: PropTypes.string,
  autofocus: PropTypes.bool,
  autoComplete: PropTypes.string,
  fluidEffectPercnt: PropTypes.string,
};
export default Input;
