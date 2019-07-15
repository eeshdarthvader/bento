import React from 'react';

const Property = props => {
  return (
    <div className="flex flex-between p-12 fs-caption" {...props}>
      {props.children}
    </div>
  )
}

export default Property;