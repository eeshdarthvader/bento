import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import "./proptable.scss";

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



  return (
    <div className="propTable">
      <div className="propRow">
        <div className="flex flex-middle">
          <p className="propName fw-600">className</p>
          <code className="propCode">string</code>
        </div>
        <div>
          <p className="propDescription">
            Additional classes to be added to the badge component
        </p>
        </div>
      </div>
      <div className="propRow">
        <div className="flex flex-middle">
          <p className="propName fw-600">size</p>
          <code className="propCode">enum</code>
          <p className="propEnums">lg | md | sm</p>
        </div>
        <div>
          <p className="propDescription">
            Size of the badge
        </p>
        </div>
      </div>
      <div className="propRow">
        <div className="flex flex-middle">
          <p className="propName fw-600">type</p>
          <code className="propCode">enum</code>
          <p className="propEnums">primary | light | dark | secondary | success | warning</p>
        </div>
        <div>
          <p className="propDescription">
            Variant of the badge
        </p>
        </div>
      </div>
    </div>
  );
}

export default PropTable;