import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import posed from "react-pose";

const FadePose = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const Fade = props => {
  return (
    <FadePose
      className={classnames(props.className)}
      pose={props.pose}
    >
      {props.children}
    </FadePose>
  )
}

Fade.propTypes = {
  pose: PropTypes.string.isRequired,
  className: PropTypes.string
}

Fade.defaultProps = {
  className: ''
}

Fade.displayName = 'Fade';

export default Fade;
