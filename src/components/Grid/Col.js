import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Col = props => {
  const colClass = classNames(
    props.span ? `col-${props.span}` : "col",
    {
      first: props.first,
      last: props.last
    },
    props.className
  );
  return <div className={colClass}>{props.children}</div>;
};

Col.propTypes = {
  Col: PropTypes.number,
  className: PropTypes.string
};

Col.defaultProps = {
  Col: 24,
  className: ''
};

export default React.memo(Col);
