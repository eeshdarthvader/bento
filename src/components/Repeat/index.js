import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Repeat = props => {
  let items = [];
  for (let i = 0; i < props.times; i++) {
    items.push(props.children(i));
  }
  return <Fragment>{items}</Fragment>;
}

Repeat.propTypes = {
  times: PropTypes.number
}

Repeat.defaultProps = {
  times: 5,
}

export default React.memo(Repeat)