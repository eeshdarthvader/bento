import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import Table from './Table'
import Live from './Live'

import { Spacer } from '@lib'

import { getPropsFromMetadata } from './utils'

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

  // Get props from displayName
  const props = getPropsFromMetadata(metadata, displayName)


  return (
    <>
    <Live code={code} scope={scope}/>
    <Spacer my={3} />
    <Table compProps={props} />
    </>
  );
}

export default Playground;
