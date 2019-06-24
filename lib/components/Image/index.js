import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Image = props => {
    const {src, width, height,caption,alt} = props;
    return (
        <div style={{display: "flex",flexDirection:"column"}}>
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