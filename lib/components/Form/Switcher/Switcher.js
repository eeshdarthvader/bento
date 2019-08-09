import React, {Children,useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Switcher = props => {
    const {children, className, value} = props
    const [ selectedValue, setSelectedValue ] = useState(value)
    
    const fieldClass = classNames(
        'flex',
        'flex-middle',
        'flex-center',
        'Switcher',
        className
    );
    const switcherTabs = []
    Children.map(children, switcherTab => {
        const child = React.cloneElement(switcherTab, {
            key: switcherTab.props.value,
            selected: switcherTab.props.value === selectedValue,
            onClick: () => setSelectedValue(switcherTab.props.value)
        })
        switcherTabs.push(child)
        return null
    })

    return (
        <div className={fieldClass}>
            {switcherTabs}
        </div>
    )

}

Switcher.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    value: PropTypes.string,
    className: PropTypes.string
}

Switcher.defaultProps = {
    children: null,
    value: '',
    className: ''
}

Switcher.displayName = "Switcher";
export default Switcher;
