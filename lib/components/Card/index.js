import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Card = props => {
  const { className, children } = props
  const cardClasses = classNames(
    'bg-white',
    className  
    );
  return (
    <div className= {cardClasses}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string
};

Card.defaultProps = {
  className: ''
};
Card.displayName = "Card";

export default Card;
