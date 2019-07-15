import React from 'react';
import { TCol } from '../Table'

const Output = ({ children }) => {
  return (
    <TCol class="flex-1 flex flex-start">
      <code
        style={{
          color: '#37404E',
          backgroundColor: 'transparent',
          border: 0
        }}
      >
        {children}
      </code>
    </TCol>
  );
}

export default Output;