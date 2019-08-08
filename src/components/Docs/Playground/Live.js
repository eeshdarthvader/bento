import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const Live = ({ code, scope }) => {
  return (
    <div className="live">
      <LiveProvider code={code} scope={scope}>
        <div className="react-live-preview">
          <LivePreview />
        </div>

        <div className="prism-code">
          <LiveEditor />
        </div>

        <LiveError />
      </LiveProvider>
    </div>
  );
};

export default Live;