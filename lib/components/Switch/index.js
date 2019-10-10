import React from "react";
import PropTypes from "prop-types";

import './switch.scss'

const Switch = props => {
  return (
    <div className={`switch switch__checkbox--${props.size}`}>
      <input
        checked={props.isOn}
        onChange={props.handleToggle}
        className="switch__checkbox"
        id={`switch`}
        type="checkbox"
      />
      <label
        className="switch__label"
        htmlFor={`switch`}
        style={{
          background: props.isOn ? props.activeColor : props.inactiveColor
        }}
      >
        <span
          className={`switch__knob`}
          style={{ background: props.knobColor }}
        />
      </label>
    </div>
  );
};

Switch.propTypes = {
  isOn: PropTypes.bool,
  handleToggle: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  knobColor: PropTypes.string
};

Switch.defaultProps = {
  isOn: false,
  handleToggle: () => { },
  size: "md",
  activeColor: "#06D6A0",
  inactiveColor: "#808080",
  knobColor: "#ffffff"
};

export default Switch;
