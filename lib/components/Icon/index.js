import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as MinusIcon } from './icons/minus.svg'
import { ReactComponent as TickIcon } from './icons/tick.svg'
import { ReactComponent as TriangleDownIcon } from './icons/triangle-down.svg'
import { ReactComponent as CalendarIcon } from './icons/calendar.svg'
import { ReactComponent as CheckboxCircleIcon } from './icons/checkbox-circle.svg'
import { ReactComponent as CircleOutlineIcon } from './icons/circle-outline.svg'
import { ReactComponent as CircleSelectedIcon } from './icons/circle-selected.svg'
import { ReactComponent as CrossIcon } from './icons/cross.svg'
import { ReactComponent as AvatarManIcon } from './icons/avatar-man.svg'
import { ReactComponent as AvatarWomanIcon } from './icons/avatar-woman.svg'
import { ReactComponent as AvatarGirlIcon } from './icons/avatar-girl.svg'
import { ReactComponent as AvatarBoyIcon } from './icons/avatar-boy.svg'
import { ReactComponent as AvatarInfantIcon } from './icons/avatar-infant.svg'
import { ReactComponent as StarIcon } from './icons/star.svg'
import { ReactComponent as ClockIcon } from './icons/clock.svg'
import { ReactComponent as CallIcon } from './icons/call.svg'


const IconMap = ({icon, ...props}) => {
  switch (icon) {
    case 'plus':
      return <PlusIcon {...props}/>;
    case 'minus':
      return <MinusIcon {...props}/>;
    case 'triangle-down':
      return <TriangleDownIcon {...props} />;
    case 'calendar':
      return <CalendarIcon {...props} />;
    case 'tick':
      return <TickIcon {...props} />;
    case 'cross':
      return <CrossIcon {...props} />;
    case 'checkbox-circle':
      return <CheckboxCircleIcon {...props} />;
    case 'circle-outline':
      return <CircleOutlineIcon {...props} />;
    case 'circle-selected':
      return <CircleSelectedIcon {...props} />;
    case 'avatar-man':
      return <AvatarManIcon {...props} />;
    case 'avatar-woman':
      return <AvatarWomanIcon {...props} />;
    case 'avatar-girl':
      return <AvatarGirlIcon {...props} />;
    case 'avatar-boy':
      return <AvatarBoyIcon {...props} />;
    case 'avatar-infant':
      return <AvatarInfantIcon {...props} />;
    case 'star':
      return <StarIcon {...props} />;
    case 'clock':
      return <ClockIcon {...props} />;
    case 'call':
      return <CallIcon {...props} />;

    default:
      break;
  }
}


const Icon = ({ onClick, ...props }) => {
  const handleClick = event => {
    event.preventDefault()
    onClick(event)
  }
  return (
    <IconMap
      onClick={handleClick}
      {...props}
    />
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func
}

Icon.defaultProps = {
  className: '',
  width: '24',
  height: '24',
  onClick: () => { }
}

Icon.displayName = 'Icon'

export default Icon
