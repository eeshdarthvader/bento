import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// TODO: Change to height instead of pixels
const Spacer = (props) => {

  const {
    m,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,
    className
  } = props

  const spacerClass = classnames(
    {
      [`m-${m}`]: m !== false,
      [`mt-${mt}`]: mt !== false,
      [`mb-${mb}`]: mb !== false,
      [`ml-${ml}`]: ml !== false,
      [`mr-${mr}`]: mr !== false,
      [`mx-${mx}`]: mx !== false,
      [`my-${my}`]: my !== false
    },
    className
  )

  return (
    <div className={spacerClass} style={{
      height: '1px',
      width: '1px'
    }} />
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
   * Margin to be added to top.
   */
  mt: PropTypes.number,
  /**
   * Margin to be added to bottom.
   */
  mb: PropTypes.number,
  /**
   * Margin to be added to left.
   */
  ml: PropTypes.number,
  /**
   * Margin to be added to right.
   */
  mt: PropTypes.number,
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
  m: 0,
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
  mx: 0,
  my: 0
}

Spacer.displayName = 'Spacer'

export default Spacer
