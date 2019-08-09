import React from 'react';

import { Spacer } from '@lib'
import { getPropsFromMetadata, getMetadata } from './utils'

import Table from './Table'
import Live from './Live'

import "./playground.scss"

const Playground = ({ code, scope }) => {

  // Get display name of comp from scope
  const displayName = scope[Object.keys(scope)[0]].displayName

  // Fetches metadata using gatsby react docgen
  const metadata = getMetadata()

  // Get props from displayName
  const props = getPropsFromMetadata(metadata, displayName)

  const handlePropChange = (props) => {
    console.log(props)
    // pass to function to generate prop string
    // save every updated prop in state
    // overwrite prop value if prop already exists
    // "flatten" object to string
  }


  return (
    <>
      <Live code={code} scope={scope}/>
      <Spacer my={3} />
      <Table compProps={props} onPropChange={handlePropChange} />
    </>
  );
}

export default Playground;
