import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Spacer = (props) => {

  const {
    m,
    mx,
    my,
    className
  } = props

  const spacerClass = classnames(
    {
      [`m-${m}`]: m !== false,
      [`mx-${mx}`]: mx !== false,
      [`my-${my}`]: my !== false
    },
    'h-1',
    'w-1',
    className
  )

  return (
    <div className={spacerClass} />
  )
}

Spacer.propTypes = {
  /**
   * Additional classes to be added to the component
   */
  className: PropTypes.string,
/**
 * Margin to be added to all sides.
 */
  m: PropTypes.number,
/**
 * Margin only added to the x axis.
 */
  mx: PropTypes.number,
/**
 * Margin only added to the y axis.
 */
  my: PropTypes.number
}

Spacer.defaultProps = {
  className: '',
  m: 30,
  mx: 0,
  my: 0,
}

Spacer.displayName = 'Spacer'

export default Spacer
