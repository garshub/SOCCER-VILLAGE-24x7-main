import React from "react";
import classNames from "classnames";
import "./CheckBox.css";

class CheckBox extends React.Component {
  render() {
    return (
      <div className={"coloured"}>
        <div
          className={classNames(
            "checkbox",
            this.props.isChecked
              ? ""
              : this.props.disabled && "disabledClass"
          )}
        >
          <label>
            <input
              type="checkbox"
              key={this.props.userId}
              checked={this.props.isChecked}
              onClick={event => this.props.onChecked(event)}
              disabled={this.props.disabled}
            />
            <span className={"checkboxMaterial"}>
              <span className={"check"} />
            </span>
          </label>
        </div>
      </div>
    );
  }
}
export default CheckBox;
