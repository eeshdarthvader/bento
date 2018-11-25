import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Padding = (props) => {

  const {
    p,
    px,
    py,
    className,
    children
  } = props

  const spacerClass = classnames(
    {
      [`p-${p}`]: p !== false,
      [`px-${px}`]: px !== false,
      [`py-${py}`]: py !== false
    },
    className
  )

  return (
    <div className={spacerClass}>
      {children}
    </div>
  )
}

Padding.propTypes = {
  className: PropTypes.string,
  p: PropTypes.oneOfType([ PropTypes.bool, PropTypes.number ]),
  px: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  py: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
}

Padding.defaultProps = {
  className: '',
  p: false,
  px: false,
  py: false,
}

Padding.displayName = 'Padding'

export default React.memo(Padding)
