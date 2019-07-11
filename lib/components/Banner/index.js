import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Callout = props => {
  const { className, label, children } = props
  const bannerClass = classNames(
    className,
    'flex px-16 py-8 bg-grey-05 br-4'
  );
  return (
    <div className={bannerClass}>
      <p className="fs-body-2 tt-uppercase fw-600 mr-12">
        {label}
      </p>
      <div className="fs-body-2">
        {children}
      </div>
    </div>
  );
};

Callout.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired
};

Callout.defaultProps = {
  className: '',
  label: 'Note'
};

Callout.displayName = 'Callout';

export default Callout;
