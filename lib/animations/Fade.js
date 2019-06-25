import React from 'react'
import classnames from 'classnames'
import posed from "react-pose";

const FadePose = posed.div({
  show: {
    opacity: 1,
    beforeChildren: true
  },
  hide: {
    opacity: 0
  }
});

const Fade = props => {
  return (
    <FadePose
      pose={props.pose}
      className={classnames(props.className)}
    >
      {props.children}
    </FadePose>
  )
}

export default Fade;
