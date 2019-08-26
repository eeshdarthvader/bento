import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Icon from '../Icon'

const Select = props => {
  const { className, children, ...remaingProps } = props
  const selectClass = classNames(
    'select',
    'bc-grey-20',
    'focus:bc-blue',
    'bw-1',
    'bs-solid',
    'w-100p',
    'h-9',
    'br-4',
    'fs-body-2',
    className
  )
  return (
    <div className="p-relative">
      <Icon
        icon="triangle-down"
        className="select__icon"
      />
      <select className={selectClass} {...remaingProps}>
        {children}
      </select>
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string
};

Select.defaultProps = {
  className: ''
};

Select.displayName = 'Select';

export default Select;
