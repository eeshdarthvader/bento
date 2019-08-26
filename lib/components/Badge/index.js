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
  'px-2': size === 'md',
  'py-1': size === 'md',
  'fs-caption-2': size === 'md',
  'px-3': size === 'lg',
  'py-2': size === 'lg',
  'fs-body': size === 'lg'
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
/**
 * The text of the button
 */
  children: PropTypes.string.isRequired,
/**
 * Classes to be added to the badge component
 */
 className: PropTypes.string,
/**
 * These values modify the size of the component
 */
 size: PropTypes.oneOf(['lg', 'md']),
/**
* Changes the appearance of the component
*/
 type: PropTypes.oneOf(['primary', 'light', 'dark', 'secondary', 'success', 'warning']),
}

Badge.defaultProps = {
 className: '',
 size: 'md',
 type: 'dark'
}

Badge.displayName = 'Badge';

export default Badge