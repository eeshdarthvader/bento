import React from 'react'
import classnames from 'classnames'
import posed from "react-pose";

const CollapseWrapper = props => {
  return (
    <div
      ref={props.hostRef}
      style={{overflow: 'hidden'}}
      className={classnames(props.className)}
    >
      {props.children}
    </div>
  )
}

const Collapse = posed(CollapseWrapper)({
  open: {
    height: "auto"
  },
  collapsed: {
    height: 0
  }
});

export default Collapse;
