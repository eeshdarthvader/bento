import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Badge = (props) => {
 const { children, className, intent, type, size, ...additionalProps } = props
 const labelClass = classnames({
   'bg-green': intent === 'success',
   'bg-black': intent === 'warning' || (intent === '' && type ===''),
   'bg-blue': type === 'primary',
   'bg-white': type === 'light',
   'bg-grey-20': type === 'secondary',
   'c-white': true,
   'c-black': type === 'light',
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
 intent: PropTypes.oneOf(['sucess', 'warning']),
 type: PropTypes.oneOf(['primary', 'light']),
}

Badge.defaultProps = {
 className: '',
 size: 'normal',
 intent: '',
 type: ''
}

Badge.displayName = 'Badge'

export default React.memo(Badge)