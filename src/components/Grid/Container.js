import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Container = props => {
  const containerClass = classNames('container', props.className)
  return <div className={containerClass}>{props.children}</div>;
};

Container.propTypes = {
  className: PropTypes.string
};

Container.defaultProps = {
  className: ''
};

export default React.memo(Container);
