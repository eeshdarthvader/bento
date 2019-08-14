import React, {Children,useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Toggle = props => {
    const {children, className, value} = props
    const [ selectedValue, setSelectedValue ] = useState(value)
    
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
    className: PropTypes.string
}

Toggle.defaultProps = {
    children: null,
    value: '',
    className: ''
}

Toggle.displayName = "Toggle";
export default Toggle;
