import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Swatch = props => {
  const swatchClass = classNames(
    'br-4 w-100p flex flex-middle flex-center',
    props.className
  )

  return (
    <div
      className={swatchClass}
      style={{
        height: props.height,
        width: props.width
      }}
    />
  )
}

Swatch.displayName = 'Swatch'

Swatch.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string
  ]),
  width: PropTypes.string,
  height: PropTypes.string
}

Swatch.defaultProps = {
  className: '',
  width: '100%',
  height: '120px'
}

export default React.memo(Swatch)
