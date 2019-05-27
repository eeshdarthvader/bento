import React from 'react'
import classnames from 'classnames'
import posed from "react-pose";

const CollapsePose = posed.div({
  open: {
    height: "auto"
  },
  collapsed: {
    height: 0
  }
});

const Collapse = props => {
  return (
    <CollapsePose
      pose={props.pose}
      className={classnames(props.className)}
      style={{overflow: 'hidden'}}
    >
      {props.children}
    </CollapsePose>
  )
}

export default Collapse;
