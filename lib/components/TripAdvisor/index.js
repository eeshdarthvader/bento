import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { normalizeSize } from '../../utils'

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
        <span className="flex flex-middle">
        { logo &&
          <TALogo
            height={normalizeSize(taLogoSize)}
            className="mr-1"
          />
        }

        {Array(roundedRating)
          .fill()
          .map((value, index) => (
            <TACircle
              key={`ta-full-${index}`}
              fill="#589443"
              width={normalizeSize(reviewLogoSize)}
              height={normalizeSize(reviewLogoSize)}
            />
          ))}
        { showHalfRating &&
          <TAHalfCircle
            fill="#589443"
            width={normalizeSize(reviewLogoSize)}
            height={normalizeSize(reviewLogoSize)}
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
          </span>
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
  taLogoSize: 20,
  reviewLogoSize: 17
}
TripAdvisorRating.displayName = 'TripAdvisorRating';

export default TripAdvisorRating