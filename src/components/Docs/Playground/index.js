import React, { useState } from 'react';

import { Spacer } from '@lib'
import { getPropsFromMetadata, getMetadata } from './utils'

import Table from './Table'
import Live from './Live'
import Stringer from './Stringer'

import "./playground.scss"


// [ ] TODO: Handle compound components
// [ ] TODO: Handle isRequired props
// [ ] TODO: Handle onOfType props
const Playground = ({ code, scope }) => {

  // TODO: Handle case where React.memo is used
  // Get display name of comp from scope
  const displayName = scope[Object.keys(scope)[0]].displayName

  // Fetches metadata using gatsby react docgen
  const metadata = getMetadata()

  // Get props from displayName
  const props = getPropsFromMetadata(metadata, displayName)


  // Stores and passes switcher updates to Stringer
  const [switches, setSwitches] = useState({})

  // Handles prop switches from table and save to state
  const handlePropChange = props => setSwitches(props)


  return (
    <>
      <Stringer code={code} inputs={switches}>
        {dynamicCode => <Live code={dynamicCode} scope={scope} theme="github"/>}
      </Stringer>

      <Spacer my={3} />
      <Table compProps={props} onPropChange={handlePropChange} />
    </>
  );
}

export default Playground;
