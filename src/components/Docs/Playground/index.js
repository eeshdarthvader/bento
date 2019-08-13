import React, { useState } from 'react';

import { Spacer } from '@lib'
import { getPropsFromMetadata, getMetadata } from './utils'

import Table from './Table'
import Live from './Live'
import Stringer from './Stringer'

import "./playground.scss"

const Playground = ({ code, scope }) => {

  // Get display name of comp from scope
  const displayName = scope[Object.keys(scope)[0]].displayName

  // Fetches metadata using gatsby react docgen
  const metadata = getMetadata()

  // Get props from displayName
  const props = getPropsFromMetadata(metadata, displayName)


  // Stores and passed swithcer updates to Stringer
  const [switches, setSwitches] = useState({})

  // Handles prop switches from table and save to state
  const handlePropChange = props => setSwitches(props)


  return (
    <>
      <Stringer code={code} inputs={switches}>
        {dynamicCode => (
          <>
          <pre><code>{dynamicCode}</code></pre>
          <Live code={dynamicCode} scope={scope} />
          </>
        )}
      </Stringer>

      <Spacer my={3} />
      <Table compProps={props} onPropChange={handlePropChange} />
    </>
  );
}

export default Playground;
