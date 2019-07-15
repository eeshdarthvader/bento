import React from 'react';
import Property from './Property'
import {TCol} from '../Table'

const Reference = (props) => {
  return (
    <div className="w-100p br-4" {...props}>
      <Property class="flex flex-between p-12 bg-tertiary-100">
        <TCol class="w-40p flex flex-start c-tertiary-500 fw-600">
          Class
        </TCol>
        <TCol class="flex-1 flex flex-start c-tertiary-500 fw-600">
          Output
        </TCol>
      </Property>
      {props.children}
    </div>
  );
}

export default Reference;