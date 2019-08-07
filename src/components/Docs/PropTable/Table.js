import React from 'react';

import "./proptable.scss";

const Table = ({ props }) => {

  console.log(props)

  const getEnumValues = (values) => {
    console.log(values)
    return 'lg | md | sm'
  }

  return (
    <div className="propTable">

      {props.map(function (prop, index) {
        return (
          <div className="propRow" key={index}>
            <div className="flex flex-middle">
              <p className="propName fw-600">{prop.name}</p>
              <code className="propCode">{prop.type.name}</code>
              {prop.type.name === "enum" &&
                <p className="propEnums">{getEnumValues(prop.type.value)}</p>
              }
            </div>
            <div>
              <p className="propDescription">
                {prop.description.text}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Table;