import React, { useState } from "react";
import PropTypes from 'prop-types'
import { useInView } from "react-intersection-observer";

import Placeholder from './Placeholder'

// TODO: Move this to utilities
const normalizeSize = size => {
    if (typeof size === "number") return `${size}px`;
    return `${size}`;
};

const Image = props => {
    const { src, alt, width, height } = props;

    const [status, setStatus] = useState("loading");

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
      >
          {status === "loading" &&
          <Placeholder
            width={normalizeSize(width)}
            height={normalizeSize(width)}
          />
          }

          {inView && (
            <div className="d-inline-block p-absolute t-0 b-0 l-0 r-0" style={sizeStyles}>
              <img
                  alt={''}
                  src={src}
                  onLoad={() => setStatus("done")}
                  onError={() => setStatus("error")}
              />
            </div>
          )}
      </div>
    )
}

Image.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

Image.displayName = 'Image';

export default Image;