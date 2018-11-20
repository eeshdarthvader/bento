import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Icon from '../Icon'

const Counter = ({
    minValue,
    maxValue,
    value,
    onDecrement,
    onIncrement
  }) => {

  const minusClass = classnames({
    'current-stroke': true,
    'c-grey-20': value <= minValue,
    'c-not-allowed': value <= minValue,
    'c-blue': value > minValue,
    'c-pointer': value > minValue
  })

  const plusClass = classnames({
    'current-stroke': true,
    'c-grey-20': value >= maxValue,
    'c-not-allowed': value >= maxValue,
    'c-blue': value < maxValue,
    'c-pointer': value < maxValue
  })

  const handleDecrementClick = (event) => {
    if (value <= minValue) return
    onDecrement(event)
  }

  const handleIncrementClick = (event) => {
    if (value >= maxValue) return
    onIncrement(event)
  }

  return (
    <ul className="ls-reset flex flex-middle">
      <li>
        <Icon
          icon="minus"
          width="24"
          height="24"
          className={ minusClass }
          onClick={handleDecrementClick}
        />
      </li>
      <li className="fs-body-2 mx-20 lh-none">
        {value }
      </li>
      <li>
        <Icon
          icon="plus"
          width="24"
          height="24"
          className={ plusClass }
          onClick={handleIncrementClick}
        />
      </li>
    </ul>
  )
}

Counter.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
}

Counter.defaultProps = {
  minValue: 0,
  maxValue: 10,
  value: 1,
  onIncrement: () => {},
  onDecrement: () => { }
}

Counter.displayName = 'Counter'

export default Counter
