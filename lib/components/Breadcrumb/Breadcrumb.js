import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Breadcrumb = props => {
  const breadcrumbClass = classNames(
    'flex',
    'flex-middle',
    'p-2',
    'ls-reset',
    'fs-body'
  );

  return (
    <ul className={breadcrumbClass}>
      {props.children}
    </ul>
  )
}

Breadcrumb.propTypes = {
  className: PropTypes.string
};

Breadcrumb.defaultProps = {
  className: ''
}

Breadcrumb.displayName = 'Breadcrumb'

export default Breadcrumb;