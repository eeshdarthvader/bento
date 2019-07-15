import React from 'react';
import Property from './Property'

const Reference = (props) => {
  return (
    <div className="w-100p br-4">
      <Property class="flex flex-between p-12 bg-tertiary-100">
        <div class="w-40p flex flex-start c-tertiary-500 fw-600">
          Class
        </div>
        <div class="flex-1 flex flex-start c-tertiary-500 fw-600">
          Output
        </div>
      </Property>
      {props.children}
    </div>
  );
}

export default Reference;