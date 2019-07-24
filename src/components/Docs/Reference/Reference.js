import React from 'react';

const Reference = (props) => {
  return (
    <div className="w-100p br-4">
      <div className="flex flex-between p-3 bg-tertiary-100">
        <div className="w-40p flex flex-start c-tertiary-500 fw-600">
          Class
        </div>
        <div className="flex-1 flex flex-start c-tertiary-500 fw-600">
          Output
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default Reference;