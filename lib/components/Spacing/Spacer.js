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
    'w-4',
    className
  )

  return (
    <div className={spacerClass} />
  )
}

Spacer.propTypes = {
  className: PropTypes.string,
  m: PropTypes.number,
  mx: PropTypes.number,
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
