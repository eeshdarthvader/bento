import React,{useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import './switcher.scss'


const Switcher = props => {
  const {className, checked, onChange} = props;
  const [ isChecked, handleIsChecked ] = useState(checked)
  const switcherClass = classNames(className,
    'Switcher p-relative',
    'ba bw-2 br-100',
    {
      'bg-success-500 bc-success-500': isChecked,
      'bg-white bc-neutral-100': !isChecked
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
            <div className={switcherClass} onClick={() => onChange(isChecked)}>
              <div className={switcherCircleClass}></div>           
            </div>
        </label>
  );
};

Switcher.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

Switcher.defaultProps = {
  className: '',
  checked: false,
  onChange: ()=>{}
};

Switcher.displayName = 'Switcher'

export default Switcher;
