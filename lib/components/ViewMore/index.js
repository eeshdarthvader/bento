import React, { useState } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types'

const ViewMore = (props) => {

    const { className, expanded, children, as } = props
    const [ isExpand, SetIsExpand ] = useState(expanded)
    const Wrapper = as;

    const labelClass = classNames(
        'c-secondary-500',
        'fs-body',
        'c-pointer',
        'hover:c-secondary-400',
        'hover:td-underline',
        'py-1',
        className
    )
    const collapsedClass = classNames(
        {
            'h-0 o-hidden': !isExpand
        }
    )

    return (
        <>
            <Wrapper onClick={() => SetIsExpand(!isExpand)}>
                <div className={collapsedClass}>
                    {children}
                </div>
                {!isExpand ?
                    <div className={labelClass}>View more</div>
                    : <div className={labelClass}>View less</div>
                }
            </Wrapper>
        </>
    )
}

ViewMore.propTypes = {
    /**
     * Class to be appended to the wrapping element
     */
    className: PropTypes.string,
    /**
     * By default expanded will be false - represents its state
     */
    expanded: PropTypes.bool,
    /**
     * Element to wrapped the passed text
     */
    as: PropTypes.oneOf([ 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li' ])
}

ViewMore.defaultProps = {
    className: null,
    expanded: false,
    as: 'div'
}


ViewMore.displayName = "ViewMore"

export default ViewMore