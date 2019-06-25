import React from 'react';

import Icon from '../Icon'

// Todo: Make text and color configurable
// Todo: Use Icon to make icon configurable

const Placeholder = ({ width, height }) => {
  return (
    <div
      className="d-inline-block flex flex-center flex-middle bg-grey-05 p-absolute t-0 b-0 l-0 r-0 ta-center"
      style={{
        width: width,
        height: height,
        zIndex: '1',
        color: '#C7C7C7'
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

export default Placeholder;