import React from 'react';
import { TCol } from '../Table'

const Name = ({children}) => {
  return (
    <TCol class="w-40p flex flex-start">
      <code
        style={{
          color: '#3366CC',
          backgroundColor: 'transparent',
          border: 0
        }}
      >
        {children}
      </code>
    </TCol >
  );
}

export default Name;