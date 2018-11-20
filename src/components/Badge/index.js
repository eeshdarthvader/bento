import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Badge = (props) => {
  const { children, className, additionalProps, intent } = props
  const labelClass = classnames({
    'bg-green': intent === 'success',
    'bg-black': intent !== 'success',
    'c-white': true
  },
    'm-0',
    'd-inline-block',
    'fs-caption-2',
    'tt-uppercase',
    'fw-600',
    'br-4',
    'h-20',
    'px-8',
    'py-4',
    'lh-solid',
    'box-border',
    className
  )
  return (
    <p className={labelClass} {...additionalProps}>
      {children}
    </p>
  )
}

Badge.propTypes = {
  className: PropTypes.string,
  intent: PropTypes.oneOf(['sucess', 'warning']),
}

Badge.defaultProps = {
  className: '',
  intent: ''
}

Badge.displayName = 'Badge'

export default React.memo(Badge)
