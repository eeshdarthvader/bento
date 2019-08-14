import React,{useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import './switcher.scss'

const Switcher = props => {
  const {className, checked} = props;
  const [ isChecked, handleIsChecked ] = useState(checked)
  const switcherClass = classNames(className,
    'Switcher p-relative',
    'ba bw-2 br-100',
    {
      'bg-green bc-green': isChecked,
      'bg-white bc-grey-10': !isChecked
    }
  )
  const switcherCircleClass = classNames(
    'Switcher__circle p-absolute',
    'br-100',
    {
      'bg-white bc-white slideRight': isChecked,
      'l-0 ': !isChecked,
    }
  )
  
  return (
        <label>
            <input
            checked={ isChecked } 
            onChange={ () => handleIsChecked(!isChecked) } 
            className="d-none" 
            type="checkbox" />
            <div className={switcherClass}>
              <div className={switcherCircleClass}></div>           
            </div>
        </label>
  );
};

Switcher.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool
};

Switcher.defaultProps = {
  className: '',
  checked: false
};

Switcher.displayName = 'Switcher'

export default Switcher;
