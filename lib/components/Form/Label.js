import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Label = props => {
  const labelClass = classNames(props.className,
    'fs-body',
    'd-block',
    'c-grey-70'
  )
  return (
    <label className={labelClass} htmlFor={props.for}>
      {props.children}
    </label>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  for: PropTypes.string
};

Label.defaultProps = {
  className: '',
  for: PropTypes.string
};

export default React.memo(Label);
