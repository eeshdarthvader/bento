import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { normalizeSize } from '../../utils'

import './loader.scss'

const Dots = (props) => {

  const styles = {
    width: normalizeSize(props.width),
    height: normalizeSize(props.height),
    backgroundColor: props.color
  }

  return (
    <div className={classNames('dots', props.className)}>
      <div className="bounce1" style={styles} />
      <div className="bounce2" style={styles} />
      <div className="bounce3" style={styles} />
    </div>
  );
}

Dots.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

Dots.defaultProps = {
  className: '',
  color: '#6e7278',
  height: 8,
  width: 8,
}

Dots.displayName = 'Dots'

export default Dots;