import React from 'react';
import PropTypes from 'prop-types'

import Icon from '../Icon'

// Todo: Make text and color configurable
// Todo: Use Icon to make icon configurable
// TODO: Consider moving placeholder to it's own component
const Placeholder = ({ width, height }) => {
  return (
    <div
      className="d-inline-block flex flex-center flex-middle bg-grey-05 t-0 b-0 l-0 r-0 ta-center p-relative"
      style={{
        width: width,
        height: height,
        color: '#C7C7C7',
        zIndex: 2
      }}>
        <div>
          <Icon
            className="current-fill"
            icon="picture"
            width="40"
            height="40"
          />
          <p
            className="fs-body c-inherit"
          >
            Loading your image...
          </p>
        </div>
      </div>
  );
}

Placeholder.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

Placeholder.displayName = 'Placeholder';

export default Placeholder;