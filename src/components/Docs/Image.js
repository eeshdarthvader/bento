import React from 'react';
import posed from 'react-pose';

// BUG: Zoomed in image is 100% width of screen
// TODO: Zoomed in image to resize to actual size

const Frame = posed.div({
  init: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  },
  zoom: {
    applyAtStart: { display: 'block' },
    opacity: 1
  }
});

const transition = {
  duration: 300,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const Image = posed.img({
  init: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    transition,
    flip: true
  },
  zoom: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition,
    flip: true
  }
});

class Zoom extends React.Component {
  state = { isZoomed: false };

  zoomIn() {
    window.addEventListener('scroll', this.zoomOut);
    this.setState({ isZoomed: true });
  }

  zoomOut = () => {
    window.removeEventListener('scroll', this.zoomOut);
    this.setState({ isZoomed: false });
  };

  toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());

  render() {
    const { isZoomed } = this.state;
    const { imageWidth, imageHeight, ...props } = this.props;
    const pose = isZoomed ? 'zoom' : 'init';

    return (
      <div
        style={{ width: imageWidth, height: imageHeight }}
        onClick={this.toggleZoom}
      >
        <Image
          pose={pose}
          className={pose === 'zoom' ? 'zoomed' : ''}
          {...props}
        />
        <Frame pose={pose} className="frame" />
      </div>
    );
  }
}

export default Zoom;
