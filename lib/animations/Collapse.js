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

const Collapse = ({ pose, className, children, ...additionalProps }) => {
  return (
    <CollapsePose
      withParent={false}
      pose={pose}
      className={classnames(className)}
      style={{ overflow: 'hidden' }}
      {...additionalProps}
    >
      {children}
    </CollapsePose>
  );
};


export default Collapse;
