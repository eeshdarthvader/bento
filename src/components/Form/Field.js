import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Icon from '../Icon'

const Field = props => {
  const { className, iconleft, iconright, ...otherProps } = props;
  const fieldClass = classNames(
    'field',
    'bc-grey-20',
    'focus:bc-blue',
    'bw-1',
    'bs-solid',
    'w-100p',
    'h-36',
    'p-8',
    'box-border',
    'br-4',
    'fs-body-2',
    className
  )
  return (
    <div className="p-relative">
      <If condition={iconleft}>
        <Icon
          icon={iconleft}
          className="field__icon field__icon-left"
        />
      </If>
      <input
        className={fieldClass}
        {...otherProps}
      />
      <If condition={iconright}>
        <Icon
          icon={iconright}
          className="field__icon field__icon-right"
        />
      </If>
    </div>
  );
};

Field.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  iconleft: PropTypes.string,
  iconright: PropTypes.string
};

Field.defaultProps = {
  className: '',
  type: 'text',
  iconleft: null,
  iconright: null
};

export default React.memo(Field);
