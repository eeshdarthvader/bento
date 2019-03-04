import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Icon from '../Icon'

const Textarea = props => {
  const { className, hasError, ...otherProps } = props;
  const textAreaClass = classNames(
    'field',
    'bw-1',
    'bs-solid',
    'w-100p',
    'p-8',
    'box-border',
    'br-4',
    'fs-body-2',
    {
      'bc-grey-20': !hasError,
      'bc-red': hasError,
      'c-red': hasError,
      'focus:bc-blue': !hasError,
    },
    className
  )
  return (
    <textarea
      style={{
        resize: 'none',
        height: `${props.height}px`,
        font: 'caption',
        fontSize: '16px'
      }}
      className={textAreaClass}
      {...otherProps}
    />
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
};

Textarea.defaultProps = {
  className: '',
  height: 160
};

export default React.memo(Textarea);
