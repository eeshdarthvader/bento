import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Swatches = ({name, color, dark}) => {

  const classes = classNames(
    `bg-${name}`,
    'h-40 w-100p flex flex-middle flex-between px-12 box-border',
    {
      'c-black': dark,
      'c-white': !dark
    }
  )

  return (
    <div className={classes}>
      <div>
        {name}
      </div>
      <div>
        {color}
      </div>
    </div>
  );
}


Swatches.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  dark: PropTypes.bool
}

Swatches.defaultProps = {
  dark: false
}

export default Swatches;