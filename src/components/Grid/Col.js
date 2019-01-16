import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Col = props => {
  const colClass = classNames(
    props.span ? `col-${props.span}` : "col",
    props.offset ? `col-offset-${props.offset}` : "",
    {
      first: props.first,
      last: props.last
    },
    props.className
  );
  return <div className={colClass}>{props.children}</div>;
};

Col.propTypes = {
  span: PropTypes.number,
  offest: PropTypes.number,
  className: PropTypes.string
};

Col.defaultProps = {
  span: null,
  className: ''
};

export default React.memo(Col);
