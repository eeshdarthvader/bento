import React, { Children, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Toggle = props => {
    const {children, className, value, onChange, name} = props
    const [ selectedValue, setSelectedValue ] = useState(value)

    useEffect(() => {
        // emulate input event
        const event = {
            target: {
                name: name,
                value: selectedValue
            },
            persist: () => {}
        }
        onChange(event)
    }, [selectedValue])

    const fieldClass = classNames(
        'flex',
        'flex-middle',
        'flex-center',
        'Toggle',
        className
    );
    const togglers = []
    Children.map(children, toggler => {
        const child = React.cloneElement(toggler, {
            key: toggler.props.value,
            selected: toggler.props.value === selectedValue,
            onClick: () => setSelectedValue(toggler.props.value)
        })
        togglers.push(child)
        return null
    })

    return (
        <div className={fieldClass}>
            {togglers}
        </div>
    )

}

Toggle.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    value: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
}

Toggle.defaultProps = {
    children: null,
    value: '',
    className: '',
    name: '',
    onChange: () => {}
}

Toggle.displayName = "Toggle";
export default Toggle;
