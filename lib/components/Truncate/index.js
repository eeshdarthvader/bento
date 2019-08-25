import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { normalizeSize } from '../../utils'

const Truncate = ({ children, className, width, as }) => {
  const classList = classNames('to-ellipsis o-hidden lh-copy ws-nowrap', className)
  const styles = {
    width: normalizeSize(width)
  }
  const Wrapper = as;
  return (
    <Wrapper className={classList} style={styles}>
      {children}
    </Wrapper>
  )
}

Truncate.propTypes = {
  /**
   * Classes to be added to the component
   */
  className: PropTypes.string,
  /**
   * Width at which to truncate text
   */
  width: PropTypes.number,
  /**
   * Text to be truncated
   */
  children: PropTypes.node,
/**
 * Element to be wrapped around text
 */
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'])
}

Truncate.defaultProps = {
  width: '100%',
  className: '',
  children: null,
  as: 'p'
}

Truncate.displayName = 'Truncate'

export default Truncate
