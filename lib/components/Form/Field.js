import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Icon from '../Icon'

const Field = props => {
  const { className, wrapperClassName, iconleft, iconright, hasError, size, ...otherProps } = props;
  const fieldClass = classNames(
    'field',
    'bw-1',
    'bs-solid',
    'w-100p',
    'p-2',
    'box-border',
    'br-4',
    'fs-body-2',
    {
      'h-7': size === 'sm',
      'h-9': size === 'md',
      'bc-grey-20': !hasError,
      'bc-red': hasError,
      'c-red': hasError,
      'focus:bc-blue': !hasError,
      'pl-7': iconleft
    },
    className
  );
  const wrapperClass = classNames(
    wrapperClassName,
    'p-relative'
  )
  return (
    <div className={wrapperClass}>
      { iconleft &&
        <Icon
          icon={iconleft}
          className="field__icon field__icon-left"
        />
      }

      <input
        className={fieldClass}
        {...otherProps}
      />

      {iconright &&
        <Icon
          icon={iconright}
          className="field__icon field__icon-right"
        />
      }
    </div>
  );
};

Field.propTypes = {
/**
 * Class to be appended to the wrapping element
 */
  className: PropTypes.string,
/**
 * Html type of the input text/number/email etc.
 */
  type: PropTypes.string,
/**
 * Boolean to indicate an error state
 */
  hasError: PropTypes.bool,
/**
 * Icon string to append to the right of the field
 */
  iconleft: PropTypes.string,
/**
 * Icon string to append to the left of the field
 */
  iconright: PropTypes.string,
/**
 * Classes for internal wrapper
 */
  wrapperClassName: PropTypes.string,
  /**
   * Size of the input filed
   */
  size: PropTypes.oneOf(['sm', 'md'])
};

Field.defaultProps = {
  className: '',
  type: 'text',
  iconleft: null,
  iconright: null,
  wrapperClassName: '',
  hasError: false,
  size: 'md'
};

Field.displayName = 'Field';

export default Field;
