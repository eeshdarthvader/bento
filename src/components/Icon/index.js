import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as SpeechIcon } from './icons/speech.svg'
import { ReactComponent as IdeaIcon } from './icons/idea.svg'
import { ReactComponent as ChartIcon } from './icons/chart.svg'
import { ReactComponent as ReuseIcon } from './icons/reuse.svg'
import { ReactComponent as DownloadIcon } from './icons/download.svg'
import { ReactComponent as BitbucketIcon } from './icons/bitbucket.svg'
import { ReactComponent as SketchIcon } from './icons/sketch.svg'

const IconMap = ({ icon, ...props }) => {
  switch (icon) {
  case 'reuse':
    return <ReuseIcon {...props} />
  case 'increase':
    return <ChartIcon {...props} />
  case 'idea':
    return <IdeaIcon {...props} />
  case 'speech':
    return <SpeechIcon {...props} />
  case 'download':
    return <DownloadIcon {...props} />
  case 'bitbucket':
    return <BitbucketIcon {...props} />
  case 'sketch':
    return <SketchIcon {...props} />
  default:
    break
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
  onClick: PropTypes.func
}

Icon.defaultProps = {
  className: '',
  onClick: () => { }
}

Icon.displayName = 'Icon'

export default Icon
