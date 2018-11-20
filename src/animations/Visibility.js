import React from 'react'
import posed from "react-pose";

const VisibilityWrapper = props => {
  return (
    <div ref={props.hostRef}>
      {props.children}
    </div>
  )
}

const Visibility = posed(VisibilityWrapper)({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export default Visibility;
