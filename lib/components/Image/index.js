import React, { useState } from "react";
import PropTypes from 'prop-types'
import { useInView } from "react-intersection-observer";

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

    return (
        <div className="d-inline-block p-relative">
            <LazyLoadImage
                src={props.src}
                height={props.height}
                width={props.width}
                alt={props.alt} />
            <span className="d-block my-8 fs-caption-2 c-grey-80">{props.caption}</span>
        </div>
    )
}

Image.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string.isRequired,
    caption: PropTypes.string,
    alt: PropTypes.string
  };
Image.defaultProps = {
    width: 200,
    caption: 'A sample image from unsplash',
    src: 'https://source.unsplash.com/random'
}

Image.displayName = 'Image';

export default React.memo(Image);