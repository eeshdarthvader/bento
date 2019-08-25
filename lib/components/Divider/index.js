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
    'flex-1',
  );
  return (
    <div className="pos-r">
      {!props.text &&
        <div className={dividerClass} {...additionalProps} />
      }
      {props.text &&
        <div className="flex flex-between flex-middle" {...additionalProps}>
          <div className={dividerClass}/>
          <p className="px-5 fs-caption-2 c-grey-40">
            {props.text}
          </p>
          <div className={dividerClass} />
        </div>
      }
    </div>
  );
};

Divider.propTypes = {
/**
 * Class to be appended to the wrapping object
 */
  className: PropTypes.string,
/**
 * Optional text to be shown on the divider
 */
  text: PropTypes.string
};

Divider.defaultProps = {
  className: '',
  text: ''
};

Divider.displayName = "Divider";

export default Divider;
