import React, {useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Toggler = props => {
    const { selected, onClick, className, children } = props
    const toggleClass = classNames(
        'Toggler',
        'flex-1',
        'hover:bg-blue',
        'hover:c-white',
        'hover:bc-blue',
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
            'bg-blue c-white bc-blue ba': selected,
            'bc-grey-20 bg-white c-grey-50': !selected
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

Toggler.displayName = "SwicherTab"

export default Toggler