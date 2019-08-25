import React, { useState } from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";

const ReadMore = (props) => {
  const { children, className, charLength, labelText, as } = props
  let [stringLength, setStringLength] = useState(charLength);
  let truncatedString = children.substr(0, stringLength);
  const Wrapper = as;

  return (
    <Wrapper className={classnames(className, 'c-pointer')} onClick={() => setStringLength(children.stringLength)}>
      <span>
        {truncatedString}
      </span>
      {
        truncatedString.length !== children.length ?
          <span>
            ...
                        <p className="c-blue mt-2 mb-0 lh-copy c-pointer">
              {labelText}
            </p>
          </span>
          : null
      }
    </Wrapper>
  );
}


ReadMore.propTypes = {
/**
 * Class to be appended to the wrapping element
 */
  className: PropTypes.string,
/**
 * Text appended after the ellipsis
 */
  labelText: PropTypes.string,
/**
 * Number of characters to truncate after
 */
  charLength: PropTypes.number,
/**
 * Text to be truncated
 */
  children: PropTypes.string.isRequired,
/**
 * Element to wrapped the passed text
 */
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li']),
}
ReadMore.defaultProps = {
  className: '',
  labelText: 'Read more',
  charLength: 100,
  children: '',
  as: 'p'
}

ReadMore.displayName = 'ReadMore'

export default ReadMore
