import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { normalizeSize } from '../../utils'

const Textarea = props => {
  const { className, hasError, height, ...otherProps } = props;
  const textAreaClass = classNames(
    'field',
    'bw-1',
    'bs-solid',
    'w-100p',
    'p-2',
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
        height: normalizeSize(height),
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
  hasError : PropTypes.bool
};

Textarea.defaultProps = {
  className: '',
  height: 160,
  hasError : false
};

Textarea.displayName = 'Textarea'

export default Textarea;
