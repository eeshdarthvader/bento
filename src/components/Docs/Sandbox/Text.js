import React from "react";
import Highlight from "react-highlight";

const Text = ({children}) => {
  return (
    <div className="demo-code" style={{ paddingTop: '0'}}>
      <Highlight className="javascript">
        {children}
      </Highlight>
    </div>
  );
}

export default Text;