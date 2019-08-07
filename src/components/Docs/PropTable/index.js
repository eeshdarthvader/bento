import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import Table from './Table'

const PropTable = ({ component }) => {

  const metadata = useStaticQuery(graphql`
    query PropMetadata {
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
            description {
              text
            }
          }
        }
      }
    }
  `)

  // // Get all nodes
  const nodes = metadata.allComponentMetadata.nodes

  // Filter nodes by displayName
  const comp = nodes.filter(
    node => node.displayName === "Badge"
  )

  // Get props of component
  const props = comp[0].props

  return (
    <div>
      <Table props={props}/>
    </div>
  );
}

export default PropTable;