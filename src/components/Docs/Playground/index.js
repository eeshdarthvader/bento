import React from 'react';
import Table from './Table'
import Live from './Live'

import { Spacer } from '@lib'
import "./playground.scss"

const Playground = ({ code, scope }) => {
  return (
    <>
    <Live code={code} scope={scope}/>
    <Spacer my={3} />
    <Table />
    </>
  );
}

export default Playground;
