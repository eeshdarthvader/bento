import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Badge = (props) => {
 const { children, className, intent, type, size, ...additionalProps } = props
 const labelClass = classnames({
  'bg-orange': type === 'primary',
  'bg-blue': type === 'secondary',
  'bg-green': type === 'success',
  'bg-yellow': type === 'warning',
  'bg-white': type === 'light',
  'bg-black': type === 'dark', 
  'c-white': true,
  'c-black': type === 'light' || type === 'warning',
  'px-8': size === 'normal',
  'py-4': size === 'normal',
  'fs-caption-2': size === 'normal',
  'px-12': size === 'large',
  'py-8': size === 'large',
  'fs-body': size === 'large'
 },
   'm-0',
   'd-inline-block',
   'tt-uppercase',
   'fw-600',
   'br-4',
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
 size: PropTypes.oneOf(['large', 'normal']),
 type: PropTypes.oneOf(['primary', 'light', 'dark', 'secondary', 'success', 'warning']),
}

Badge.defaultProps = {
 className: '',
 size: 'normal',
 type: 'dark'
}

Badge.displayName = 'Badge'

export default React.memo(Badge)