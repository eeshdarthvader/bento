import React from 'react';

import "./proptable.scss";

const Table = ({ props }) => {

  const getEnumString = (values) => {
    // Generate array from values
    let arrayOfValues = [];
    for (let value of values) {
      arrayOfValues.push(value.value)
    }

    // Dequote values in array
    const deQuotedValues = []
    arrayOfValues.forEach(value => {
      deQuotedValues.push(value.substr(1).slice(0, -1))
    });

    // Join values in array
    const EnumString = deQuotedValues.join(' | ')

    return EnumString
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
                <p className="propEnums">{getEnumString(prop.type.value)}</p>
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