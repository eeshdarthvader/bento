import React from 'react'
import posed from "react-pose";

const FadeWrapper = props => {
  return (
    <div ref={props.hostRef}>
      {props.children}
    </div>
  )
}

const Fade = posed(FadeWrapper)({
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
});

export default Fade;
