import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Icon from '../Icon'

const Field = props => {
  const { className, iconleft, iconright, hasError, ...otherProps } = props;
  const fieldClass = classNames(
    'field',
    'bw-1',
    'bs-solid',
    'w-100p',
    'h-36',
    'p-2',
    'box-border',
    'br-4',
    'fs-body-2',
    {
      'bc-grey-20': !hasError,
      'bc-red': hasError,
      'c-red': hasError,
      'focus:bc-blue': !hasError,
      'pl-7': iconleft
    },
    className
  )
  return (
    <div className="p-relative">
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
  className: PropTypes.string,
  type: PropTypes.string,
  hasError: PropTypes.bool,
  iconleft: PropTypes.string,
  iconright: PropTypes.string
};

Field.defaultProps = {
  className: '',
  type: 'text',
  hasError: false,
  iconleft: '',
  iconright: ''
};

Field.displayName = 'Field';

export default Field;
