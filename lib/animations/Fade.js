import React from 'react'
import classnames from 'classnames'
import posed from "react-pose";

const FadePose = posed.div({
  show: {
    y: 0,
    opacity: 1
  },
  hide: {
    y: -100,
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
