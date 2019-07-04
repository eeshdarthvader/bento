import React, { useState } from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";

const ReadMore = (props) => {
    const { children, className, charLength, labelText, wrapper } = props
    let [stringLength, setStringLength] = useState(charLength);
    let truncatedString = children.substr(0, stringLength);
    const Wrapper = wrapper;

    return (
        <Wrapper className={classnames(className, 'c-pointer')} onClick={() => setStringLength(children.stringLength)}>
            <span>
                {truncatedString}
            </span>
            {
                truncatedString.length !== children.length ?
                    <span>
                        ...
                        <p className="c-blue mt-8 mb-0 lh-copy c-pointer">
                         {labelText}
                        </p>
                    </span>
                    : null
            }
        </Wrapper>
    );
}


ReadMore.propTypes = {
    className: PropTypes.string,
    labelText: PropTypes.string,
    charLength: PropTypes.number,
    children: PropTypes.string.isRequired,
    wrapper: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li']),
}
ReadMore.defaultProps = {
    className: '',
    labelText: 'Read more',
    charLength: 300,
    children: '',
    wrapper: 'p'
}

ReadMore.displayName = 'ReadMore'

export default ReadMore
