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
    'h-36': size === 'md',
    'fs-body-2': size === 'md',
    'py-8': size === 'md',
    'px-16': size === 'md',
    'h-36': size === 'md',
    'fs-body': size === 'sm',
    'py-4': size === 'sm',
    'px-12': size === 'sm',
    'h-32': size === 'sm'
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
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  busy: PropTypes.string,
  outline: PropTypes.bool,
  full: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  type: '',
  size: 'md',
  disabled: false,
  busy: '',
  outline: false,
  full: false,
  onClick: () => {}
}

Button.displayName = 'Button'

export default React.memo(Button)
