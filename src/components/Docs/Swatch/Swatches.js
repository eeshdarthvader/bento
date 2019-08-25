import React, { useState } from 'react';
import posed from 'react-pose'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const Box = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.02 }
})


const Swatches = ({ name, color, dark }) => {

  const [copied, setCopyStatus] = useState(false)

  const handeCopy = () => {
    setCopyStatus(true)
    setTimeout(() => setCopyStatus(false), 1000)
  }

  const classes = classNames(
    `bg-${name}`,
    'h-10 w-100p flex flex-middle px-3 box-border fw-500 c-pointer',
    {
      'c-black': dark,
      'c-white': !dark,
      'flex-between': !copied,
      'flex-center': copied
    }
  )

  return (
    <CopyToClipboard
      text={color}
      onCopy={handeCopy}
    >
      <Box className={classes}>
        {
          copied && <div>Copied to clipboard!</div>
        }
        {
          !copied &&
          <>
            <div>
              {name}
            </div>
            <div>
              {color}
            </div>
          </>
        }

      </Box>
    </CopyToClipboard>
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