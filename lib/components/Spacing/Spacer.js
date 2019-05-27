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
    'h-4',
    className
  )

  return (
    <div className={spacerClass} />
  )
}

Spacer.propTypes = {
  className: PropTypes.string,
  m: PropTypes.oneOfType([ PropTypes.bool, PropTypes.number ]),
  mx: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  my: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
}

Spacer.defaultProps = {
  className: '',
  m: false,
  mx: false,
  my: false,
}

Spacer.displayName = 'Spacer'

export default React.memo(Spacer)
