import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Checkbox = props => {
  const { className, children, ...otherProps } = props;
  const checkboxClass = classNames(
    'checkbox',
    className
  )
  return (
    <label className={checkboxClass}>
      <span className="checkbox__label fs-body lh-body ml-8 c-grey-60" style={{marginTop: "-1px"}}>
        {children}
      </span>
      <input type="checkbox" className="checkbox__input" {...otherProps}/>
      <span className="checkbox__mark"></span>
    </label>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

Checkbox.defaultProps = {
  className: '',
  children: ''
};

export default React.memo(Checkbox);
