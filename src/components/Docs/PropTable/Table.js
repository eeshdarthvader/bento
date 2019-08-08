import React from 'react';

import "./proptable.scss";

const Table = ({ props }) => {

  console.log(props)

  const getEnumString = (values, defaultValue) => {
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

  const getBoolString = () => {
    return 'true | false'
  }

  const getFuncString = () => {
    return '() => {}'
  }

  return (
    <div className="propTable">

      {props.map(function (prop, index) {
        return (
          <div className="propRow" key={index}>
            <div className="flex flex-middle">
              <p className="propName fw-600">{prop.name}{prop.required && <span className="c-error-500">*</span>}</p>
              <code className="propCode">{prop.type.name}</code>
              <p className="propAcceptedValues ff-mono">
                {prop.type.name === "enum" && getEnumString(prop.type.value, prop.defaultValue.value)}
                {prop.type.name === "bool" && getBoolString()}
                {prop.type.name === "func" && getFuncString()}
              </p>
            </div>
            <div>
              <p className="propDescription">
                {prop.description.text}
              </p>
            </div>
          </div>
        )
      })}

      <p className="propByline">
        Props marked with (<span className="c-error-500">*</span>) are required
      </p>

    </div>
  );
}

export default Table;