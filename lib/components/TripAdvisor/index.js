import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as TACircle } from './icons/ta-full.svg'
import { ReactComponent as TAEmptyCircle } from './icons/ta-empty.svg'
import { ReactComponent as TALogo } from './icons/ta-logo.svg'
import { ReactComponent as TAHalfCircle } from './icons/ta-half.svg'

class TripAdvisorRating extends PureComponent {
  render() {
    const { rating, logo, taLogoSize, reviewLogoSize } = this.props
    const roundedRating = Math.floor(rating)
    const showHalfRating = rating !== roundedRating
    const emptyRating = 5 - Math.ceil(rating)
    
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
              width={reviewLogoSize}
              height={reviewLogoSize}
            />
          ))}
        { showHalfRating &&
          <TAHalfCircle
            fill="#589443"
            width={reviewLogoSize}
            height={reviewLogoSize}
          />
        }

        {Array(emptyRating)
          .fill()
          .map((value, index) => (
            <TAEmptyCircle
              key={`ta-empty-${index}`}
              fill="#589443"
              width={reviewLogoSize}
              height={reviewLogoSize}
            />
          ))}
      </Fragment>
    )
  }
}

TripAdvisorRating.propTypes = {
  rating: PropTypes.number,
  logo: PropTypes.bool,
  taLogoSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  reviewLogoSize: PropTypes.number
}

TripAdvisorRating.defaultProps = {
  logo: true,
  taLogoSize: {
    width: 20,
    height: 13
  },
  reviewLogoSize: 14
}
TripAdvisorRating.displayName = 'TripAdvisorRating';

export default TripAdvisorRating