import React, { useState } from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";

const ReadMore = (props) => {
    const { children, className, charLength, labelText } = props
    let string = children
    let [truncatedString, handleExpand] = useState(children.substr(0, charLength));

    return (
        <p className={classnames(className)} onClick={() => handleExpand(truncatedString = string)}>
            <span>
                {truncatedString}
            </span>
            {
                truncatedString.length !== string.length ?
                    <span>...
                        <span className="c-blue">{labelText}</span>
                    </span>
                    : null
            }
        </p>
    );
}


ReadMore.propTypes = {
    className: PropTypes.string,
    labelText: PropTypes.string,
    charLength: PropTypes.number,
    children: PropTypes.string.isRequired
}
ReadMore.defaultProps = {
    className: '',
    labelText: 'Read more',
    charLength: 300,
    children: ''
}

ReadMore.displayName = 'ReadMore'

export default React.memo(ReadMore)
