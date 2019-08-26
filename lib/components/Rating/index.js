import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

const Rating = props => {
  const { className, rating, total, size, activeColor, emptyColor } = props
  const starSize = `${size}`
  return (
    <div className={className}>
      {Array(rating)
        .fill()
        .map((value, index) => (
          <Icon
            icon="star"
            fill={activeColor}
            width={starSize}
            height={starSize}
            key={`active-${index}`}
          /> // eslint-disable-line react/no-array-index-key
        ))}
      {Array(total - rating)
        .fill()
        .map((value, index) => (
          <Icon
            icon="star"
            fill={emptyColor}
            width={starSize}
            height={starSize}
            key={`empty-${index}`}
          /> // eslint-disable-line react/no-array-index-key
        ))}
    </div>
  )
}

Rating.propTypes = {
  /**
   * Class to be appended to the wrapping element
   */
  className: PropTypes.string,
  /**
   * Actual rating received
   */
  rating: PropTypes.number,
  /**
   * Maximum rating possible
   */
  total: PropTypes.number,
  /**
   * Size of the stars
   */
  size: PropTypes.number,
  /**
   * Color of the received stars
   */
  activeColor: PropTypes.string,
  /**
   * Default color of all stars
   */
  emptyColor: PropTypes.string
}

Rating.defaultProps = {
  className: '',
  rating: 3,
  total: 5,
  size: 15,
  activeColor: '#fec22d',
  emptyColor: '#e2e2e2'
}

Rating.displayName = 'Rating'

export default Rating