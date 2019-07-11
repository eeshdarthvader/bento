import React, { useState } from "react";
import PropTypes from 'prop-types'
import { InView } from 'react-intersection-observer'

import Placeholder from './Placeholder'
import Fade from '../../animations/Fade'

import { normalizeSize } from '../../utils'


// TODO: Make the placeholder passable as props
const Image = props => {
  const { src, width, height, alt, className, shimmer } = props;

  const [loaded, setLoaded] = useState(false);

  const sizeStyles = {
    width: normalizeSize(width),
    height: normalizeSize(height)
  }

  const options = {
    threshold: 0,
    rootMargin: "200px 0px 0px 0px"
  }

  return (
    <InView
      className={className}
      as="div"
      options={options}
      triggerOnce={true}
    >
      {({ inView, ref }) => (
        <div
          className="d-inline-block p-relative"
          ref={ref}
          style={sizeStyles}
          onClick={props.onClick}
        >
          {inView && (
            <div
              className="d-inline-block p-absolute t-0 b-0 l-0 r-0"
              style={sizeStyles}
            >
              <img
                alt={alt}
                src={src}
                width={sizeStyles.width}
                height={sizeStyles.height}
                className="of-cover"
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(false)}
              />
            </div>
          )}

          <Fade
            pose={loaded ? 'hidden' : 'visible'}
            className="h-100p"
          >
            <Placeholder
              loaded={loaded}
              width={normalizeSize(width)}
              height={normalizeSize(width)}
              shimmer = {shimmer}
            />
          </Fade>
        </div>
      )}
    </InView>
  )
}

Image.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  shimmer : PropTypes.bool
}

Image.defaultProps = {
  className: '',
  onClick: () => { },
  shimmer: true
}

Image.displayName = 'Image';

export default Image;