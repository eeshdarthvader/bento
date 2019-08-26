import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { normalizeSize } from '../../utils'

import './loader.scss'

const Spinner = props => {

  const styles = {
    width: normalizeSize(props.width),
    height: normalizeSize(props.height),
    color: props.color
  }

  return (
    <div
      className={classNames('sk-fading-circle', props.className)}
      style={styles}
    >
      <div className="sk-circle1 sk-circle"></div>
      <div className="sk-circle2 sk-circle"></div>
      <div className="sk-circle3 sk-circle"></div>
      <div className="sk-circle4 sk-circle"></div>
      <div className="sk-circle5 sk-circle"></div>
      <div className="sk-circle6 sk-circle"></div>
      <div className="sk-circle7 sk-circle"></div>
      <div className="sk-circle8 sk-circle"></div>
      <div className="sk-circle9 sk-circle"></div>
      <div className="sk-circle10 sk-circle"></div>
      <div className="sk-circle11 sk-circle"></div>
      <div className="sk-circle12 sk-circle"></div>
    </div>
  );
}

Spinner.propTypes = {
/**
 * Class to be appended to thw wrapping element
 */
  className: PropTypes.string,
/**
 * Color of the dots
 */
  color: PropTypes.string,
/**
 * Height of the spinner
 */
  height: PropTypes.number,
/**
 * Width of the spinner
 */
  width: PropTypes.number
}

Spinner.defaultProps = {
  className: '',
  color: '#6e7278',
  height: 40,
  width: 40,
}

Spinner.displayName = 'Spinner'

export default Spinner;