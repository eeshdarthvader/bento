import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../../Button"
import { Field } from ".."

import './spoon.scss'

const Spoon = props => {
  const { 
    className,
    buttonClassName, 
    fieldClassName, 
    buttonLabel,
    placeholder, 
    hasError,
    busy,
    disabled,
    onClick,
  } = props

  const spoonClass = classNames(
    className,
    'flex',
    'Spoon'
  );

  const fieldClass = classNames(
    'Spoon__field',
    fieldClassName
  );

  const buttonClass = classNames(
    'Spoon__button',
    buttonClassName
  );
 
  return (
    <form className={spoonClass}>
        <Field 
            placeholder = {placeholder}
            hasError= {hasError} 
            className= {fieldClass}
            wrapperClassName= "flex-1"
            disabled= {disabled}
        />
        <Button
            className= {buttonClass}
            type= "secondary"
            size= "md"
            onClick= {onClick}
            busy= {busy}
            disabled= {disabled}
        >
            {buttonLabel}
        </Button>
    </form>
  );
};

Spoon.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  fieldClassName: PropTypes.string,
  buttonLabel: PropTypes.string,
  placeholder: PropTypes.string, 
  hasError: PropTypes.bool,
  busy: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Spoon.defaultProps = {
  className: '',
  buttonClassName: '',
  fieldClassName: '',
  buttonLabel: '',
  placeholder: '', 
  hasError: false,
  busy: '',
  disabled: false,
  onClick: () => {}
};

Spoon.displayName = 'Spoon';

export default Spoon;
