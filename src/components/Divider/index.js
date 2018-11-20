import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Divider = props => {
  const {className, ...additionalProps} = props
  const dividerClass = classNames(
    className,
    'd-block',
    'bb',
    'bc-grey-10',
  );
  return <div className={dividerClass} {...additionalProps} />;
};

Divider.propTypes = {
  className: PropTypes.string
};

Divider.defaultProps = {
  className: ''
};

export default React.memo(Divider);
