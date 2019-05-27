import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Margin = (props) => {

  const {
    m,
    mx,
    my,
    className,
    children
  } = props

  const spacerClass = classnames(
    {
      [`m-${m}`]: m !== false,
      [`mx-${mx}`]: mx !== false,
      [`my-${my}`]: my !== false
    },
    className
  )

  return (
    <div className={spacerClass}>
      {children}
    </div>
  )
}

Margin.propTypes = {
  className: PropTypes.string,
  m: PropTypes.oneOfType([ PropTypes.bool, PropTypes.number ]),
  mx: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  my: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
}

Margin.defaultProps = {
  className: '',
  m: false,
  mx: false,
  my: false,
}

Margin.displayName = 'Margin'

export default React.memo(Margin)
