import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Toggler = props => {
    const { selected, onClick, className, children } = props
    const toggleClass = classNames(
        'Toggler',
        'flex-1',
        // 'hover:bg-blue',
        'hover:c-black',
        // 'hover:bc-blue',
        'c-pointer',
        'p-2',
        'ta-center',
        'bw-1',
        'bs-solid',
        'h-36',
        'field',
        'box-border',
        'fs-body',
        className,
        {
            'bg-white c-grey-90 bc-grey-20 ba': selected,
            'bc-grey-20 bg-grey-05 c-grey-40': !selected
        }
    );
    return(
        <div
            onClick={onClick}
            className={toggleClass} >
            {children}
        </div>
    )
}

Toggler.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}

Toggler.defaultProps = {
    className: '',
    value: '',
    selected: false,
    onClick: (value, event) => {},
    children: 'default'
}

Toggler.displayName = "Toggler"

export default Toggler