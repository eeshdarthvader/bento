import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as TACircle } from './icons/ta-full.svg'
import { ReactComponent as TAEmptyCircle } from './icons/ta-empty.svg'
import { ReactComponent as TALogo } from './icons/ta-logo.svg'
import { ReactComponent as TAHalfCircle } from './icons/ta-half.svg'

class TripAdvisorRating extends PureComponent {
  render() {
    const { rating, total, logo, taLogoSize, reviewLogoSize } = this.props
    const roundedRating = Math.floor(rating)
    const showHalfRating = rating !== roundedRating
    const emptyRating = total - Math.ceil(rating)
    return (
      <Fragment>
        { logo &&
          <TALogo
            width={`${taLogoSize.width}`}
            height={`${taLogoSize.height}`}
            className="mr-4"
          />
        }

        {Array(roundedRating)
          .fill()
          .map((value, index) => (
            <TACircle
              key={`ta-full-${index}`}
              fill="#589443"
              width={`${reviewLogoSize.width}`}
              height={`${reviewLogoSize.height}`}
            />
          ))}
        { showHalfRating &&
          <TAHalfCircle
            fill="#589443"
            width={`${reviewLogoSize.width}`}
            height={`${reviewLogoSize.height}`}
          />
        }

        {Array(emptyRating)
          .fill()
          .map((value, index) => (
            <TAEmptyCircle
              key={`ta-empty-${index}`}
              fill="#589443"
              width={`${reviewLogoSize.width}`}
              height={`${reviewLogoSize.height}`}
            />
          ))}
      </Fragment>
    )
  }
}

TripAdvisorRating.propTypes = {
  rating: PropTypes.number,
  total: PropTypes.number,
  logo: PropTypes.bool,
  taLogoSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  reviewLogoSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
}

TripAdvisorRating.defaultProps = {
  total: 5,
  logo: true,
  taLogoSize: {
    width: 20,
    height: 13
  },
  reviewLogoSize: {
    width: 14,
    height: 14
  }
}

export default TripAdvisorRating