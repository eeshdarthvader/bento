import React from 'react'
import PropTypes from 'prop-types'

import SpeechIcon from './icons/speech.svg'
import IdeaIcon from './icons/idea.svg'
import ChartIcon from './icons/chart.svg'
import ReuseIcon from './icons/reuse.svg'
import DownloadIcon from './icons/download.svg'
import BitbucketIcon from './icons/bitbucket.svg'
import SketchIcon from './icons/sketch.svg'

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
