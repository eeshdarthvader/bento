import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = (props) => {

  const {
    children,
    className,
    type,
    disabled,
    busy,
    outline,
    full,
    size,
    onClick,
    additionalProps
  } = props

  const buttonClass = classnames({
    'bg-orange': type === 'primary' && !outline,
    'hover:bg-orange-dark': type === 'primary' && !outline,
    'bg-blue': type === 'secondary' && !outline,
    'hover:bg-blue-dark': type === 'secondary' && !outline,
    'bg-black': (type !== 'primary') && type !== 'secondary' && !outline,
    'bg-grey-20': disabled && !outline,
    'bg-transparent': outline,
    'hover:bg-grey-20': disabled && !outline,
    'bc-transparent': !outline,
    'bc-blue': type === 'secondary' && outline,
    'hover:bc-blue-darker': type === 'secondary' && outline,
    'c-blue': type === 'secondary' && outline,
    'hover:c-blue-darker': type === 'secondary' && outline,
    'bc-orange': type === 'primary' && outline,
    'hover:bc-orange-darker': type === 'primary' && outline,
    'c-orange': type === 'primary' && outline,
    'hover:c-orange-darker': type === 'primary' && outline,
    'c-white': !outline,
    'fw-600': !outline,
    'fw-500': outline,
    'c-pointer': !disabled & !busy,
    'c-not-allowed': disabled & !busy,
    'c-wait': busy,
    'w-100p': full,
    'fs-body-2': size === 'lg' || size === 'md',
    'py-3': size === 'lg',
    'px-5': size === 'lg',
    'h-40': size === 'lg',
    'py-2': size === 'md',
    'px-4': size === 'md',
    'h-9': size === 'md',
    'fs-body': size === 'sm',
    'py-1': size === 'sm',
    'px-3': size === 'sm',
    'h-8': size === 'sm'
  },
    'button',
    'bs-solid',
    'bw-1',
    'br-4',
    'lh-solid',
    'box-border',
    className
  )

  const busyText = busy.length > 0 ? busy : 'Busy...'

  const handleClick = event => {
    event.preventDefault()
    if (disabled || busy) return
    onClick(event)
  }

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      {...additionalProps}
    >
      {busy && busyText}
      {!busy && children}
    </button>
  )
}

Button.propTypes = {
  /**
   * Additional classes to be added to the component
   */
  className: PropTypes.string,
  /**
  * Changes the appearance of the component
  */
  type: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * These values modify the size of the component
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * This disables the button
   */
  disabled: PropTypes.bool,
  /**
   * This disables the button and shows a custom text
   */
  busy: PropTypes.string,
  /**
   * Changes the appearance to an outline
   */
  outline: PropTypes.bool,
  /**
   * Makes the button full width
   */
  full: PropTypes.bool,
  /**
  * Handles onclick function
  */
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  type: 'primary',
  size: 'md',
  disabled: false,
  busy: '',
  outline: false,
  full: false,
  onClick: () => {}
}

Button.displayName = 'Button'

export default Button
