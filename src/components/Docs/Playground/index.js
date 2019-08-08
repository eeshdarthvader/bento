import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"

import Table from './Table'
import Live from './Live'

import { Spacer } from '@lib'

import "./playground.scss"

const Playground = ({ code, scope }) => {

  // Get display name of comp from scope
  const displayName = scope[Object.keys(scope)[0]].displayName

  // Get all metadata
  const metadata = useStaticQuery(graphql`
    query MetaData {
      allComponentMetadata {
        totalCount
        nodes {
          displayName
          props {
            name
            type {
              name
              value
            }
            required
            defaultValue {
              value
            }
            description {
              text
            }
          }
        }
      }
    }
  `)

  // Get all nodes
  const nodes = metadata.allComponentMetadata.nodes

  // Filter nodes by displayName
  const comp = nodes.filter(
    node => node.displayName === displayName
  )

  // Get props of component
  const props = comp[0].props


  return (
    <>
    <Live code={code} scope={scope}/>
    <Spacer my={3} />
    <Table compProps={props} />
    </>
  );
}

export default Playground;
