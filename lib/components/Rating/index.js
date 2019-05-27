import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

const StarRating = props => {
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

StarRating.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number.isRequired,
  total: PropTypes.number,
  size: PropTypes.number,
  activeColor: PropTypes.string,
  emptyColor: PropTypes.string
}

StarRating.defaultProps = {
  className: '',
  total: 5,
  size: 15,
  activeColor: '#fec22d',
  emptyColor: '#e2e2e2'
}

export default React.memo(StarRating)