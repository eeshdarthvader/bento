import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Col = props => {
  const colClass = classNames(
    props.span ? `col-${props.span}` : "col",
    props.sm ? `col-${props.sm}--sm` : "",
    props.xs ? `col-${props.xs}--xs` : "",
    props.md ? `col-${props.md}--md` : "",
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
  className: PropTypes.string,
  sm: PropTypes.number,
  md: PropTypes.number,
  xs: PropTypes.number,
};

Col.defaultProps = {
  span: null,
  sm: null,
  md: null,
  xs: null,
  className: ''
};

export default React.memo(Col);
