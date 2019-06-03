import React, { useState } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

const LineClamp = (props) => {
    const { children, className, lines, labelText } = props
    let [linesToTruncate, handleExpand] = useState(lines);

    const classes = classnames(
        linesToTruncate ? `t-truncate-${props.lines}` : "t-truncate-0",
    )

    return (
        <div className={classnames(classes,className)} onClick={() => handleExpand(linesToTruncate = 0)}>
            <div className="o-hidden"> 
                {children}
            </div>
            {linesToTruncate ?
                <p className="c-blue m-0">{labelText}</p>
                : null
            }
            
        </div>
    )
}

LineClamp.propTypes = {
    className: PropTypes.string,
    lines : PropTypes.number,
    labelText: PropTypes.string
}

LineClamp.defaultProps = {
    className: '',
    lines: 4,
    labelText : '...Read more'

}

LineClamp.displayName = 'LineClamp'

export default React.memo(LineClamp)