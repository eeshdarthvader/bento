import React, { useState } from "react";
import PropTypes from 'prop-types'
import { useInView } from "react-intersection-observer";

import Placeholder from './Placeholder'
import Fade from '../../animations/Fade'

// TODO: Move this to utilities
const normalizeSize = size => {
    if (typeof size === "number") return `${size}px`;
    return `${size}`;
};


// TODO: Make the placeholder passable as props
const Image = props => {
    const { src, width, height } = props;

    const [loaded, setLoaded] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
        rootMargin: "200px 0px 0px 0px"
    });


    const sizeStyles = {
      width: normalizeSize(width),
      height: normalizeSize(height)
    }

    return (
      <div
        className="d-inline-block p-relative"
        style={sizeStyles}
        ref={ref}
        onClick={props.onClick}
      >

          {inView && (
            <div
              className="d-inline-block p-absolute t-0 b-0 l-0 r-0"
              style={sizeStyles}
            >
              <img
                  alt={''}
                  src={src}
                  onLoad={() => setLoaded(true)}
                  onError={() => setLoaded(false)}
              />
            </div>
          )}

          <Fade pose={loaded ? 'hidden' : 'visible'}>
            <Placeholder
              loaded={loaded}
              width={normalizeSize(width)}
              height={normalizeSize(width)}
            />
          </Fade>
      </div>
    )
}

Image.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

Image.defaultProps = {
  onClick: () => {}
}

Image.displayName = 'Image';

export default Image;