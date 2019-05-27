import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Row = props => {
  const rowClass = classNames({
    row: true,
    around: props.around,
    between: props.between,
    start: props.start,
    center: props.center,
    end: props.end,
    top: props.top,
    middle: props.middle,
    bottom: props.bottom,
    reverse: props.reverse
  }, props.className);
  return <div className={rowClass}>{props.children}</div>;
};

Row.propTypes = {
  className: PropTypes.string
};

Row.defaultProps = {
  className: ''
};

export default React.memo(Row);
