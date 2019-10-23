import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Badge = (props) => {
  const { children, className, intent, type, size, outline, ...additionalProps } = props
 const labelClass = classnames({
  'bg-primary-500': type === 'primary' && !outline,
  'bg-secondary-500': type === 'secondary' && !outline,
  'bg-success-500': type === 'success' && !outline,
  'bg-warning-500': type === 'warning' && !outline,
  'bg-error-500': type === 'error' && !outline,
  'bg-white': type === 'light' && !outline,
  'bg-black': type === 'dark' && !outline,
  'c-primary-500': type === 'primary' && outline,
  'c-secondary-500': type === 'secondary' && outline,
  'c-success-500': type === 'success' && outline,
  'c-warning-500': type === 'warning' && outline,
  'c-error-500': type === 'error' && outline,
  'bc-black': ['light', 'dark'].includes(type) && outline,
  'bc-primary-500': type === 'primary' && outline,
  'bc-secondary-500': type === 'secondary' && outline,
  'bc-success-500': type === 'success' && outline,
  'bc-warning-500': type === 'warning' && outline,
  'bc-error-500': type === 'error' && outline,
  'bc-transparent': !outline,
  'c-white': true && !outline,
  'c-black': type === 'light',
  'fs-1': size === 'sm',
  'px-2': size === 'sm' || 'md',
  'py-1': size === 'sm' || 'md',
  'fs-2': size === 'md',
  'px-3': size === 'lg',
  'py-2': size === 'lg',
  'fs-3': size === 'lg',
 },
   'm-0',
   'ba',
   'bw-1',
   'd-inline-block',
   'tt-uppercase',
   'fw-600',
   'br-100',
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
 size: PropTypes.oneOf(['lg', 'md', 'sm']),
/**
* Changes the appearance of the component
*/
 type: PropTypes.oneOf(['primary', 'light', 'dark', 'secondary', 'success', 'warning', 'error']),
/**
* Enables outline mode
*/
 outline: PropTypes.bool
}

Badge.defaultProps = {
 className: '',
 size: 'md',
 type: 'dark',
 outline: false
}

Badge.displayName = 'Badge';

export default Badge