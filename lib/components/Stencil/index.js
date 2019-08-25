import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { normalizeSize } from '../../utils'

import "./stencil.scss";

const Stencil = props => {
  const styles = {
    width: normalizeSize(props.width),
    height: normalizeSize(props.height)
  }
  const classes = classNames(props.className, {
    Stencil: true,
    'has-shimmer': props.shimmer,
    'is-rounded': props.type === 'rounded',
    'is-circular': props.type === 'circular',
    'is-dark': props.dark === true
  })

  return (
    <div className={classes} style={styles}>
      {props.children}
    </div>
  )
}

Stencil.propTypes = {
  /**
   * Additional classes to be added to the component
   */
  className: PropTypes.string,
  /**
   * Any content to put inside of the stencil
   */
  children: PropTypes.node,
/**
 * Height of the stencil
 */
  height: PropTypes.string,
/**
 * Width of the stencil
 */
  width: PropTypes.string,
/**
 * Either a block or inline
 */
  type: PropTypes.string,
/**
 * Adds a shimmer to the placeholders
 */
  shimmer: PropTypes.bool,
/**
 * Invert colors of stencil for dark backgrounds
 */
  dark: PropTypes.bool
}

Stencil.defaultProps = {
  children: null,
  className: '',
  height: '100',
  width: '100',
  type: 'block',
  shimmer: false,
  dark: false
}

Stencil.displayName = 'Stencil'

export default Stencil