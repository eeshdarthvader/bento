import React from 'react';
import { TCol } from '../Table'

const Text = ({ children }) => {
  return (
    <TCol className="flex-1 flex flex-start">
      <p style={{
        fontSize: '15px',
        lineHeight: '16px',
        marginBottom: "0px"
      }}>
        {children}
      </p>
    </TCol>
  );
}

export default Text;