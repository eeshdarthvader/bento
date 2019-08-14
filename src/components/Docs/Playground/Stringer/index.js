import React, { useState, useEffect } from 'react';

import { isEmptyObject, stringToBoolean } from "../utils";

// generate prop string

const Stringer = ({ code, inputs, children }) => {

  const [dynamicCode, setDynamicCode] = useState(code)
  const [switches, setSwitches] = useState({})

  useEffect(() => setSwitches({...switches, ...inputs}), [inputs]);
  useEffect(() => generateCodeString(), [switches]);

  const generatePropString = () => {
    const propStrings = []

    for (const key of Object.keys(switches)) {

      if (switches[key] === "true" || switches[key] === "false") {
        propStrings.push(`${key}={${stringToBoolean(switches[key])}}`)
      } else {
        propStrings.push(`${key}="${switches[key]}"`)
      }

    }

    const propString = propStrings.join(' ')
    return propString
  }


  const generateCodeParts = () => {
    // Split code string by first instance on '>'
    const splitString = code.split(/>(.+)/)
    return splitString
  }


  const generateCodeString = () => {
    if (isEmptyObject(switches)) return


    const propString = generatePropString()
    const codeParts = generateCodeParts()

    const firstHalf = [codeParts[0], propString].join(' ')

    const codeString = [firstHalf, codeParts[1]].join('>')

    setDynamicCode(codeString)
    return
  }

  return (
    <div {...switches}>
      {children(dynamicCode)}
    </div>
  );
}

export default Stringer;