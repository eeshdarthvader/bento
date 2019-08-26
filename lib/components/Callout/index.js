import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Callout = props => {
  const { className, label, children } = props
  const calloutClass = classNames(
    className,
    'flex px-4 py-2 bg-grey-05 br-4'
  );
  return (
    <div className={calloutClass}>
      <p className="fs-body-2 tt-uppercase fw-600 mr-3">
        {label}
      </p>
      <div className="fs-body-2">
        {children}
      </div>
    </div>
  );
};

Callout.propTypes = {
/**
 * Classes to be added appended to the wrapping element
 */
  className: PropTypes.string,
/**
 * Optional label to prepend to children
 */
  label: PropTypes.string,
/**
 * Next to be rendered in the callout
 */
  children: PropTypes.node.isRequired
};

Callout.defaultProps = {
  className: '',
  label: 'Note'
};

Callout.displayName = 'Callout';

export default Callout;
