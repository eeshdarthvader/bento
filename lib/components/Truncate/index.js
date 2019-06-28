import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { normalizeSize } from '../../utils'

const Truncate = ({ children, className, width }) => {
  const classList = classNames('to-ellipsis o-hidden lh-copy ws-nowrap', className)
  const styles = {
    width: normalizeSize(width)
  }
  return (
    <p className={classList} style={styles}>
      {children}
    </p>
  )
}

Truncate.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node
}

Truncate.defaultProps = {
  width: '100%',
  className: '',
  children: null
}

Truncate.displayName = 'Truncate'

export default React.memo(Truncate)
